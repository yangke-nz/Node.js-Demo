var csvStringify = require('csv-stringify');

var fs = require('fs');

var arrayData = [[1,2,3], [4,5,6]];

csvStringify(arrayData, function(err, output) {
  fs.writeFile("./src/csv/output.csv", output, function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("file generated.");
    }
  });
});