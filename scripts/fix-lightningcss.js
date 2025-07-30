const fs = require('fs');
const path = require('path');

const lightningDir = path.join(__dirname, '../node_modules/lightningcss/node');
const indexFile = path.join(lightningDir, 'index.js');

if (!fs.existsSync(indexFile)) {
  console.error('⚠️ lightningcss index.js not found!');
  process.exit(1);
}

let contents = fs.readFileSync(indexFile, 'utf8');

// Replace x64 with arm64
const updated = contents.replace(/darwin-x64/g, 'darwin-arm64');

if (contents !== updated) {
  fs.writeFileSync(indexFile, updated);
  console.log('✅ Patched lightningcss to use darwin-arm64.');
} else {
  console.log('ℹ️ No darwin-x64 references found — nothing changed.');
}