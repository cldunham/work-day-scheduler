$(document).ready(function () {
})

//variable
var saveBtn = $(".saveBtn");

// displays current day at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function to save to local storage
function saveLocal(key, value) {
    localStorage.setItem(key, value);
}

//function for persistence

//timeblocks and color changes for past, present, and future
function colorChange() {
    var hour = moment().hours();


}

//function to upload data

//on click listener to save info
$(".saveBtn").on("click", function ());

//function to push data from line 15