#!/usr/bin/env node
// scripts/verify-citations.js
// Verifies that all claims have valid sources

const fs = require('fs');
const https = require('https');

async function verifyUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve(res.statusCode === 200);
        }).on('error', () => resolve(false));
    });
}

async function verifyCitations(citationsFile) {
    if (!fs.existsSync(citationsFile)) {
        console.log('⚠️  No citations.json found');
        return true;
    }

    const citations = JSON.parse(fs.readFileSync(citationsFile, 'utf8'));
    let allValid = true;

    for (const citation of citations) {
        const isValid = await verifyUrl(citation.url);
        if (!isValid) {
            console.log(`❌ Invalid source: ${citation.claim} - ${citation.url}`);
            allValid = false;
        } else {
            console.log(`✅ Valid: ${citation.claim}`);
        }
    }

    return allValid;
}

// Usage: node scripts/verify-citations.js artifacts/citations.json
const citationsFile = process.argv[2] || 'artifacts/citations.json';
verifyCitations(citationsFile).then(valid => {
    process.exit(valid ? 0 : 1);
});
