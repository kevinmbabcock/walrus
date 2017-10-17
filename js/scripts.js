$(function() {
  $("#clickTheText").click(function() {
    $(".button").show();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $(".first").fadeIn();
    $(".text").fadeIn();
    $(".text #newText").hide();
    $(".second").show();
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $(".first").fadeIn();
    $(".text").fadeIn();
    $(".text #newText").hide();
    $(".second").show();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $(".first").fadeIn();
    $(".text").fadeIn();
    $(".text #newText").hide();
    $(".second").show();
  });

  $(".first .clickable").click(function() {
    //$(".first").hide();
    $(".text #oldText").toggle();
    $(".text #newText").toggle();
    $("second").show();
  });

  $(".returnMain").click(function() {
    $("body").removeClass();
    $(".button").hide();
    $(".text").slideUp();
    $(".first").slideUp();
    $(".second").slideUp();
  });

  $("#shark").click(function() {
    $(".sharkPic").slideToggle();
  });

});
