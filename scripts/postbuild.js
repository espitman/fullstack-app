const fs = require('fs');
const path = require('path');

// مسیرهای اصلی فقط داخل build
const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const apiDir = path.join(buildDir, 'api'); // فقط این خط تغییر کرد

// اطمینان از وجود پوشه build
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

// 1. Copy build/api/package.json to build/package.json
const apiPkgPath = path.join(apiDir, 'package.json');
const buildPkgPath = path.join(buildDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(apiPkgPath, 'utf8'));

// 2. Remove fields
delete pkg.private;
delete pkg.nx;
delete pkg.main;

// 3. Change name
pkg.name = 'my-fullstack-app';

// 4. Add or update start script (بدون حذف سایر اسکریپت‌ها)
pkg.scripts = pkg.scripts || {};
pkg.scripts.start = 'node api/main.js';

// 5. Add tslib to dependencies
pkg.dependencies = pkg.dependencies || {};
pkg.dependencies.tslib = "^2.8.1";

// 6. Write to build/package.json
fs.writeFileSync(buildPkgPath, JSON.stringify(pkg, null, 2));

// 7. Edit build/api/main.js: replace ../../client/dist to ../client
const mainJsPath = path.join(apiDir, 'main.js');
if (fs.existsSync(mainJsPath)) {
  let mainJs = fs.readFileSync(mainJsPath, 'utf8');
  mainJs = mainJs.replace(/\.\.\/\.\.\/client\/dist/g, '../client');
  fs.writeFileSync(mainJsPath, mainJs);
}

console.log('Post-build steps completed in build/ directory!'); 