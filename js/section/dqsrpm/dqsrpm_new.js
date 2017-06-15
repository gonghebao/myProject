/**
 * Created by dingtianxiu on 16/5/9.
 * decription:地区收入排名
 */
var app = angular.module("srpmApp", ['ui.alert']);
app.controller("srpmCtrl", ['$scope', 'sspmMainService', '$http', 'alertService', '$filter', '$interval', function ($scope, sspmMainService, $http, alertService, $filter, $interval) {
    alertService.mask();
    $scope.years = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
    $scope.selectedYear = $scope.curYear;

    //定义失去的自动显示顺序
    var city1Index = 0;
    var city1 = ['湖州市', '嘉兴市', '杭州市', '绍兴市', '宁波市', '舟山市', '衢州市', '金华市', '台州市', '丽水市', '温州市'];
    //定义每个市各个县的自动显示顺序
    var city2Index = 0;
    var city2 = {
        '湖州市': ['长兴县', '湖州市区', '安吉县', '德清县'],
        '嘉兴市': ['嘉善县', '嘉兴市区', '桐乡市', '海宁市', '海盐县', '平湖市'],
        '杭州市': ['余杭区', '杭州市区', '萧山区', '临安市', '富阳区', '桐庐县', '淳安县', '建德市'],
        '绍兴市': ['柯桥区', '越城区', '上虞区', '诸暨市', '嵊州市', '新昌县'],
        '宁波市': ['余姚市', '慈溪市', '宁波市区', '勤州区', '奉化市', '宁海县', '象山县'],
        '舟山市': ['嵊泗县', '岱山县', '定海区', '普陀区'],
        '衢州市': ['开化县', '常山县', '衢州市区', '龙游县', '江山市'],
        '金华市': ['浦江县', '兰溪市', '义乌市', '东阳市', '金华市区', '武义县', '永康市', '磐安县'],
        '台州市': ['天台县', '三门县', '仙居县', '临海市', '黄岩区', '椒江区', '路桥区', '温岭市', '玉环县'],
        '丽水市': ['遂昌县', '松阳县', '丽水市区', '缙云县', '龙泉市', '云和县', '青田县', '庆元县', '景宁畲族自治区'],
        '温州市': ['永嘉县', '乐清市', '温州市区', '泰顺县', '文成县', '瑞安市', '平阳县', '苍南县']
    };

    //$http.get($scope.URL + '/srlx?ny=201605')
    //    .success(function (data) {
    //$scope.post('CxglDtzs2016BLH_selectSrlx', {ny:201605})
    $http.get('./data_json/srpm/bm.json')
        .success(function (data) {
            $scope.srlx = JSON.parse(data.data[0].value);
        })
        .error(function () {
            alertService.unmask();
        });
    $scope.selectedSrlx = 1;
    var codeTable = {
        //杭州
        "330101": "杭州市区",//西湖区、拱墅区、上城区、下城区、滨江区
        "330122": "桐庐县",
        "330123": "富阳区",
        "330124": "临安市",
        "330125": "余杭区",
        "330126": "建德市",
        "330127": "淳安县",
        "330181": "萧山区",
        //宁波
        "330201": "宁波市区",//北仑区、镇海区、江北区、江东区、海曙区
        "330225": "象山县",
        "330226": "宁海县",
        "330227": "鄞州区",
        "330281": "余姚市",
        "330282": "慈溪市",
        "330283": "奉化市",
        //"330285": "宁波契税征收管理中心",
        //温州
        "330301": "温州市区",//鹿城区、龙湾区、瓯海区
        //"330322": "洞头区局",
        "330323": "乐清市",
        "330324": "永嘉县",
        "330326": "平阳县",
        "330327": "苍南县",
        "330328": "文成县",
        "330329": "泰顺县",
        "330381": "瑞安市",
        //嘉兴
        "330401": "嘉兴市区",//南湖区、秀洲区
        "330421": "嘉善县",
        "330422": "平湖市",
        "330424": "海盐县",
        "330425": "桐乡市",
        "330481": "海宁市",
        //湖州
        "330501": "湖州市区",//南浔区、吴兴区
        "330521": "德清县",
        "330522": "长兴县",
        "330523": "安吉县",
        //绍兴
        "330601": "越城区",//越城区>>绍兴市局本级
        "330621": "柯桥区",
        "330624": "新昌县",
        "330681": "诸暨市",
        "330682": "上虞区",
        "330683": "嵊州市",
        //金华
        "330701": "金华市区",//金东区、婺城区
        "330722": "永康市",
        "330723": "武义县",
        "330725": "义乌市",
        "330726": "浦江县",
        "330727": "磐安县",
        "330781": "兰溪市",
        "330783": "东阳市",
        //衢州
        "330801": "衢州市区",//柯城区、衢江区
        "330822": "常山县",
        "330823": "江山市",
        "330824": "开化县",
        "330825": "龙游县",
        //舟山
        "330901": "舟山市区",
        "330902": "定海区",
        "330903": "普陀区",
        "330921": "岱山县",
        "330922": "嵊泗县",
        //丽水
        "332501": "丽水市区",
        "332502": "龙泉市",
        "332522": "青田县",
        "332523": "云和县",
        "332525": "庆元县",
        "332526": "缙云县",
        "332527": "遂昌县",
        "332528": "松阳县",
        "332529": "景宁畲族自治县",
        //台州
        "332601": "台州市区",
        "332602": "椒江区",
        "332603": "路桥区",
        "332604": "黄岩区",
        "332621": "临海市",
        "332623": "温岭市",
        "332624": "仙居县",
        "332625": "天台县",
        "332626": "三门县",
        "332627": "玉环县"
    };


    var cityData = ['杭州市', '湖州市', '金华市', '嘉兴市', '丽水市', '宁波市', '衢州市', '绍兴市', '台州市', '温州市', '舟山市'];

    var hzData = {};
    var nbData = {};
    var wzData = {};
    var jxData = {};
    var huzData = {};
    var sxData = {};
    var jhData = {};
    var qzData = {};
    var zsData = {};
    var lsData = {};
    var tzData = {};
    $scope.mapData = [];

    $scope.myChart = echarts3.init(document.getElementById('srpmMap'));
    //option初始化设置
    var option = {
        tooltip: {
            trigger: 'item',
            position: 'inside',
            hideDelay: 3000,
            formatter: function (params) {
                var res = params.data.name + '<hr style="margin: 2% 0"/>' +
                    '<span style="float: left"> 税收收入：</span><span style="color: yellow; float: right;">' + $filter('number')(params.data.nLj / 10000, 2) + '</span><br/>' +
                    '<span style="float: left"> 税收增幅：</span><span style="color: yellow; float: right;">' + $filter('number')(params.data.zf * 100, 2) + '%</span>'
                return res;
            }
        },
        series: [
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
                        show: true,
                        textStyle: {
                            color: '#e4393c',
                            fontWeight: "bold",
                            fontSize: 16,
                            fontFamily: '方正小标宋简体'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 16,
                            fontFamily: '方正小标宋简体'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#065fb3',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#002957' //地图正常颜色
                        }
                    },
                    emphasis: {
                        borderColor: 'rgba(200,249,137,0.1)',
                        borderWidth: 0.5,
                        color: '#15cbff' //地图mouseover颜色
                    }
                },
                data: []
            }
        ]
    };
    var colors = ['#032e6b', '#063f8f', '#265fa3', '#0450bc', '#356cbc', '#0060ff', '#0098ff', '#64a0f9', '#73acff', '#bed4f4', '#FFFFEC'];

    function getCityData() {
        alertService.mask();
        //$http.get($scope.URL + '/srdb?qsnf=' + $scope.selectedYear + '&zznf=' + $scope.selectedYear + '&tybm=' + $scope.tybm + '&bj=0')
        //    .success(function (cityData) {
        //$scope.post('CxglDtzs2016BLH_selectSrdb', {qsnf:$scope.selectedYear , zznf:$scope.selectedYear,tybm:$scope.tybm,bj:0})
        $http.get('./data_json/srpm/'+$scope.selectedYear+'tybm'+$scope.tybm+'.json')
            .success(function (cityData) {
                console.log("new cityData",cityData);
                //var cityValue = cityData.root[$scope.selectedYear];
                var cityValue = JSON.parse(cityData.data[0].value);
                console.log("cityV",cityValue);
                var cityMapData = {};
                angular.forEach(cityValue, function (value, key) {
                    if (codeTable[value.tybm]) {
                        if (value.xmbmSz === $scope.selectedSrlx) {
                            switch (value.tybm) {
                                case value.tybm:
                                    if (!cityMapData[value.tybm]) {
                                        cityMapData[value.tybm] = {};
                                    }
                                    cityMapData[value.tybm].name = codeTable[value.tybm];
                                    cityMapData[value.tybm].nLj = value.nLj;
                                    cityMapData[value.tybm].zf = value.zf;
                            }
                        }
                    }
                });
                var fmtMapData = [];
                angular.forEach(cityMapData, function (value, key) {
                    fmtMapData.push(value);
                });
                var sortedSssr = fmtMapData.concat([]).sort(function (a, b) {
                    return b.nLj - a.nLj;
                });

                var sortedZf = fmtMapData.concat([]).sort(function (a, b) {
                    return b.zf - a.zf;
                });

                $scope.ss_dada_2 = sortedZf;
                $scope.ss_dada = sortedSssr;
                angular.forEach(sortedSssr, function (value, key) {
                    value.itemStyle = {};
                    value.itemStyle.normal = {};
                    value.itemStyle.normal.areaColor = colors[key];
                });
                option.series[0].data = fmtMapData;
                option.series[0].name = $scope.jsonName;
                option.series[0].mapType = $scope.jsonName;
                $.get('ownGeo/zhejiang.json', function (geoJson) {
                    echarts3.registerMap('浙江', geoJson);
                    console.log(geoJson);
                    $scope.myChart.setOption(option);
                });
                //$scope.myChart.setOption(option);
                alertService.unmask();
            })
            .error(function () {
                alertService.unmask();
            });
    }

    $scope.myChart.on('click', function (params) {
        if (option.series[0].name === "浙江") {
            $scope.jsonName = params.name;
            $scope.tybm = params.data.tybm;
            //点击地图发起请求 参数为变量3301
            getCityData();
        } else {
            angular.forEach($scope.mapData, function (value, key) {
                value.itemStyle = {};
                value.itemStyle.normal = {};
                value.itemStyle.normal.areaColor = colors[key];
            });
            option.series[0].data = $scope.mapData;
            option.series[0].name = '浙江';
            option.series[0].mapType = '浙江';
            $.get('ownGeo/zhejiang.json', function (geoJson) {
                echarts3.registerMap('浙江', geoJson);
                console.log(geoJson);
                $scope.myChart.setOption(option);
            });
            //$scope.myChart.setOption(option);
            $scope.ss_dada_2 = $scope.provienceZf;
            $scope.ss_dada = $scope.provienceSssr;
            $scope.$apply();
        }
    });
    $scope.changeSrlx = function () {
        alertService.mask();
        if (option.series[0].name === "浙江") {
            $scope.mapData = [];
            //数据压入mapData
            $scope.mapData.push(hzData[$scope.selectedSrlx], wzData[$scope.selectedSrlx], jhData[$scope.selectedSrlx], huzData[$scope.selectedSrlx], jxData[$scope.selectedSrlx], sxData[$scope.selectedSrlx], qzData[$scope.selectedSrlx], zsData[$scope.selectedSrlx], lsData[$scope.selectedSrlx], tzData[$scope.selectedSrlx]);
            if (!nbData[$scope.selectedSrlx]) {
                nbData[$scope.selectedSrlx] = {
                    name: "宁波市",
                    nLj: 0,
                    pLj: 0,
                    zf: 0,
                    tybm: '3302'
                };
            }
            $scope.mapData.push(nbData[$scope.selectedSrlx]);

            $scope.mapData.sort(by('nLj'));
            $scope.provienceSssr = $scope.mapData;
            data_2 = $scope.mapData.concat([]);
            data_2.sort(by('zf'));
            $scope.provienceZf = data_2;
            $scope.ss_dada_2 = data_2;
            //配置地图数据
            $scope.ss_dada = $scope.mapData;
            angular.forEach($scope.mapData, function (value, key) {
                value.itemStyle = {};
                value.itemStyle.normal = {};
                value.itemStyle.normal.areaColor = colors[key];
            });
            option.series[0].data = $scope.mapData;
            $.get('ownGeo/zhejiang.json', function (geoJson) {
                echarts3.registerMap('浙江', geoJson);
                console.log(geoJson);
                $scope.myChart.setOption(option);
            });
            //$scope.myChart.setOption(option);
        } else {
            getCityData();
        }
        alertService.unmask();
    };

    $scope.changeYear = function () {
        alertService.mask();
        //sspmMainService.query($scope.URL + '/srdb?', $scope.selectedYear, $scope.selectedYear, '33', '0')
        //    .then(
        //    function (data) {
        //$scope.post('CxglDtzs2016BLH_selectSrdb', {qsnf:$scope.selectedYear , zznf:$scope.selectedYear,tybm:'33',bj:0})
        $http.get('./data_json/srpm/'+$scope.selectedYear+'.json')
            .success(function (data) {
                console.log("data",data);
                $scope.mapData = [];
                //$scope.dsData = data.data[$scope.selectedYear];
                $scope.dsData = JSON.parse(data.data[0].value);
                console.log("dsData",$scope.dsData);
                for (var i = 0, len = $scope.dsData.length; i < len; i++) {
                    switch (parseInt($scope.dsData[i].tybm)) {
                        case 3301:
                            // hzData.push($scope.dsData[i]);
                            if (!hzData[$scope.dsData[i].xmbmSz]) {
                                hzData[$scope.dsData[i].xmbmSz] = {};
                            }
                            hzData[$scope.dsData[i].xmbmSz].name = "杭州市";
                            hzData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            hzData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            hzData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            hzData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3302:
                            if (!nbData[$scope.dsData[i].xmbmSz]) {
                                nbData[$scope.dsData[i].xmbmSz] = {};
                            }
                            nbData[$scope.dsData[i].xmbmSz].name = "宁波市";
                            nbData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            nbData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            nbData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            nbData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3303:
                            if (!wzData[$scope.dsData[i].xmbmSz]) {
                                wzData[$scope.dsData[i].xmbmSz] = {};
                            }
                            wzData[$scope.dsData[i].xmbmSz].name = "温州市";
                            wzData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            wzData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            wzData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            wzData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3304:
                            if (!jxData[$scope.dsData[i].xmbmSz]) {
                                jxData[$scope.dsData[i].xmbmSz] = {};
                            }
                            jxData[$scope.dsData[i].xmbmSz].name = "嘉兴市";
                            jxData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            jxData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            jxData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            jxData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3305:
                            if (!huzData[$scope.dsData[i].xmbmSz]) {
                                huzData[$scope.dsData[i].xmbmSz] = {};
                            }
                            huzData[$scope.dsData[i].xmbmSz].name = "湖州市";
                            huzData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            huzData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            huzData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            huzData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3306:
                            if (!sxData[$scope.dsData[i].xmbmSz]) {
                                sxData[$scope.dsData[i].xmbmSz] = {};
                            }
                            sxData[$scope.dsData[i].xmbmSz].name = "绍兴市";
                            sxData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            sxData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            sxData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            sxData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3307:
                            if (!jhData[$scope.dsData[i].xmbmSz]) {
                                jhData[$scope.dsData[i].xmbmSz] = {};
                            }
                            jhData[$scope.dsData[i].xmbmSz].name = "金华市";
                            jhData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            jhData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            jhData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            jhData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3308:
                            if (!qzData[$scope.dsData[i].xmbmSz]) {
                                qzData[$scope.dsData[i].xmbmSz] = {};
                            }
                            qzData[$scope.dsData[i].xmbmSz].name = "衢州市";
                            qzData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            qzData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            qzData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            qzData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3309:
                            if (!zsData[$scope.dsData[i].xmbmSz]) {
                                zsData[$scope.dsData[i].xmbmSz] = {};
                            }
                            zsData[$scope.dsData[i].xmbmSz].name = "舟山市";
                            zsData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            zsData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            zsData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            zsData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3325:
                            if (!lsData[$scope.dsData[i].xmbmSz]) {
                                lsData[$scope.dsData[i].xmbmSz] = {};
                            }
                            lsData[$scope.dsData[i].xmbmSz].name = "丽水市";
                            lsData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            lsData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            lsData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            lsData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        case 3326:
                            if (!tzData[$scope.dsData[i].xmbmSz]) {
                                tzData[$scope.dsData[i].xmbmSz] = {};
                            }
                            tzData[$scope.dsData[i].xmbmSz].name = "台州市";
                            tzData[$scope.dsData[i].xmbmSz].nLj = $scope.dsData[i].nLj;
                            tzData[$scope.dsData[i].xmbmSz].pLj = $scope.dsData[i].pLj;
                            tzData[$scope.dsData[i].xmbmSz].zf = $scope.dsData[i].zf;
                            tzData[$scope.dsData[i].xmbmSz].tybm = $scope.dsData[i].tybm;
                            break;
                        default:
                            break;
                    }

                }

                //数据压入mapData
                $scope.mapData.push(hzData[$scope.selectedSrlx], wzData[$scope.selectedSrlx], jhData[$scope.selectedSrlx], huzData[$scope.selectedSrlx], jxData[$scope.selectedSrlx], sxData[$scope.selectedSrlx], qzData[$scope.selectedSrlx], zsData[$scope.selectedSrlx], lsData[$scope.selectedSrlx], tzData[$scope.selectedSrlx]);
                if (!nbData[$scope.selectedSrlx]) {
                    nbData[$scope.selectedSrlx] = {
                        name: "宁波市",
                        nLj: 0,
                        pLj: 0,
                        zf: 0,
                        tybm: '3302'
                    };
                }
                $scope.mapData.push(nbData[$scope.selectedSrlx]);

                $scope.mapData.sort(function (a, b) {
                    return b.nLj - a.nLj;
                });
                $scope.provienceSssr = $scope.mapData;

                data_2 = $scope.mapData.concat([]);
                data_2.sort(function (a, b) {
                    return b.zf - a.zf;
                });
                $scope.provienceZf = data_2;
                if (option.series[0].name === '浙江') {
                    $scope.ss_dada_2 = data_2;
                    $scope.ss_dada = $scope.mapData;
                    angular.forEach($scope.mapData, function (value, key) {
                        if (value) {
                            value.itemStyle = {};
                            value.itemStyle.normal = {};
                            value.itemStyle.normal.areaColor = colors[key];
                        }
                    });
                    option.series[0].data = $scope.mapData;
                    $.get('ownGeo/zhejiang.json', function (geoJson) {
                        echarts3.registerMap('浙江', geoJson);
                        console.log(geoJson);
                        $scope.myChart.setOption(option);
                    });
                    //$scope.myChart.setOption(option);
                } else {
                    getCityData();
                }
                console.log($scope.mapData);
                alertService.unmask();
            }).error(
            function () {
                alertService.unmask();
            })
    };
    $scope.changeYear();
    $scope.imgSrc = './imges/play/blue_pause.png';
    $scope.lunboTurn = function () {
        if ($scope.timer1) {
            $interval.cancel($scope.timer1);
            $scope.timer1 = null;
            option.tooltip.position = null;
            angular.forEach(option.series[0].data, function (value, key) {
                value.selected = false;
            });
            $scope.myChart.setOption(option);
            console.log($scope.timer1);
            $scope.imgSrc = './imges/play/blue_start.png';
            return;
        }
        $scope.imgSrc = './imges/play/blue_pause.png';
        $scope.timer1 = $interval(function () {
            if (option.series[0].name === "浙江") {
                if (city1Index == 11) {
                    city1Index = 0
                } else {
                    city1Index++;
                }
                option.tooltip.position = 'inside';
                console.log(option.series[0].data);
                angular.forEach(option.series[0].data, function (value, key) {
                    if(value) {
                        if (value.name == city1[city1Index]) {
                            // 舟山市
                            value.selected = true;
                        } else {
                            value.selected = false;
                        }
                    }
                });
                $scope.myChart.setOption(option);
                $scope.myChart.dispatchAction({
                    type: 'showTip',
                    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                    seriesIndex: 0,
                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                    // dataIndex: number,
                    // 可选，数据名称，在有 dataIndex 的时候忽略
                    name: city1[city1Index]
                });
            } else {
                if (city2Index == city2[option.series[0].name].length) {
                    city2Index = 0
                } else {
                    city2Index++;
                }
                option.tooltip.position = 'inside';
                console.log(option.series[0].data);
                angular.forEach(option.series[0].data, function (value, key) {
                    if (value.name == city2[option.series[0].name][city2Index]) {
                        value.selected = true;
                    } else {
                        value.selected = false;
                    }
                });
                $scope.myChart.setOption(option);
                $scope.myChart.dispatchAction({
                    type: 'showTip',
                    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                    seriesIndex: 0,
                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                    // dataIndex: number,
                    // 可选，数据名称，在有 dataIndex 的时候忽略
                    name: city2[option.series[0].name][city2Index]
                });
            }
        }, 3000);
    };
    $scope.lunboTurn();

    $scope.$on("destroy", function () {
        if ($scope.myChart) {
            $scope.myChart.dispose();
        }
    })
}]);

app.factory('sspmMainService', ['$http', '$q', 'alertService', function ($http, $q, alertService) {
    return {
        query: function (url, qsnf, zznf, tybm, bj) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url,
                params: {
                    qsnf: qsnf, //起始年份
                    zznf: zznf, //终止年份
                    tybm: tybm, //数据编码,代表地区
                    bj: bj //1:整体数据  2.分区数据
                }
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function () {
                    alertService.unmask()
                });
            return defer.promise;
        }
    }
    $scope.$on("$destroy",function(){
        $interval.cancel($scope.timer1)
    })
}]);
app.filter('percentage', function () {
    return function (number) {
        return number && parseFloat((number * 100).toFixed(2)) + "%";
    }
});