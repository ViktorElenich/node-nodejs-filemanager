import os from 'os';

export const getHostName = () => {
  console.log('Your Hostname ' + os.hostname());
}