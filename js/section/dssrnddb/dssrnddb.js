/**
 * @author : DingTianXiu
 * @date : 2016/4/19
 * @module : 地税收入年度对比
 * @description :
 */

var app = angular.module("dssrApp", ['ui.alert']);
app.controller("dssrCtrl", ['$scope', '$http', 'alertService', '$filter', function ($scope, $http, alertService, $filter) {
    //$http.get('http://localhost:8088/dtzs/gt3/srdb2?qsnf=2009&zznf=2015&tybm=33&bj=1').success(function(data){
    alertService.mask();
    //$http.get($scope.URL+'/srdb?qsnf=' + ($scope.curYear - 7) + '&zznf=' + ($scope.curYear - 1) + '&tybm=33&bj=1')
    //$scope.post('CxglDtzs2016BLH_selectSrdb', {qsnf: $scope.curYear - 7, zznf: $scope.curYear - 1, tybm: 33, bj: 1})
    $http.get("data_json/dssr/qsnf2010zznf2016tybm33bj1.json")
    .success(function (data) {
            //var htt=$http({
            //    method:"GET",
            //    url:$scope.URL+'/srdb?qsnf=' + ($scope.curYear - 7) + '&zznf=' + ($scope.curYear - 1) + '&tybm=33&bj=1'
            //});
            data = data.data;
            var dszzsr = [], dszzsr_2 = [], sssr = [], sssr_2 = [], fssr = [], fssr_2 = [], sbjjsr = [], sbjjsr_2 = [];

            for (var k in data) {
                var dataItem = JSON.parse(data[k].value);
                for (var j = 0; j < dataItem.length; j++) {
                    switch (dataItem[j].xmmcSz) {
                        case "税务部门组织的收入":
                            dszzsr.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            dszzsr_2.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            break;
                        case "一、税收收入":
                            sssr.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            sssr_2.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            break;
                        case "二、非税收入合计":
                            fssr.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            fssr_2.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            break;
                        case "    5.社保基金收入":
                            sbjjsr.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            sbjjsr_2.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            break;
                        case "5.社保基金收入":
                            sbjjsr.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            sbjjsr_2.push((dataItem[j]["nLj"] / 100000000).toFixed(2) - 0);
                            break;
                        default:
                            break;
                    }
                }
            }
            dszzsr_2.push((dszzsr[6] * 1.07).toFixed(2) - 0);
            sssr_2.push((sssr[6] * 1.07).toFixed(2) - 0);
            fssr_2.push((fssr[6] * 1.07).toFixed(2) - 0);
            sbjjsr_2.push((sbjjsr[6] * 1.07).toFixed(2) - 0);
            require.config({
                paths: {
                    echarts: 'js/src',
                    zrender: 'js/zrender/src'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/chart/line'
                ],
                function (echarts) {
                    var lineChart = echarts.init(document.getElementsByClassName('dssr')[0]);
                    var option = {
                        tooltip: {   //提示框组件
                            // show:false,
                            trigger: 'axis',  //触发类型
                            padding: 16,
                            formatter: function (params, ticket, callback) {  //显示格式化
                                params = params.sort(by("seriesIndex"));//排序
                                var res = params[0].name + '<span style="font-family: 方正小标宋简体">年</span><br/>' +
                                    '<span style="font-family: 方正小标宋简体">地税组织收入：</span><span style="float: right; color: yellow;">' + $filter('number')(params[0].value, 2) + '</span><br/>' +
                                    '<span style="font-family: 方正小标宋简体">税&nbsp;&nbsp;&nbsp;收&nbsp;&nbsp;&nbsp;收&nbsp;&nbsp;入：</span><span style="float: right; color: yellow;">' +  $filter('number')(params[2].value, 2) + '</span><br/>' +
                                    '<span style="font-family: 方正小标宋简体">非&nbsp;&nbsp;&nbsp;税&nbsp;&nbsp;&nbsp;收&nbsp;&nbsp;入：</span><span style="float: right; color: yellow;">' +  $filter('number')(params[4].value, 2) + '</span><br/>' +
                                    '<span style="font-family: 方正小标宋简体">社保基金收入：</span><span style="float: right; color: yellow;">' +  $filter('number')(params[6].value, 2) + '</span><br/>';//抬头
                                setTimeout(function () {
                                    callback(ticket, res);
                                }, 300);
                                return '计算中...';
                            },
                            textStyle: {   //文本颜色
                                fontSize: '16',
                                fontFamily: 'Arial'
                            }
                        },
                        legend: {
                            textStyle: {
                                color: "#ffffff",
                                fontSize: '18',
                                fontFamily: '方正小标宋简体'
                            },
                            data: ['地税组织收入', '税收收入', '非税收入', '社保基金收入'],
                            y: "bottom",
                            padding: 10,
                            itemGap: 20
                        },
                        color: ['#0ecdf6', '#0edb26', '#127cff', '#ffb21c'],
                        grid: { //网格
                            borderWidth: 0,
                            x: '10%',
                            y: '15%',
                            width: '85%',
                            height: '70%'
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            axisLabel: {
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 16,
                                    fontWeight: "normal",
                                    fontFamily: 'Arial'
                                },
                                margin: 20
                            },
                            splitLine: {
                                show: false
                            },
                            data: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear]
                        },
                        yAxis: {
                            type: 'value',
                            name: '亿元',
                            nameTextStyle: {
                                color: '#fff',
                                fontSize: 16,
                                fontFamily: '方正小标宋简体'
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 16,
                                    fontWeight: "normal",
                                    fontFamily: 'Arial'
                                },
                                margin: 20
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#073b83'
                                }
                            }
                        },
                        series: [  //数据配置
                            {
                                name: '社保基金收入',
                                type: 'line',
                                stack: '',
                                //data:sbjjsr,
                                data: sbjjsr,
                                // tooltipShow:false,
                                tooltip: {
                                    show: false
                                }
                            },
                            {
                                name: '社保基金收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted'
                                        },
                                        label: {
                                            show: true,
                                            position: 'bottom',
                                            textStyle: {
                                                fontSize: 20,
                                                fontFamily: 'Arial'
                                            }
                                        }
                                    }
                                },
                                //data:[sbjjsr[0],sbjjsr[1],sbjjsr[2],sbjjsr[3],sbjjsr[4],sbjjsr[5],sbjjsr[sbjjsr.length-2],(sbjjsr[sbjjsr.length-2].value*1.2).toFixed(2)]
                                data: sbjjsr_2
                            },
                            {
                                name: '非税收入',
                                type: 'line',
                                stack: '',
                                symbol: 'none',
                                data: fssr
                            },
                            {
                                name: '非税收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted'
                                        },
                                        label: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 20,
                                                fontFamily: 'Arial'
                                            }
                                        }
                                    }
                                },
                                //data:[fssr[0],fssr[1],fssr[2],fssr[3],fssr[4],fssr[5],fssr[fssr.length-2],(fssr[fssr.length-2].value*1.2).toFixed(2)]
                                data: fssr_2
                            },
                            {
                                name: '税收收入',
                                type: 'line',
                                stack: '',
                                data: sssr
                            },
                            {
                                name: '税收收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted'
                                        },
                                        label: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 20,
                                                fontFamily: 'Arial'
                                            }
                                        }
                                    }
                                },
                                //data:[sssr[0],sssr[1],sssr[2],sssr[3],sssr[4],sssr[5],sssr[sssr.length-2],(sssr[sssr.length-2].value*1.2).toFixed(2)]
                                data: sssr_2
                            },
                            {
                                name: '地税组织收入',
                                type: 'line',
                                symbol: 'none',
                                data: dszzsr
                            },
                            {
                                name: '地税组织收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted'
                                        },
                                        label: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 20,
                                                fontFamily: 'Arial'
                                            }
                                        }
                                    }
                                },
                                //data:[dszzsr[0],dszzsr[1],dszzsr[2],dszzsr[3],dszzsr[4],dszzsr[5],dszzsr[dszzsr.length-2],(dszzsr[dszzsr.length-2].value*1.2).toFixed(2)]
                                data: dszzsr_2
                            }
                        ]
                    };
                    lineChart.setOption(option);
                }); //left折线
            alertService.unmask();
        })
        .error(function(){
            alertService.unmask();
        });
    //添加背景效果
    var script=document.createElement("script");
    script.src="js/bg/bg_1.js";
    document.body.appendChild(script);
}]);
