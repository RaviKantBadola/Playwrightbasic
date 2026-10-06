import * as fs from 'fs';
import * as path from 'path';

export interface TestDataRow {
  [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {
  // Resolve the full file path safely
  const fullPath = path.resolve(filePath);
  
  // Read the file contents synchronously
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  // Split content into rows, filtering out empty lines
  const lines = content.trim().split('\n');
  

  // Extract and clean headers from the first line
  const headers = lines[0].split(',');
  
  const data: TestDataRow[] = [];

  // Loop through the remaining data rows
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row: TestDataRow = {};

    // Map each value to its corresponding header
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j] ? values[j].trim() : '';
    }

    data.push(row);
  }

  return data;
}