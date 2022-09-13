/*!
* Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(function (){
	$("#btn_toggle").click(function (){
  	$("#divToggle").toggle();
  });
});

function copyFunction1() {
    text = "3020642167271";
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert("계좌번호가 복사되었습니다");
}

function copyFunction2() {
    text = "123458790";
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
//    navigator.clipboard.writeText("123458790");
    alert("계좌번호가 복사되었습니다");
}


function copyFunction3() {
    text = "3565917591703";
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert("계좌번호가 복사되었습니다");
}

