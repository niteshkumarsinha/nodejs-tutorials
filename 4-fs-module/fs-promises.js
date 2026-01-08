const fs = require("fs");
const path = require("path");


const fileName = "fsPromises.txt";
let filePath = path.join(__dirname, fileName);


fs.promises.writeFile(filePath, "Hello World")
    .then(() => {
        console.log("File written successfully");
    })
    .catch((err) => {
        console.error(err);
    });


fs.promises.readFile(filePath, "utf8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises.appendFile(filePath, "\nHello World")
    .then(() => {
        console.log("File appended successfully");
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises.copyFile(filePath, "fsPromises_copy.txt")
    .then(() => {
        console.log("File copied successfully");
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises.unlink(filePath)
    .then(() => {
        console.log("File deleted successfully");
    })
    .catch((err) => {
        console.error(err);
    });


filePath = __dirname

fs.promises
    .readdir(filePath)
    .then((files) => {
        console.log("Files: ");
        console.log(files);
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises
    .writeFile(filePath + "/test.txt", "Hello World", "utf8")
    .then(() => {
        console.log("File written successfully: " + filePath + "/test.txt");
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises.appendFile(filePath + "/test.txt", "\nHello World", "utf8"  )
    .then(() => {
        console.log("File appended successfully");
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises
    .copyFile(filePath + "/test.txt", "test_copy.txt")
    .then(() => {
        console.log("File copied successfully");
    })
    .catch((err) => {
        console.error(err);
    });

fs.promises
    .unlink(filePath + "/test.txt")
    .then(() => {
        console.log("File deleted successfully");
    })
    .catch((err) => {
        console.error(err);
    });
    