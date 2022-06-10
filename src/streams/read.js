import rl from 'readline';
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

  readline.on('line', (input) => {
    if(input === '.exit'){
      readline.close()
    } 
  })
  
  process.on('beforeExit', (code) => {
    console.log(`Thank you for using File Manager, ${userName.pop()}!`);
  })
}

getUserName()