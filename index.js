// run `node index.js` in the terminal
const departments = require('./data/departments');

console.log(`Hello 123 Node.js v${process.versions.node}!`);

console.log(`departments` + JSON.stringify(departments,null,2));