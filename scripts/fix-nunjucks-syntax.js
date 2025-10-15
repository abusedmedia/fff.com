#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixNunjucksSyntaxInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for JSX-style object literals that need escaping
    // Pattern: style={{...}} or other JSX object literals
    const jsxObjectPattern = /(\w+)=\{\{([^}]+)\}\}/g;
    
    let modified = false;
    const fixedContent = content.replace(jsxObjectPattern, (match, prop, value) => {
      // Only escape if it looks like a JSX object literal (not a Nunjucks template)
      if (value.includes(':') || value.includes("'") || value.includes('"')) {
        modified = true;
        // Escape the braces using HTML entities
        return `${prop}=&#123;&#123;${value}&#125;&#125;`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed Nunjucks syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalModified = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      totalModified += processDirectory(fullPath);
    } else if (item.endsWith('.md')) {
      if (fixNunjucksSyntaxInFile(fullPath)) {
        totalModified++;
      }
    }
  }
  
  return totalModified;
}

// Main execution
const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');

if (!fs.existsSync(blogDir)) {
  console.log('Blog directory not found:', blogDir);
  console.log('Skipping Nunjucks syntax fixing.');
  process.exit(0);
}

console.log('Fixing Nunjucks syntax in blog posts...');
const modifiedCount = processDirectory(blogDir);
console.log(`Fixed Nunjucks syntax in ${modifiedCount} files.`);
