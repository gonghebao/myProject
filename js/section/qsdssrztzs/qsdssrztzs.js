/**
 * Created by dingtianxiu on 16/5/4.
 * descript:全省地税收入整体展示
 */

var app = angular.module("qsdssrApp", ['ui.alert']);
app.controller("qsdssrCtrl", ['$scope', 'qsdssrMainService', '$filter', 'alertService', '$interval',"$http", function ($scope, qsdssrMainService, $filter, alertService, $interval,$http) {
    alertService.mask();
    $scope.years = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
    $scope.selectedYear = $scope.curYear;
    //取得dom节点
    $scope.myChart = echarts3.init(document.getElementById('qsdssrMap'));

    // var cityData=['杭州市','湖州市','金华市','嘉兴市','丽水市','宁波市','衢州市','绍兴市','台州市','温州市','舟山市'];
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
    var codeTable = {
        //杭州
        //"330001": "省局直属局",
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
        //"330202": "保税区",
        //"330203": "海曙区",
        //"330204": "江东区",
        //"330205": "江北区",
        //"330206": "北仑区",
        //"330207": "宁波高新分局",
        //"330208": "东钱湖分局",
        //"330209": "大榭开发区",
        //"330211": "镇海区",
        //"330212": "宁波杭州湾分局",
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
    //保存地图显示数据
    var mapData = [];

    //保存各市数据
    var hzData = {};
    var nbData = {};
    var wzData = {};
    var jxData = {};
    var hz1Data = {};
    var sxData = {};
    var jhData = {};
    var qzData = {};
    var zsData = {};
    var lsData = {};
    var tzData = {};
    var yhData = {};

    //取得浙江省16年数据,处理
    $scope.totalViewData = {};
    $scope.allCityData = {};
    $scope.totalViewData.qszzsr = 0;
    $scope.totalViewData.qssssr = 0;
    $scope.totalViewData.qsfsssr = 0;
    $scope.totalViewData.qssbjj = 0;


    //取得各市16年数据,处理,县区数据可类似处理
    var option = {
        //tooltip提示框
        tooltip: {
            trigger: 'item',
            position: 'inside',
            //position: ['50%', '50%'],
            hideDelay: 3000,
            formatter: function (params) {
                //console.log(params);
                if (!params.data) {
                    return;
                }
                var res = params.data.name + '<hr style="margin: 2% 0"/>' +
                    '<span style="float: left"> 地税组织收入(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.zzsr / 10000, 2) + '</span>' +
                    '<br/><span style="float: left"> 税&nbsp;&nbsp;收&nbsp;&nbsp;收&nbsp;&nbsp;入&nbsp;(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.sssr / 10000, 2) + '</span>' +
                    '<br/><span style="float: left"> 非&nbsp;&nbsp;税&nbsp;&nbsp;收&nbsp;&nbsp;入&nbsp;(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.fsssr / 10000, 2) + '</span>' +
                    '<br/><span style="float: left"> 社保基金收入(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.sbjjsr / 10000, 2) + '</span>';
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
                //roam: 'scale',
                //aspectScale: 1,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
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
                        borderWidth: 1,
                        borderColor: 'rgba(100,149,237,1)',
                        areaColor: '#0066e5'
                    },
                    emphasis: {
                        areaColor: 'rgb(231,195,90)'
                    }
                },
                data: mapData
            }
        ]
    };
    $scope.changeYear = function () {
        // 当地图显示的是某一个市的时候，选择年份要重新发送请求
        if (option.series[0].name !== "浙江") {
            //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, $scope.tybm, '0').then(function (cityData) {
            //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:$scope.tybm,bj:0})
            $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
                .success(function (cityData) {
               alertService.unmask();
                var cityValue = JSON.parse(cityData.data[0].value);
                var cityMapData = {};
                console.log(cityValue);
                angular.forEach(cityValue, function (value, key) {
                    switch (parseInt(value.xmbmSz)) {
                        case 1:
                            if (!cityMapData[value.tybm]) {
                                cityMapData[value.tybm] = {};
                                cityMapData[value.tybm].name = codeTable[value.tybm];
                                cityMapData[value.tybm].zzsr = value.nLj;
                            } else {
                                cityMapData[value.tybm].zzsr = value.nLj;
                            }
                            break;
                        case 2:
                            if (!cityMapData[value.tybm]) {
                                cityMapData[value.tybm] = {};
                                cityMapData[value.tybm].name = codeTable[value.tybm];
                                cityMapData[value.tybm].sssr = value.nLj;
                            } else {
                                cityMapData[value.tybm].sssr = value.nLj;
                            }
                            break;
                        case 18:
                            if (!cityMapData[value.tybm]) {
                                cityMapData[value.tybm] = {};
                                cityMapData[value.tybm].name = codeTable[value.tybm];
                                cityMapData[value.tybm].fsssr = value.nLj;
                            } else {
                                cityMapData[value.tybm].fsssr = value.nLj;
                            }
                            break;
                        case 23:
                            if (!cityMapData[value.tybm]) {
                                cityMapData[value.tybm] = {};
                                cityMapData[value.tybm].name = codeTable[value.tybm];
                                cityMapData[value.tybm].sbjjsr = value.nLj;
                            } else {
                                cityMapData[value.tybm].sbjjsr = value.nLj;
                            }
                            break;
                    }
                });
                var fmtMapData = [];
                angular.forEach(cityMapData, function (value, key) {
                    fmtMapData.push(value);
                });

                option.series[0].data = fmtMapData;
                console.log(fmtMapData);
                option.series[0].name = $scope.jsonName;
                option.series[0].mapType = $scope.jsonName;
                $.get('ownGeo/zhejiang.json', function (geoJson) {
                    echarts3.registerMap('浙江', geoJson);
                    $scope.myChart.setOption(option);
                });
                console.log(option);
                //$scope.myChart.setOption(option);
                // param.event.stopPropagation(); //阻止事件冒泡
            });
        }

        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, '33', '1')
        //    .then(
        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm: 33,bj:1})
        $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj1.json")
            .success(
            function(data) {
                $scope.qsData = JSON.parse(data.data[0].value);
                for (var i = 0; i < $scope.qsData.length; i++) {
                    switch (parseInt($scope.qsData[i].xmbmSz)) {
                        case 1:
                            $scope.totalViewData.qszzsr += $scope.qsData[i].nLj;
                            break;
                        case 2:
                            $scope.totalViewData.qssssr += $scope.qsData[i].nLj;
                            break;
                        case 18:
                            $scope.totalViewData.qsfsssr += $scope.qsData[i].nLj;
                            break;
                        case 23:
                            $scope.totalViewData.qssbjj += $scope.qsData[i].nLj;
                            break;
                        default:
                            break;
                    }
                }
                angular.copy($scope.totalViewData, $scope.allCityData);
            }).error(function () {
                alertService.unmask();
            })
        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, '33', '0')
        //    .then(
        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:33,bj:0})
            $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
            .success(function (data) {
                $scope.dsData = JSON.parse(data.data[0].value);
                console.log("dsData", $scope.dsData);
                for (var i = 0; i < $scope.dsData.length; i++) {
                    switch (parseInt($scope.dsData[i].tybm)) {
                        case 3301:
                            // hzData.push($scope.dsData[i]);
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    hzData.name = "杭州市";
                                    hzData.tybm = 3301;
                                    hzData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    hzData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    hzData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    hzData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3302:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    nbData.name = "宁波市";
                                    nbData.tybm = 3302;
                                    nbData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    nbData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    nbData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    nbData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3303:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    wzData.name = "温州市";
                                    wzData.tybm = 3303;
                                    wzData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    wzData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    wzData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    wzData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3304:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    jxData.name = "嘉兴市";
                                    jxData.tybm = 3304;
                                    jxData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    jxData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    jxData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    jxData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3305:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    hz1Data.name = "湖州市";
                                    hz1Data.tybm = 3305;
                                    hz1Data.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    hz1Data.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    hz1Data.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    hz1Data.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3306:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    sxData.name = "绍兴市";
                                    sxData.tybm = 3306;
                                    sxData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    sxData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    sxData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    sxData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3307:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    jhData.name = "金华市";
                                    jhData.tybm = 3307;
                                    jhData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    jhData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    jhData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    jhData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3308:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    qzData.name = "衢州市";
                                    qzData.tybm = 3308;
                                    qzData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    qzData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    qzData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    qzData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3309:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    zsData.name = "舟山市";
                                    zsData.tybm = 3309;
                                    zsData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    zsData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    zsData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    zsData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3325:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    lsData.name = "丽水市";
                                    lsData.tybm = 3325;
                                    lsData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    lsData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    lsData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    lsData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 3326:
                            switch (parseInt($scope.dsData[i].xmbmSz)) {
                                case 1:
                                    tzData.name = "台州市";
                                    tzData.tybm = 3326;
                                    tzData.zzsr = $scope.dsData[i].nLj;
                                    break;
                                case 2:
                                    tzData.sssr = $scope.dsData[i].nLj;
                                    break;
                                case 18:
                                    tzData.fsssr = $scope.dsData[i].nLj;
                                    break;
                                case 23:
                                    tzData.sbjjsr = $scope.dsData[i].nLj;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }

                }
                //数据压入mapData
                mapData.push(hzData, nbData, wzData, jhData, hz1Data, jxData, sxData, qzData, zsData, lsData, tzData, yhData);
                console.log(mapData);

                $.get('ownGeo/zhejiang.json', function (geoJson) {
                    echarts3.registerMap('浙江', geoJson);
                    $scope.myChart.setOption(option);
                });
                //$scope.myChart.setOption(option);

                //点击浙江地图地市,调出地市地图
                $scope.myChart.on('click', function (params) {
                    if (option.series[0].name === "浙江") {
                        alertService.mask();
                        $scope.totalViewData.qszzsr = params.data.zzsr;
                        $scope.totalViewData.qssssr = params.data.sssr;
                        $scope.totalViewData.qsfsssr = params.data.fsssr;
                        $scope.totalViewData.qssbjj = params.data.sbjjsr;
                        //$scope.$apply();
                        $scope.jsonName = params.name;
                        $scope.tybm = params.data.tybm;
                        //点击地图发起请求 参数为变量3301
                        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, $scope.tybm, '0').then(
                        //    function (cityData) {
                        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:$scope.tybm,bj:0})
                        $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
                            .success(function (cityData) {
                            alertService.unmask();
                            var cityValue = JSON.parse(cityData.data[0].value);
                            var cityMapData = {};
                            console.log(cityValue);
                            angular.forEach(cityValue, function (value, key) {
                                switch (parseInt(value.xmbmSz)) {
                                    case 1:
                                        if (!cityMapData[value.tybm]) {
                                            cityMapData[value.tybm] = {};
                                            cityMapData[value.tybm].name = codeTable[value.tybm];
                                            cityMapData[value.tybm].zzsr = value.nLj;
                                        } else {
                                            cityMapData[value.tybm].zzsr = value.nLj;
                                        }
                                        break;
                                    case 2:
                                        if (!cityMapData[value.tybm]) {
                                            cityMapData[value.tybm] = {};
                                            cityMapData[value.tybm].name = codeTable[value.tybm];
                                            cityMapData[value.tybm].sssr = value.nLj;
                                        } else {
                                            cityMapData[value.tybm].sssr = value.nLj;
                                        }
                                        break;
                                    case 18:
                                        if (!cityMapData[value.tybm]) {
                                            cityMapData[value.tybm] = {};
                                            cityMapData[value.tybm].name = codeTable[value.tybm];
                                            cityMapData[value.tybm].fsssr = value.nLj;
                                        } else {
                                            cityMapData[value.tybm].fsssr = value.nLj;
                                        }
                                        break;
                                    case 23:
                                        if (!cityMapData[value.tybm]) {
                                            cityMapData[value.tybm] = {};
                                            cityMapData[value.tybm].name = codeTable[value.tybm];
                                            cityMapData[value.tybm].sbjjsr = value.nLj;
                                        } else {
                                            cityMapData[value.tybm].sbjjsr = value.nLj;
                                        }
                                        break;
                                }
                            });
                            var fmtMapData = [];
                            angular.forEach(cityMapData, function (value, key) {
                                fmtMapData.push(value);
                            });

                            option.series[0].data = fmtMapData;
                            console.log(fmtMapData);
                            option.series[0].name = $scope.jsonName;
                            option.series[0].mapType = $scope.jsonName;
                            $.get('ownGeo/zhejiang.json', function (geoJson) {
                                echarts3.registerMap('浙江', geoJson);
                                $scope.myChart.setOption(option);
                            });
                            console.log(option);
                            //$scope.myChart.setOption(option);
                            // param.event.stopPropagation(); //阻止事件冒泡
                        });
                    } else {
                        angular.copy($scope.allCityData, $scope.totalViewData);
                        $scope.$apply();
                        option.series[0].data = mapData;
                        console.log(mapData);
                        option.series[0].name = '浙江';
                        option.series[0].mapType = '浙江';
                        $.get('ownGeo/zhejiang.json', function (geoJson) {
                            echarts3.registerMap('浙江', geoJson);
                            $scope.myChart.setOption(option);
                        });
                        //$scope.myChart.setOption(option);

                    }
                });
                alertService.unmask();
            }).error(
            function () {
                alertService.unmask();
            }
        );
    };
    $scope.changeYear();
    $scope.imgSrc = './imges/play/blue_pause.png';
    $scope.lunboTurn = function () {
        if($scope.timer1){
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
                    if (value.name == city1[city1Index]) {
                        // 舟山市
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
    $scope.$on("$destroy", function () {
        $scope.myChart.dispose();
        $scope.timer1 && $interval.cancel($scope.timer1);
        $scope.timer2 && $interval.cancel($scope.timer2);
    })
}]);

//取数服务
app.factory('qsdssrMainService', ['$http', '$q', 'alertService', function ($http, $q, alertService) {
    return {
        query: function (url, nf, tybm, bj) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url,
                // 'http://144.16.55.49:8088/gt3/dtzs/sssbdt'
                params: {
                    nf: nf, //数据年份
                    tybm: tybm, //数据编码,代表地区
                    bj: bj //1:整体数据  2.分区数据
                }
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function () {
                    alertService.unmask();
                });
            return defer.promise;
        }
    }
}]);