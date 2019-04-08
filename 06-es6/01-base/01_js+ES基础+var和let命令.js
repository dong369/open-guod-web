/*块级作用域
 * 在一个函数内部
 * 在一个代码块内部
 *
 * 注意：说白了{}大括号内的代码块即为let和const的作用域。
 * */

/*我们都是知道在ES6以前，var关键字声明变量。无论声明在何处，
都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。这就是函数变量提升*/
/*ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。*/
var a = 1;
let b = 2;
console.log("a:", a);
console.log("b:", b);
if (true) {
    var c = 1;
    let d = 2;
    const f = 3;
}

console.log("c:", c);
//console.log("d:", d);

var e = 1;

function foo01() {
    var e = 2;
}

foo01();
console.log("e:", e);

var f = 1;

function foo02() {
    if (false) {
        var f = 1;
    }
    console.log("f:", f);
}

foo02();

console.log("g:", g);
var g;

console.log("h:", h);
let h;