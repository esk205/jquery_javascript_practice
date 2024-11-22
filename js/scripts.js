console.log("bonjour")

console.log("ok")



$("#num-20").append("<h2>World<br>Children's <br> Day</h2>")
$("#num-20").addClass("wcd-bkg")

$("#num-21").append("<h2>World Television Day</h2>")
$("#num-21").css("background-image", "url(imgs/tv.jpeg)")
$("#num-21").css("background-size", "cover")

$("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
$("#num-25").css("background-image", "url(imgs/no-excuse.png)")
$("#num-25").css("background-size", "cover")

var y = "url(imgs/bus.png)"

// Select the h2 element using jQuery
const heading = $("#num-26")[0]; // Get the DOM element from the jQuery object

// Create an image element
const img = document.createElement("img");

// Set the image source and other attributes
img.src = y;

// Insert the image before the h2 element
heading.parentNode.insertBefore(img, heading);

$("#num-26").append("<h2>World Sustainable Transport Day</h2>")
$("#num-26").css("background-image", "url(imgs/bus.png)")
$("#num-26").css("background-size", "cover")

$(".box").on("click", addBorder);

function addBorder() {
    $(this).css("border", "2px solid black");
}

$("#num-19").on("click", function() {
    console.log("clicked on box 19")
    $(this).append("<h2>World Toilet Day</h2>")
    $(this).css("background-image", "url(imgs/wtd.webp)")
    $(this).css("background-size", "cover")
    $(this).unbind("click")
})

$("#num-20").on("click", function() {
    console.log("clicked on box 20")
    $(this).append("<h2>World<br>Children's <br> Day</h2>")
    $(this).addClass("wcd-bkg")
    $(this).unbind("click")
})

var days = true;

$("#hide-days").on("click", function() {
    $("#num-22, #num-23, #num-24").fadeToggle(3000);
    if(days == true) {
        $(this).text("Show Non-Days")
        days = false;
    }
    else{
        $(this).text("Hide Non-Days")
        days = true;
    }
})

$(document).on("keypress", function (e) {
    console.log(e.key)
    if(e.key == "t"){
        $("#num-21").html("November 21 <h3> World Television Day </h3>")
    }
    else if (e.key = "s"){
        $("#num-21").html("November 30 <h1> World Sustainable Transportation Day</h1>")
    }
})

