function openResume() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function submitForm() {
  var form = document.getElementById("form");
  form.submit();
  form.reset();
}

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

$(window).scroll(
  function() {

    var top = 0;
    top = $(window).scrollTop();

    if(top < 979){
     $("a[href='#header']").parent().addClass("active");
     $("a[href='#header']").parent().siblings().removeClass("active");
    }

   if((top >= 979) && (top < 1958)){
     $("a[href='#about']").parent().addClass("active");
     $("a[href='#about']").parent().siblings().removeClass("active");
    }

   if((top >= 1958) && (top < 2937)){
     $("a[href='#experience']").parent().addClass("active");
     $("a[href='#experience']").parent().siblings().removeClass("active");
   }

    if((top >= 2937) && (top < 3900)){
      $("a[href='#projects']").parent().addClass("active");
      $("a[href='#projects']").parent().siblings().removeClass("active");
    }

    if((top >= 3900) && (top < 4895)){
      $("a[href='#contact']").parent().addClass("active");
      $("a[href='#contact']").parent().siblings().removeClass("active");
    }
  }
);

$(document).ready(function(){
  $('.your-class').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
