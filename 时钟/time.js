//time.js

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var w = canvas.width;
	var h = canvas.height;
	var r = 280;
	var hourValue,minValue,secValue;
	function draw() {
		ctx.translate(w / 2, h / 3.5);
		ctx.lineWidth = "4"; 
		ctx.shadowOffsetX = 3; // 阴影X轴偏移
		ctx.shadowOffsetY = 8 ; // 阴影Y轴偏移
		ctx.shadowBlur = 30; // 模糊尺寸
		ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
	}
	draw();
	
	function time() {
		ctx.strokeStyle = "#EBF7FD";
		ctx.lineWidth = "4"; 
		ctx.shadowOffsetX = 3; // 阴影X轴偏移
		ctx.shadowOffsetY = 8 ; // 阴影Y轴偏移
		ctx.shadowBlur = 30; // 模糊尺寸
		ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 颜色
		
		//获取时间数据
 		var date = new Date();
 		var hour = date.getHours();
 		var min = date.getMinutes();
 		var sec = date.getSeconds();
 		var list = [];
 		list.push([hour,min,sec]);

 		//将时间转化为弧度
 		list.forEach( function(e, inx) {
 			hourValue = (-90+30*e[0]+e[1]/2)*Math.PI/180;
    		minValue = (-90+6*e[1])*Math.PI/180;
    		secValue = (-90+6*e[2])*Math.PI/180;
    	});	

		//表盘
		ctx.save();
		ctx.beginPath(); 
		ctx.arc(150, 150, 350, 0, 2 * Math.PI); 
		ctx.stroke();
		ctx.restore();

		// 绘制钟表的数字
		ctx.font = "40px 宋体";
        ctx.fillStyle = "#EBF7FD";
        ctx.fillText("12", 130, -100);
        ctx.fillText("3", 400, 165);
        ctx.fillText("6", 140, 425);
        ctx.fillText("9", -120, 165);

		 //小时刻度
  		ctx.save();
  		ctx.translate(150, 150);
  		for (var i = 0;i < 12; i++) { 
    		ctx.beginPath();
    		ctx.rotate(Math.PI/6);
    		ctx.moveTo(0,-350);
    		ctx.lineTo(0,-300);
    		ctx.stroke();
  		}
 		ctx.restore();

 		//分钟刻度
 		ctx.save();
 		ctx.translate(150, 150);
  		for (var i = 0;i < 60; i++) { 
    		ctx.beginPath();
    		ctx.rotate(6 / 180 * Math.PI);
    		ctx.moveTo(0,-350);
    		ctx.lineTo(0,-330);
    		ctx.stroke();
  		}
 		ctx.restore();	

 		//秒针
		ctx.save();
    	ctx.translate(150, 150);
 		ctx.lineWidth = "3"; 
 		ctx.strokeStyle = "red";
  		ctx.beginPath();
   	 	ctx.moveTo(0,0);
    	ctx.arc(0,0,r*1.05,secValue,secValue);
    	ctx.stroke();
		ctx.restore();
 		
 		//分针
 		ctx.save();
 		ctx.translate(150, 150);
 		ctx.lineWidth = "5"; 
 		ctx.strokeStyle = "white";
  		ctx.beginPath();
   	 	ctx.moveTo(0,0);
    	ctx.arc(0,0,r/1.05,minValue,minValue);
    	ctx.stroke();
    	ctx.restore();

 		//时针
		ctx.save();
 		ctx.translate(150, 150);
 		ctx.lineWidth = "8"; 
 		ctx.strokeStyle = "white";
  		ctx.beginPath();
   	 	ctx.moveTo(0,0);
    	ctx.arc(0,0,r/1.3,hourValue,hourValue);
    	ctx.stroke();
    	ctx.restore();

    	//圆点
		ctx.save();
		ctx.beginPath();
		ctx.arc(150, 150, 10, 0, 2 * Math.PI); 
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.restore();

	}
	time();

	//清除画布
	function clear() {
		ctx.clearRect(-600,-600,1200,1200);
	}
 	
 	//每一秒调用一次
 	setInterval(function(){
 		clear();
 		time();	

 	},1000);
} 	
  		
  	
  
  


