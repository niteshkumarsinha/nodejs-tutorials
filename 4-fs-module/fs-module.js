// fs.WriteFileSync writes data to a file synchronously. 
// It takes 3 arguments: file name, data, and callback function
// If the file does not exist, it will be created.
// If the file exists, it will be overwritten.

// filename: the name of the file to write to
// data: the data to write to the file
// callback: a callback function that is called when the file is written   

const fs = require("fs");
const path = require("path");


const fileName = path.join(__dirname, "students.txt");
const data = "this is a test file, created using Node.js";

const writeFile = fs.writeFileSync(fileName, data);

console.log(writeFile); 


const readFile = fs.readFileSync(fileName, 'utf8');
console.log(readFile);


const appendFile = fs.appendFileSync(fileName, "\nthis is a test file, created using Node.js", 'utf8');
console.log(appendFile);

const copyFile = fs.copyFileSync(fileName, "students_copy.txt");
console.log(copyFile);


const deleteFile = fs.unlinkSync(fileName);
console.log(deleteFile);