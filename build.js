const mjml = require('mjml');
const fs = require('fs');

const inputFile = 'index.mjml';
const outputFile = 'index.html';

console.log('Compiling MJML...');

const mjmlContent = fs.readFileSync(inputFile, 'utf8');
const htmlOutput = mjml(mjmlContent).html;

// Overwrite or create new index.html with the updated content
fs.writeFileSync(outputFile, htmlOutput);
console.log('✅ MJML compiled to HTML successfully!');