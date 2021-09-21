let fs = require("fs");

fs.unlink("mynewFile.txt", (err) => {
  if (err) throw err;
  console.log("File Deleted");
});

// // Rename files
// let fs = require("fs");

// fs.rename("mynewFile.txt", "myrenamedFile.txt", (err) => {
//   if (err) throw err;
//   console.log("File Renamed");
// });
