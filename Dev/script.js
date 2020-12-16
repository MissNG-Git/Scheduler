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
  $(".saveBtn").on("click", function () {
    // Get value of description class entered at relevant time
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    
  // Save textarea input to local storage
  localStorage.setItem(time, text);
})

  // Function to register hour & change background colors accordingly
  function timeTracker() {
    // Get current # of hours
    var nowHour = moment().hour();
    // Loop over time blocks & check time
    $("#time-block").each(function() {
      var blockHour = 
      // **use classes: future, past & present (?)**
      // If var1 less than var2 ...
      
      // Else if var1 === var2 ...
      
      // Else ...
      
    };
  }

  // Call function
  timeTracker ();

  // Display key: values from local storage

});