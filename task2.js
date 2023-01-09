const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const filePath = path.join(__dirname, 'files/nodejs.csv');

const writeStream = fs.createWriteStream(path.join(__dirname, 'files/nodejs.txt'));
const readStream = fs.createReadStream(filePath);

readStream
    .pipe(csv())
    .on('data', (data) => writeStream.write(data))
    .on('error', err => console.log(err));
