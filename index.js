var fs = require('fs');
var filereader = require('./filereader');
var chalk = require('chalk');

var line_number = 1;
var user_list = [];
var users_grouped = [];

if (filereader.file_extension(process.argv[2]))
filereader.read(process.argv[2])
  .on('line', function (line) {
    var error_message = chalk.red('Line ' + line_number + ' has incorrect data.');
    var arr = line.split(",");

    // Get a list of ages (still separated);
    user_list.push(arr[1]);

    // Keep line number count.
    line_number++;
  })
  .on('close', function () {

    // Sort the array of ages
    var users = user_list.sort();

    var current = null;
    var count = 0;

    // We loop through the sorted array of users ages.
    for (var i = 0; i < users.length; i++) {

      // If age is different than the value of current, otherwise just increase the count.
      if (users[i] != current) {

        // We've reached the last user at this age.
        if (count > 0) {
          users_grouped.push([parseInt(current), count]);
        }

        // Current value is now equal to current age.
        current = users[i];

        // Increase count to 1.
        count = 1;
      } else {
        count++;
      }
    }

    // Include the last entry.
    if (count > 0) {
      users_grouped.push([parseInt(current), count]);
    }

    // Get user count.
    user_count = line_number - 1;

    // Output the list of faux tuples where first integer is
    // age and second integer is number of users with that age.
    console.log(users_grouped);

    console.log("\nTotal number of users: " + user_count);
  });
