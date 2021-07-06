var loader = document.getElementById("preloader");

if (sessionStorage.getItem("pageLoaded") !== "yes") {
    $(document).ready(function () {
      loader.style.display = 'flex';
      setTimeout("showPage()", 2000);
    });

} else {
  $("#home").show();
  $("nav").show().css('display', 'flex');
  $("#about-me").show().css("display", "flex");
  $("#portfolio").show().css("display", "flex");
  $("#contact").show().css("display", "flex");
}


function showPage() {
  loader.style.opacity = "0";
  setTimeout('loader.style.display="none"', 350);

  $("#home").show();
  $("nav").show().css('display', 'flex');
  $("#about-me").show().css("display", "flex");
  $("#portfolio").show().css("display", "flex");
  $("#contact").show().css("display", "flex");

  sessionStorage.setItem("pageLoaded", "yes");
}

$("#toggler-button").click(function () {
  $("#nav-menu").toggleClass('navbar-open');
  $("#toggler-button").toggleClass("open");
  $("#page-mask").toggleClass("active");
  $('#nav-menu').toggleClass('cursor-pointer');
  $('body').toggleClass('over-hidden');
});

$('#page-mask').click(function () {
  $("#nav-menu").toggleClass('navbar-open');
  $("#toggler-button").toggleClass("open");
  $("#page-mask").toggleClass("active");
  $('#nav-menu').toggleClass('cursor-pointer');
  $('body').toggleClass('over-hidden');
});
$('#nav-menu').click(function () {
  if ($('#nav-menu').hasClass('navbar-open') === false) {
    $("#nav-menu").toggleClass('navbar-open');
    $("#toggler-button").toggleClass("open");
    $("#page-mask").toggleClass("active");
    $('#nav-menu').toggleClass('cursor-pointer');
    $('body').toggleClass('over-hidden');
  }
});