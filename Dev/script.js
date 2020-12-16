// Display today's date & time
var nowDate = moment().format('LL');
$("#currentDay").html(nowDate);

// Make moment.js time dynamic
function updateTime() {
  var nowTime = moment().format('LTS');
  $("#currentTime").html(nowTime);
}
updateTime();
setInterval(updateTime, 1000);

$(document).ready(function() {
  // On click event listener


  // Save textarea input to local storage


  // Function to register hour & change background colors accordingly


    // Get current # of hours


    // Loop over time blocks & check time


      // **use classes: future, past & present (?)**
      // If var1 less than var2 ...
      

      // Else if var1 === var2 ...


      // Else ...
    

  // Call function

  
  // Display key: values from local storage

  });