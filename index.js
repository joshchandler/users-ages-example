var fs = require('fs');
var filereader = require('./filereader');
var chalk = require('chalk');

var line_number = 1;
var users_grouped = [];

filereader.read(process.argv[2])
  .on('line', function (line) {
    var error_message = chalk.red('Line ' + line_number + ' has incorrect data.');
    var arr = line.split(",");

    console.log(arr);

    line_number++;
  })
  .on('close', function () {
    console.log(users_grouped);
  });
