// import cac from 'cac';
// import { autoCodeView } from './autoCodeView';

// const cli = cac();

// // PR_NUMBER: ${{ github.event.number }}
// // ZHINANG_TOKEN: ${{ secrets.ZHINANG_TOKEN }}
// // OWNER: ${{ github.repository_owner }}
// // REPO: ${{ github.event.repository.name }}

// cli.option('--PR_NUMBER <number>', 'Choose a pr number');
// cli.option('--ZHINANG_TOKEN <string>', 'Choose a zhinang token');
// cli.option('--OWNER <string>', 'Choose a owner');
// cli.option('--REPO <string>', 'Choose a repo');

// // const parsed = cli.parse();

// // console.log(JSON.stringify(parsed, null, 2));
export { autoCodeView } from './autoCodeView';
