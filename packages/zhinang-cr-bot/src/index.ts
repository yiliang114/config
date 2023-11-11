import { autoCodeView } from './autoCodeView';

(async () => {
  if (
    !process.env.ZHINANG_TOKEN ||
    !process.env.GITHUB_TOKEN ||
    !process.env.OWNER ||
    !process.env.REPO
  ) {
    console.error('ZHINANG_TOKEN or GITHUB_TOKEN is required');
    return;
  }

  autoCodeView(21);
})();
