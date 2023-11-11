import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';
dotenv.config();

import ChatBot from './bot';

const { OWNER, REPO, ZHINANG_TOKEN, GITHUB_TOKEN } = process.env;

const owner = OWNER!;
const repo = REPO!;

console.log('process.env', owner, repo, ZHINANG_TOKEN, GITHUB_TOKEN);

// 自动化代码评审
const autoReviewBot = new ChatBot(ZHINANG_TOKEN!);

const octokit = new Octokit({
  auth: GITHUB_TOKEN!,
});

async function getPRInfo(owner: string, repo: string, pull_number: number) {
  try {
    const { data: pr } = await octokit.rest.pulls.get({
      owner,
      repo,
      pull_number,
    });
    return pr;
  } catch {
    return undefined;
  }
}

async function getCompareCommits(
  owner: string,
  repo: string,
  pr: Record<string, any>,
) {
  try {
    return (
      await octokit.repos.compareCommits({
        owner,
        repo,
        base: pr.base.sha,
        head: pr.head.sha,
      })
    ).data;
  } catch {
    return undefined;
  }
}

async function generateReviewComment(
  changedFiles: any,
  commits: any[],
  pullNumber: number,
) {
  let patchArr: string[] = [];
  changedFiles.forEach(async (changedFile: any) => {
    const { patch } = changedFile;

    if (changedFile.status !== 'modified' && changedFile.status !== 'added') {
      return;
    }

    if (!patch || patch.length > (process.env.MAX_BATCH_LENGTH || 200000)) {
      console.log(
        `${changedFile.filename} skipped caused by its diff is too large`,
      );
      return;
    }

    patchArr.push(patch);

    // const res = await autoReviewBot.codeReview(patch);
    // await octokit.rest.pulls.createReviewComment({
    //   repo,
    //   owner,
    //   pullNumber,
    //   commit_id: commits[commits.length - 1].sha,
    //   path: changedFile.filename,
    //   body: res,
    //   position: patch.split('\n').length - 1,
    //   pull_number: pullNumber,
    // });
  });

  const diffs = patchArr.join('\n');
  const res = await autoReviewBot.codeReview(diffs);
  console.log('codeReview 结果：', res);
  if (!res) {
    return;
  }

  if (process.env.NODE_ENV === 'production') {
    const result = await octokit.rest.issues.createComment({
      repo,
      owner,
      issue_number: pullNumber,
      body: `## Zhinang.ai CodeReview\n\n${res}`,
    });

    console.log('评论结果：', result);
  }
}

export async function autoCodeView(pullNumber: string) {
  if (
    !process.env.ZHINANG_TOKEN ||
    !process.env.GITHUB_TOKEN ||
    !process.env.OWNER ||
    !process.env.REPO
  ) {
    console.error('缺少必要的环境变量');

    [
      pullNumber,
      process.env.ZHINANG_TOKEN,
      process.env.GITHUB_TOKEN,
      process.env.OWNER,
      process.env.REPO,
    ].forEach((val: string | number | undefined, index: number) => {
      console.log(`params[${index}]: `, val);
    });

    return;
  }

  // 1. get pull request info
  const pr = await getPRInfo(owner, repo, parseInt(pullNumber));
  console.log('pr', pr?.issue_url);

  if (!pr) {
    console.log('pr not found');
    return;
  }

  // 2. get compareCommits
  const compareCommits = await getCompareCommits(owner, repo, pr);
  // console.log('compareCommits', compareCommits);
  const { files: changedFiles = [], commits = [] } = compareCommits || {};

  if (!changedFiles.length && !commits.length) {
    console.log('no changed files');
    return;
  }

  // 3. generate review comment
  generateReviewComment(changedFiles, commits, parseInt(pullNumber));
}
