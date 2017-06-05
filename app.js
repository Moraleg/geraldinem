$(document).ready(function () {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// slideTimer = setInterval(function() {
//     $('.section-one-container').slideUp();
// }, 2000);
