$(window).load(function () {
    $(".loading").fadeOut()
})

/****/
/****/
$(document).ready(function () {
    var whei = $(window).width()
    $("html").css({fontSize: whei / 20})
    $(window).resize(function () {
        var whei = $(window).width()
        $("html").css({fontSize: whei / 20})
    });
});

$(function () {

    echarts_1();
    echarts_2();
    echarts_3();
    echarts_11();
    echarts_boxplot1();
    echarts_boxplot2();

    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                formatter: '{b}日	:<br/> 生产情况{c}'
            },

            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                data: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00']
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    show: false,

                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '生产情况',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(98, 201, 141, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(98, 201, 141, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4cb9cf',
                        borderColor: 'rgba(98, 201, 141,0.27)',
                        borderWidth: 12
                    }
                },
                data: [56, 34, 70, 54, 67, 40]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        option = {
            tooltip: {
                trigger: 'axis'
            },
            radar: {
                indicator: [{
                    name: '开料',
                    max: 100,
                    num: 60,
                }, {
                    name: '仓库',
                    max: 100,
                    num: 33,
                }, {
                    name: '包装',
                    max: 100,
                    num: 10,
                }, {
                    name: '分拣',
                    max: 100,
                    num: 50,
                }, {
                    name: '排钻',
                    max: 100,
                    num: 100,
                }, {
                    name: '封边',
                    max: 100,
                    num: 100,
                }],
                splitNumber: 4,
                nameGap: 0,
                axisLine: { //指向外圈文本的分隔线样式
                    lineStyle: {
                        color: '#2c353d'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#2c353d'],
                        width: 1
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['transparent']
                    }
                },
                name: {
                    color: 'rgba(255,255,255,.8)',

                },
            },
            series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#096e32',
                        borderColor: '#46ff91'
                    }
                },
                areaStyle: {
                    color: ['#096e32'],
                    opacity: 0.4
                },
                data: [{
                    value: [60, 33, 10, 50, 80, 100],
                }]
            },]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                formatter: '{b}:<br/> 产量统计{c}'
            },

            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                data: ['1日', '2日', '3日', '4日', '5日', '6日']
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    show: false,

                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '产量统计',
                type: 'line',
                //smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                //showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(98, 201, 141, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(98, 201, 141, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4cb9cf',
                        borderColor: 'rgba(98, 201, 141,0.27)',
                        borderWidth: 12
                    }
                },
                data: [3, 8, 5, 6, 1, 4]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_11() {
        var myChart = echarts.init(document.getElementById('echart11'));
        option = {
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                formatter: '{b}日	:<br/> 生产情况{c}'
            },

            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                data: ['10.2', '10.3', '10.4', '10.5', '10.6', '10.7']
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    show: false,

                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '生产情况',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(98, 201, 141, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(98, 201, 141, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4cb9cf',
                        borderColor: 'rgba(98, 201, 141,0.27)',
                        borderWidth: 12
                    }
                },
                data: [91, 60, 70, 54, 80, 40]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_boxplot1() {
        // 基于准备好的dom，初始化echarts实例

        var myChart = echarts.init(document.getElementById('echart12'));

        // 指定图表的配置项和数据
        var option = {
            // color: ["#007FFF", "#F5A623", "#B620E0", "#F11455"],
            title: [
                {
                    // text: 'xxxx箱型对比图',
                    // left: 'center'
                },
                {
                    // text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                    // borderColor: '#398b69',
                    // borderWidth: 1,
                    // textStyle: {
                    //     fontWeight: 'normal',
                    //     fontSize: 14,
                    //     lineHeight: 20
                    // },
                    // left: '10%',
                    // top: '90%'
                }
            ],
            dataset: [
                {
                    // prettier-ignore
                    source: [
                        [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                        // [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                        // [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                        // [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                        [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
                    ]
                },
                {
                    transform: {
                        type: 'boxplot',
                        config: {itemNameFormatter: '炉料类别 {value}'}
                    }
                },
                {
                    fromDatasetIndex: 1,
                    fromTransformResult: 1
                }
            ],
            tooltip: {
                // trigger: 'item',
                // axisPointer: {
                //     type: 'shadow'
                // }
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: '数值',
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#b6b6b6'
                    }
                },

                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#7c7c7c',
                    },
                },


            },
            series: [
                {
                    name: 'boxplot',
                    type: 'boxplot',
                    datasetIndex: 1
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    datasetIndex: 2
                }
            ]

        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    function echarts_boxplot2() {
        // 基于准备好的dom，初始化echarts实例

        var myChart = echarts.init(document.getElementById('echart13'));

        // 指定图表的配置项和数据
        var option = {
            // color: ["#007FFF", "#F5A623", "#B620E0", "#F11455"],
            title: [
                {
                    // text: 'xxxx箱型对比图',
                    // left: 'center'
                },
                {
                    // text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                    // borderColor: '#398b69',
                    // borderWidth: 1,
                    // textStyle: {
                    //     fontWeight: 'normal',
                    //     fontSize: 14,
                    //     lineHeight: 20
                    // },
                    // left: '10%',
                    // top: '90%'
                }
            ],
            dataset: [
                {
                    // prettier-ignore
                    source: [
                        // [85, 74, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                        [20, 31, 41, 36, 40, 57, 76, 54, 65, 66, 59, 69, 49, 46, 38, 52, 59, 59, 75, 58],
                        // [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                        [39, 21, 31, 32, 30, 47, 66, 44, 55, 56, 51, 62, 39, 36, 38, 42, 54, 55, 65, 48],
                        // [89, 84, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
                    ]
                },
                {
                    transform: {
                        type: 'boxplot',
                        config: {itemNameFormatter: '炉料类别 {value}'}
                    }
                },
                {
                    fromDatasetIndex: 1,
                    fromTransformResult: 1
                }
            ],
            tooltip: {
                // trigger: 'item',
                // axisPointer: {
                //     type: 'shadow'
                // }
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: '数值',
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#b6b6b6'
                    }
                },

                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#7c7c7c',
                    },
                },


            },
            series: [
                {
                    name: 'boxplot',
                    type: 'boxplot',
                    datasetIndex: 1
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    datasetIndex: 2
                }
            ]

        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
})












