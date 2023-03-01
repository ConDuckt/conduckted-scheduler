# 05 Third-Party APIs: Work Day Scheduler

## About

This is the fifth project for my coding bootcamp, consisting of a simple hourly planner that uses jQuery to record and display user inputs.

The bulk of the code works by using `$(this)` to locate element ids and apply classes to the HTML.

There are 9 different divs with ids running from 9-17 (as in 9AM to 5PM). Each div is also classed as a "time-block", allowing the divs to be passed into functions by class, where traversal is used to affect the ids in different ways (in this case, to color code them based on current time.)

I opted to use military time for the ids as this would make it easier to check against day.js and not have to deal with AM/PM formatting.

Traversal was also used to locate the ids closest to their respective save buttons, which would allow the app to save their "description" class values locally.

## Takeaways

The biggest challenge for me was figuring out which traversal methods would correctly target the user input text so that it could be set and retrieved from local storage. At one point I could've sworn `.first(".time-block")` was working only to return and find the code broken. Once I found the correct methods to get the save buttons to work, it was easy to just add more time blocks and check them against the current time to determine the correct formatting class for each.

## Acknowlegements

https://meyerweb.com/eric/tools/css/reset/index.html for the usual reset CSS sheet.

https://api.jquery.com/category/traversing/ for experimenting with different traversal methods.

https://day.js.org/docs/en/display/format day.js cheatsheet.
