import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getListAllFilesAndFolder = () => {
  fs.readdir(__dirname, (err, item) => {
    if(err) throw err;
    console.log(item);
  })
}