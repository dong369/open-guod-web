/**
  扩展一个test01模块
**/

layui.define(function (exports) {
    var obj = {
        // 01全局常量
        baseService: "http://localhost:8888",
        // 02全局方法
        hello: function (str) {
            alert('Hello ' + (str || 'mymod'));
        }
    };

    // 输出config接口
    exports('test01', obj);
});