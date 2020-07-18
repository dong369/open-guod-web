layui.use(['jquery', 'table', 'laydate', 'layer', 'form'], function () {
    // 声明使用模块
    var table = layui.table,
        laydate = layui.laydate,
        layer = layui.layer,
        form = layui.form,
        $ = layui.jquery;
    // 页面日期格式
    laydate.render({
        elem: '#startDate',
        type: 'month'
    });
    laydate.render({
        elem: '#birthday',
        type: 'datetime'
    });
    // 表格数据
    table.render({
        id: 'tableId',
        elem: '#demo',
        // 01数据接口
        url: 'http://localhost:11601/getStudyAll',
        method: "post",
        // 02用于对分页请求的参数：page、limit重新设定名称 
        request: {
            pageName: 'page',
            limitName: 'rows'
        },
        // 03重新规定返回的数据格式（根据后台返回格式定）
        response: {
            dataName: 'dataRows',
            statusCode: '200',
            countName: 'total'
        },
        where: {
            sort: "createTime",
            order: 'desc'
        },
        // 开启分页
        page: true,
        cols: [
            [{
                field: 'id',
                title: 'ID',
                fixed: 'left',
                type: 'checkbox',
            }, {
                field: 'name',
                title: '姓名',

            }, {
                field: 'age',
                title: '年龄',
            }, {
                field: 'sex',
                title: '性别',

            }, {
                field: 'city',
                title: '城市',
            }, {
                field: 'birthday',
                title: '生日',
            }, {
                field: 'createTime',
                title: '创建时间',

            }, {
                field: 'updateTime',
                title: '修改时间',

            }, {
                field: 'status',
                title: '状态',
                templet: function (data) {
                    if (data.status == 1) {
                        return "正常";
                    } else {
                        return "刪除";
                    }
                }

            }, {
                field: 'delete01',
                title: '删除',

            }, {
                field: 'score',
                title: '操作方式01',
                toolbar: '#toolbarDemo',
                width: 220
            }, {
                field: 'operate',
                title: '操作方式02',
                width: 180,
                unresize: true,
                templet: function (value) {
                    var options = [];
                    options.push('<a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="edit" style="background: #01AAED;width: 70px;height:40px;line-height:28px;display: inline-block;color: #ffffff;">修改</a>');
                    options.push('<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del" style="background: #f7482c;width: 70px;height:40px;line-height:28px;display: inline-block;">删除</a>');
                    return options.join("");
                }
            }]
        ],
        //数据加载后回调
        parseData: function (res) {
            return res;
        },
        onClickRow: function (index, o) {
            alert();
            console.log(index, o, "单击！");
        },
        onDblClickRow: function (index, o) {
            console.log(index, o, "双击");
        }
    });

    // 操作按钮事件
    table.on('tool(tableEvent)', function (obj) {
        var data = obj.data;
        if (obj.event === 'update') {
            //编辑
            layer.open({
                type: 1,
                area: ['700px', '480px'],
                content: $('.updatecenter'),
                title: ['编辑用户', 'font-size:18px;'],
                shade: [0.8, '#393D49'],
                scrollbar: false,
                success: function () {
                    form.val("eideFilter", data)
                }
            });
        }
    })

    // 添加用户提交
    form.on('submit(addSave)', function (data) {
        $.ajax({
            url: "http://localhost:11601/doSave",
            type: "post",
            data: JSON.stringify(data.field),
            dataType: "JSON",
            contentType: "application/json",
            success: function (res) {
                if (res.success) {
                    table.reload("tableId", {
                        page: {
                            curr: 1
                        }
                    });
                    layer.closeAll();
                    layer.msg(res.message);
                } else {
                    layer.closeAll();
                    layer.alert(res.message, {
                        icon: 5
                    });
                }
            },
            error: function () {
                alert("失败");
            }
        });
        layer.closeAll();

    });

    //筛选搜索提交
    form.on('submit(formDemo)', function (data) {
        var reloadParam = data.field;
        // 修改
        reloadParam.rows = 100;
        table.reload("tableId", {
            page: {
                curr: 1
            },
            where: reloadParam
        });
    });

    // 填充对应的select数据
    function doSelect() {
        admin.ajax({
            url: config.base_server + "user/list",
            type: "post",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var adminData = data.rows;
                $.each(adminData, function (index, data) {
                    var deptOption = $("<option value='" + data.id + "'>" + data.nickName + "</option>");
                    $(".selectAdmin").append(deptOption);
                });
                form.render("select");
            },
        });
    }

    //添加用户弹框
    $('.addbutt button:nth-child(1)').click(function () {
        layer.open({
            type: 1,
            area: ['700px', '480px'],
            content: $('.addcenter'),
            title: ['添加用户', 'font-size:18px;'],
            shade: [0.8, '#393D49'],
            scrollbar: false,
        });
        reset();
    });

    //关闭弹框
    $('.close').click(function () {
        layer.closeAll();
    });

    // 重置按钮
    function reset() {
        $('input[name="username"]').val('');
        $('input[name="nickName"]').val('');
        $('input[name="jobnumber"]').val('');
        $('input[name="password"]').val('');
        $('input[name="phone"]').val('');
    }

    // 批量删除操作
    function delete01() {
        var checkStatus = table.checkStatus('tableId');
        if (checkStatus.data.length == 0) {
            parent.layer.msg('请先选择要删除的数据行！', {
                icon: 2
            });
            return;
        }
        // 方式01
        idsArr = [];
        data.forEach(function (n, i) {
            idsArr.push(n.id);
        })
        // 方式02
        var ids = "";
        for (var i = 0; i < checkStatus.data.length; i++) {
            ids += checkStatus.data[i].id + ",";
        }
        layer.msg('删除中...', {
            icon: 16,
            shade: 0.3,
            time: 5000
        });
        $.post('url', {
                'ids': ids
            },
            function (data) {
                layer.closeAll('loading');
                if (data.code == 1) {
                    parent.layer.msg('删除成功！', {
                        icon: 1,
                        time: 2000,
                        shade: 0.2
                    });
                    location.reload(true);
                } else {
                    parent.layer.msg('删除失败！', {
                        icon: 2,
                        time: 3000,
                        shade: 0.2
                    });
                }
            }
        );
    }

});