$(function() {
  $("#clickTheText").click(function() {
    $(".button").show();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $(".first").show();
    $(".text").show();
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $(".first").show();
    $(".text").show();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $(".first").show();
    $(".text").show();
  });

  $(".clickable").click(function() {
    $(".first").hide();
    $(".second").show();
  });

  $(".second .clickable").click(function() {
    $("body").removeClass();
    $(".button").hide();
    $(".text").hide();
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
  });

  $("#shark").click(function() {
    $(".third").slideToggle();
  });


});
