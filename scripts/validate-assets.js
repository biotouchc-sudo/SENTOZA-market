// scripts/validate-assets.js
const fs = require('fs');
const path = require('path');

const MAX_IMG_SIZE = 500 * 1024; // 500KB
const ALLOWED_FORMATS = ['.webp', '.avif', '.svg'];

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    let failed = false;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (scanDir(filePath)) failed = true;
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                console.error(`❌ Legacy format: ${file}. Use WebP/AVIF.`);
                failed = true;
            }
            if (ALLOWED_FORMATS.includes(ext) && stat.size > MAX_IMG_SIZE) {
                console.error(`❌ Asset too large: ${file} (${Math.round(stat.size / 1024)}KB). Limit: 500KB.`);
                failed = true;
            }
        }
    });
    return failed;
}

// Check public/images if exists
if (fs.existsSync('public/images')) {
    if (scanDir('public/images')) process.exit(1);
}
console.log("✅ Asset validation passed.");
