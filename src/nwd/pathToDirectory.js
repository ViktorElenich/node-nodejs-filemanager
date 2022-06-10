import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const pathToDirectory = (dir) => {
  fs.existsSync(path.join(__dirname, '/', dir));
  console.log(path.resolve());
}