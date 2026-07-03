const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
const skip = new Set(['reportWebVitals.js', 'setupTests.js']);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (entry.isFile() && full.endsWith('.js') && !skip.has(entry.name)) {
      const target = full.replace(/\.js$/, '.jsx');
      fs.renameSync(full, target);
      console.log(`renamed ${full} -> ${target}`);
    }
  }
}
walk(root);
