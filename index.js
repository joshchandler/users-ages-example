var fs = require('fs');
var filereader = require('./filereader');
var chalk = require('chalk');

var line_number = 1;
var user_list = [];
var users_grouped = [];

if (filereader.file_extension(process.argv[2]))
filereader.read(process.argv[2])
  .on('line', function (line) {
    var arr = line.split(",");

    // Get a list of ages (still separated)
    user_list.push(arr[1]);

    // Keep line number count, specifically for user count later on.
    line_number++;
  })
  .on('close', function () {

    // Sort the array of ages
    var users = user_list.sort();

    /**
     * Explanation for program's core functionality below.
     *
     * We loop through the array based on the value of {current} (which is the current iteration in the loop).
     * Each iteration of the same age increases the count.
     * Once we have reached the end of a group of ages,
     * we add the age with the number of users with that age to {users_grouped}
     */
    var current = null;
    var count = 0;

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

    /**
     * The loop exits without the last iteration added to {users_grouped}.
     * We add that here.
     */
    if (count > 0) {
      users_grouped.push([parseInt(current), count]);
    }

    user_count = line_number - 1;

    // Output the list of (faux) tuples where first integer is
    // age and second integer is number of users with that age.
    console.log(users_grouped);

    // Display total number of users.
    console.log("\nTotal number of users: " + user_count);
  });
