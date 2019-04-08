var siteId = '4b3b6104-77fd-4126-b089-a8c5e05bf9e2';
var ctx = "/zhyw";

var ext = ext || {};

// 封装的AJAX，写了默认的几个值和错误类型
ext.ajax = function (options) {
    var myOptions = {
        type: "POST",
        dataType: 'JSON',
        headers: {
            token: _getToken()
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status == '403') {
                window.top.$.messager.alert("错误", '登陆失败,未登陆或者登陆超时!', 'error', function () {
                    //window.top.location.href = ctx + '/page/login.html';
                });
            } else {
                window.top.$.messager.alert('错误:', XMLHttpRequest.responseText);
            }
            this; // 调用本次AJAX请求时传递的options参数
        }
    }
    options = $.extend(myOptions, options);
    $.ajax(options);
}

function _getToken() {
    var token = sessionStorage.getItem(siteId);
    if (token != null) {
        return token;
    }
    return localStorage.getItem(siteId);
}

function _removeToken() {
    sessionStorage.removeItem(siteId);
    localStorage.removeItem(siteId);
}

$.ajaxSetup({
    headers: {
        token: _getToken()
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        msg = $.parseJSON(XMLHttpRequest.responseText);
        if (XMLHttpRequest.status == '403') {
            window.top.$.messager.alert("错误", msg.message, 'error', function () {});
        } else {
            window.top.$.messager.alert('错误:', msg.message);
        }
        // 通常 textStatus 和 errorThrown 之中
        // 只有一个会包含信息
        // 调用本次AJAX请求时传递的options参数
        this;
    }
});