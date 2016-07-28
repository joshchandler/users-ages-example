var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var path = require('path');
var chalk = require('chalk');

module.exports = {
  // Open the file for reading
  read: function (file) {
    return readline.createInterface({
      input: fs.createReadStream(file),
      output: new stream
    });
  },

  // Only allow csv and txt
  file_extension: function (file) {
    var index = file.lastIndexOf('.');
    var extension = (index < 0) ? '' : file.substr(index);

    if (extension == '.csv' || extension == '.txt') {
      return true;
    } else {
      if (!process.env.NODE_ENV == 'testing') {
        chalk.red(extension + ' filetypes are not allowed. Only csv and txt files, please!');
      }
      return false;
    }
    return (index < 0) ? '' : file.substr(index);
  }
};
