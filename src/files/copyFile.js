import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copyFile = (fileName, pathToNewDirectory) => {
  fs.copyFile(path.join(__dirname, fileName), path.join(pathToNewDirectory, fileName), (err) => {
    if (err) throw err;
    console.log('File copied successfully');
  })
};