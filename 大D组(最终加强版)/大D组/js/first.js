/*
* @Author: Marte
* @Date:   2017-04-06 14:50:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-14 09:48:54
*/

//by楷羽

'use strict';
window.onload = function() {
    /*切换导航栏*/
      var navBtn = document.getElementsByClassName('nav-button');
      var nav = document.getElementsByClassName('nav')[0];
      var icon = document.getElementsByClassName('icon')[0];
      var hidden = document.getElementsByClassName('check')[0]
      navBtn[0].onclick = function() {
        nav.style.display = 'block';
        icon.style.display ='block';
        hidden.style.display ='none';
      }

       //导航栏返回键//
    var returnbtn = document.getElementById('return-button');
    returnbtn.onclick = function() {
        nav.style.display = 'none';
        icon.style.display ='none';
        hidden.style.display ='block';
    }

}