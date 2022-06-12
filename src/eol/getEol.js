import * as os from 'os';
const { EOL } = os;

export const getEOL = () => {
  console.log('Using end of line' + JSON.stringify(EOL) + 'to insert a new line');
}
