import * as fs from 'fs';
import zlib from 'zlib';

export const compressFile = (pathFile,  pathToDestination) => {
  const file = fs.createReadStream(pathFile);
  const brotli = zlib.createBrotliCompress();
  const write = fs.createWriteStream(`${pathToDestination}.br`);
  const stream = file.pipe(brotli).pipe(write);

  stream.on('finish', () => {
    console.log('Done compressing');
  });
};