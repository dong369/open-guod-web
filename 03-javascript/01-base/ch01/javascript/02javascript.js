/* 关键字：JS、事件、属性、函数、重用、变量 */
var div01 = document.getElementById("div01");
var div02 = document.getElementById("div02");
div01.onmouseover = function () {
    div02.style.display = 'block';
}
div01.onmouseout = function () {
    div02.style.display = 'none';
}