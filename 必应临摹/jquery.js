$(document).ready(function(){
  $("#share .next").click(function(){
    $(".box .container").css("background-image","url(images/2.jpg)"); 
    $(".box .container").css("background-image","url(images/3.jpg)"); 
    $(".box .container").css("background-image","url(images/4.jpg)");  
  });
  $(".stop").click(function () {
	$(".box .container").stop(true,false);
  })
  $(".list").click(function(){
    $(".get").slideToggle("slow");
  });
  $(".show").click(function(){
    $(".menu").slideToggle("slow");
  });
});

