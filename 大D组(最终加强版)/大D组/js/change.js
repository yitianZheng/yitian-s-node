  //导航栏出现效果
  $(document).ready(function(){
  $(".img2").click(function(){
    $(".container3").css("background-image","url(img/模糊.png)");
    $(".painting").css("visibility","hidden");
    $(".drawer").css("display","block");
    $(".back").css("opacity","1");
    $("#righttext").css("display","none");
  });
	 /*切换导航栏*/
      var navBtn = document.getElementsByClassName('nav-button');
      var nav = document.getElementsByClassName('nav')[0];
      var icon = document.getElementsByClassName('icon')[0];
      var painting = document.getElementsByClassName('painting')[0];
      var righttext = document.getElementById('righttext');
      navBtn[0].onclick = function() {
        nav.style.display = 'block';
        icon.style.display ='block';
        painting.style.display = 'none';
        righttext.style.display = 'none';
      }
    //导航栏返回键//
    var returnbtn = document.getElementById('return-button');
    returnbtn.onclick = function() {
        nav.style.display = 'none';
        icon.style.display ='none';
        righttext.style.display = 'block';
        painting.style.display = 'block';
    }



})