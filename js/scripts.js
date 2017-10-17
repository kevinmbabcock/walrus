$(function() {
  $("#clickTheText").click(function() {
    $(".text").show();
    $(".first").show();
  })

  $(".clickable").click(function() {
    $(".first").hide();
    $(".second").show();
  });

  $(".second .clickable").click(function() {
    $(".text").hide();
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
  })

  $(".shark").click(function() {
    $(".third").slideToggle();
  })


});
