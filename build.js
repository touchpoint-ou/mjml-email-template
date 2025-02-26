const mjml = require('mjml');
const fs = require('fs');

const inputFile = 'index.mjml';
const outputFile = 'index.html';

const mjmlContent = fs.readFileSync(inputFile, 'utf8');
const htmlOutput = mjml(mjmlContent).html;

fs.writeFileSync(outputFile, htmlOutput);
console.log('✅ MJML compiled to HTML successfully!');
