import os from 'os';

export const getCPUArchitecture = () => {
  console.log('Your CPU Architecture ' + os.arch());
}