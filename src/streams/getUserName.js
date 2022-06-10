import rl from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { upperFromCurrentDirectory } from '../nwd/upperFromCurrentDirectory.js';

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
    if(input === '.exit'){
      readline.close()
    } else if (input === 'up') {
      upperFromCurrentDirectory();
    } else if (input === 'cd') {
      console.log('you enter ' + input);
    }
  })
  
  process.on('beforeExit', (code) => {
    console.log(`Thank you for using File Manager, ${userName.pop()}!`);
  })
}

getUserName()