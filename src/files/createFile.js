import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createFile = (fileName) => {
  fs.writeFile(path.join(__dirname, fileName), 'I am fresh and young', (err) => {
    if (err){
      throw new Error('FS operation failed');
    }
    console.log('Done!');
  })
}