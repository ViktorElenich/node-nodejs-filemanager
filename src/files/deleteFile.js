import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deleteFile = (fileName) => {
  fs.unlink(path.join(__dirname, fileName), (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log("File is deleted");
  })
};