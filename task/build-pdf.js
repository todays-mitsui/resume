const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

if (process.argv.length < 3) {
  console.error('エラー：.md ファイルを指定してください');
  process.exit(1);
}

(async () => {
  const mdPath = process.argv[2];
  const pdf = await mdToPdf({ path: mdPath }).catch(console.error);

  if (pdf) {
    const now = (new Date()).toISOString().slice(0, 16).replace(/[T:\-]/g, '');
    const pdfPath = `dist/${now}_職務経歴書.pdf`;
    fs.mkdirSync('dist', { recursive: true });
    fs.writeFileSync(pdfPath, pdf.content);
    console.info(pdfPath);
  } else {
    console.error('エラー：PDF ファイルの作成に失敗しました');
    process.exit(1);
  }
})();
