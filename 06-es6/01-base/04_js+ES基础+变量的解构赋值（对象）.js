/*变量的析构赋值（数组）.js*/
var obj = {
    a: 1,
    b: 2
}
let {a: A, b: b} = obj;
let a = 12;
({a, b} = obj);
console.info(A);


var object = {
    arr: [
        'Yo.',
        {
            c: 1
        }
    ]
}

let {arr: [greet, {c}]} = object;
console.info(c);


let res = {
    status: 200,
    id: 12,
    data: [{name: 'guod'}, {name: 'sun'}]
}

let {status, id, data} = res;
console.info(data);

let {floor, pow} = Math;
let d = 1.2;
console.info(floor(d));