// 153. Manipulating Styles with jQuery
// alert("Hello JQuery");
// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
$("p").css("color", "blue");

// 154. Manipulating Text with jQuery
$("h1").text("Bye");
$("button").html("<em>Click Me</em>");
$("button").html("<em>Click Me</em>");

// 155. Manipulating Attributes with jQuery
$("a").attr("href", "https://www.yahoo.com");


// 156. Adding Event Listeners with jQuery
$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("h1").css("color", "orange");
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "pink");
});

