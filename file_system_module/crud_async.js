const fs = require('fs');
// callback based method 

// create a file
fs.writerFile("notes.txt", "Hello, node.js", (err) => {
    console.log("File created successfully written in theb file.notes.txt");
});

fs.radFile("notes.txt", (err, data) => {
    if (err) throw err;
    console.log(`read data : ${data}`);
})
// update file 
  const data = "Hello, ECE -A";
  fs.appendFile("notes.txt", data, (err) => {
    if (err) throw err;
    console.log(" File updated  successfully.");
  });