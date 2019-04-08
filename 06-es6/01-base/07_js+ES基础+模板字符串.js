/*第一个用途，基本的字符串格式化。将表达式嵌入字符串中进行拼接。用${}来界定。*/
//es5
var namees5 = 'lux'
console.log('hello' + namees5)
//es6
const namees6 = 'lux'
console.log(`hello ${namees6}`) //hello lux
/*第二个用途，在ES5时我们通过反斜杠(\)来做多行字符串或者字符串一行行拼接。ES6反引号(``)直接搞定。*/


// es5
var msg = "<div>" +
    "<span>" +
    "<p>java</p>"
"</span>"
"</div>"
// es6
const template =
    `<div>
        <span>
            <p>hello world</p>
        </span>
    </div>`

console.info(msg);
console.info(template);