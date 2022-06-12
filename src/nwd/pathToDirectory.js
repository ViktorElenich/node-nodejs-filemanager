import path from 'path';

export const pathToDirectory = (dir) => {
  if (path.isAbsolute(dir)) {
    try {
      process.chdir(dir);
      console.log(process.cwd());
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let inputPath = path.join(process.cwd(), dir);
      pathToDirectory(inputPath);
    } catch (error) {
      console.log(error);
    }
  }
}