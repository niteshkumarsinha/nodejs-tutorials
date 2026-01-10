const fs = require("fs");
const path = require("path");

const filePath = __dirname;
const data = "this is a test file, created using Node.js";


const readFolder = async () => {
    try {
        const files = await fs.promises.readdir(filePath, "utf8");
        console.log(files);
    } catch (err) {
        console.error(err);
    }
}
readFolder();


const writeFile = async () => {
    try {
        await fs.promises.writeFile(filePath + "/test.txt", data, "utf8");
        console.log("File written successfully");
    } catch (err) {
        console.error(err);
    }
}
writeFile();


const appendFile = async () => {
    try {
        await fs.promises.appendFile(filePath + "/test.txt", "\nHello World", "utf8");
        console.log("File appended successfully");
    } catch (err) {
        console.error(err);
    }
}
appendFile();

const deleteFile = async () => {
    try {
        await fs.promises.unlink(filePath + "/test.txt");
        console.log("File deleted successfully");
    } catch (err) {
        console.log(err);
    }
}
deleteFile();