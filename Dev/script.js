// Display today's date
var nowDate = moment().format('LL');
$("#currentDay").html(nowDate);

// Display today's time and make dynamic
function updateTime() {
  var nowTime = moment().format('LTS');
  $("#currentTime").html(nowTime);
}
setInterval(updateTime, 1000);

$(document).ready(function() {
  // On click event listener for button
  $(".saveBtn").on("click", function () {
    // Get value of description class entered at relevant time
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    
    // Save textarea input to local storage
    localStorage.setItem(time, text);
  });

  // Get current hour
  var nowHour = moment().hours();
  console.log(nowHour);
  // Apply corresponding color to each time block based on current hour
  $(".time-block textarea").each(function() {
    var blockHour = $(this).data("hour");
    console.log(blockHour);
    // If var1 less than var2 ...
    if (blockHour < nowHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    // Else if var1 === var2 ...
    else if (blockHour === nowHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    // Else ...
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  // Display key: values from local storage onto schedule
  $("#9AM .description").val(localStorage.getItem("9AM"));
  $("#10AM .description").val(localStorage.getItem("10AM"));
  $("#11AM .description").val(localStorage.getItem("11AM"));
  $("#12PM .description").val(localStorage.getItem("12PM"));
  $("#1PM .description").val(localStorage.getItem("1PM"));
  $("#2PM .description").val(localStorage.getItem("2PM"));
  $("#3PM .description").val(localStorage.getItem("3PM"));
  $("#4PM .description").val(localStorage.getItem("4PM"));
  $("#5PM .description").val(localStorage.getItem("5PM"));
  $("#6PM .description").val(localStorage.getItem("6PM"));
});