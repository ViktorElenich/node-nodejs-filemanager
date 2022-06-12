import rl from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { upperFromCurrentDirectory } from '../nwd/upperFromCurrentDirectory.js';
import { pathToDirectory } from '../nwd/pathToDirectory.js';
import { getListAllFilesAndFolder } from '../nwd/listAllFilesAndFolder.js';
import { readFile } from '../files/readFile.js';
import { createFile } from '../files/createFile.js';
import { renameFile } from '../files/renameFile.js';
import { copyFile } from '../files/copyFile.js';
import { moveFile } from '../files/moveFile.js';
import { deleteFile } from '../files/deleteFile.js';

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getUserName = () => {
  const userName = process.argv.slice(2);
  const cliArgs = userName.reduce((acc, arg, index, arr) => {
    const name = arr[index + 1];
    if (name && arg.startsWith('--')) {
      const welcomeString = `Welcome to the File Manager, ${name}!`;
      acc.push(welcomeString);
    }
    return acc;
  }, [])

  console.log(cliArgs.join());
  console.log(`You are currently in ${__dirname}`);

  readline.on('line', (input) => {
    const args = input.split(' ');
    if(args[0] === '.exit'){
      readline.close()
    } else if (args[0] === 'up') {
      upperFromCurrentDirectory();
    } else if (args[0] === 'cd') {
      pathToDirectory(process.cwd(), args[1]);
    } else if (args[0] === 'ls') {
      getListAllFilesAndFolder();
    } else if (args[0] === 'cat') {
      readFile(args[1]);
    } else if (args[0] === 'add') {
      createFile(args[1]);
    } else if (args[0] === 'rn') {
      renameFile(args[1], args[2]);
    } else if (args[0] === 'cp') {
      copyFile(args[1], args[2]);
    } else if (args[0] === 'mv') {
      moveFile(args[1], args[2]);
    } else if (args[0] === 'rm') {
      deleteFile(args[1]);
    }
  })
  
  process.on('beforeExit', (code) => {
    console.log(`Thank you for using File Manager, ${userName.pop()}!`);
  })
}

getUserName()