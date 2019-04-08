defautDate()

function loadOneColumn(result) {
    var myChart = echarts.init(document.getElementById('box'));
    var estimCost = [];
    var projProfit = [];
    var actualCost = [];
    myChart.setOption({
        color: ["#C7CEB2", "#ff0000", "#00FF004"],
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['项目预算', '项目支出', '项目收入']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                onGap: false
            },
            splitLine: {
                show: false
            },
            data: [],
            name: '统计月份'
        },
        yAxis: {
            boundaryGap: false,
            splitLine: {
                show: false
            },
            type: 'value',
            data: [],
            name: '万元'
        },
        series: [{
                stack: '总量',
                symbol: 'none', //这句就是去掉点的  
                name: '项目预算',
                type: 'line',
                color: ['#5F9DD6'],
                data: []
            },
            {
                symbol: 'none', //这句就是去掉点的  
                name: '项目支出',
                type: 'line',
                color: ['#ED7F35'],
                data: []
            },
            {
                symbol: 'none', //这句就是去掉点的  
                name: '项目收入',
                type: 'line',
                color: ['#A9A9A9'],
                data: []
            }
        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'black'
                }
            }
        }
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    myChart.showLoading();
    var names = [];

    /* 循环获取数据 */
    $.each(result, function (index, item) {
        // 挨个取出类别并填入类别数组
        names.push(item.year);
        estimCost.push(item.estimCost);
        projProfit.push(item.projProfit);
        actualCost.push(item.actualCost);
    });

    /* 数据加载条 */
    myChart.hideLoading();

    /* 加载数据图表 */
    myChart.setOption({
        xAxis: {
            data: names
        },
        series: [{
                data: estimCost
            },
            {
                data: projProfit
            },
            {
                data: actualCost
            }
        ]
    });
};
/* 获取数据请求的ajax */
function defautDate() {
    var dataObjec = {
        userId: 'userId',
        projType: 'projType',
        year: 'year' + ''
    };
    $.ajax({
        type: 'get',
        url: "/03-javascript/echarts/countJson.json",
        headers: {
            token: 'token'
        },
        // contentType: "application/json",
        data: JSON.stringify(dataObjec),
        success: function (result) {
            if (result.success) {
                console.log(result.map);
                loadOneColumn(result.map);
            }
        }
    })
}