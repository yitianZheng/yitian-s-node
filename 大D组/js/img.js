
//by逸恬

//设置图片轮播
	var index=0; 
	//时间间隔 单位毫秒 
	var timeInterval=4000; 
	var arr=new Array(); 
	arr[0]="scenery2.jpg"; 
	arr[1]="scenery1.jpg"; 
	arr[2]="scenery3.jpg"; 

//设置定时器
	setInterval(changeImg,timeInterval); 
	
	function changeImg() { 
		var obj=document.getElementById("scenery"); 
		if (index==arr.length-1) { 
			index=0; 
		} 
		else { 
			index+=1; 
		} 
		obj.src="img/"+arr[index]; 
	} 
