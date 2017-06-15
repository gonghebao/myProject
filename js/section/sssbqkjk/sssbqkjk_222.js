/**
 * Created by dingtianxiu on 2016/4/20.
 * 实时申报情况监控
 */
var app = angular.module("sssbApp", ['ui.alert']);
app.controller("sssbCtrl", ['$scope', 'mainService', '$location', '$http', '$interval', 'alertService', '$state', function ($scope, mainService, $location, $http, $interval, alertService, $state) {
    alertService.mask();
    $scope.carr = ['red', 'blue', 'green', 'gray', 'yellow', 'purple', 'lightgreen', 'darkorange', 'skyblue', 'pink'];
    $scope.myChart = echarts3.init(document.getElementById('sssbMap'));
    //地图坐标系
    var geoCoord = [
        {name: '省局直属局', value: [120.13, 30.27]},
        {name: '嘉兴市局本级', value: [120.76, 30.77]},
        {name: '嘉兴三局', value: [120.67, 30.51]},
        {name: '嘉善县局', value: [120.92, 30.84]},
        {name: '平湖市局', value: [121.02, 30.7]},
        {name: '海盐县局', value: [120.92, 30.53]},
        {name: '桐乡市局', value: [120.54, 30.64]},
        {name: '海宁市局', value: [120.69, 30.53]},
        {name: '杭州市局本级', value: [120.19, 30.26]},
        {name: '上城区', value: [120.17, 30.25]},
        {name: '下城区', value: [120.17, 30.28]},
        {name: '江干区', value: [120.2, 30.27]},
        {name: '拱墅区', value: [120.13, 30.32]},
        {name: '西湖区', value: [120.13, 30.27]},
        {name: '滨江区', value: [120.2, 30.2]},
        {name: '萧山区', value: [120.27, 30.17]},
        {name: '余杭区', value: [120.3, 30.42]},
        {name: '桐庐县局', value: [119.67, 29.8]},
        {name: '富阳市局', value: [119.95, 30.07]},
        {name: '临安县局', value: [119.72, 30.23]},
        {name: '余杭局', value: [120.3, 30.43]},
        {name: '淳安县局', value: [119.03, 29.6]},
        {name: '建德市局', value: [119.28, 29.48]},
        {name: '萧山局', value: [120.25, 30.16]},
        {name: '宁波直属分局', value: [121.55, 29.88]},
        {name: '保税区', value: [121.85, 29.92]},
        {name: '海曙区', value: [121.55, 29.87]},
        {name: '江东区', value: [121.57, 29.87]},
        {name: '江北区', value: [121.55, 29.88]},
        {name: '北仑区', value: [121.85, 29.93]},
        {name: '宁波高新分局', value: [121.61, 29.88]},
        {name: '东钱湖分局', value: [121.63, 29.79]},
        {name: '大榭开发区', value: [121.93, 29.89]},
        {name: '镇海区', value: [121.72, 29.95]},
        {name: '宁波杭州湾分局', value: [121.13, 30.25]},
        {name: '象山县', value: [121.87, 29.48]},
        {name: '宁海县', value: [121.43, 29.28]},
        {name: '余姚市', value: [121.15, 30.04]},
        {name: '鄞州区', value: [121.53, 29.83]},
        {name: '慈溪市', value: [121.23, 30.17]},
        {name: '奉化市', value: [121.4, 29.65]},
        {name: '宁波契税征收管理中心', value: [121.54, 29.88]},
        {name: '丽水市局本级', value: [119.92, 28.45]},
        {name: '龙泉市局', value: [119.13, 28.08]},
        {name: '青田县局', value: [120.28, 28.45]},
        {name: '云和县局', value: [119.56, 28.12]},
        {name: '庆元县局', value: [119.06, 27.61]},
        {name: '缙云县局', value: [120.6, 28.66]},
        {name: '遂昌县局', value: [119.25, 28.59]},
        {name: '松阳县局', value: [119.48, 28.46]},
        {name: '景宁县局', value: [119.63, 27.98]},
        {name: '温州市局本级', value: [120.65, 28.01]},
        {name: '洞头区局', value: [121.12, 27.84]},
        {name: '乐清市局', value: [120.94, 28.14]},
        {name: '永嘉县局', value: [120.68, 28.16]},
        {name: '平阳县局', value: [120.55, 27.68]},
        {name: '苍南县局', value: [120.36, 27.53]},
        //'文成县局': [120.09, 27.79],//位置在海上,坐标不准确
        {name: '泰顺县局', value: [119.7, 27.57]},
        {name: '瑞安市局', value: [120.62, 27.8]},
        {name: '湖州市局本级', value: [120.1, 30.86]},
        {name: '德清县局', value: [119.97, 30.57]},
        {name: '长兴县局', value: [119.9, 31.02]},
        {name: '安吉县局', value: [119.68, 30.68]},
        {name: '金华市局本级', value: [119.64, 29.12]},
        {name: '永康市局', value: [120.02, 28.92]},
        {name: '武义县局', value: [119.81, 28.9]},
        {name: '义乌市局', value: [120.06, 29.32]},
        {name: '浦江县局', value: [119.88, 29.46]},
        {name: '磐安县局', value: [119.48, 29.19]},
        {name: '兰溪市局', value: [119.46, 29.21]},
        {name: '东阳市局', value: [120.23, 29.29]},
        {name: '舟山市局本级', value: [122.2, 30]},
        {name: '定海区局', value: [122.11, 30.03]},
        {name: '普陀区局', value: [122.3, 29.95]},
        {name: '岱山县局', value: [122.3, 30.25]},
        {name: '嵊泗县局', value: [122.3, 30.73]},
        {name: '台州市局本级', value: [121.43, 28.68]},
        {name: '椒江区局', value: [121.44, 28.67]},
        {name: '路桥区局', value: [121.38, 28.58]},
        {name: '黄岩区局', value: [121.27, 28.64]},
        {name: '临海市局', value: [121.13, 28.8]},
        {name: '温岭市局', value: [121.36, 28.36]},
        {name: '仙居县局', value: [120.73, 28.85]},
        {name: '天台县局', value: [121.03, 29.15]},
        {name: '三门县局', value: [121.38, 29.11]},
        {name: '玉环县局', value: [121.23, 28.14]},
        {name: '衢州市局本级', value: [118.87, 28.93]},
        {name: '常山县局', value: [118.5, 28.9]},
        {name: '江山市局', value: [118.61, 28.74]},
        {name: '开化县局', value: [118.39, 29.15]},
        {name: '龙游县局', value: [119.17, 29.03]},
        {name: '绍兴市局本级', value: [120.58, 30.01]},
        {name: '柯桥区局', value: [120.49, 30.08]},
        {name: '新昌县局', value: [120.89, 29.49]},
        {name: '诸暨市局', value: [120.23, 29.71]},
        {name: '上虞区局', value: [120.87, 30.03]},
        {name: '嵊州市局', value: [120.81, 29.6]}
    ];
    $scope.points = [
        {name: '省局直属局', value: [120.13, 30.27]},
        {name: '嘉兴市局本级', value: [120.76, 30.77]},
        {name: '嘉兴三局', value: [120.67, 30.51]},
        {name: '嘉善县局', value: [120.92, 30.84]},
        {name: '平湖市局', value: [121.02, 30.7]},
        {name: '海盐县局', value: [120.92, 30.53]},
        {name: '桐乡市局', value: [120.54, 30.64]},
        {name: '海宁市局', value: [120.69, 30.53]},
        {name: '杭州市局本级', value: [120.19, 30.26]}
    ];
    var cityCenter = [
        {
            name: '杭州',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '湖州',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '嘉兴',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '宁波',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '绍兴',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '衢州',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '丽水',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '义务',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '温州',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '台州',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        },
        {
            name: '金华',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgb(245,198,81)'
                    }
                }
            }
        }
    ];
    var len = geoCoord.length;
    var convertData = function () {
        var res = [];
        for (var i = 0; i < 4; i++) {
            var ranVal = Math.floor(Math.random() * 10) + 3;
            var ranIndex = Math.floor(Math.random() * len);
            res.push({
                name: geoCoord[ranIndex].name,
                value: geoCoord[ranIndex].value.concat(ranVal)
            });
        }
        return res;
    };
    var scatter = convertData();
    var optionMap = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        geo: {
            map: '浙江县',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 600
                    }
                },
                emphasis: {
                    show: true
                }
            },
            //roam: true,
            aspectScale: 1,
            top: '10%',
            right: 0,
            bottom: 0,
            left: '5%',
            itemStyle: {
                normal: {
                    borderWidth: 1.2,
                    borderColor: '#0079DC',
                    areaColor: 'rgba(0, 102, 229, 0)'
                },
                emphasis: {
                    areaColor: 'rgb(23,150,200)'
                }
            },
            z: 3,
            regions: cityCenter
        },
        series: [
            //{
            //    type: 'effectScatter',
            //    coordinateSystem: 'geo',
            //    data: scatter,
            //    symbol: 'pin',
            //    symbolSize: function (val) {
            //        return [val[2]/2+1, val[2]/2+2];
            //    },
            //    //symbolRotate: 10,
            //    showEffectOn: 'render',
            //    rippleEffect: {
            //        brushType: 'stroke',
            //        period: 4,
            //        scale: 4
            //    },
            //    hoverAnimation: false,
            //    label: {
            //        emphasis: {
            //            formatter: '{b}',
            //            position: 'right',
            //            show: true
            //        }
            //    },
            //    itemStyle: {
            //        normal: {
            //            color: '#fffc27',
            //            shadowColor: 'rgba(220,220,220,0.1)',
            //            opacity: 0.2,
            //            shadowBlur: 100
            //        },
            //        emphasis: {
            //            color: '#f4e925',
            //            shadowBlur: 10,
            //            shadowColor: '#333'
            //        }
            //    },
            //    zlevel: 10
            //},
            {
                name: '浙江',
                type: 'map',
                mapType: '浙江',
                top: '10%',
                right: 0,
                bottom: 0,
                left: '5%',
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1.5,
                        borderColor: '#004BBD',
                        areaColor: '#0099EF'
                    },
                    emphasis: {
                        areaColor: 'rgb(23,150,200)'
                    }
                }
            }
        ]
    };
    $.get('ownGeo/zjdetail.json', function (geoJson) {
        echarts3.registerMap('浙江省', geoJson);
        $scope.myChart.setOption(optionMap);
        $scope.timer1 = $interval(function () {
            optionMap.series[0].data = (function () {
                var tmpIndex = Math.floor(Math.random() * len);
                var tmpVal = Math.floor(Math.random() * 10) + 3;
                scatter.shift();
                scatter.push({
                    name: geoCoord[tmpIndex].name,
                    value: geoCoord[tmpIndex].value.concat(tmpVal)
                });
                return scatter;
            })();
            $scope.myChart.setOption(optionMap);
        }, 1000);
    });
    /**http**/
    $scope.ssDate = '';
    var sssbtjsj = '';
    var ul_top = 0;
    var cishu = 0;
    //$http.get($scope.URL+"/sssb?sbtjsj=0&jgsj=300&flag=2&tybm=33")
    //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: 0, jgsj: 300, flag: 2, tybm: 33})
    $http.get("data_json/sssb/sbtjsj0jgsj300flag2tybm33.json")
        .success(function (data) {
            sssbtjsj = data.data[1].value;
            var sbGrid = JSON.parse(data.data[0].value)[0];
            var n_ss_bi = formt(parseInt(sbGrid.sbbs));
            var n_ss_yuan = formt(parseInt(sbGrid.sbje));
            console.log(n_ss_bi, n_ss_yuan);
            //$http.get($scope.URL + '/sssb?sbtjsj=0&jgsj=300&flag=1&tybm=33')
            //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: 0, jgsj: 300, flag: 1, tybm: 33})
            $http.get("data_json/sssb/sbtjsj0jgsj300flag1tybm33.json")
            .success(function (data_1) {
                    alertService.unmask();
                    //所有的数据获取 全部滚动显示完
                    var sssbGrid = JSON.parse(data_1.data[0].value);
                    $scope.data_all = [];
                    angular.copy(sssbGrid, $scope.data_all);
                    var data_time = 300000 / $scope.data_all.length;
                    var len = $scope.data_all.length;
                    var numberRun_ss_yuan = $(".numberRun_ss_yuan").numberAnimate({num: n_ss_yuan, speed: 1000});
                    var numberRun_ss_bi = $(".numberRun_ss_bi").numberAnimate({num: n_ss_bi, speed: 1000});
                    $(".mt-number-animate .mt-number-animate-dot").css({width: '20px', lineHeight: '30px'});
                    $(".mt-number-animate .mt-number-animate-dom").css({width: '20px'});
                    $(".mt-number-animate").css({height: '1.5rem', lineHeight: '1.5rem'});
                    $(".mt-number-animate .mt-number-animate-dom .mt-number-animate-span").css({
                        fontFamily: "Arial",
                        fontSize: '36px'
                    });
                    numberRun_ss_bi.resetData(n_ss_bi);
                    numberRun_ss_yuan.resetData(n_ss_yuan);
                    $scope.timer5 = $interval(function () {
                        if (cishu >= len) {
                            $interval.cancel($scope.timer5);
                            cishu = 0;
                        }
                        //console.log($scope.data_all.length);
                        //console.log("次数",cishu);
                        //console.log("笔数",$scope.data_all[cishu].sbbs);
                        if ($scope.data_all[cishu]) {
                            var n_ss = [];
                            for (var i = 0; i < n_ss_yuan.length; i++) {
                                if (n_ss_yuan[i] != ',') {
                                    n_ss.push(n_ss_yuan[i]);
                                }
                            }
                            n_ss = parseInt(n_ss.join(""));
                            n_ss += parseInt($scope.data_all[cishu].sbje);
                            //n_ss += 10000000;
                            n_ss_yuan = formt(n_ss);
                            //"12,312,31" =>1231231
                            var n_bi = [];
                            for (var i = 0; i < n_ss_bi.length; i++) {
                                if (n_ss_bi[i] != ',') {
                                    n_bi.push(n_ss_bi[i])
                                }
                            }
                            n_bi = parseInt(n_bi.join(""));
                            n_bi += parseInt($scope.data_all[cishu].sbbs);
                            //n_bi+=1000;
                            n_ss_bi = formt(n_bi);
                            numberRun_ss_bi.resetData(n_ss_bi);
                            numberRun_ss_yuan.resetData(n_ss_yuan);
                            cishu++
                            $(".mt-number-animate .mt-number-animate-dot").css({width: '20px', lineHeight: '30px'});
                            $(".mt-number-animate .mt-number-animate-dom").css({width: '20px'});
                            $(".mt-number-animate").css({height: '1.5rem', lineHeight: '1.5rem'});
                            $(".mt-number-animate .mt-number-animate-dom .mt-number-animate-span").css({
                                fontFamily: "Arial",
                                fontSize: '36px'
                            });
                        }
                    }, data_time);
                    //numberRun_ss_bi.resetData(n_ss_bi);
                    //numberRun_ss_yuan.resetData(n_ss_yuan);
                    sssbtjsj = data.data[1].value;
                    //bishu = data.root.sssbGrid.length;
                    //for (var i = 0; i < bishu; i++) {
                    //    zongshu += data.root.sssbGrid[i]['sbje'];
                    //}
                    $scope.companyData = [];
                    var arr_company = [];
                    if (sssbGrid.length > 300) {
                        $scope.companyData = sssbGrid.slice(0, 300)
                    } else {
                        arr_company = sssbGrid;
                        var arr_copy = [];
                        angular.copy(arr_company, arr_copy);
                        //for(var i= 0,j=arr_company.length;i<Math.floor(300/j)+1;i++){
                        //    //arr_company.push(sssbGrid[parseInt(Math.random()*sssbGrid.length)])
                        //    arr_company=arr_company.concat(arr_company);
                        //    //var len=300-arr_company.length;
                        //    //var tmp = arr_company.splice(0,len);
                        //}
                        for (var i = 0, j = arr_copy.length; i < 300 - j; i++) {
                            arr_company.push(arr_copy[parseInt(Math.random() * arr_copy.length)]);
                        }
                        $scope.companyData = arr_company;
                        $scope.companyData1 = $scope.companyData.splice(0, 10);
                        $scope.companyData2 = $scope.companyData.splice(0, 10);
                    }
                    $scope.ul_interval = $interval(function () {
                        if ($(".ul-1").length) {
                            $(".ul-1")[0].style.top = $(".ul-1")[0].offsetTop - 1 + "px";
                            if ($(".ul-1")[0].offsetTop - 0 <= -360) {
                                $(".ul-1")[0].style.top = 360 + "px";
                                if ($scope.companyData.length > 20) {
                                    $scope.companyData1 = $scope.companyData.splice(0, 10);
                                }
                            }
                            $(".ul-2")[0].style.top = $(".ul-2")[0].offsetTop - 1 + "px";
                            if ($(".ul-2")[0].offsetTop - 0 <= -360) {
                                $(".ul-2")[0].style.top = 360 + "px";
                                if ($scope.companyData.length > 20) {
                                    $scope.companyData2 = $scope.companyData.splice(0, 10);
                                }
                            }
                        } else {
                            $interval.cancel($scope.ul_interval)
                        }
                    }, 30);
                    $scope.stopTimer = $interval(function () {
                        //$http.get($scope.URL + '/sssb?sbtjsj=' + sssbtjsj + '&jgsj=300&flag=1&tybm=33')
                        //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: sssbtjsj, jgsj: 300, flag: 1, tybm: 33})
                        $http.get("data_json/sssb/sbtjsj0jgsj300flag1tybm33.json")
                            .success(function (data) {
                                var sssbGrid2 = JSON.parse(data.data[0].value);
                                //$scope.myChart2.setOption(option1);
                                $scope.data_all = [];
                                cishu = 0;
                                if ($scope.timer6) {
                                    $interval.cancel($scope.timer6);
                                }
                                if ($scope.timer5) {
                                    $interval.cancel($scope.timer5);
                                }
                                angular.copy(sssbGrid2, $scope.data_all);
                                //console.log("$scope.data_ll",$scope.data_all);
                                sssbtjsj = data.data[1].value;
                                var all = 0;
                                for (var i = 0; i < $scope.data_all.length; i++) {
                                    all += $scope.data_all[i].sbbs;
                                }
                                //console.log("一共加了 "+all+" 笔数");
                                var data_time = 300000 / $scope.data_all.length;
                                var len = $scope.data_all.length;
                                $scope.timer6 = $interval(function () {
                                    if (cishu >= len) {
                                        cishu = 0;
                                        $interval.cancel($scope.timer6);
                                    }
                                    //console.log($scope.data_all.length);
                                    //console.log("-次数2",cishu);
                                    //console.log("-笔数2",$scope.data_all[cishu].sbbs);
                                    if ($scope.data_all[cishu]) {
                                        var n_ss = [];
                                        for (var i = 0; i < n_ss_yuan.length; i++) {
                                            if (n_ss_yuan[i] != ',') {
                                                n_ss.push(n_ss_yuan[i]);
                                            }
                                        }
                                        n_ss = parseInt(n_ss.join(""));
                                        n_ss += parseInt($scope.data_all[cishu].sbje);
                                        n_ss_yuan = formt(n_ss);
                                        //"12,312,31" =>1231231
                                        var n_bi = [];
                                        for (var i = 0; i < n_ss_bi.length; i++) {
                                            if (n_ss_bi[i] != ',') {
                                                n_bi.push(n_ss_bi[i])
                                            }
                                        }
                                        n_bi = parseInt(n_bi.join(""));
                                        n_bi += parseInt($scope.data_all[cishu].sbbs);
                                        n_ss_bi = formt(n_bi);
                                        numberRun_ss_bi.resetData(n_ss_bi);
                                        numberRun_ss_yuan.resetData(n_ss_yuan);
                                        cishu++;
                                        $(".mt-number-animate .mt-number-animate-dot").css({
                                            width: '20px',
                                            lineHeight: '30px'
                                        });
                                        $(".mt-number-animate .mt-number-animate-dom").css({width: '20px'});
                                        $(".mt-number-animate").css({height: '1.5rem', lineHeight: '1.5rem'});
                                        $(".mt-number-animate .mt-number-animate-dom .mt-number-animate-span").css({
                                            fontFamily: "Arial",
                                            fontSize: '36px'
                                        });
                                    }
                                }, data_time);
                                $scope.carr = ['red', 'blue', 'green', 'gray', 'yellow', 'purple', 'lightgreen', 'darkorange', 'skyblue', 'pink'];
                                $scope.companyData = [];
                                if (sssbGrid2.length > 300) {
                                    $scope.companyData = sssbGrid2.slice(0, 300);
                                } else {
                                    arr_company = sssbGrid2;
                                    var arr_copy = [];
                                    angular.copy(arr_company, arr_copy);
                                    //for(var i= 0,j=arr_company.length;i<Math.floor(300/j)+1;i++){
                                    //    //arr_company.push(sssbGrid[parseInt(Math.random()*sssbGrid.length)])
                                    //    arr_company=arr_company.concat(arr_company);
                                    //    //var len=300-arr_company.length;
                                    //    //var tmp = arr_company.splice(0,len);
                                    //}
                                    for (var i = 0, j = arr_copy.length; i < 300 - j; i++) {
                                        arr_company.push(arr_copy[parseInt(Math.random() * arr_copy.length)]);
                                    }
                                    $scope.companyData = arr_company;
                                    $scope.companyData1 = $scope.companyData.splice(0, 10);
                                    $scope.companyData2 = $scope.companyData.splice(0, 10);
                                    //angular.copy(arr_company,$scope.companyData)
                                }

                                //requestAnimationFrame(function(){
                                //    var ul=$(".scroll_container").height();
                                //    var a=$(".scroll_container ul").height();
                                //    run();
                                //    if(ul<a){requestAnimationFrame(arguments.callee)}
                                //  })
                            })
                    }, 300000);
                    $scope.pointTimer = $interval(function () {
                        option1.series[0].markPoint = {
                            show: false,
                            symbol: 'diamond',
                            symbolSize: 20,
                            large: true,
                            effect: {
                                show: true
                            },
                            data: (function () {
                                var data = [];
                                var len = 10000;
                                var geoCoord;
                                while (len--) {
                                    geoCoord = placeList[len % placeList.length].geoCoord;
                                    data.push({
                                        name: placeList[len % placeList.length].name + len,
                                        value: 10,
                                        //geoCoord: [
                                        //    geoCoord[0] + Math.random() * 0.5 - 0.282,
                                        //    geoCoord[1] + Math.random() * 0.5 - 0.212
                                        //]
                                        geoCoord: placeList[len % placeList.length].geoCoord
                                    })
                                }
                                var n = Math.floor(Math.random() * data.length);
                                var n2 = Math.floor(Math.random() * data.length);
                                var n3 = Math.floor(Math.random() * data.length);
                                var n4 = Math.floor(Math.random() * data.length);
                                var n5 = Math.floor(Math.random() * data.length);
                                var n6 = Math.floor(Math.random() * data.length);
                                var n7 = Math.floor(Math.random() * data.length);
                                var n8 = Math.floor(Math.random() * data.length);

                                return [data[n], data[n2], data[n3], data[n4], data[n5], data[n6], data[n7], data[n8]];

                            })()
                        };
                        $scope.myChart2.setOption(option1)
                    }, 10000);
                })
                .error(function () {
                    alertService.unmask();
                });
            //$http.get($scope.URL + '/sbmc?bj=2')
            //$scope.post('CxglDtzs2016BLH_selectSbmc', {bj: 2})
            $http.get("data_json/sssb/bj2.json")
                .success(function (month) {
                    month = JSON.parse(month.data[0].value);
                    var month_name = [];
                    var month_value = [];
                    for (var i = 0; i < month.length; i++) {
                        month_name.push(month[i].sbsj);
                        month_value.push(month[i].sbjl);
                    }
                    for (var i = 0; i < month_name.length; i++) {
                        month_name[i] = /*month_name[i].slice(0,4)+"-"+*/month_name[i].slice(4, 6) + "-" + month_name[i].slice(6)
                    }
                    month_name[0] = {
                        value: month_name[0],
                        textStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    };
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
                            var lineChart = echarts.init(document.getElementById('sssb_canvas'));
                            option = {
                                color: ['yellow'],
                                title: {},
                                grid: {
                                    borderColor: 'rgb(7,37,109)'
                                },
                                tooltip: {
                                    trigger: 'axis',
                                    formatter: function (params) {
                                        return params[0].name + '<br/>'
                                            + params[0].seriesName + ' : ' + '<span style="color:yellow">' + params[0].value + ' </span>笔'
                                    }
                                },
                                legend: {
                                    data: ['申报量'],
                                    x: 'left',
                                    y: 'bottom',
                                    show: false,
                                    textStyle: {
                                        color: 'rgb(7,37,109)'
                                    }
                                    //selectedMode:'single',
                                    //selected:{
                                    //    '申报量':false
                                    //}
                                },
                                xAxis: [{
                                    //gridIndex:0,
                                    type: 'category',
                                    boundaryGap: false,
                                    minInterval: 1,
                                    show: true,
                                    splitNumber: 1,
                                    axisLabel: {
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    axisTick: {
                                        show: true,
                                        inside: true,
                                        lineStyle: {
                                            color: "rgb(7,37,109)"
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {color: 'rgb(7,37,109)'}
                                    },
                                    splitLine: {
                                        show: false,
                                        interval: 2,
                                        lineStyle: {
                                            color: ["rgb(7,37,109)"]
                                        }
                                    },
                                    data: month_name

                                }
                                ],
                                yAxis: [
                                    {
                                        // name: '申报量',
                                        type: 'value',
                                        //gridIndex:0,
                                        nameTextStyle: {
                                            color: 'rgba(0,0,0,0)'
                                        },
                                        axisTick: {
                                            show: true,
                                            inside: true,
                                            lineStyle: {
                                                color: "rgb(7,37,109)"
                                            }
                                        },
                                        splitLine: {
                                            show: false,
                                            lineStyle: {
                                                color: ["rgb(7,37,109)"]
                                            }
                                        },
                                        axisLine: {
                                            lineStyle: {
                                                color: 'rgb(7,37,109)',
                                                opacity: 0
                                            }
                                        },
                                        axisLabel: {
                                            formatter: function (d) {
                                                return '   ' + parseInt(d / 10000) + ' 万'
                                            },
                                            textStyle: {
                                                color: '#fff',
                                                align: 'left'
                                            }
                                        }
                                    }
                                ],
                                series: [
                                    {
                                        name: '申报量',
                                        type: 'line',
                                        //xAxisIndex:1,
                                        //yAxisIndex:1,
                                        setOption: {
                                            selected: true
                                        },
                                        itemStyle: {
                                            normal: {
                                                areaStyle: {type: 'default'}
                                            },
                                            emphasis: {},
                                            legendHoverLink: false
                                        },
                                        lineStyle: {
                                            normal: {
                                                color: "red"
                                            }
                                        },
                                        data: month_value
                                    }
                                ]
                            };
                            lineChart.setOption(option);
                        }
                    );
                    //$http.get($scope.URL + '/sbmc?bj=1')
                    //$scope.post('CxglDtzs2016BLH_selectSbmc', {bj: 1})
                    $http.get("data_json/sssb/bj1.json")
                    .success(function (data) {
                            alertService.unmask();
                            data = JSON.parse(data.data[0].value);
                            var r_sb_name = [];
                            var r_sb_value = [];
                            for (var i = 0; i < data.length; i++) {
                                r_sb_name.push(data[i].sbsj);
                                r_sb_value.push(data[i].sbjl)
                            }
                            for (var i = 0; i < r_sb_name.length; i++) {
                                r_sb_name[i] = r_sb_name[i].slice(r_sb_name[i].length - 4);
                                r_sb_name[i] = r_sb_name[i].slice(r_sb_name[i].length - 2) + ":00"
                            }
                            r_sb_name[0] = {
                                value: r_sb_name[0],
                                textStyle: {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }

                            yue.onclick = function () {
                                $(this).css("backgroundColor", "rgb(7,37,255)")
                                $("#ri").css("backgroundColor", "rgb(7,37,109)")
                                require(
                                    [
                                        'echarts',
                                        'echarts/chart/line'
                                    ],
                                    function (echarts) {
                                        var lineChart = echarts.init(document.getElementById('sssb_canvas'));
                                        option = {
                                            color: ['yellow'],
                                            title: {},
                                            grid: {
                                                borderColor: 'rgb(7,37,109)'
                                            },
                                            tooltip: {
                                                trigger: 'axis',
                                                formatter: function (params) {
                                                    return params[0].name + '<br/>'
                                                        + params[0].seriesName + ' : ' + '<span style="color:yellow">' + params[0].value + ' </span>笔'
                                                }
                                            },
                                            legend: {
                                                data: ['申报量'],
                                                x: 'left',
                                                y: 'bottom',
                                                show: false,
                                                textStyle: {
                                                    color: 'rgb(7,37,109)'
                                                }
                                                //selectedMode:'single',
                                                //selected:{
                                                //    '申报量':false
                                                //}
                                            },
                                            xAxis: [{
                                                //gridIndex:0,
                                                type: 'category',
                                                boundaryGap: false,
                                                minInterval: 1,
                                                show: true,
                                                splitNumber: 1,
                                                axisLabel: {
                                                    textStyle: {
                                                        color: '#fff'
                                                    }
                                                },
                                                axisTick: {
                                                    show: true,
                                                    inside: true,
                                                    lineStyle: {
                                                        color: "rgb(7,37,109)"
                                                    }
                                                },
                                                axisLine: {
                                                    lineStyle: {color: 'rgb(7,37,109)'}
                                                },
                                                splitLine: {
                                                    show: false,
                                                    interval: 2,
                                                    lineStyle: {
                                                        color: ["rgb(7,37,109)"]
                                                    }
                                                },
                                                data: month_name
                                            }
                                            ],
                                            yAxis: [
                                                {
                                                    // name: '申报量',
                                                    type: 'value',
                                                    //gridIndex:0,
                                                    nameTextStyle: {
                                                        color: 'rgba(0,0,0,0)'
                                                    },
                                                    axisTick: {
                                                        show: true,
                                                        inside: true,
                                                        lineStyle: {
                                                            color: "rgb(7,37,109)"
                                                        }
                                                    },
                                                    splitLine: {
                                                        show: false,
                                                        lineStyle: {
                                                            color: ["rgb(7,37,109)"]
                                                        }
                                                    },
                                                    axisLine: {
                                                        lineStyle: {
                                                            color: 'rgb(7,37,109)',
                                                            opacity: 0
                                                        }
                                                    },
                                                    axisLabel: {
                                                        formatter: function (d) {
                                                            return '   ' + parseInt(d / 10000) + ' 万'

                                                        },
                                                        textStyle: {
                                                            color: '#fff',
                                                            align: 'left'
                                                        }
                                                    }
                                                }
                                            ],
                                            series: [
                                                {
                                                    name: '申报量',
                                                    type: 'line',
                                                    //xAxisIndex:1,
                                                    //yAxisIndex:1,
                                                    setOption: {
                                                        selected: true
                                                    },
                                                    itemStyle: {
                                                        normal: {
                                                            areaStyle: {type: 'default'}
                                                        },
                                                        emphasis: {},
                                                        legendHoverLink: false
                                                    },
                                                    lineStyle: {
                                                        normal: {
                                                            color: "red"
                                                        }
                                                    },
                                                    data: month_value
                                                }
                                            ]
                                        };
                                        lineChart.setOption(option);
                                    }
                                );
                            };
                            ri.onclick = function () {
                                $(this).css("backgroundColor", "rgb(7,37,255)");
                                $("#yue").css("backgroundColor", "rgb(7,37,109)");
                                require(
                                    [
                                        'echarts',
                                        'echarts/chart/line'
                                    ],
                                    function (echarts) {
                                        var lineChart = echarts.init(document.getElementById('sssb_canvas'));
                                        option = {
                                            color: ['yellow'],
                                            title: {},
                                            grid: {
                                                borderColor: 'rgb(7,37,109)'
                                            },
                                            tooltip: {
                                                trigger: 'axis',
                                                formatter: function (params) {
                                                    return params[0].name + '<br/>'
                                                        + params[0].seriesName + ' : ' + '<span style="color:yellow">' + params[0].value + ' </span>笔'
                                                }
                                            },
                                            legend: {
                                                data: ['申报量'],
                                                x: 'left',
                                                y: 'bottom',
                                                show: false,
                                                textStyle: {
                                                    color: 'rgb(7,37,109)'
                                                }
                                                //selectedMode:'single',
                                                //selected:{
                                                //    '申报量':false
                                                //}
                                            },
                                            xAxis: [{
                                                //gridIndex:0,
                                                type: 'category',
                                                boundaryGap: false,
                                                minInterval: 1,
                                                show: true,
                                                splitNumber: 1,
                                                axisLabel: {
                                                    textStyle: {
                                                        color: '#fff'
                                                    }
                                                },
                                                axisTick: {
                                                    show: true,
                                                    inside: true,
                                                    lineStyle: {
                                                        color: "rgb(7,37,109)"
                                                    }
                                                },
                                                axisLine: {
                                                    lineStyle: {color: 'rgb(7,37,109)'}
                                                },
                                                splitLine: {
                                                    show: false,
                                                    interval: 2,
                                                    lineStyle: {
                                                        color: ["rgb(7,37,109)"]
                                                    }
                                                },
                                                data: r_sb_name

                                            }
                                            ],
                                            yAxis: [
                                                {
                                                    // name: '申报量',
                                                    type: 'value',
                                                    //gridIndex:0,
                                                    nameTextStyle: {
                                                        color: 'rgba(0,0,0,0)'
                                                    },
                                                    axisTick: {
                                                        show: true,
                                                        inside: true,
                                                        lineStyle: {
                                                            color: "rgb(7,37,109)"
                                                        }
                                                    },
                                                    splitLine: {
                                                        show: false,
                                                        lineStyle: {
                                                            color: ["rgb(7,37,109)"]
                                                        }
                                                    },
                                                    axisLine: {
                                                        lineStyle: {
                                                            color: 'rgb(7,37,109)',
                                                            opacity: 0
                                                        }
                                                    },
                                                    axisLabel: {
                                                        formatter: function (d) {
                                                            return "   " + d
                                                        },
                                                        textStyle: {
                                                            color: '#fff',
                                                            align: 'left'
                                                        }
                                                    }
                                                }
                                            ],
                                            series: [
                                                {
                                                    name: '申报量',
                                                    type: 'line',
                                                    //xAxisIndex:1,
                                                    //yAxisIndex:1,
                                                    setOption: {
                                                        selected: true
                                                    },
                                                    itemStyle: {
                                                        normal: {
                                                            areaStyle: {type: 'default'}
                                                        },
                                                        emphasis: {},
                                                        legendHoverLink: false
                                                    },
                                                    lineStyle: {
                                                        normal: {
                                                            color: "red"
                                                        }
                                                    },
                                                    data: r_sb_value
                                                }
                                            ]
                                        };
                                        lineChart.setOption(option);
                                    }
                                );
                            };
                        })
                })
                .error(function () {
                    alertService.unmask();
                });
            function formt(num) {
                num = num.toString().split("").reverse();
                var arr = [];
                for (var i = 0; i < num.length; i++) {
                    if (i % 3 == 0) {
                        arr.push(",")
                    }
                    arr.push(num[i])
                }
                arr = arr.reverse();
                if (arr[0] == ",") {
                    arr.splice(0, 1);
                }
                if (arr[arr.length - 1] == ",") {
                    arr.splice(arr.length - 1, 1)
                }
                return arr.join('');
            }
        })
        .error(function () {
            alertService.unmask();
        });

    //echarts2中动态点的实现
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
            $scope.myChart2 = echarts.init($('.pointBox')[0]);//jquery转换为dom对象
            //placeList = [
            //    {name:'嘉兴',geoCoord:[120.84, 30.70]},
            //    {name: '杭州', geoCoord: [120.19, 30.26]},
            //    {name: '上城区', geoCoord: [120.17, 30.25]},
            //    {name: '下城区', geoCoord: [120.17, 30.28]},
            //    {name: '江干区', geoCoord: [120.2, 30.27]},
            //    {name: '拱墅区', geoCoord: [120.13, 30.32]},
            //    {name: '西湖区', geoCoord: [120.13, 30.27]},
            //    {name: '滨江区', geoCoord: [120.2, 30.2]},
            //    {name: '萧山区', geoCoord: [120.27, 30.17]},
            //    {name: '余杭区', geoCoord: [120.3, 30.42]},
            //    {name: '桐庐县', geoCoord: [119.67, 29.8]},
            //    {name: '淳安县', geoCoord: [119.03, 29.6]},
            //    {name: '建德', geoCoord: [119.28, 29.48]},
            //
            //    ////{name: '宁波', geoCoord: [121.51, 29.88]},
            //    {name: '丽水', geoCoord: [119.92, 28.45]},
            //    {name: '义乌', geoCoord: [120.06, 29.32]},
            //    {name: '温州', geoCoord: [120.65, 28.01]},
            //    {name: '湖州', geoCoord: [119.90, 30.76]},
            //    {name: '金华', geoCoord: [119.64, 29.12]},
            //    //
            //    ////{name: '舟山', geoCoord: [122.2, 29.97]},
            //    {name: '台州', geoCoord: [121.43, 28.68]},
            //    {name: '衢州', geoCoord: [118.87, 28.93]},
            //    {name: '临安', geoCoord: [119.72, 30.23]},
            //    {name: '淳安', geoCoord: [119.05, 29.61]},
            //    ////{name: '镇海', geoCoord: [121.52, 29.73]},
            //    {name: '温州', geoCoord: [120.65, 28.01]},
            //
            //    {name: '瓯海', geoCoord: [120.65, 28.01]},
            //    {name: '永喜', geoCoord: [120.68, 28.16]},
            //    {name: '洞头', geoCoord: [121.02, 27.94]},
            //    {name: '平阳', geoCoord: [120.55, 27.68]},
            //    {name: '泰顺', geoCoord: [119.7, 27.77]},
            //    {name: '乐清', geoCoord: [120.94, 28.14]},
            //    {name: '瑞安', geoCoord: [120.52, 27.8]},
            //    {name: '文成', geoCoord: [120.08, 27.58]},
            //    {name: '苍南', geoCoord: [120.46, 27.63]},
            //    ////
            //    {name: '平湖', geoCoord: [120.84, 30.6]},
            //    {name: '桐乡', geoCoord: [120.57, 30.61]},
            //    {name: '嘉善', geoCoord: [120.90, 30.63]},
            //    {name: '海盐', geoCoord: [120.92, 30.53]},
            //    {name: '海宁', geoCoord: [120.69, 30.53]},
            //    ////
            //    {name: '德清', geoCoord: [120.08, 30.54]},
            //    {name: '安吉', geoCoord: [119.88, 30.68]},
            //    {name: '长兴', geoCoord: [119.91, 30.01]},
            //    ////
            //    //////{name:'定海',geoCoord: [122.11,30.03]},
            //    //////{name:'岱山',geoCoord: [122.2 ,30.26]},
            //    //////{name:'嵊四',geoCoord: [122.45,30.72]},
            //    //////{name:'普陀',geoCoord: [122.3 ,29.97 ]},
            //    ////{name: '鄞县', geoCoord: [121.46, 29.84]},
            //    ////{name: '象山', geoCoord: [121.8, 29.48]},
            //    ////{name: '奉化', geoCoord: [121.41, 29.66]},
            //    ////{name: '慈溪', geoCoord: [121.21, 30.14]},
            //    ////{name: '宁海', geoCoord: [121.42, 28.95]},
            //    ////{name: '余姚', geoCoord: [121.16, 30.04]},
            //    //
            //    {name: '绍兴', geoCoord: [120.58, 30.01]},
            //    {name: '新昌', geoCoord: [120.89, 29.49]},
            //    {name: '诸暨', geoCoord: [120.23, 29.71]},
            //    {name: '上虞', geoCoord: [120.87, 29.90]},
            //    {name: '嵊县', geoCoord: [120.81, 29.6]},
            //    {name: '椒江', geoCoord: [121.44, 28.67]},
            //    {name: '临海', geoCoord: [121.13, 28.8]},
            //    ////{name: '三门', geoCoord: [121.38, 29.11]},
            //    //
            //    {name: '温岭', geoCoord: [121.36, 28.36]},
            //    {name: '仙居', geoCoord: [120.73, 28.85]},
            //    {name: '天台', geoCoord: [121.03, 29.15]},
            //    {name: '黄岩', geoCoord: [121.27, 28.64]},
            //    {name: '玉环', geoCoord: [121.23, 28.14]},
            //    {name: '青田', geoCoord: [120.28, 28.45]},
            //    {name: '庆无', geoCoord: [119.16, 27.71]},
            //    {name: '遂昌', geoCoord: [119.25, 28.59]},
            //    {name: '缙云', geoCoord: [120.6, 28.66]},
            //    {name: '云和', geoCoord: [119.56, 28.12]},
            //    {name: '龙泉', geoCoord: [119.13, 28.08]},
            //    {name: '松阳', geoCoord: [119.48, 28.46]},
            //    {name: '浦江', geoCoord: [119.88, 29.46]},
            //    {name: '东阳', geoCoord: [120.23, 29.27]},
            //    {name: '武义', geoCoord: [119.81, 28.9]},
            //    {name: '江山', geoCoord: [118.71, 28.74]},
            //    {name: '开化', geoCoord: [118.39, 29.15]},
            //    {name: '衢州', geoCoord: [118.88, 28.97]},
            //    {name: '兰溪', geoCoord: [119.48, 29.19]},
            //    {name: '永康', geoCoord: [120.02, 28.92]},
            //    {name: '常山', geoCoord: [118.6, 28.9]}
            //];
            //共82；
            placeList = [
                //杭州市局本级
                {name: 330101, geoCoord: [120, 30.26]},
                {name: 330101, geoCoord: [120.1, 30.3]},
                {name: 330101, geoCoord: [120.1, 30.16]},
                //桐庐县局
                {name: 330122, geoCoord: [119.57, 29.65]},
                {name: 330122, geoCoord: [119.37, 29.85]},
                {name: 330122, geoCoord: [119.17, 29.9]},
                //富阳市局
                {name: 330123, geoCoord: [119.77, 30]},
                {name: 330123, geoCoord: [119.57, 29.9]},
                {name: 330123, geoCoord: [119.47, 30]},
                //临安县局
                {name: 330124, geoCoord: [119.52, 30.23]},
                {name: 330124, geoCoord: [119.22, 30.23]},
                {name: 330124, geoCoord: [119.12, 30.13]},
                //余杭局
                {name: 330125, geoCoord: [119.85, 30.26]},
                {name: 330125, geoCoord: [119.8, 30.4]},
                {name: 330125, geoCoord: [119.7, 30.26]},
                //建德市局
                {name: 330126, geoCoord: [119.28, 29.48]},
                {name: 330126, geoCoord: [119.18, 29.48]},
                {name: 330126, geoCoord: [119.08, 29.43]},
                //淳安县局
                {name: 330127, geoCoord: [118.2, 29.6]},
                {name: 330127, geoCoord: [118.7, 29.6]},
                {name: 330127, geoCoord: [118.6, 29.55]},
                //萧山局
                {name: 330181, geoCoord: [120.4, 30.26]},
                {name: 330181, geoCoord: [120.6, 30.3]},
                {name: 330181, geoCoord: [120.3, 30.16]},
                //宁波直属分局
                {name: 330201, geoCoord: [121.75, 29.9]},
                {name: 330201, geoCoord: [121.85, 29.9]},
                {name: 330201, geoCoord: [121.95, 30]},
                //象山县
                {name: 330225, geoCoord: [122, 29.48]},
                {name: 330225, geoCoord: [122, 29.38]},
                {name: 330225, geoCoord: [122.2, 29.48]},
                //宁海县
                {name: 330226, geoCoord: [121.42, 29.2]},
                {name: 330226, geoCoord: [121.62, 29.2]},
                {name: 330226, geoCoord: [121.62, 29.4]},
                //鄞州区
                {name: 330227, geoCoord: [121.46, 29.84]},
                {name: 330227, geoCoord: [121.56, 29.84]},
                {name: 330227, geoCoord: [121.6, 29.74]},
                //余姚市
                {name: 330281, geoCoord: [121.16, 30.04]},
                {name: 330281, geoCoord: [121.36, 29.9]},
                {name: 330281, geoCoord: [121.46, 29.96]},
                //慈溪市
                {name: 330282, geoCoord: [121.51, 30.14]},
                {name: 330282, geoCoord: [121.31, 30.24]},
                {name: 330282, geoCoord: [121.6, 30.2]},
                //奉化
                {name: 330283, geoCoord: [121.41, 29.66]},
                {name: 330283, geoCoord: [121.51, 29.6]},
                {name: 330283, geoCoord: [121.81, 29.56]},
                //温州
                {name: 330301, geoCoord: [120.8, 27.8]},
                {name: 330301, geoCoord: [120.6, 27.9]},
                {name: 330301, geoCoord: [120.5, 27.9]},
                //洞头
                {name: 330322, geoCoord: [121.22, 27.9]},
                {name: 330322, geoCoord: [121.22, 27.8]},
                {name: 330322, geoCoord: [121.32, 27.8]},
                //乐清
                {name: 330323, geoCoord: [121, 28.14]},
                {name: 330323, geoCoord: [121.2, 28.14]},
                {name: 330323, geoCoord: [121.2, 28.3]},
                //永嘉
                {name: 330324, geoCoord: [120.68, 28.16]},
                {name: 330234, geoCoord: [120.7, 28.36]},
                {name: 330324, geoCoord: [120.9, 28.4]},
                //平阳
                {name: 330326, geoCoord: [120.55, 27.6]},
                {name: 330326, geoCoord: [120.45, 27.5]},
                {name: 330326, geoCoord: [120.4, 27.6]},
                //苍南
                {name: 330327, geoCoord: [120.46, 27.33]},
                {name: 330327, geoCoord: [120.38, 27.23]},
                {name: 330327, geoCoord: [120.3, 27.33]},
                //文成
                {name: 330328, geoCoord: [119.9, 27.58]},
                {name: 330328, geoCoord: [119.8, 27.68]},
                {name: 330328, geoCoord: [119.8, 27.8]},
                //泰顺
                {name: 330329, geoCoord: [119.7, 27.47]},
                {name: 330329, geoCoord: [119.8, 27.47]},
                {name: 330329, geoCoord: [119.9, 27.37]},
                //瑞安
                {name: 330381, geoCoord: [120.52, 27.8]},
                {name: 330381, geoCoord: [120.42, 27.8]},
                {name: 330381, geoCoord: [120.40, 27.7]},
                //嘉兴
                {name: 330401, geoCoord: [120.9, 30.68]},
                {name: 330401, geoCoord: [120.66, 30.6]},
                {name: 330401, geoCoord: [120.8, 30.8]},
                //嘉善县局
                {name: 330421, geoCoord: [120.9, 30.9]},
                {name: 330421, geoCoord: [121, 30.95]},
                {name: 330421, geoCoord: [121.1, 30.9]},
                //海盐县局
                {name: 330424, geoCoord: [120.88, 30.53]},
                {name: 330424, geoCoord: [120.98, 30.53]},
                {name: 330424, geoCoord: [120.96, 30.46]},
                //平湖市局
                {name: 330422, geoCoord: [121.2, 30.7]},
                {name: 330422, geoCoord: [121.3, 30.7]},
                {name: 330422, geoCoord: [121.3, 30.75]},
                //桐乡市局
                {name: 330425, geoCoord: [120.57, 30.61]},
                {name: 330425, geoCoord: [120.47, 30.55]},
                {name: 330425, geoCoord: [120.3, 30.6]},
                //海宁市局
                {name: 330481, geoCoord: [120.69, 30.53]},
                {name: 330481, geoCoord: [120.75, 30.4]},
                {name: 330481, geoCoord: [120.73, 30.5]},
                //湖州市局本级
                {name: 330501, geoCoord: [119.90, 30.76]},
                {name: 330501, geoCoord: [120, 30.9]},
                {name: 330501, geoCoord: [120.3, 30.76]},

                //德清县局
                {name: 330521, geoCoord: [120.08, 30.54]},
                {name: 330521, geoCoord: [119.9, 30.6]},
                {name: 330521, geoCoord: [119.7, 30.5]},
                //长兴
                {name: 330522, geoCoord: [119.51, 30.9]},
                {name: 330522, geoCoord: [119.61, 31.1]},
                {name: 330522, geoCoord: [119.7, 31]},
                //安吉
                {name: 330523, geoCoord: [119.6, 30.68]},
                {name: 330523, geoCoord: [119.5, 30.78]},
                {name: 330523, geoCoord: [119.3, 30.68]},
                //绍兴市局本级
                {name: 330601, geoCoord: [120.58, 30.01]},
                {name: 330601, geoCoord: [120.48, 30.05]},
                {name: 330601, geoCoord: [120.68, 29.8]},
                //柯桥区局
                {name: 330621, geoCoord: [120.49, 30]},
                {name: 330621, geoCoord: [120.55, 30.08]},
                {name: 330621, geoCoord: [120.4, 30.08]},
                //新昌县局
                {name: 330624, geoCoord: [120.89, 29.4]},
                {name: 330624, geoCoord: [121.2, 29.4]},
                {name: 330624, geoCoord: [121, 29.33]},
                //诸暨市局
                {name: 330681, geoCoord: [120.23, 29.71]},
                {name: 330681, geoCoord: [120.43, 29.51]},
                {name: 330681, geoCoord: [120, 29.6]},
                //上虞
                {name: 330682, geoCoord: [120.87, 29.90]},
                {name: 330682, geoCoord: [120.97, 30.1]},
                {name: 330682, geoCoord: [121, 29.93]},
                //嵊州市局
                {name: 330683, geoCoord: [120.81, 29.6]},
                {name: 330683, geoCoord: [120.9, 29.5]},
                {name: 330683, geoCoord: [121, 29.63]},
                // 金华市局本级
                {name: 330701, geoCoord: [119.64, 29.12]},
                {name: 330701, geoCoord: [119.54, 29.1]},
                {name: 330701, geoCoord: [119.34, 28.9]},
                //永康市局
                {name: 330722, geoCoord: [120.02, 28.92]},
                {name: 330722, geoCoord: [119.9, 28.92]},
                {name: 330722, geoCoord: [120, 28.8]},
                //武义县局
                {name: 330723, geoCoord: [119.6, 28.9]},
                {name: 330723, geoCoord: [119.5, 28.85]},
                {name: 330723, geoCoord: [119.5, 28.7]},
                //义乌
                {name: 330725, geoCoord: [120.06, 29.32]},
                {name: 330725, geoCoord: [119.9, 29.3]},
                {name: 330725, geoCoord: [119.9, 29.12]},
                //磐安县局
                {name: 330727, geoCoord: [119.7, 29.1]},
                {name: 330727, geoCoord: [119.6, 29]},
                {name: 330727, geoCoord: [119.56, 29.1]},
                //浦江县局
                {name: 330726, geoCoord: [119.88, 29.46]},
                {name: 330726, geoCoord: [119.68, 29.4]},
                {name: 330726, geoCoord: [119.78, 29.55]},
                //东阳市
                {name: 330783, geoCoord: [120.23, 29.27]},
                {name: 330783, geoCoord: [120.4, 29.27]},
                {name: 330783, geoCoord: [120.33, 29.1]},
                //兰溪市局
                {name: 330781, geoCoord: [119.48, 29.25]},
                {name: 330781, geoCoord: [119.48, 29.35]},
                {name: 330781, geoCoord: [119.28, 29.3]},
                //玉环
                {name: 332627, geoCoord: [121.54, 28.14]},
                {name: 332627, geoCoord: [121.44, 28.14]},
                {name: 332627, geoCoord: [121.40, 28.04]},
                //三门
                {name: 332626, geoCoord: [121.58, 29.01]},
                {name: 332626, geoCoord: [121.68, 28.90]},
                {name: 332626, geoCoord: [121.88, 28.94]},
                //天台
                {name: 332625, geoCoord: [121.03, 29.15]},
                {name: 332625, geoCoord: [120.90, 29.06]},
                {name: 332625, geoCoord: [121.30, 29.12]},
                //仙居
                {name: 332624, geoCoord: [120.73, 28.85]},
                {name: 332624, geoCoord: [120.78, 28.60]},
                {name: 332624, geoCoord: [120.42, 28.57]},
                //温岭
                {name: 332623, geoCoord: [121.48, 28.36]},
                {name: 332623, geoCoord: [121.58, 28.28]},
                {name: 332623, geoCoord: [121.72, 28.38]},
                //临海
                {name: 332621, geoCoord: [121.13, 28.8]},
                {name: 332621, geoCoord: [121.33, 28.8]},
                {name: 332621, geoCoord: [121.53, 28.8]},
                //黄岩
                {name: 332604, geoCoord: [121.12, 28.57]},
                {name: 332604, geoCoord: [121.27, 28.61]},
                {name: 332604, geoCoord: [121.37, 28.57]},
                //椒江
                {name: 332602, geoCoord: [121.46, 28.63]},
                {name: 332602, geoCoord: [121.56, 28.63]},
                {name: 332602, geoCoord: [121.66, 28.63]},
                //台州市局本级
                {name: 332601, geoCoord: [121.43, 28.52]},
                {name: 332601, geoCoord: [121.58, 28.52]},
                {name: 332601, geoCoord: [121.77, 28.52]},
                //景宁县局
                {name: 332529, geoCoord: [119.13, 27.73]},
                {name: 332529, geoCoord: [119.33, 27.82]},
                {name: 332529, geoCoord: [119.53, 27.96]},
                //松阳
                {name: 332528, geoCoord: [118.98, 28.32]},
                {name: 332528, geoCoord: [119.18, 28.46]},
                {name: 332528, geoCoord: [119.38, 28.32]},
                //遂昌
                {name: 332527, geoCoord: [118.35, 28.29]},
                {name: 332527, geoCoord: [118.55, 28.39]},
                {name: 332527, geoCoord: [118.88, 28.59]},
                //缙云
                {name: 332526, geoCoord: [119.8, 28.66]},
                {name: 332526, geoCoord: [120.1, 28.46]},
                {name: 332526, geoCoord: [120.2, 28.66]},
                //庆元县局
                {name: 332525, geoCoord: [118.60, 27.51]},
                {name: 332525, geoCoord: [118.90, 27.51]},
                {name: 332525, geoCoord: [119.16, 27.51]},
                //云和
                {name: 332523, geoCoord: [119.16, 28.12]},
                {name: 332523, geoCoord: [119.26, 27.99]},
                {name: 332523, geoCoord: [119.36, 28.12]},
                //青田
                {name: 332522, geoCoord: [119.8, 28.15]},
                {name: 332522, geoCoord: [120.1, 28.25]},
                {name: 332522, geoCoord: [120.2, 28.05]},
                //龙泉
                {name: 332502, geoCoord: [118.43, 28.08]},
                {name: 332502, geoCoord: [118.63, 27.9]},
                {name: 332502, geoCoord: [118.93, 28.08]},
                //丽水
                {name: 332501, geoCoord: [119.5, 28.32]},
                {name: 332501, geoCoord: [119.6, 28.52]},
                {name: 332501, geoCoord: [119.88, 28.40]},
                //嵊泗
                {name: 330922, geoCoord: [122.35, 30.7]},
                {name: 330922, geoCoord: [122.78, 30.43]},
                {name: 330922, geoCoord: [122.88, 30.7]},
                //岱山
                {name: 330921, geoCoord: [122.5, 30.28]},
                {name: 330921, geoCoord: [122.6, 30.24]},
                {name: 330921, geoCoord: [122.8, 30.24]},
                //普陀
                {name: 330903, geoCoord: [122.2, 29.97]},
                {name: 330903, geoCoord: [122.4, 30.1]},
                {name: 330903, geoCoord: [122.6, 29.97]},
                //定海
                {name: 330902, geoCoord: [122.7, 29.97]},
                {name: 330902, geoCoord: [122.8, 29.97]},
                {name: 330902, geoCoord: [122.9, 29.86]},
                //舟山市局本级
                {name: 330901, geoCoord: [122.7, 29.97]},
                {name: 330901, geoCoord: [122.5, 30.28]},
                {name: 330901, geoCoord: [122.78, 30.43]},
                //龙游
                {name: 330825, geoCoord: [118.82, 28.80]},
                {name: 330825, geoCoord: [118.87, 28.93]},
                {name: 330825, geoCoord: [118.89, 29.05]},
                //开化
                {name: 330824, geoCoord: [117.47, 29.05]},
                {name: 330824, geoCoord: [117.79, 29.03]},
                {name: 330824, geoCoord: [117.92, 29.18]},
                //江山
                {name: 330823, geoCoord: [118.21, 28.74]},
                {name: 330823, geoCoord: [118.11, 28.54]},
                {name: 330823, geoCoord: [118.01, 28.34]},
                //常山
                {name: 330822, geoCoord: [117.81, 28.86]},
                {name: 330822, geoCoord: [118.01, 28.90]},
                {name: 330822, geoCoord: [118.11, 29.06]},
                //衢州市局本级
                {name: 330801, geoCoord: [118.37, 28.56]},
                {name: 330801, geoCoord: [118.51, 28.90]},
                {name: 330801, geoCoord: [118.61, 29.06]},
            ];
            require('echarts/util/mapData/params').params.zj = {
                getGeoJson: function (callback) {
                    $.getJSON('ownGeo/zhejiang.json', function (data) {
                        // 压缩后的地图数据必须使用 decode 函数转换
                        callback(require('echarts/util/mapData/params').decode(data));
                    })
                }
                //取得浙江省地图。。。没法调出二级。。。暂时放弃
            };
            option1 = {
                // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: [
                    // 'rgba(14, 241, 242, 0.8)',
                    //  'rgba(0 ,80,255, 0.3)'
                    'rgba(14,241,242,0.3)',
                    'rgba(0 ,80,255, 0.3)'
                ],
                legend: {
                    orient: 'vertical',
                    show: false,
                    x: 'right',
                    y: 'bottom',
                    data: ['个人', '企业'],
                    textStyle: {
                        color: '#fff',
                        fontSize: '16'
                    }
                },
                series: [
                    {
                        name: '个人',
                        type: 'map',
                        mapType: 'zj',
                        showLegendSymbol: false,
                        roam: false,
                        clickable: false,
                        hoverable: false,
                        mapLocation: {
                            x: '15%',
                            y: '10%',
                            width: '85%',
                            height: '90%'
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(100,149,237,0)',
                                borderWidth: 1.5,
                                areaStyle: {
                                    color: 'rgba(30,80,80,0)'
                                }
                            },
                            emphasis: {
                                label: {
                                    textStyle: {color: 'red'},
                                    show: false
                                },
                                areaStyle: {
                                    color: 'rgba(0,0,0,0)'
                                },
                                borderColor: 'rgba(200,249,137,0)',
                                borderWidth: 0.5,
                                color: 'rgba(200,249,137,0)'

                            }
                        },
                        data: [],
                        markPoint: {
                            show: false,
                            symbolSize: 3,
                            large: true,
                            clickable: false,
                            effect: {
                                show: true
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgb(242,80,14)'
                                }
                            },
                            //处理随机点的布局
                            data: (function () {
                                var data = [];
                                var len = 10000;
                                var geoCoord;
                                while (len--) {
                                    geoCoord = placeList[len % placeList.length].geoCoord;
                                    data.push({
                                        name: placeList[len % placeList.length].name + len,
                                        value: 10,
                                        geoCoord: [
                                            geoCoord[0] + Math.random() * 0.5 - 0.182,
                                            geoCoord[1] + Math.random() * 0.5 - 0.112
                                        ]
                                    })
                                }

                                data.push(
                                    {name: '杭州', geoCoord: [119, 30.2]},
                                    {name: '杭州', geoCoord: [119.2, 30.1]},
                                    {name: '杭州', geoCoord: [119.3, 30.15]},
                                    {name: '舟山', geoCoord: [122.31, 30.43]},
                                    {name: '舟山', geoCoord: [122.32, 30.43]},
                                    {name: '舟山', geoCoord: [122.31, 30.45]},
                                    {name: '舟山', geoCoord: [122.1, 30.61]},
                                    {name: '舟山', geoCoord: [121.98, 30.71]},
                                    {name: '舟山', geoCoord: [121.97, 30.72]},
                                    {name: '舟山', geoCoord: [122.45, 30.72]}
                                );
                                return [];
                            })()
                        }
                    }
                ]
            };
            $scope.myChart2.setOption(option1);

        });

    $scope.$on('$destroy', function () {
        $interval.cancel($scope.timer1);
        $interval.cancel($scope.timer2);
        $interval.cancel($scope.timer5);
        $interval.cancel($scope.timer6);
        $interval.cancel($scope.stopTimer);
        $interval.cancel($scope.pointTimer);
        $interval.cancel($scope.ul_interval);
        $scope.myChart.dispose();
        $scope.myChart2.dispose();
    });
}
]);
app.factory('mainService', ['$http', '$q', function ($http, $q) {
    return {
        query: function (url, date) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url,
                // 'http://144.16.55.49:8088/gt3/dtzs/sssbdt'
                params: {
                    sssbtjsj: date
                }
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function () {
                });
            return defer.promise;
        }
    }
}]);
