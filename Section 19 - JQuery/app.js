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

//157. Adding and Removing Elements with jQuery
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
// $("h1").prepend("<button>Prepend</button>");
// $("h1").append("<button>Append</button>");

// $("button").remove();


// 158. Animations with jQuery

$("button").on("click", function () {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({ opacity: 0.5 });
    // $("h1").animate({ margin: "20px" });
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

// Note: You can chain multiple animate methods but only one property can be animated at a time using animate() method.


