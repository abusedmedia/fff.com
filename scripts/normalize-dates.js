#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function normalizeDatesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract front matter
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontMatterRegex);
    
    if (!match) return false; // No front matter found
    
    const [, frontMatter, body] = match;
    const lines = frontMatter.split('\n');
    let modified = false;
    
    const normalizedLines = lines.map(line => {
      if (line.includes('date:')) {
        // Extract the date part from various formats
        const dateMatch = line.match(/date:\s*(.+)/);
        if (dateMatch) {
          const dateValue = dateMatch[1].trim();
          const normalizedDate = dateValue.match(/(\d{4}-\d{2}-\d{2})/);
          if (normalizedDate) {
            modified = true;
            return `date: ${normalizedDate[1]}`;
          }
        }
      }
      return line;
    });
    
    // Check if layout is missing and add it
    const hasLayout = lines.some(line => line.includes('layout:'));
    if (!hasLayout) {
      // Add layout after the first line (usually title)
      normalizedLines.splice(1, 0, 'layout: layouts/post.njk');
      modified = true;
    }
    
    if (modified) {
      const newContent = `---\n${normalizedLines.join('\n')}\n---\n${body}`;
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Normalized dates in: ${filePath}`);
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
      if (normalizeDatesInFile(fullPath)) {
        totalModified++;
      }
    }
  }
  
  return totalModified;
}

// Main execution
const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');

if (!fs.existsSync(blogDir)) {
  console.error('Blog directory not found:', blogDir);
  process.exit(1);
}

console.log('Normalizing dates in blog posts...');
const modifiedCount = processDirectory(blogDir);
console.log(`Normalized dates in ${modifiedCount} files.`);
