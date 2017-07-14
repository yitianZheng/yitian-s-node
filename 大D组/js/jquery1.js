
//by逸恬

//将需要更换的图标图片批量存放
    var img1 = [
        "img/index.png",
        "img/passage-1.png",
        "img/passage-2.png",
        "img/passage-3.png",
        "img/passage-4.png",
        "img/报名表.png",
        "img/官网.png"
    ];

    var img2 = [
        "img/图片5.png",
        "img/图片2.png",
        "img/图片1.png",
        "img/图片6.png",
        "img/图片11.png",
        "img/图片3.png",
        "img/图片12.png"
    ];

//鼠标滑过出现导航栏、更换图片及背景变白色
$(document).ready(function(){
    $(".smallcircle0").hover(function(){
        $(".smallcircle0").css("background-color","white");
        $(".img0").attr("src",img1[0]);
        $(".navbox1").css("display","inline-block");
    },
    function(){
        $(".smallcircle0").css("background-color","transparent");
        $(".img0").attr("src",img2[0]);
        $(".navbox1").css("display","none");
    });

    $(".smallcircle1").hover(function(){
        $(".smallcircle1").css("background-color","white");
        $(".img1").attr("src",img1[1]);
        $(".navbox2").css("display","inline-block");
    },
    function(){
        $(".smallcircle1").css("background-color","transparent");
        $(".img1").attr("src",img2[1]);
        $(".navbox2").css("display","none");
    });

    $(".smallcircle2").hover(function(){
        $(".smallcircle2").css("background-color","white");
        $(".img2").attr("src",img1[2]);
        $(".navbox3").css("display","inline-block");
    },
    function(){
        $(".smallcircle2").css("background-color","transparent");
        $(".img2").attr("src",img2[2]);
        $(".navbox3").css("display","none");
    });

    $(".smallcircle3").hover(function(){
        $(".smallcircle3").css("background-color","white");
        $(".img3").attr("src",img1[3]);
        $(".navbox4").css("display","inline-block");
    },
    function(){
        $(".smallcircle3").css("background-color","transparent");
        $(".img3").attr("src",img2[3]);
        $(".navbox4").css("display","none");
    });

    $(".smallcircle4").hover(function(){
        $(".smallcircle4").css("background-color","white");
        $(".img4").attr("src",img1[4]);
        $(".navbox5").css("display","inline-block");
    },
    function(){
        $(".smallcircle4").css("background-color","transparent");
        $(".img4").attr("src",img2[4]);
        $(".navbox5").css("display","none");
    });

    $(".smallcircle5").hover(function(){
        $(".smallcircle5").css("background-color","white");
        $(".img5").attr("src",img1[5]);
        $(".navbox6").css("display","inline-block");
    },
    function(){
        $(".smallcircle5").css("background-color","transparent");
        $(".img5").attr("src",img2[5]);
        $(".navbox6").css("display","none");
    });

    $(".smallcircle6").hover(function(){
        $(".smallcircle6").css("background-color","white");
        $(".img6").attr("src",img1[6]);
        $(".navbox7").css("display","inline-block");
    },
    function(){
        $(".smallcircle6").css("background-color","transparent");
        $(".img6").attr("src",img2[6]);
        $(".navbox7").css("display","none");
    });
});
    





	
