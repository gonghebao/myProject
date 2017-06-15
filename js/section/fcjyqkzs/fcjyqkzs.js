/**
 * @author : dingtianxiu
 * @date : 2016/4/11
 * @module :
 * @description :
 */
angular.module('fcjyApp', ['ui.alert'])
    .controller('fcjyCtrl', ['$scope', '$http', '$interval', 'alertService', function ($scope, $http, $interval, alertService) {
        alertService.mask();
        $scope.selectedDq = "23301000000";
        $scope.sbsj = 0;
        $scope.listData = [];
        $scope.viewListData = [];
        var lastPjjg = 0;
        $scope.pjjgFlag = true;
        $scope.dqData = {
            "23301000000": "杭州市",
            "23301090000": "杭州市萧山",
            "23301100000": "杭州市余杭",
            "23301110000": "杭州市富阳",
            "23301220000": "桐庐县",
            "23301270000": "淳安县",
            "23301820000": "建德市",
            "23301850000": "临安市",
            "23303000000": "温州市",
            "23303050000": "温州市洞头",
            "23303240000": "永嘉县",
            "23303260000": "平阳县",
            "23303270000": "苍南县",
            "23303280000": "文成县",
            "23303290000": "泰顺县",
            "23303810000": "瑞安市",
            "23303820000": "乐清市",
            "23304000000": "嘉兴市",
            "23304210000": "嘉善县",
            "23304240000": "海盐县",
            "23304810000": "海宁市",
            "23304820000": "平湖市",
            "23304830000": "桐乡市",
            "23305000000": "湖州市",
            "23305210000": "德清县",
            "23305220000": "长兴县",
            "23305230000": "安吉县",
            "23306000000": "绍兴市",
            "23306030000": "绍兴市柯桥",
            "23306040000": "绍兴市上虞",
            "23306240000": "新昌县",
            "23306810000": "诸暨市",
            "23306830000": "嵊州市",
            "23307000000": "金华市",
            "23307230000": "武义县",
            "23307260000": "浦江县",
            "23307270000": "磐安县",
            "23307810000": "兰溪市",
            "23307820000": "义乌市",
            "23307830000": "东阳市",
            "23307840000": "永康市",
            "23308000000": "衢州市",
            "23308220000": "常山县",
            "23308240000": "开化县",
            "23308250000": "龙游县",
            "23308810000": "江山市",
            "23309000000": "舟山市",
            "23309020000": "舟山市定海",
            "23309030000": "舟山市普陀",
            "23309210000": "岱山县",
            "23309220000": "嵊泗县",
            "23310000000": "台州市",
            "23310020000": "台州市椒江",
            "23310030000": "台州市黄岩",
            "23310040000": "台州市路桥",
            "23310210000": "玉环县",
            "23310220000": "三门县",
            "23310230000": "天台县",
            "23310240000": "仙居县",
            "23310810000": "温岭市",
            "23310820000": "临海市",
            "23311000000": "丽水市",
            "23311210000": "青田县",
            "23311220000": "缙云县",
            "23311230000": "遂昌县",
            "23311240000": "松阳县",
            "23311250000": "云和县",
            "23311260000": "庆元县",
            "23311270000": "景宁畲族自治县",
            "23311810000": "龙泉市"
        };
        function splitData(rawData) {
            //var categoryData = [];
            //var values = [];
            var kindValue = {
                categoryData: [],
                values: [],
                sssr: [],
                pjjg: []
            };
            for (var i = 0, len = rawData.length; i < len; i++) {
                var item = rawData[i].ssrq.replace(/(\d{4})(\d{2})/, "$1" + "/" + "$2" + "/");
                kindValue.categoryData.push(item);
                var value = [parseFloat(rawData[i].kpj), parseFloat(rawData[i].spj), parseFloat(rawData[i].zdj), parseFloat(rawData[i].zgj)];
                kindValue.values.push(value);
                kindValue.sssr.push({
                    value: parseFloat(rawData[i].sssr),
                    itemStyle: {
                        normal: {
                            color: parseFloat(rawData[i].kpj) - parseFloat(rawData[i].spj) > 0 ? 'rgba(0,0,0,0)' : '#B00E1B',
                            barBorderColor: parseFloat(rawData[i].kpj) - parseFloat(rawData[i].spj) > 0 ? '#4DD557' : '#C61111',
                            barBorderWidth: 2
                        }
                    }
                });
                kindValue.pjjg.push(parseFloat(rawData[i].pjjg));
            }
            return kindValue;
        }

        function calculateMA(dayCount, data) {
            var result = [];
            for (var i = 0, len = data.pjjg.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.pjjg[i - j];
                }
                result.push(+(sum / dayCount).toFixed(2));
            }
            return result;
        }

        var myChart = echarts3.init(document.getElementById('fcjyMap1'));

        function getSsData() {
            //alertService.mask();

            //var len1 = $scope.listData.length;
            //if (len1 != 0) {
            //    $scope.viewListData = $scope.listData.splice(0, len1 > 8 ? 8 : len1);
            //    $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;
            //} else {
            //    $http.get($scope.URL+'/fcjyss?sbtjsj=' + $scope.sbsj + '&jgsj=600&flag=2&tybm=' + $scope.selectedDq)
            //        .success(function (ssData) {
            //            $scope.sbsj = ssData.root.fcjytjsj;
            //            var tmpData = ssData.root.fcjyGrid;
            //            var len2 = tmpData.length;
            //            angular.forEach(tmpData, function (value, key) {
            //                $scope.listData.push({
            //                    czrq: (new Date(value.czrq)).toLocaleTimeString(),
            //                    pjjg: value.pjjg,
            //                    zje: value.zje
            //                });
            //            });
            //            $scope.viewListData = $scope.listData.splice(0, len2 > 8 ? 8 : len2);
            //            $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;
            //        })
            //}

            //$http.get($scope.URL+'/fcjyss?sbtjsj=' + $scope.sbsj + '&jgsj=600&flag=2&tybm=' + $scope.selectedDq)
            //$scope.post('CxglDtzs2016BLH_selectFcjyss', {
            //    sbtjsj: $scope.sbsj,
            //    jgsj: 600,
            //    flag: 2,
            //    tybm: $scope.selectedDq
            //})
            $http.get('./data_json/fcjy/sbtjsj20170221jgsj600flag2tybm'+$scope.selectedDq+'.json')
                .success(function (ssData) {
                    $scope.sbsj = ssData.data[1].value;
                    var tmpData = JSON.parse(ssData.data[0].value);
                    var len2 = tmpData.length;
                    if (len2 != 0) {
                        angular.forEach(tmpData, function (value, key) {
                            $scope.listData.push({
                                czrq: (new Date(value.lrrq)).toLocaleTimeString(),
                                pjjg: parseFloat(value.pjjg),
                                zje: parseFloat(value.zje)
                            });
                        });
                        console.log("$scope.listdatta",$scope.listData);
                        $scope.viewListData = $scope.listData.splice(0, len2 > 8 ? 8 : len2);
                        console.log("$scope.view",$scope.viewListData);
                        $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;

                        $scope.pjjgFlag = lastPjjg > $scope.pjjg ? false : true;
                        lastPjjg = $scope.pjjg;
                    } else {
                        $scope.viewListData = [];
                    }

                    alertService.unmask();
                })
                .error(function () {
                    alertService.unmask();
                });
        }

        $scope.changeDq = function () {
            //$http.get($scope.URL + '/fcjy?qsrq=' + ($scope.curYear - 1) + '0101&tybm=' + $scope.selectedDq)
            //$scope.post('CxglDtzs2016BLH_selectFcjy', {
            //    qsrq: ($scope.curYear - 1) * 10000 + 101,
            //    tybm: $scope.selectedDq
            //})
            $http.get('./data_json/fcjy/qsrq'+(($scope.curYear - 1) * 10000 + 101)+'tybm'+$scope.selectedDq+'.json')
                .success(function (resData) {
                    alertService.unmask();
                    var useData = JSON.parse(resData.data[0].value);
                    var data = splitData(useData);
                    $scope.curData = useData[useData.length - 1];
                    console.log($scope.curData);
                    var option = {
                        backgroundColor: 'rgba(0,0,0,0)',
                        animation: false,
                        colors: ['red', 'yellow', 'rgb(7,37,109)'],
                        legend: {
                            bottom: 50,
                            show: true,
                            left: 'center',
                            data: ['日均线', '周均线', '月均线'],
                            textStyle: {
                                color: "#fff"
                            },
                            inactiveColor: "rgb(1,2,1)"
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'line'
                            },
                            formatter: function (params) {
                                var param = params[0];
                                if (param.seriesType === 'bar') {
                                    return param.seriesName + '<br/>' + param.data.value;
                                } else {
                                    var str =
                                        '日&nbsp;&nbsp;&nbsp;期: ' + param.name + '<hr size=1 style="margin: 3px 0">' +
                                        '<span style="float:left">开盘价:</span>'+' <span style="color: yellow; float: right">' + param.data[0] + '</span><br/>' +
                                        '<span style="float:left">收盘价:</span>'+' <span style="color: yellow; float: right">' + param.data[1] + '</span><br/>' +
                                        '<span style="float:left">最低价:</span>'+'<span style="color: yellow; float: right">' + param.data[2] + '</span><br/>' +
                                        '<span style="float:left">最高价:</span>'+'<span style="color: yellow; float: right">' + param.data[3] + '</span><br/>';
                                    for (var i = 0; i < params.length; i++) {
                                        if (params[i].seriesName == "日均线") {
                                            str += '<span style="float:left">日均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
                                        }
                                        if (params[i].seriesName == "周均线") {
                                            str += '<span style="float:left">周均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
                                        }
                                        if (params[i].seriesName == "月均线") {
                                            str += '<span style="float:left">月均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
                                        }
                                    }
                                    return str;
                                }
                            }
                        },
                        brush: {
                            xAxisIndex: 'all',
                            brushLink: 'all',
                            outOfBrush: {
                                colorAlpha: 0.1
                            }
                        },
                        grid: [
                            {
                                show: true,
                                left: '5%',
                                right: '0%',
                                top: '0%',
                                height: '65%',
                                borderColor: '#0752A3',
                                borderWidth: 2
                            },
                            {
                                show: true,
                                left: '5%',
                                right: '0%',
                                top: '69%',
                                height: '16%',
                                borderColor: '#0752A3',
                                lineStyle: {
                                    width: 0,
                                    color: '#0752A3'
                                }
                            }
                        ],
                        xAxis: [
                            {
                                type: 'category',
                                data: data.categoryData,
                                scale: true,
                                boundaryGap: false,
                                splitNumber: 1,
                                min: 'dataMin',
                                max: 'dataMax',
                                axisTick: {
                                    lineStyle: {
                                        //  color:'rgb(7,37,109)'
                                        color: '#ccc'
                                    },
                                    inside: false
                                },
                                axisLabel: {
                                    inside: false,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16,
                                        fontFamily: 'Arial'
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: "rgb(7,37,109)",
                                        width: 1
                                    }
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            {
                                type: 'category',
                                gridIndex: 1,
                                data: data.categoryData,
                                scale: true,
                                boundaryGap: false,
                                axisLine: {
                                    onZero: true,
                                    lineStyle: {
                                        color: "#0752A3",
                                        width: 2
                                    }
                                },
                                axisTick: {show: false},
                                splitLine: {show: false},
                                axisLabel: {show: false},
                                splitNumber: 1,
                                min: 'dataMin',
                                max: 'dataMax'
                            }
                        ],
                        yAxis: [
                            {
                                scale: true,
                                splitNumber:5,
                                //minInterval:1,
                                //min: 'dataMin',
                                //max: 'dataMax',
                                //interval: auto,
                                precision: 1,
                                splitArea: {
                                    show: false
                                },
                                position: "right",
                                axisTick: {
                                    inside: true,
                                    lineStyle: {
                                        color: '#ccc'
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLabel: {
                                    inside: true,
                                    interval:2,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16,
                                        fontFamily: 'Arial'
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: "#0752A3",
                                        width: 2
                                    }
                                }
                            },
                            {
                                scale: true,
                                gridIndex: 1,
                                splitNumber: 0,
                                axisLabel: {show: false},
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "#0752A3",
                                        width: 2
                                    }
                                },
                                axisTick: {show: false},
                                splitLine: {show: false}
                            },
                            {
                                scale: true,
                                gridIndex: 0,
                                position: 'left',
                                splitNumber: 0,
                                axisLabel: {show: false},
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "#0752A3"
                                    }
                                },
                                axisTick: {show: false},
                                splitLine: {show: false}
                            }
                        ],
                        dataZoom: [
                            {
                                type: 'inside',
                                xAxisIndex: [0, 1],
                                start: 90,
                                end: 100
                            },
                            {
                                show: false,
                                xAxisIndex: [0, 1],
                                type: 'slider',
                                top: '85%',
                                start: 90,
                                end: 100
                            }
                        ],
                        series: [
                            {
                                name: '日K',
                                type: 'candlestick',
                                data: data.values,
                                itemStyle: {
                                    normal: {
                                        color: '#B11122',           // 阳线填充颜色
                                        color0: 'rgba(0,0,0,0)',   // 阴线填充颜色
                                        borderWidth: 2,
                                        borderColor: '#C61111',    // 阳线边框颜色
                                        borderColor0: '#4DD557'     // 阴线边框颜色

                                    },
                                    emphasis: {
                                        color: '#e4393c',         // 阳线填充颜色
                                        color0: 'white'         // 阴线填充颜色
                                    }
                                },
                                tooltip: {
                                    formatter: function (params) {
                                        return [
                                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                                            '开盘价: ' + param.data[0] + '<br/>',
                                            '收盘价: ' + param.data[1] + '<br/>',
                                            '最低级: ' + param.data[2] + '<br/>',
                                            '最高价: ' + param.data[3] + '<br/>'
                                        ].join('');
                                    }
                                },
                                markPoint: {
                                    label: {
                                        normal: {
                                            formatter: function (param) {
                                                return param != null ? Math.round(param.value) : '';
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(0,0,0,0)'
                                        }
                                    },
                                    data: [
                                        {
                                            name: '最大值',
                                            type: 'max',
                                            valueDim: 'highest',
                                            symbolOffset: [0, '80%']
                                        },
                                        {
                                            name: '最小值',
                                            type: 'min',
                                            valueDim: 'lowest'
                                        }
                                    ],
                                    tooltip: {
                                        formatter: function (param) {
                                            return param.name + '：' + (param.data.value || '');
                                        }
                                    }
                                }
                            },
                            {
                                name: '月均线',
                                type: 'line',
                                yAxisIndex: 2,
                                data: calculateMA(30, data),
                                //smooth: true,
                                lineStyle: {
                                    normal: {color: 'purple', opacity: 0.6}
                                }
                            },
                            {
                                name: '周均线',
                                type: 'line',
                                yAxisIndex: 2,
                                data: calculateMA(7, data),
                                smooth: true,
                                lineStyle: {
                                    normal: {color: 'yellow', opacity: 0.6}
                                }
                            },
                            {
                                name: '日均线',
                                type: 'line',
                                yAxisIndex: 2,
                                data: data.pjjg,
                                //smooth: true,
                                lineStyle: {
                                    normal: {color: 'green', opacity: 0.6}
                                }
                            },
                            {
                                name: '税收收入',
                                type: 'bar',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                data: data.sssr,
                                itemStyle: {
                                    normal: {
                                        color: 'red',
                                        barBorderColor: 'green',
                                        barBorderWidth: 1,
                                        opacity: 1
                                    },
                                    emphasis: {
                                        color: '#e4393c',
                                        barBorderColor: 'green',
                                        barBorderWidth: 1,
                                        opacity: 1
                                    }
                                }
                            }
                        ]
                    };
                    myChart.setOption(option);

                    getSsData();
                    $scope.timer = $interval(function () {
                        getSsData();
                    }, 1000000);   //记得改回 10000
                })
                .error(function (data) {
                    alertService.unmask();
                });

        };

        $scope.changeDq();

        $scope.$on('$destroy', function () {
            $interval.cancel($scope.timer);
        });
        //背景效果
        var script = document.createElement("script");
        script.src = "js/bg/bg_1.js";
        document.body.appendChild(script);
    }]);
//.config(function ($httpProvider) {
//    $httpProvider.defaults.headers.common = {'Cache-Control': 'max-age = 86400'};
//});
//function getTimes() {
//    var now = new Date();
//    var year = now.getFullYear();
//    var month = now.getMonth() + 1;
//    month = month < 10 ? 0 + "" + month : month;
//    var date = now.getDate();
//    date = date < 10 ? 0 + "" + date : date;
//    var hour = now.getHours();
//    hour = hour < 10 ? 0 + "" + hour : hour;
//    var minutes = now.getMinutes();
//    minutes = minutes < 10 ? 0 + "" + minutes : minutes;
//    var seconds = now.getSeconds();
//    seconds = seconds < 10 ? 0 + "" + seconds : seconds;
//    var str = now.getMilliseconds() < 500 ? (year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + seconds) : year + "-" + month + "-" + date + " " + hour + " " + minutes + " " + seconds;
//    $(".line #sj").html(str)
//}
//setInterval(getTimes, 500);