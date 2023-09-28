document.addEventListener("DOMContentLoaded", function() {
    // Code to run when the DOM is ready
});

$(function() {
    // Code to run when the DOM is ready
});

var element = document.querySelector("#myElement");

var element = $("#myElement");

fetch("https://example.com/api/data")
    .then(response => response.json())
    .then(data => {
        // Handle the data
    })

$.get("https://example.com/api/data", data => {
    // Handle the response
});

var element = document.getElementById("myElement");
element.classList.add("active");
element.classList.remove("active");

$("#myElement").addClass("active");
$("#myElement").removeClass("active");

document.getElementById("btn1").addEventListener("click", function() {
    // Handle click event
});

$("#btn1").click(function() {
    // Handle click event
});

var element = document.getElementById("myElement");
element.style.transition = "opacity 0.5s";
element.style.opacity = "1"; // For fadeIn
element.style.opacity = "0"; // For fadeOut

$("#myElement").fadeIn();
$("#myElement").fadeOut();
