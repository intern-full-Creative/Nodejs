const os = require("os");

// User info
const user = os.userInfo();
console.log(user);
// {
//   uid: -1,
//   gid: -1,
//   username: 'jith4',
//   homedir: 'C:\\Users\\jith4',
//   shell: null
// }

// System uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is ${uptime} seconds`);
// The system uptime is 3972 seconds

// Current os information
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
};
console.log(currentOs);
// {
//   name: 'Windows_NT',
//   release: '10.0.22000',
//   totalMem: 8388648960,
//   freeMen: 1750740992
// }
