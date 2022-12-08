// For working with this task, you need to add { "type":"module" } into package.json
import csv from "csvtojson";
import fs from "fs";
import filePath from "./utils/path.js";

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