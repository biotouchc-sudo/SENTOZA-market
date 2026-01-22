/**
 * Senate Self-Validator (The Quality Guardian)
 * 
 * Purpose: Validates the integrity of the .ai/ reference system.
 * Usage: node .ai/senate.validator.js
 * 
 * This script MUST pass before any development begins.
 */

const fs = require('fs');
const path = require('path');

const AI_DIR = path.join(__dirname);
const RESULTS = { passed: 0, failed: 0, warnings: 0, errors: [] };

// =============================================================================
// 🔍 VALIDATION RULES
// =============================================================================

const REQUIRED_FILES = [
    'system.index.md',
    'boot.prompt.md',
    'workflow.lock.md',
    'project.context.template.md',
    'senate.config.json',
    'architecture.diagram.md',
    'governance/senate.protocol.md',
    'ui/design.system.md',
    'ui/identity.matrix.md',
    'ui/components.inventory.md',
    'ux/decision.ledger.md',
    'ux/human.failures.md',
    'anti-patterns/code.smells.md',
    'security/threat.model.md',
    'legal/claims.policy.md',
];

const REQUIRED_DIRECTORIES = [
    'governance',
    'ui',
    'ux',
    'anti-patterns',
    'security',
    'legal',
];

// =============================================================================
// ✅ VALIDATORS
// =============================================================================

function validateFileExists(filePath) {
    const fullPath = path.join(AI_DIR, filePath);
    if (fs.existsSync(fullPath)) {
        RESULTS.passed++;
        console.log(`  ✅ ${filePath}`);
        return true;
    } else {
        RESULTS.failed++;
        RESULTS.errors.push(`Missing file: ${filePath}`);
        console.log(`  ❌ ${filePath} (MISSING)`);
        return false;
    }
}

function validateDirectoryExists(dirPath) {
    const fullPath = path.join(AI_DIR, dirPath);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
        RESULTS.passed++;
        console.log(`  ✅ ${dirPath}/`);
        return true;
    } else {
        RESULTS.failed++;
        RESULTS.errors.push(`Missing directory: ${dirPath}`);
        console.log(`  ❌ ${dirPath}/ (MISSING)`);
        return false;
    }
}

function validateJSON(filePath) {
    const fullPath = path.join(AI_DIR, filePath);
    if (!fs.existsSync(fullPath)) return false;

    try {
        const content = fs.readFileSync(fullPath, 'utf8');
        JSON.parse(content);
        RESULTS.passed++;
        console.log(`  ✅ ${filePath} (Valid JSON)`);
        return true;
    } catch (e) {
        RESULTS.failed++;
        RESULTS.errors.push(`Invalid JSON: ${filePath} - ${e.message}`);
        console.log(`  ❌ ${filePath} (Invalid JSON)`);
        return false;
    }
}

function validateYAML(filePath) {
    const fullPath = path.join(AI_DIR, filePath);
    if (!fs.existsSync(fullPath)) return false;

    // Basic YAML check (no external deps)
    try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('openapi:') || content.includes('info:')) {
            RESULTS.passed++;
            console.log(`  ✅ ${filePath} (Valid YAML structure)`);
            return true;
        }
    } catch (e) {
        RESULTS.failed++;
        RESULTS.errors.push(`Invalid YAML: ${filePath}`);
        console.log(`  ❌ ${filePath} (Invalid YAML)`);
        return false;
    }
}

function validateSenateConfig() {
    const configPath = path.join(AI_DIR, 'senate.config.json');
    if (!fs.existsSync(configPath)) return false;

    try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        // Check required fields
        const requiredFields = ['governance', 'runtime_contracts', 'paths'];
        for (const field of requiredFields) {
            if (!config[field]) {
                RESULTS.warnings++;
                console.log(`  ⚠️  senate.config.json missing field: ${field}`);
            }
        }

        // Check performance thresholds
        if (config.runtime_contracts?.performance?.lighthouse_min_score < 90) {
            RESULTS.warnings++;
            console.log(`  ⚠️  Lighthouse threshold below 90 is not 0.01% standard`);
        }

        return true;
    } catch (e) {
        return false;
    }
}

// =============================================================================
// 🚀 MAIN EXECUTION
// =============================================================================

function runValidation() {
    console.log('\n🏛️ SENATE VALIDATOR — Reference System Integrity Check\n');
    console.log('='.repeat(60));

    // Step 1: Check directories
    console.log('\n📁 Checking Directories...\n');
    REQUIRED_DIRECTORIES.forEach(validateDirectoryExists);

    // Step 2: Check files
    console.log('\n📄 Checking Required Files...\n');
    REQUIRED_FILES.forEach(validateFileExists);

    // Step 3: Validate JSON/YAML
    console.log('\n🔍 Validating File Formats...\n');
    validateJSON('senate.config.json');
    validateJSON('dictionary.template.json');
    validateYAML('api.contract.template.yaml');

    // Step 4: Validate Senate Config
    console.log('\n⚙️  Validating Senate Configuration...\n');
    validateSenateConfig();

    // ==========================================================================
    // FINAL REPORT
    // ==========================================================================
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 VALIDATION REPORT\n');
    console.log(`   ✅ Passed:   ${RESULTS.passed}`);
    console.log(`   ❌ Failed:   ${RESULTS.failed}`);
    console.log(`   ⚠️  Warnings: ${RESULTS.warnings}`);

    if (RESULTS.errors.length > 0) {
        console.log('\n🚨 ERRORS:\n');
        RESULTS.errors.forEach(err => console.log(`   - ${err}`));
    }

    console.log('\n' + '='.repeat(60));

    if (RESULTS.failed === 0) {
        console.log('\n🎉 SENATE VALIDATION PASSED — System Ready for Development\n');
        process.exit(0);
    } else {
        console.log('\n❌ SENATE VALIDATION FAILED — Fix errors before proceeding\n');
        process.exit(1);
    }
}

// Run
runValidation();
