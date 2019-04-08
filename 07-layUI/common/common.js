// 01方法：layui.config(options);全局配置
layui.config({
    // 设定扩展的Layui模块的所在目录，一般用于外部模块扩展
    base: '../model/'
}).extend({
    test01: 'test01'
}).use(['test01', 'layer'], function () {
    var test01 = layui.test01,
        layer = layui.layer;
});