const fs = require('node:fs');
const path = require('node:path');

// Entry for make.fun news-image-20261124: the front page image for
// Tuesday, 24 November 2026 lives in this repo as entry.png; the program
// copies it to the grader's output dir as entry.png.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.join(__dirname, 'entry.png'), path.join(outDir, 'entry.png'));
