const path = require("path");


console.log(__dirname);
console.log(__filename);


const filePath = path.join(__dirname, "students", "data.txt"); 
console.log(filePath);


const baseName = path.basename(filePath);
console.log(baseName);  

const dirName = path.dirname(filePath);
console.log(dirName);   

const extName = path.extname(filePath);
console.log(extName);   

const absolutePath = path.resolve("students", "data.txt");
console.log(absolutePath);      

const parsedPath = path.parse("students", "data.txt");
console.log(parsedPath);      