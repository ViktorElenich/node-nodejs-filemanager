import rl from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { upperFromCurrentDirectory } from '../nwd/upperFromCurrentDirectory.js';
import { pathToDirectory } from '../nwd/pathToDirectory.js';
import { getListAllFilesAndFolder } from '../nwd/listAllFilesAndFolder.js';

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
    }
  })
  
  process.on('beforeExit', (code) => {
    console.log(`Thank you for using File Manager, ${userName.pop()}!`);
  })
}

getUserName()