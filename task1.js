const readline = require('readline');

const rl = readline.createInterface(process.stdin);

rl.on('line',  (cmd) => {
    const result = cmd.split('').reverse().join('');
    console.log(result);
});