/*数组变量的结构赋值：索引很重要*/
var a = 1;
var b = 2;
var c = 3;

var d = 4, e = 5, f = 6;

var [g, h, i] = [7, 8, 9];

var [j, l] = [7, 8, 9];

var [m, ...n] = [7, 8, 9];

var arr = [1, 2, 3];

var [o, p, q = 1] = arr;

let [w, y, z] = [1, 2];

if(typeof  arr[2 == 'undefined']){
    var c = undefined;
}

