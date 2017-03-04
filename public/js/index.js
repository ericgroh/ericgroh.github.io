function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(window).scroll(
  function() {

    var top = 0;
    top = $(window).scrollTop();

    if(top < 979){
     $("a[href='#header']").parent().addClass("current");
     $("a[href='#header']").parent().siblings().removeClass("current");
    }

   if((top >= 979) && (top < 1958)){
     $("a[href='#about']").parent().addClass("current");
     $("a[href='#about']").parent().siblings().removeClass("current");
    }

   if((top >= 1958) && (top < 2937)){
     $("a[href='#experience']").parent().addClass("current");
     $("a[href='#experience']").parent().siblings().removeClass("current");
   }

    if((top >= 2937) && (top < 3916)){
      $("a[href='#contact']").parent().addClass("current");
      $("a[href='#contact']").parent().siblings().removeClass("current");
    }
  }
);

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


// var header = $('#header').offset().top,
// var about = $('#about').offset().top,
// var experience = $('#experience').offset().top,
// var contact = $('#contact').offset().top,
//
//     $window = $(window);
//
// $window.scroll(function() {
//     if ( $window.scrollTop() >= distance ) {
//         // Your div has reached the top
//     }
// });
