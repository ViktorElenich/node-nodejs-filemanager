import os from 'os';

export const getHomeDir = () => {
  console.log('Your Home Directory ' + os.homedir());
}