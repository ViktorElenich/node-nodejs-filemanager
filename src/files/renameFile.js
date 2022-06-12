import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const renameFile = (pathFile, newFileName) => {
  fs.rename(path.join(__dirname, pathFile), path.join(__dirname, newFileName), (err) => {
    if(err) throw new Error('FS operation failed');
    console.log('File renamed');
  })
};