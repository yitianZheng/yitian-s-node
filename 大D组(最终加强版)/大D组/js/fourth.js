/*
* @Author: Marte
* @Date:   2017-04-11 16:34:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-15 21:51:31
*/

//by楷羽

'use strict';
window.onload = function() {
    var fuzzythird = document.getElementById('fuzzy-third');
    var fuzzyfourth = document.getElementById('fuzzy-fourth');
    var dreambox = document.getElementById('dream-box');
    var realtybox = document.getElementById('realty-box');
    var mask = document.getElementById('mask');

     setTimeout(function() {
            fuzzythird.style.display = 'none';
            fuzzyfourth.style.display = 'block';
        }, 5000);
     setTimeout(function() {

            fuzzyfourth.style.display = 'none';
            dreambox.style.display = 'block';
        }, 10500);

     setTimeout(function() {

           mask.style.display = 'none';
        }, 13000);

     dreambox.onclick = function() {
        dreambox.style.animation = 'dreamboxmove 3s' ;
        setTimeout(function() {
            dreambox.style.display = 'none';
        }, 3000);

         setTimeout(function() {
            realtybox.style.display = 'block';
            realtybox.style.animation =  'boxmove 3s' ;
        }, 0);

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

}