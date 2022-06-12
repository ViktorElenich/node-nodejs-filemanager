import * as fs from 'fs';
import * as path from 'path';

export const readFile = (nameFile) => {
  if (path.isAbsolute(nameFile)) {
    fs.readFile(nameFile, 'utf8',  (err, data) => {
      if (err) throw new Error('Enter absolute path to file');
      console.log(data);
      console.log('File read');
    })
  } else {
    try {
      let inputPath = path.join(process.cwd(), nameFile);
      readFile(inputPath);
    } catch (error) {
      console.log(error);
    }
  }
}