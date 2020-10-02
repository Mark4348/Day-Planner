
$(document).ready(function(){

// The time and date feature
var today = $("#currentDay");


$("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


//function for changing the colors of the text boxes
function colorChange() {


}






// click button to save to local storage
$("#save9").on("click", function(event){
    event.preventDefault();

    console.log("item saved");

    //value 
    var value = $("#text1").siblings(".description").val();

    console.log(value);
    //time
    var time = $(this).parent().attr("Id");
    console.log(time);

    localStorage.setItem(value,time);

})

//getItems go here 

$("#save9 .description").val(localStorage).getItem("#save9");


})

//My thought process of breaking things down

// Call getItem function first
// getitems from local storage
// var c0 = localStorage.getItem(0)
// var c1 = localStorage.getItem(1)
// textInput1.textContent = c0 
// textInput2.textContent = c1

// Get time assign that to a variable
// // Change the classes based off the time
// // if time > 9 then 9 => past
// // else if time === timecount then => present
// // else if time < timecount then => future
// row.addclass("present")


// Save this local data
// // var a = time 
// // var b = event
// // local.storage.setItem(a,b)