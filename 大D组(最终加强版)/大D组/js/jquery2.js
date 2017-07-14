
//by逸恬

//报名表滚动效果
$(document).ready(function(){
	$("#id_submit1").click(function(){
    	alert("您已成功提交信息！");
    	$('.name').css("display","none");
    	$('.gender').css("display","none");
    	$('.telephone').addClass("add1");
    	$('.number').addClass("add2");
    	$('#id_submit1').css("display","none");
    	$('#id_submit2').css("top","0");	
	})	
	$("#id_submit2").click(function(){
    	alert("您已成功提交信息！");
    	$('.telephone').css("display","none");
    	$('.number').css("display","none");
    	$('.address').addClass("add1");
    	$('.home').addClass("add2");
    	$('#id_submit2').css("display","none");
    	$('#id_submit3').css("top","0");
    })
    $("#id_submit3").click(function(){
    	alert("您已成功提交所有信息！");
    	$('.address').css("display","none");
    	$('.home').css("display","none");
    	$('.all').css("display","block!important");
    })
})


/*var option = click();
if (option===0) 
$('#id_submit2').css("width":"120px","height":"120px","opacity":"0");
	
});
/*
    	/*$('.telephone').css("-webkit-animation-name":"ease-in2",
							"-webkit-animation-duration":"1s",
							"-webkit-animation-timing-function":"linear",
							"-webkit-animation-delay":"0s");
    	$('.number').css("-webkit-animation-name":"ease-in1",
						 "-webkit-animation-duration":"1s",
						 "-webkit-animation-timing-function":"linear",
						 "-webkit-animation-delay":"0s");*/
    





	
