import * as fs from 'fs';

export const getListAllFilesAndFolder = () => {
  fs.readdir(process.cwd(), (err, item) => {
    if(err) throw err;
    console.log(item);
  })
}