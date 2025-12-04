const fs = require("fs");
const path = require("path");

function writeDataFile() {
  const filePath = path.join(__dirname, "file.txt");  // absolute path
  fs.writeFileSync(filePath, "We will not miss the exam next time"); 
}
