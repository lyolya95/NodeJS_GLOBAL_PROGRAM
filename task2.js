const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'files/nodejs.csv');
const csv = require('csvtojson');

csv()
    .fromFile(filePath)
    .then((jsonObj) => JSON.stringify(jsonObj))
    .then(data => {
        fs.writeFile('message.txt', data, function (err) {
            if (err) throw err;
            console.log('File saved!');
        });
    })
    .catch(err => console.log(err));