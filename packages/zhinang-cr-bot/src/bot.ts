export default class ChatBot {
  private zhiNangToken: string;

  constructor(zhiNangToken: string) {
    this.zhiNangToken = zhiNangToken;
  }

  private generatePrompt = (patch: string) => {
    // const prompt =
    //   'You are an excellent IT engineer, help me review the following code. Below is a code diff, please help me do a code review, 没有修改意见的可以返回直接返回 OK, 如果有修改意见，请用中文返回:';
    // return `${prompt}:
    // ${patch}
    // `;

    const prompt = `Act as a code reviewer of a GitLab merge request, providing feedback on the code changes below.
      You are provided with the merge request changes in a diff format.
      The diff which is get from the GitLab API: api/v4/projects/projectId/merge_requests/requestId/changes.
      \n\n
      Diff of the merge request to review:
      \n
      ${patch}
      \n\n
      As a code reviewer, your task is:
      - Review the code changes (diffs) in the patch and provide feedback.
      - If there are any bugs, highlight them.
      - Does the code do what it says in the commit messages?
      - Do not highlight minor issues and nitpicks.
      - Use bullet points if you have multiple comments.
      - If no suggestions are provided, please give good feedback.
      - please use chinese to give feedback.`;

    return prompt;
  };

  async codeReview(patch: string) {
    try {
      const prompt = this.generatePrompt(patch);
      const res = await this.sendMessage(prompt);
      return await res.text();
    } catch (error) {
      console.error('请求 zhinang 异常', error);
    }
  }

  sendMessage(prompt: string) {
    return fetch('https://zhinang.ai/api/openai', {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        lang: 'cn',
        'sec-ch-ua':
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        token: '',
        cookie: `__Host-next-auth.csrf-token=51bbdc635030d7c485de322a44461570454ae07f043e67b744098bfef529bb3e%7C420eec73d2d3f9f09113d82daa786f3a526f257fbaae6fb4b592be89ee2c15ea; _ga=GA1.1.1016550263.1694085259; __Secure-next-auth.callback-url=https%3A%2F%2Fzhinang.ai%2F; next-auth.session-token=${this.zhiNangToken}; _ga_5Z10P3H1YM=GS1.1.1699691163.5.1.1699691167.0.0.0`,
        Referer: 'https://zhinang.ai/chat',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.2,
        // TODO: 流式？
        // stream: true,
      }),
      method: 'POST',
    });
  }
}
