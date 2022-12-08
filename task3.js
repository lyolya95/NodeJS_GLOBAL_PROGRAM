// For working with this task, you need to add { "type":"module" } into package.json
import csv from "csvtojson";
import fs from "fs";
import filePath from "./utils/path.js";

const writeStream = fs.createWriteStream(filePath.filePathTXT);
const readStream = fs.createReadStream(filePath.filePathCSV);

readStream
    .pipe(csv())
    .on('data', (data) => writeStream.write(data))
    .on('error', (err => console.log(err)));