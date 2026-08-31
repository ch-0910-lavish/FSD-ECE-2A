 const fs = require("fs")
 fs.writeFileSync("notes.txt","hello Node.js")

 const data = fs.readFileSync("notes.txt")
 console.log('read data: ${data}')
  
 fs.appendFilesync("notes.txt", "ECE - A")

 fs.rmSync("notes.txt")