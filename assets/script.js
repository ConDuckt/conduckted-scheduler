// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display the current date in the header of the page.

// Add click lister events on the saveBtn. 
var saveBtn = $(".saveBtn");
saveBtn.click
$(saveBtn).click(function() {
// Get time-block id's. Use DOM traversal to get correct "hour-x" id is for each saveBtn.
// `this` targets saveBtn in the function so it won't work outside the function:
    var timeBlock = $(this).first(".time-block").attr("id");
    var userInput = $(this).first(".description").val();
// Set any userInput to localStorage 
//  Use the id in the containing time-block as a key to save the user input in local storage. 
    localStorage.setItem(timeBlock, userInput);
});

// ref error:
localStorage.getItem(timeBlock, userInput);

// Get time-block id's. 

// Use DOM traversal to get correct "hour-x" id is for each saveBtn.
// `this` targets saveBtn in the function so you need to traverse to c 


// Set any userInput to localStorage 
//  Use the id in the containing time-block as a key to save the user input in local storage. 

// Get current time with day.js.

// Apply the past, present, or future class to each time block by comparing the time-block id to the current time.
  // The id attribute of each time-block be used to conditionally add or remove 
  // the past, present, and future classes.

// Add code to get any user input that was saved in localStorage 
// and set the values of the corresponding textarea elements. 
// The id attribute of each time-block be used to do this.

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// Use class for "past", "present", and "future" to apply styles to the
// time-block divs accordingly. The javascript will need to do this by
// adding/removing these classes on each div by comparing the hour in the
// id to the current hour. The html provided below is meant to be an example
// demonstrating how the css provided can be leveraged to create the
// desired layout and colors. The html below should be removed or updated
// in the finished product. Remember to delete this comment once the
// code is implemented.