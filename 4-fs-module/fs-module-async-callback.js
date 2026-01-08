const fs = require("fs");
const path = require("path");


const fileName = path.join(__dirname, "students.txt");
const data = "this is a test file, created using Node.js";

const writeFile = fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File written successfully");
    }
});
console.log(writeFile);

const readFile = fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log(readFile);

const appendFile = fs.appendFile(fileName, "\nthis is a test file, created using Node.js", 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File appended successfully");
    }
});
console.log(appendFile);

const copyFile = fs.copyFile(fileName, "students_copy.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File copied successfully");
    }
});
console.log(copyFile);

const deleteFile = fs.unlink(fileName, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File deleted successfully");
    }
});
console.log(deleteFile);