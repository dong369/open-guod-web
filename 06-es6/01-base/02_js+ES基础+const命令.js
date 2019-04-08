/**
 * const：定义常量，属于块级作用域
 * */
const LOVE_YOU = true;//可以是任意类型
// LOVE_YOU =false;不能改变
// const LOVE;必须有初始值
let user = {name: "guod", age: 22};
const YOU = user;
console.info(YOU);
user.age = 25;//对象的本身可以变
console.info(user);
// YOU={};