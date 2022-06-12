import crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = (fileName) => {
  fs.readFile(path.join(__dirname, fileName), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('File is hashed: ' + crypto.createHash('sha256').update(data).digest('hex'));
  });
};