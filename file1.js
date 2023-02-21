const fs = require('fs');

/* The fs.writeFileSync method is used
to write something to the file, but if
the file does not exist, it creates new
files along with writing the contents */
fs.writeFileSync('./testfile', 'This is a new file');
var file_content = fs.readFileSync(
                './testfile', 'utf8').toString();

console.log(file_content);

/* The fs.appendFileSync method is used
for updating the data of a file */
fs.appendFileSync('./testfile', " Updated Data");
file_content = fs.readFileSync(
        './testfile', 'utf8').toString();
console.log(file_content);
