import os from 'os';

export const getHostMachine = () => {
  const [{ model, speed }] = os.cpus();
  const osDataTable = [
    { 
      CPUS: os.cpus().length,
      Model: model,
      Speed: `${speed < 1000 ? (speed / 10).toFixed(2) : (speed / 1000).toFixed(2)} GHz`
    }
  ];
  console.table(osDataTable)
}