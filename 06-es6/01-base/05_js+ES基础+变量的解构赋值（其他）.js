var len = "guo".length;
console.info(len);
var lenLet = "sun";
let {length} = lenLet;
console.info(length);
/*解构字符串*/
let [a, b, c] = "guo";
console.info(a);

var arr = [1, 2];

function test([a, b]) {
    console.info(a);
    console.info(b);
}

test(arr);

var obj = {c: 3, d: 4};

function test02({c, d}) {
    console.info(c);
    console.info(d);
}

test02(obj);