/**
 * @author : dingtianxiu
 * @date : 2016/4/5
 * @module :
 * @description :
 */
var app = angular.module("qsnsrApp", ['ui.alert']);
app.controller('qsnsrCtrl', ['$scope', '$http', 'alertService', '$filter', '$interval', function ($scope, $http, alertService, $filter, $interval) {
    $scope.launchFullScreen = function () {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    };
    placeList = [
        //杭州市局本级
        {name: 3301, value: [120, 30.26]},
        {name: 3301, value: [120.1, 30.3]},
        {name: 3301, value: [120.1, 30.16]},
        //桐庐县局
        {name: 3301, value: [119.57, 29.65]},
        {name: 3301, value: [119.37, 29.85]},
        {name: 3301, value: [119.17, 29.9]},
        //富阳市局
        {name: 3301, value: [119.77, 30]},
        {name: 3301, value: [119.57, 29.9]},
        {name: 3301, value: [119.47, 30]},
        //临安县局
        {name: 3301, value: [119.52, 30.23]},
        {name: 3301, value: [119.22, 30.23]},
        {name: 3301, value: [119.12, 30.13]},
        //余杭局
        {name: 3301, value: [119.85, 30.26]},
        {name: 3301, value: [119.8, 30.4]},
        {name: 3301, value: [119.7, 30.26]},
        //建德市局
        {name: 3301, value: [119.28, 29.48]},
        {name: 3301, value: [119.18, 29.48]},
        {name: 3301, value: [119.08, 29.43]},
        //淳安县局
        {name: 3301, value: [118.7, 29.6]},
        {name: 3301, value: [118.6, 29.55]},
        //萧山局
        {name: 3301, value: [120.4, 30.26]},
        {name: 3301, value: [120.6, 30.3]},
        {name: 3301, value: [120.3, 30.16]},
        //宁波直属分局
        {name: 3302, value: [121.75, 29.9]},
        {name: 3302, value: [121.85, 29.9]},
        {name: 3302, value: [121.95, 30]},
        //宁海县
        {name: 3302, value: [121.42, 29.2]},
        {name: 3302, value: [121.62, 29.2]},
        {name: 3302, value: [121.62, 29.4]},
        //鄞州区
        {name: 3302, value: [121.46, 29.84]},
        {name: 3302, value: [121.56, 29.84]},
        {name: 3302, value: [121.6, 29.74]},
        //余姚市
        {name: 3302, value: [121.16, 30.04]},
        {name: 3302, value: [121.36, 29.9]},
        {name: 3302, value: [121.46, 29.96]},
        ////慈溪市
        {name: 3302, value: [121.51, 30.14]},
        {name: 3302, value: [121.31, 30.24]},
        //奉化
        {name: 3302, value: [121.41, 29.66]},
        {name: 3302, value: [121.51, 29.6]},
        {name: 3302, value: [121.81, 29.56]},
        //温州
        {name: 3303, value: [120.8, 27.8]},
        {name: 3303, value: [120.6, 27.9]},
        {name: 3303, value: [120.5, 27.9]},

        //乐清
        {name: 3303, value: [121, 28.14]},
        {name: 3303, value: [120.8, 28.14]},
        {name: 3303, value: [120.9, 28.3]},
        //永嘉
        {name: 3303, value: [120.68, 28.16]},
        {name: 3303, value: [120.7, 28.36]},
        {name: 3303, value: [120.9, 28.4]},
        //平阳
        {name: 3303, value: [120.55, 27.6]},
        {name: 3303, value: [120.45, 27.5]},
        {name: 3303, value: [120.4, 27.6]},
        //苍南
        {name: 3303, value: [120.46, 27.33]},
        {name: 3303, value: [120.4, 27.33]},
        //文成
        {name: 3303, value: [119.9, 27.58]},
        {name: 3303, value: [119.8, 27.68]},
        {name: 3303, value: [119.8, 27.8]},
        //泰顺
        {name: 3303, value: [119.7, 27.47]},
        {name: 3303, value: [119.8, 27.47]},
        {name: 3303, value: [119.9, 27.37]},
        //瑞安
        {name: 3303, value: [120.52, 27.8]},
        {name: 3303, value: [120.42, 27.8]},
        {name: 3303, value: [120.40, 27.7]},
        //嘉兴
        {name: 3304, value: [120.9, 30.68]},
        {name: 3304, value: [120.66, 30.6]},
        {name: 3304, value: [120.8, 30.8]},
        //嘉善县局
        {name: 3304, value: [120.9, 30.9]},
        {name: 3304, value: [121, 30.95]},
        {name: 3304, value: [121, 30.9]},
        //海盐县局
        {name: 3304, value: [120.88, 30.53]},
        {name: 3304, value: [120.98, 30.53]},
        {name: 3304, value: [120.96, 30.46]},
        //平湖市局
        {name: 3304, value: [121.2, 30.7]},
        {name: 3304, value: [121.1, 30.7]},
        {name: 3304, value: [121.1, 30.75]},
        //桐乡市局
        {name: 3304, value: [120.57, 30.61]},
        {name: 3304, value: [120.47, 30.55]},
        {name: 3304, value: [120.3, 30.6]},
        //海宁市局
        {name: 3304, value: [120.69, 30.53]},
        {name: 3304, value: [120.75, 30.4]},
        {name: 3304, value: [120.73, 30.5]},
        //湖州市局本级
        {name: 3305, value: [119.90, 30.76]},
        {name: 3305, value: [120, 30.9]},
        {name: 3305, value: [120.3, 30.76]},

        //德清县局
        {name: 3305, value: [120.08, 30.54]},
        {name: 3305, value: [119.9, 30.6]},
        {name: 3305, value: [119.7, 30.5]},
        //长兴
        {name: 3305, value: [119.8, 30.9]},
        {name: 3305, value: [119.9, 31.1]},
        {name: 3305, value: [119.7, 31]},
        //安吉
        {name: 3305, value: [119.6, 30.68]},
        {name: 3305, value: [119.8, 30.78]},
        {name: 3305, value: [119.9, 30.68]},
        //绍兴市局级
        {name: 3306, value: [120.58, 30.01]},
        {name: 3306, value: [120.48, 30.05]},
        {name: 3306, value: [120.68, 29.8]},
        //柯桥区局
        {name: 3306, value: [120.49, 30]},
        {name: 3306, value: [120.55, 30.08]},
        {name: 3306, value: [120.4, 30.08]},
        //新昌县局
        {name: 3306, value: [120.89, 29.4]},
        {name: 3306, value: [121.2, 29.4]},
        {name: 3306, value: [121, 29.33]},
        //诸暨市局
        {name: 3306, value: [120.23, 29.71]},
        {name: 3306, value: [120.43, 29.51]},
        {name: 3306, value: [120, 29.6]},
        //上虞
        {name: 3306, value: [120.87, 29.90]},
        {name: 3306, value: [120.97, 30.1]},
        {name: 3306, value: [121, 29.93]},
        //嵊州市局
        {name: 3306, value: [120.81, 29.6]},
        {name: 3306, value: [120.9, 29.5]},
        {name: 3306, value: [121, 29.63]},
        // 金华市局本级
        {name: 3307, value: [119.64, 29.12]},
        {name: 3307, value: [119.54, 29.1]},
        {name: 3307, value: [119.34, 28.9]},
        //永康市局
        {name: 3307, value: [120.02, 28.92]},
        {name: 3307, value: [119.9, 28.92]},
        {name: 3307, value: [120, 28.8]},
        //武义县局
        {name: 3307, value: [119.6, 28.9]},
        {name: 3307, value: [119.5, 28.85]},
        {name: 3307, value: [119.5, 28.7]},
        //义乌
        {name: 3307, value: [120.06, 29.32]},
        {name: 3307, value: [119.9, 29.3]},
        {name: 3307, value: [119.9, 29.12]},
        //磐安县局
        {name: 3307, value: [119.7, 29.1]},
        {name: 3307, value: [119.6, 29]},
        {name: 3307, value: [119.56, 29.1]},
        //浦江县局
        {name: 3307, value: [119.88, 29.46]},
        {name: 3307, value: [119.68, 29.4]},
        {name: 3307, value: [119.78, 29.55]},
        //东阳市
        {name: 3307, value: [120.23, 29.27]},
        {name: 3307, value: [120.4, 29.27]},
        {name: 3307, value: [120.33, 29.1]},
        //兰溪市局
        {name: 3307, value: [119.48, 29.25]},
        {name: 3307, value: [119.48, 29.35]},
        {name: 3307, value: [119.28, 29.3]},
        //玉环
        {name: 3326, value: [121.2, 28.14]},
        {name: 3326, value: [121.3, 28.14]},
        {name: 3326, value: [121.20, 28.04]},
        //三门
        {name: 3326, value: [121.58, 29.01]},
        {name: 3326, value: [121.68, 28.90]},
        {name: 3326, value: [121.4, 28.94]},
        //天台
        {name: 3326, value: [121.03, 29.15]},
        {name: 3326, value: [120.90, 29.06]},
        {name: 3326, value: [121.30, 29.12]},
        //仙居
        {name: 3326, value: [120.73, 28.85]},
        {name: 3326, value: [120.78, 28.60]},
        {name: 3326, value: [120.42, 28.57]},
        //温岭
        {name: 3326, value: [121.1, 28.36]},
        {name: 3326, value: [121.3, 28.28]},
        {name: 3326, value: [121.2, 28.38]},
        //临海
        {name: 3326, value: [121.13, 28.8]},
        {name: 3326, value: [121.33, 28.8]},
        {name: 3326, value: [121.53, 28.8]},
        //黄岩
        {name: 3326, value: [121.12, 28.57]},
        {name: 3326, value: [121.27, 28.61]},
        {name: 3326, value: [121.37, 28.57]},
        //椒江
        {name: 3326, value: [121.46, 28.63]},
        {name: 3326, value: [121.56, 28.63]},
        {name: 3326, value: [121.1, 28.63]},
        ////台州市局本级
        {name: 3326, value: [121.2, 28.52]},
        {name: 3326, value: [121.3, 28.52]},
        {name: 3326, value: [121.1, 28.52]},
        //景宁县局
        {name: 3325, value: [119.13, 27.73]},
        {name: 3325, value: [119.33, 27.82]},
        {name: 3325, value: [119.53, 27.96]},
        //松阳
        {name: 3325, value: [118.98, 28.32]},
        {name: 3325, value: [119.18, 28.46]},
        {name: 3325, value: [119.38, 28.32]},
        //遂昌
        {name: 3325, value: [118.88, 28.59]},
        //缙云
        {name: 3325, value: [119.8, 28.66]},
        {name: 3325, value: [120.1, 28.46]},
        {name: 3325, value: [120.2, 28.66]},
        //云和
        {name: 3325, value: [119.16, 28.12]},
        {name: 3325, value: [119.26, 27.99]},
        {name: 3325, value: [119.36, 28.12]},
        //青田
        {name: 3325, value: [119.8, 28.15]},
        {name: 3325, value: [120.1, 28.25]},
        {name: 3325, value: [120.2, 28.05]},
        //龙泉
        {name: 3325, value: [118.93, 28.08]},
        //丽水
        {name: 3325, value: [119.5, 28.32]},
        {name: 3325, value: [119.6, 28.52]},
        {name: 3325, value: [119.88, 28.40]},
        //江山
        {name: 3308, value: [118.71, 28.74]},
        {name: 3308, value: [118.51, 28.54]},
        {name: 3308, value: [118.91, 28.34]},
        //常山
        {name: 3308, value: [118.81, 28.86]},
        {name: 3308, value: [118.51, 28.90]},
        {name: 3308, value: [118.71, 29.06]},
        //衢州市局本级
        {name: 3308, value: [118.77, 28.56]},
        {name: 3308, value: [118.51, 28.90]},
        {name: 3308, value: [118.61, 29.06]}
    ];
    var citydata = [];
    alertService.mask();
    //$http.get($scope.URL + '/nsrhs?qsnf=' + $scope.curYear + '&zznf=' + $scope.curYear + '&tybm=33')
    //$scope.post("CxglDtzs2016BLH_selectNsrhs", {qsnf: $scope.curYear, zznf: $scope.curYear, tybm: 33})
    $.get("data_json/qsnsr/qsnf2017zznf2017tybm33.json")
        .success(function (data) {

            console.log(data);
            data = JSON.parse(data.data[0].value);
            $scope.count = 0;
            for (var i = 0, j = data.length; i < j; i++) {
                citydata.push(data[i]);
                $scope.count += parseInt(data[i].hs);
                data[i].swj = data[i].swj.replace("地区", '');
                if (data[i].swj == "省局直属局") {
                    data[i].swj = "省直属局"
                }
            }
            console.log($scope.count);
            $scope.citydata = citydata.sort(by("hs"));
            $scope.mapData = [];
            angular.forEach($scope.citydata, function (value, key) {
                $scope.mapData.push({
                    name: value.swj.replace('地区', '市') + "市",
                    hs: parseInt(value.hs),
                    percentage: parseInt(value.hs) / $scope.count
                });
            });
            $scope.myChart3 = echarts3.init(document.getElementsByClassName('leftBox')[0]);
            //$http.get('ownGeo/points.json')
            //    .success(function (points) {
            var optionMap = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        if (params.componentSubType == "map") {
                            var res = params.data.name + '<hr style="margin: 2% 0"/><span style="float: left"> 登记注册用户户数：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.hs, 0) + '</span>' +
                                '<br/><span style="float: left"> 占&nbsp;全&nbsp;省&nbsp;百&nbsp;分&nbsp;比&nbsp;&nbsp;：</span><span style="color: yellow; float: right">' + (params.data.percentage * 100).toFixed(2) + '%</span>';
                            return res;
                        }
                    }
                },
                legend: {
                    data: ['登记户数'],
                    show: false
                },
                geo: {
                    map: '浙江县',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    top: '10%',
                    right: 0,
                    bottom: 0,
                    left: '5%',//    top: '10%',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontWeight: 600
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0.5,
                            borderColor: 'rgba(100,149,237,0.5)',
                            areaColor: 'rgba(0, 102, 229, 0.1)'
                        },
                        emphasis: {
                            //areaColor: 'rgb(23,150,200)'
                            borderWidth: 0.8,
                            borderColor: 'rgba(100,149,237,1)',
                            areaColor: 'rgba(0, 102, 229, 0.3)'
                        }
                    }


                },
                series: [
                    //{
                    //    name: '浙江',
                    //    type: 'map',
                    //    mapType: '浙江',
                    //    top: '10%',
                    //    right: 0,
                    //    bottom: 0,
                    //    left: '5%',
                    //    label: {
                    //        normal: {
                    //            show: false
                    //        }
                    //    },
                    //    itemStyle: {
                    //        normal: {
                    //            borderWidth: 1.5,
                    //            borderColor: '#004BBD',
                    //            areaColor: 'rgba(0, 0, 0, 0)'
                    //        },
                    //        emphasis: {
                    //            areaColor: 'rgba(0, 0, 0, 0)'
                    //        }
                    //    }
                    //}
                    {
                        name: '浙江',
                        type: 'map',
                        map: '浙江',
                        top: '10%',
                        right: 0,
                        bottom: 0,
                        left: '5%',
                        data: $scope.mapData,
                        zleval: 3,
                        label: {
                            normal: {
                                show: false,
                                textStyle: {
                                    color: 'red',
                                    fontWeight: 600
                                }
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 0.5,
                                borderColor: 'rgba(100,149,237,0.5)',
                                areaColor: 'rgba(0, 102, 229, 0.1)'
                            },
                            emphasis: {
                                //areaColor: 'rgb(23,150,200)'
                                borderWidth: 0.8,
                                borderColor: 'rgba(100,149,237,1)',
                                areaColor: 'rgba(0, 102, 229, 0.1)'
                            }
                        }
                    },
                    {
                        type: 'effectScatter',
                        name: '登记户数',
                        effectType: 'ripple',
                        legendHoverLink: false,
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        rippleEffect: {
                            period: 5,
                            scale: 20,
                            brushType: 'stroke'
                        },
                        itemStyle: {
                            normal: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(14,241,242,0.3)',//'rgba(37, 140, 249, 0.8)',
                                //color: 'rgba(14,241,242,0.3)',// 'rgba(37, 140, 249, 0.8)'
                               color:"rgb(242,80,14)"
                               //color:"yellow"
                            }
                        },
                        data: []
                        //data:[{value:[120,30]}]

                    }
                    //,
                    //{
                    //    name: '登记户数',
                    //    type: 'effectScatter',
                    //    rippleEffect: {
                    //        period: 10,
                    //        scale: 20,
                    //        brushType: 'stroke'
                    //    },
                    //    effect: {
                    //        show: true
                    //    },
                    //    data: [],
                    //    coordinateSystem: 'geo',
                    //    large: true,
                    //    symbol: 'circle',
                    //    symbolSize: 2.5,
                    //    itemStyle: {
                    //        normal: {
                    //            shadowBlur: 2,
                    //            shadowColor: 'yellow',//'rgba(37, 140, 249, 0.8)',
                    //            color: 'yellow'// 'rgba(37, 140, 249, 0.8)'
                    //        }
                    //    },
                    //    animationEasingUpdate: function (i) {
                    //
                    //    }
                    //}
                ]
            };
            //var chart3 = [];
            //var len = 10000;
            //var geoCoord;
            //while (len--) {
            //    geoCoord = placeList[len % placeList.length].geoCoord;
            //    chart3.push({
            //        name: placeList[len % placeList.length].name,
            //        value: [
            //            geoCoord[0] + Math.random() * 0.5 - 0.182,
            //            geoCoord[1] + Math.random() * 0.5 - 0.152
            //        ]
            //    })
            //}
            //var n = 0;
            //var tt = Math.random() * 6000 + 1000;
            $.get('ownGeo/zhejiang.json', function (geoJson) {
                echarts3.registerMap('浙江', geoJson);
                $scope.myChart3.setOption(optionMap);
                //var mapTimer=setInterval(function () {
                //    tt = Math.random() * 6000 + 1000;
                //    var chart3_ = [];
                //    if (n % 2 == 0) {
                //        n = 0;
                //        for (var i = 0; i < 20; i++) {
                //            chart3_.push(chart3[Math.floor(Math.random() * (chart3.length))]);
                //        }
                //    }
                //    n++;
                //    if(optionMap.series[1]) {
                //        optionMap.series[1].data = chart3_;
                //        optionMap.series[1].animationEasingUpdate = 3;
                //    }
                //    myChart3.setOption(optionMap);
                //}, tt)

            });
            //});
            //new_list.push(
            //    {name: '洞头', geoCoord: [121.4, 27.75]},
            //    {name: '洞头', geoCoord: [121.43, 27.73]},
            //    {name: '洞头', geoCoord: [121.37, 27.73]},
            //    {name: '洞头', geoCoord: [121.37, 27.6]},
            //    {name: '洞头', geoCoord: [121.4, 27.6]},
            //    {name: '洞头', geoCoord: [121.45, 27.55]}
            //)

            require.config({
                paths: {
                    echarts: 'js/src',
                    zrender: 'js/zrender/src'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/chart/map'
                ],
                function (echarts) {
                    $scope.myChart = echarts.init($('.pointBox')[0]);//jquery转换为dom对象
                    require('echarts/util/mapData/params').params.zj = {
                        getGeoJson: function (callback) {
                            $.getJSON('ownGeo/zhejiang.json', function (data) {
                                // 压缩后的地图数据必须使用 decode 函数转换
                                callback(require('echarts/util/mapData/params').decode(data));
                            })
                        }
                    };
                    $scope.option = {
                        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: [
                            // 'rgba(14, 241, 242, 0.8)',
                            //  'rgba(0 ,80,255, 0.3)'
                            'rgba(14,241,242,0.3)',
                            //'rgba(0 ,80,255, 0.3)'
                        ],
                        legend: {
                            orient: 'vertical',
                            show: false,
                            x: 'right',
                            y: 'bottom',
                            data: ['个人', '企业'],
                            textStyle: {
                                color: '#fff',
                                fontSize: '16',
                                fontWeight: 600
                            }
                        },
                        tooltip: {
                            show: false,
                            trigger: 'item',
                            formatter: function (params) {

                                var res = params.data.name + '<hr style="margin: 2% 0"/>登记注册用户户数：<span style="color: yellow">' + params.data.hs +
                                    '<br/></span>占全省百分比:<span style="color: yellow">' + (params.data.percentage * 100).toFixed(2) + '%</span>';
                                return res;
                            }
                        },
                        series: [
                            {
                                name: '个人',
                                type: 'map',
                                mapType: 'zj',
                                //aspectScale: 1,
                                mapLocation: {
                                    x: '15%',
                                    y: '10%',
                                    width: '100%'
                                },
                                showLegendSymbol: false,
                                //roam: 'scale',
                                tooltip: {
                                    show: false
                                },
                                hoverable: false,
                                itemStyle: {
                                    normal: {
                                        borderColor: 'rgba(100,149,237,0)',
                                        borderWidth: 1.5,
                                        areaStyle: {
                                            color: 'rgba(30,80,80,0)'
                                        },
                                        label: {
                                            textStyle: {
                                                color: 'red',
                                                fontWeight: 200
                                            }
                                        }
                                    },
                                    emphasis: {
                                        label: {
                                            textStyle: {
                                                color: 'red'
                                            },
                                            show: false
                                        },
                                        borderColor: 'rgba(200,249,137,0)',
                                        borderWidth: 0.5,
                                        color: 'rgba(200,249,137,0)'

                                    }
                                },
                                data: $scope.mapData,
                                markPoint: {
                                    symbol: 'diamond',
                                    symbolSize: 1.5,
                                    large: true,
                                    effect: {
                                        show: true
                                    },
                                    data: new_list
                                    //data: []
                                }

                            }
                        ]
                    };
                    $scope.myChart.setOption($scope.option);
                });
            alertService.unmask();

            //实时取户数
            //$http.get($scope.URL + '/ssdj?tybm=33&tjsj=0&jgsj=300&flag=2')//当天数据
            $scope.post("CxglDtzs2016BLH_selectSsdj", {tybm: 33, tjsj: 0, jgsj: 300, flag: 2})
                .success(function (data) {
                    var xdjh = JSON.parse(data.data[0].value);
                    angular.forEach(xdjh, function (value, key) {
                        $scope.count += parseInt(value.hs);
                    });
                    $scope.hssbsj = data.data[2].value;//申报时间

                    //$http.get($scope.URL + '/ssdj?tybm=33&tjsj=' + $scope.hssbsj + '&jgsj=300&flag=1')
                    $scope.post("CxglDtzs2016BLH_selectSsdj", {tybm: 33, tjsj: $scope.hssbsj, jgsj: 300, flag: 1})
                        .success(function (data) {
                            var result = JSON.parse(data.data[0].value);
                            //var result=[{
                            //    hs:"1",
                            //    swbmbm:"332529",
                            //    swjmc:"景宁县局"
                            //}]
                            console.log("result",result);
                            $scope.hssbsj = data.data[2].value;
                            var len = result.length;
                            len=len==0?1:len;
                            var index = 0;
                            $scope.qsnsr_timer = $interval(function () {
                                if (index >= len) {
                                    $interval.cancel($scope.qsnsr_timer);
                                    index = 0;
                                }
                                if (result[index] && result[index].hs) {
                                    $scope.count += parseInt(result[index].hs);
                                }
                                $scope.mapData = [];
                                angular.forEach($scope.citydata, function (v) {
                                    $scope.mapData.push({
                                        name: v.swj.replace('地区', '市') + "市",
                                        hs: parseInt(v.hs),
                                        percentage: parseInt(v.hs) / $scope.count
                                    });
                                    if (result[index]) {
                                        if (result[index].swbmbm) {
                                            console.log(2);
                                            var bm = result[index].swbmbm.toString().slice(0, 4) - 0;
                                            var hs = parseInt(result[index].hs);
                                            console.log("v.swj", v.swjbm);
                                            console.log("bm",bm);
                                            switch (parseInt(v.swjbm)) {
                                                case bm:
                                                    v.hs = parseInt(v.hs) + hs;
                                                    $scope.citydata = citydata.sort(by("hs"));
                                                    var n = new Date().getTime();
                                                    optionMap.series[1].data = [];
                                                    $scope.myChart3.setOption(optionMap);
                                                    for (; ;) {
                                                        if (new Date().getTime() - n >= 50) {
                                                            optionMap.series[1].data = (function () {
                                                                var data = [];
                                                                var list = [];
                                                                var cishu = null;
                                                                for (var i = 0; i < placeList.length; i++) {
                                                                    switch (placeList[i].name) {
                                                                        case bm:
                                                                            data.push({value: placeList[i].value});
                                                                        default:
                                                                            break;
                                                                    }
                                                                }
                                                                cishu = hs > data.length ? data.length : hs;
                                                                for (var i = 0; i < cishu; i++) {
                                                                    list.push(data[Math.floor(Math.random() * data.length)])
                                                                }
                                                                console.log("list",list);
                                                                return list;
                                                            })();
                                                            $scope.myChart3.setOption(optionMap);
                                                            setTimeout(function(){
                                                                $scope.$apply(function(){
                                                                    optionMap.series[1].data = [];
                                                                    $scope.myChart3.setOption(optionMap);
                                                                })
                                                            },3000);
                                                            break;
                                                        }
                                                    }

                                                default:
                                                    break;
                                            }
                                        }
                                    }
                                })
                                index++;
                            }, 5000);
                            $scope.qsnsr_timer2 = $interval(function () {
                                //$http.get($scope.URL + '/ssdj?tybm=33&tjsj=' + $scope.hssbsj + '&jgsj=300&flag=1')
                                $scope.post("CxglDtzs2016BLH_selectSsdj", {tybm: 33, tjsj: $scope.hssbsj, jgsj: 300, flag: 1})
                                    .success(function (data) {
                                        var result = JSON.parse(data.data[0].value);
                                        $scope.hssbsj = data.data[2].value;
                                        len = result.length;
                                        index = 0;
                                        $scope.qsnsr_timer3 = $interval(function () {
                                            if (index >= len) {
                                                $interval.cancel($scope.qsnsr_timer3);
                                                index = 0;
                                            }
                                            //console.log(result[index].hs);
                                            if (result[index] && result[index].hs) {
                                                $scope.count += parseInt(result[index].hs);
                                            }
                                            $scope.mapData = [];
                                            angular.forEach($scope.citydata, function (v) {
                                                $scope.mapData.push({
                                                    name: v.swj.replace('地区', '市') + "市",
                                                    hs: parseInt(v.hs),
                                                    percentage: parseInt(v.hs) / $scope.count
                                                });
                                                if (result[index]) {
                                                    if (result[index].swbmbm) {
                                                        var bm = result[index].swbmbm.toString().slice(0, 4) - 0;
                                                        var hs = parseInt(result[index].hs);
                                                        switch (parseInt(v.swjbm)) {
                                                            case bm:
                                                                v.hs = parseInt(v.hs) + hs;
                                                                $scope.citydata = citydata.sort(by("hs"));
                                                                var n = new Date().getTime();
                                                                optionMap.series[1].data = [];
                                                                $scope.myChart3.setOption(optionMap);
                                                                for (; ;) {
                                                                    if (new Date().getTime() - n >= 50) {
                                                                        optionMap.series[1].data = (function () {
                                                                            var data = [];
                                                                            var list = [];
                                                                            var cishu = null;
                                                                            for (var i = 0; i < placeList.length; i++) {
                                                                                switch (placeList[i].name) {
                                                                                    case bm:
                                                                                        data.push({value: placeList[i].value});
                                                                                    default:
                                                                                        break;
                                                                                }
                                                                            }
                                                                            cishu = hs > data.length ? data.length : hs
                                                                            for (var i = 0; i < cishu; i++) {
                                                                                list.push(data[Math.floor(Math.random() * data.length)])
                                                                            }

                                                                            return list;

                                                                        })();
                                                                        $scope.myChart3.setOption(optionMap);
                                                                        setTimeout(function(){
                                                                            $scope.$apply(function(){
                                                                                optionMap.series[1].data = [];
                                                                                $scope.myChart3.setOption(optionMap);
                                                                            })
                                                                        },2000);
                                                                        break;
                                                                    }
                                                                }

                                                            default:
                                                                break;
                                                        }
                                                    }
                                                }
                                            })
                                            index++;
                                        },5000)
                                    })
                            }, 300000)
                        });
                    //var qsns_timer=$interval(function(){},)

                })
                .error(function () {
                    alertService.unmask();
                });


        })
        .error(function () {
            alertService.unmask();
            //function randomData(points) {
            //    var tmpData = [];
            //    //var len = 10000;
            //    //var geoCoord;
            //    //while (len--) {
            //    //    geoCoord = placeList[len % placeList.length].geoCoord;
            //    //    data.push({
            //    //        name: placeList[len % placeList.length].name + len,
            //    //        value: [
            //    //            geoCoord[0] + Math.random() * 0.5 - 0.282,
            //    //            geoCoord[1] + Math.random() * 0.5 - 0.212,
            //    //            Math.random() * 0.4 + 1
            //    //        ]
            //    //    })
            //    //}
            //    //
            //    //data.push(
            //    //    {name: '杭州', value: [119, 30.2, Math.random() * 0.4 + 1]},
            //    //    {name: '杭州', value: [119.2, 30.1, Math.random() * 0.4 + 1]},
            //    //    {name: '杭州', value: [119.3, 30.15, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [122.31, 30.43, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [122.32, 30.43, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [122.31, 30.45, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [122.1, 30.61, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [121.98, 30.71, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [121.97, 30.72, Math.random() * 0.4 + 1]},
            //    //    {name: '舟山', value: [122.45, 30.72, Math.random() * 0.4 + 1]}
            //    //);
            //    for (var i = 1500, len = points.length; i < len; i++) {
            //        tmpData.push({value: points[i].concat(Math.random() * 0.5 + 1)});
            //    }
            //    //angular.forEach(points, function(value, key){
            //    //    tmpData.push({value: value.concat(Math.random() * 0.4 + 1)});
            //    //});
            //    return tmpData;
            //}
            //
            //var myChart = echarts3.init(document.getElementsByClassName('leftBox')[0]);
            //$http.get('ownGeo/outPoints6000.json')
            //    .success(function (points) {
            //        console.log(points.length);
            //        var optionMap = {
            //            tooltip: {
            //                trigger: 'item',
            //                formatter: function (params) {
            //                    var res = params.data.name + '<hr style="margin: 2% 0"/>登记注册用户户数：<span style="color: yellow">' + params.data.hs +
            //                        '<br/></span>占全省百分比:<span style="color: yellow">' + (params.data.percentage * 100).toFixed(2) + '%</span>';
            //                    return res;
            //                }
            //            },
            //            geo: {
            //                map: '浙江',
            //                label: {
            //                    normal: {
            //                        show: false,
            //                        textStyle: {
            //                            color: '#fff'
            //                        }
            //                    },
            //                    emphasis: {
            //                        show: false,
            //                        textStyle: {
            //                            color: '#fff'
            //                        }
            //                    }
            //                },
            //                //roam: true,
            //                //aspectScale: 1,
            //                top: '10%',
            //                right: 0,
            //                bottom: 0,
            //                left: '15%',
            //                itemStyle: {
            //                    normal: {
            //                        borderWidth: 0.5,
            //                        borderColor: 'rgba(100,149,237,1)',
            //                        areaColor: 'rgba(0, 102, 229, 0)'
            //                    },
            //                    emphasis: {
            //                        //areaColor: 'rgb(23,150,200)'
            //                        borderWidth: 0.5,
            //                        borderColor: 'rgba(100,149,237,1)',
            //                        areaColor: 'rgba(0, 102, 229, 0)'
            //                    }
            //                }
            //            },
            //            series: [
            //                {
            //                    name: '浙江',
            //                    type: 'map',
            //                    mapType: '浙江',
            //                    top: '10%',
            //                    right: 0,
            //                    bottom: 0,
            //                    left: '15%',
            //                    data: [],
            //                    label: {
            //                        normal: {
            //                            show: true,
            //                            textStyle: {
            //                                color: '#fff'
            //                            }
            //                        },
            //                        emphasis: {
            //                            show: true,
            //                            textStyle: {
            //                                color: '#fff'
            //                            }
            //                        }
            //                    },
            //                    itemStyle: {
            //                        normal: {
            //                            borderWidth: 0.5,
            //                            borderColor: 'rgba(100,149,237,1)',
            //                            areaColor: 'rgba(0, 102, 229, 0)'
            //                        },
            //                        emphasis: {
            //                            //areaColor: 'rgb(23,150,200)'
            //                            borderWidth: 0.5,
            //                            borderColor: 'rgba(100,149,237,1)',
            //                            areaColor: 'rgba(0, 102, 229, 0)'
            //                        }
            //                    }
            //                },
            //                {
            //                    type: 'scatter',
            //                    coordinateSystem: 'geo',
            //                    data: randomData(points),
            //                    large: true,
            //                    symbol: 'diamond',
            //                    symbolSize: function (val) {
            //                        return val[2];
            //                    },
            //                    itemStyle: {
            //                        normal: {
            //                            shadowBlur: 2,
            //                            shadowColor: 'rgba(37, 140, 249, 0.8)',
            //                            color: 'rgba(37, 140, 249, 0.8)'
            //                        }
            //                    }
            //                }
            //            ]
            //        };
            //        $.get('ownGeo/zhejiang.json', function (geoJson) {
            //            echarts3.registerMap('浙江', geoJson);
            //            myChart.setOption(optionMap);
            //        });
            //    });
        });
    $scope.$on('$destroy', function () {
        $scope.myChart.dispose && $scope.myChart.dispose();
        $scope.myChart3.dispose && $scope.myChart3.dispose();
        $interval.cancel($scope.qsnsr_timer);
        $interval.cancel($scope.qsnsr_timer2);
        $interval.cancel($scope.qsnsr_timer3);

    });

}]);
