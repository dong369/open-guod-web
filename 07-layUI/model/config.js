/**
 方法：layui.define([mods], callback),定义模块;扩展一个config模块;提示：模块也可以依赖其它模块，如：layui.define('layer', callback)
 **/

layui.define(function (exports) {
    var config = {
        // 01全局常量
        baseService: "http://localhost:11601",
        // 存储表名
        tableName: 'sbweb',
        // 02token
        putToken: function (token) {
            layui.data(config.tableName, {
                key: 'token',
                value: JSON.stringify(token)
            });
        },
        // 清除token
        removeToken: function () {
            layui.data(config.tableName, {
                key: 'token',
                remove: true
            });
        },
        // 获取缓存的token
        getToken: function () {
            var t = layui.data(config.tableName).token;
            if (t) {
                return JSON.parse(t);
            }
        },
        // 03获取设备
        getDevice: function () {
            var device = layui.device();
            return device;
        }

    };
    // 输出config接口
    exports('config', config);
});