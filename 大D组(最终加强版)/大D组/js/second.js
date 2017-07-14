/*
* @Author: Marte
* @Date:   2017-04-01 00:54:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-15 22:48:21
*/

'use strict';

//by楷羽
window.onload = function() {
    var circle = document.getElementById('circle');  //虚线圆
    var circlefinish = document.getElementById('circle-finish'); //实线圆
    var rightbox1 = document.getElementById('rightbox'); //右侧切换栏
    var startbox = document.getElementById('start-box'); //点击的整个区域
    var ShangHaiTxt = document.getElementById('shanghai-text');//点亮上海
    //灯的控制///
    var light1 = document.getElementById('lightwhole');
    var light1 =  document.getElementById('light-one');
    var light2 =  document.getElementById('light-two');
    var light3 =  document.getElementById('light-three');
    var light4 =  document.getElementById('light-four');
    var light5 =  document.getElementById('light-five');


    //让点击的区域淡入
    function ButtonAppear() {
        startbox.style.opacity = '1';
    }
    ButtonAppear();

    //点亮上海文字移入
    function TxtAppear() {
        ShangHaiTxt.style.transform = "translate(0px ,130%)";
    }
    TxtAppear();

    //添加'点亮上海'按钮的点击事件
    button.onclick = function() {

        circlefinish.style.opacity = '1'; //CSS控制延时8s后显示
        circle.style.transform = "rotate(36000deg)"; //虚线旋转
        setTimeout(function() {
            rightbox1.style.display = 'block'; //右侧切换栏出现
            rightbox1.style.opacity = '1';
        }, 1000);


        setTimeout( function() {
            circle.style.opacity = '0'; //虚线圆消失
        }, 8000)

        //点亮上海闪烁    //灯全部亮起来

        function Flashing() {
            ShangHaiTxt.style.animation =  ' flashing 2.5s ';
            //灯闪烁//
            setTimeout( function() {
            light1.style.animation = 'flashing 1.5s';
            }, 200)

            setTimeout( function() {
            light1.style.opacity = '1'; //灯点击1.6s后透明度变为1
            }, 1700)


            setTimeout( function() {
            light2.style.animation = 'flashing 1.5s';
            }, 100)
            setTimeout( function() {
            light2.style.opacity = '1'; //灯点击1.5s后透明度变为1
            }, 1500)

            setTimeout( function() {
            light3.style.animation = 'flashing 1.5s';
            }, 50)
            setTimeout( function() {
            light3.style.opacity = '1'; //灯点击1.5s后透明度变为1
            }, 1550)

            light4.style.animation = 'flashing 1.5s';
            setTimeout( function() {
            light4.style.opacity = '1'; //灯点击1.5s后透明度变为1
            }, 1500)

            setTimeout( function() {
            light5.style.animation = 'flashing 1.5s';
            }, 150)
            setTimeout( function() {
            light5.style.opacity = '1'; //灯点击1.5s后透明度变为1
            }, 1650)

        }
        Flashing();



    }


       /*切换导航栏*/
      var navBtn = document.getElementsByClassName('nav-button');
      var nav = document.getElementsByClassName('nav')[0];
      var icon = document.getElementsByClassName('icon')[0];
      navBtn[0].onclick = function() {
        nav.style.display = 'block';
        icon.style.display ='block';
      }
    //导航栏返回键//
    var returnbtn = document.getElementById('return-button');
    returnbtn.onclick = function() {
        nav.style.display = 'none';
        icon.style.display ='none';
    }


}//window.onload的右括号



