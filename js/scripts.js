$(document).ready(function() {

  $(".btn-jumbotron").click(function (e) {
    e.preventDefault();
    $(".navbar").attr("data-state", "visible").hide().fadeIn(2500);
    $(".jumbotron").fadeOut(800);
  });

$('.github-container').css('display', 'none');
$('.github-container').fadeIn(1500);
$('.dropdown-menu > li').click(function() {
  event.preventDefault();
  newLocation = this.href;
  $('.github-container').fadeOut(800, newpage);
});

function newpage() {
  window.location = newLocation;
}

});







