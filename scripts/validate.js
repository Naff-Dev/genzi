const fs = require('fs');
const path = require('path');

let hasErrors = false;

function logPass(msg) {
  console.log(`[PASS] ${msg}`);
}

function logFail(msg) {
  console.error(`[FAIL] ${msg}`);
  hasErrors = true;
}

// 1. Validate plugin.json files
const jsonFiles = [
  'plugin.json',
  'package.json',
  '.claude-plugin/plugin.json',
  '.claude-plugin/marketplace.json',
  '.cursor-plugin/plugin.json',
  '.agents/plugins/naffdev-product-engineer/plugin.json'
];

jsonFiles.forEach((file) => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) {
    logFail(`Missing JSON file: ${file}`);
    return;
  }
  try {
    const raw = fs.readFileSync(fullPath, 'utf8');
    JSON.parse(raw);
    logPass(`Valid JSON: ${file}`);
  } catch (err) {
    logFail(`Invalid JSON in ${file}: ${err.message}`);
  }
});

// 2. Validate SKILL.md and references
const skillPath = path.join(__dirname, '..', 'skills', 'naffdev-product-engineer', 'SKILL.md');
if (!fs.existsSync(skillPath)) {
  logFail('Missing SKILL.md in skills/naffdev-product-engineer/');
} else {
  const content = fs.readFileSync(skillPath, 'utf8');
  if (!content.startsWith('---')) {
    logFail('SKILL.md must start with YAML frontmatter (---)');
  } else if (!content.includes('name: naffdev-product-engineer')) {
    logFail('SKILL.md missing name frontmatter');
  } else if (!content.includes('description:')) {
    logFail('SKILL.md missing description frontmatter');
  } else {
    logPass('SKILL.md has valid YAML frontmatter header');
  }
}

const requiredReferences = [
  'workspace-detection.md',
  'prd-template.md',
  'design-guidelines.md',
  'review-checklist.md'
];

requiredReferences.forEach((ref) => {
  const refPath = path.join(__dirname, '..', 'skills', 'naffdev-product-engineer', 'references', ref);
  if (!fs.existsSync(refPath)) {
    logFail(`Missing reference file: ${ref}`);
  } else {
    logPass(`Reference file exists: ${ref}`);
  }
});

if (hasErrors) {
  console.error('\nValidation failed with errors.');
  process.exit(1);
} else {
  console.log('\nAll validation checks passed successfully.');
}
