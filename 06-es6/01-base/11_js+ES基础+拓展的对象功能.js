/*ES5我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的。*/
function people01(name, age) {
    return {
        name: name,
        age: age
    };
}

/*键值对重名，ES6可以简写如下：*/
function people02(name, age) {
    return {
        name,
        age
    };
}

/*ES5为对象添加方法*/
const people03 = {
    name: 'lux',
    getName: function() {
        console.log(this.name)
    }
}
/*ES6通过省略冒号与 function 关键字，将这个语法变得更简洁*/
const people04 = {
    name: 'lux',
    getName () {
        console.log(this.name)
    }
}