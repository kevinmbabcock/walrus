$(function() {
  $(".clickable").click(function() {
    $(".first").hide();
    $(".second").show();
  });

  $(".second .clickable").click(function() {
    $(".first").show();
    $(".second").hide();
    $(".third").hide();
  })

  $(".shark").click(function() {
    $(".third").slideToggle();
  })


});
