export const upperFromCurrentDirectory  = () => {
  try {
    process.chdir('..');
    console.log(process.cwd());
  }
  catch (err) {
    console.log('chdir: ' + err);
  }
}