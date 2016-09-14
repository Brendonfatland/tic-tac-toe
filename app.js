$(document).ready( function() {
hideAllXAndO();

});

var hideAllXAndO = function(){
  $(".x1").hide();
  $(".os1").hide();
  $(".x2").hide();
  $(".os2").hide();
  $(".x3").hide();
  $(".os3").hide();
  $(".x4").hide();
  $(".os4").hide();
  $(".x5").hide();
  $(".os5").hide();
  $(".x6").hide();
  $(".os6").hide();
  $(".x7").hide();
  $(".os7").hide();
  $(".x8").hide();
  $(".os8").hide();
  $(".x9").hide();
  $(".os9").hide();
}

var showBlanksForReset = function(){
  $(".blank1").show();
  $(".blank2").show();
  $(".blank3").show();
  $(".blank4").show();
  $(".blank5").show();
  $(".blank6").show();
  $(".blank7").show();
  $(".blank8").show();
  $(".blank9").show();
}

$(".resetGame").click(function(){
showBlanksForReset();
hideAllXAndO();
});

$(".xoPic1").click(function(e){
  if ($(".blank1").is(':visible')){
    $(".x1").show();
    $(".blank1").hide();
  }

  else if ($(".x1").is(':visible')){
    $(".os1").show();
    $(".x1").hide();
  }
  else if ($(".os1").is(':visible')){
    $(".blank1").show();
    $(".os1").hide();
  }
});

$(".xoPic2").click(function(e){
  if ($(".blank2").is(':visible')){
    $(".x2").show();
    $(".blank2").hide();
  }

  else if ($(".x2").is(':visible')){
    $(".os2").show();
    $(".x2").hide();
  }
  else if ($(".os2").is(':visible')){
    $(".blank2").show();
    $(".os2").hide();
  }
});

$(".xoPic3").click(function(e){
  if ($(".blank3").is(':visible')){
    $(".x3").show();
    $(".blank3").hide();
  }

  else if ($(".x3").is(':visible')){
    $(".os3").show();
    $(".x3").hide();
  }
  else if ($(".os3").is(':visible')){
    $(".blank3").show();
    $(".os3").hide();
  }
});

$(".xoPic4").click(function(e){
  if ($(".blank4").is(':visible')){
    $(".x4").show();
    $(".blank4").hide();
  }

  else if ($(".x4").is(':visible')){
    $(".os4").show();
    $(".x4").hide();
  }
  else if ($(".os4").is(':visible')){
    $(".blank4").show();
    $(".os4").hide();
  }
});

$(".xoPic5").click(function(e){
  if ($(".blank5").is(':visible')){
    $(".x5").show();
    $(".blank5").hide();
  }

  else if ($(".x5").is(':visible')){
    $(".os5").show();
    $(".x5").hide();
  }
  else if ($(".os5").is(':visible')){
    $(".blank5").show();
    $(".os5").hide();
  }
});

$(".xoPic6").click(function(e){
  if ($(".blank6").is(':visible')){
    $(".x6").show();
    $(".blank6").hide();
  }

  else if ($(".x6").is(':visible')){
    $(".os6").show();
    $(".x6").hide();
  }
  else if ($(".os6").is(':visible')){
    $(".blank6").show();
    $(".os6").hide();
  }
});

$(".xoPic7").click(function(e){
  if ($(".blank7").is(':visible')){
    $(".x7").show();
    $(".blank7").hide();
  }

  else if ($(".x7").is(':visible')){
    $(".os7").show();
    $(".x7").hide();
  }
  else if ($(".os7").is(':visible')){
    $(".blank7").show();
    $(".os7").hide();
  }
});

$(".xoPic8").click(function(e){
  if ($(".blank8").is(':visible')){
    $(".x8").show();
    $(".blank8").hide();
  }

  else if ($(".x8").is(':visible')){
    $(".os8").show();
    $(".x8").hide();
  }
  else if ($(".os8").is(':visible')){
    $(".blank8").show();
    $(".os8").hide();
  }
});

$(".xoPic9").click(function(e){
  if ($(".blank9").is(':visible')){
    $(".x9").show();
    $(".blank9").hide();
  }

  else if ($(".x9").is(':visible')){
    $(".os9").show();
    $(".x9").hide();
  }
  else if ($(".os9").is(':visible')){
    $(".blank9").show();
    $(".os9").hide();
  }
});
