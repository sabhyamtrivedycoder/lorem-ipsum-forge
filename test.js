const assert = require('assert');
const { generateLoremParagraph } = require('./app.js');
console.log('🧪 Testing Lorem Forge...');
const p = generateLoremParagraph();
assert(p.length > 20, 'Paragraph generated');
console.log('✅ Lorem Forge test passed!');
