import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const pathToDirectory = (pathName, dir) => {
  fs.existsSync(path.join(pathName, '/', dir));
  console.log(process.cwd());
}