var a = function () {
    alert();
}
a();

/*01_函数默认参数*/
function action01(num) {
    num = num || 200
    //当传入num时，num为传入的值
    //当没传入参数时，num即有了默认值200
    return num
}

console.info(action01());
console.info(action01(0));
console.info(action01(300));

function action02(num = 200) {
    return num;
}

console.info(action02());
console.info(action02(0));
console.info(action02(300));

/*02_箭头函数*/
// 箭头函数最直观的三个特点：不需要function关键字来创建函数；省略return关键字；继承当前上下文的 this 关键字

//参数name就没有括号
var people = name => 'hello' + name

alert(people("guod"));

//如果缺少()或者{}就会报错
var people = (name, age) => {
    const fullName = 'h' + name + age
    return fullName
}

alert(people("guod", 22));