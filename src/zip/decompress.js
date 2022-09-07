import * as fs from 'fs';
import zlib from 'zlib';

export const decompressFile = (pathFile,  pathToDestination) => {
  const file = fs.createReadStream(pathFile);
  const brotli = zlib.createBrotliDecompress();
  const write = fs.createWriteStream(`${pathToDestination}.br`);
  const stream = file.pipe(brotli).pipe(write);

  stream.on('finish', () => {
    console.log('Done compressing');
  });
};