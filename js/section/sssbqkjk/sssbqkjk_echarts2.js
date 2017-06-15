/**
 * Created by dingtianxiu on 2016/4/20.
 * 实时申报情况监控
 */

var app = angular.module("sssbApp", []);
app.controller("sssbCtrl", ['$scope', 'mainService', '$http', '$interval', function ($scope, mainService, $http, $interval) {
    $scope.carr = ['red', 'blue', 'green', 'gray', 'yellow', 'purple', 'lightgreen', 'darkorange', 'skyblue', 'pink'];
    var geoCoordflr = {
        '省局直属局': [120.13, 30.27],
        '嘉兴市局本级': [120.76, 30.77],
        '嘉兴三局': [120.67, 30.51],
        '嘉善县局': [120.92, 30.84],
        '平湖市局': [121.02, 30.7],
        '海盐县局': [120.92, 30.53],
        '桐乡市局': [120.54, 30.64],
        '海宁市局': [120.69, 30.53],
        '杭州市局本级': [120.19, 30.26],
        // '上城区':[120.17,30.25],
        // '下城区':[120.17,30.28],
        // '江干区':[120.2	,30.27],
        // '拱墅区':[120.13,30.32],
        // '西湖区':[120.13,30.27],
        // '滨江区':[120.2	,30.2 ],
        // '萧山区':[120.27,30.17],
        // '余杭区':[120.3	,30.42],
        '桐庐县局': [119.67, 29.8],
        '富阳市局': [119.95, 30.07],
        '临安县局': [119.72, 30.23],
        '余杭局': [120.3, 30.43],
        '淳安县局': [119.03, 29.6],
        '建德市局': [119.28, 29.48],
        '萧山局': [120.25, 30.16],
        '宁波直属分局': [121.55, 29.88],
        '保税区': [121.85, 29.92],
        '海曙区': [121.55, 29.87],
        '江东区': [121.57, 29.87],
        '江北区': [121.55, 29.88],
        '北仑区': [121.85, 29.93],
        '宁波高新分局': [121.61, 29.88],
        '东钱湖分局': [121.63, 29.79],
        '大榭开发区': [121.93, 29.89],
        '镇海区': [121.72, 29.95],
        '宁波杭州湾分局': [121.13, 30.25],
        '象山县': [121.87, 29.48],
        '宁海县': [121.43, 29.28],
        '余姚市': [121.15, 30.04],
        '鄞州区': [121.53, 29.83],
        '慈溪市': [121.23, 30.17],
        '奉化市': [121.4, 29.65],
        '宁波契税征收管理中心': [121.54, 29.88],
        '丽水市局本级': [119.92, 28.45],
        '龙泉市局': [119.13, 28.08],
        '青田县局': [120.28, 28.45],
        '云和县局': [119.56, 28.12],
        '庆元县局': [119.06, 27.61],
        '缙云县局': [120.6, 28.66],
        '遂昌县局': [119.25, 28.59],
        '松阳县局': [119.48, 28.46],
        '景宁县局': [119.63, 27.98],
        '温州市局本级': [120.65, 28.01],
        '洞头区局': [121.12, 27.84],
        '乐清市局': [120.94, 28.14],
        '永嘉县局': [120.68, 28.16],
        '平阳县局': [120.55, 27.68],
        '苍南县局': [120.36, 27.53],
        '文成县局': [120.09, 27.79],//位置在海上,坐标不准确
        '泰顺县局': [119.7, 27.57],
        '瑞安市局': [120.62, 27.8],
        '湖州市局本级': [120.1, 30.86],
        '德清县局': [119.97, 30.57],
        '长兴县局': [119.9, 31.02],
        '安吉县局': [119.68, 30.68],
        '金华市局本级': [119.64, 29.12],
        '永康市局': [120.02, 28.92],
        '武义县局': [119.81, 28.9],
        '义乌市局': [120.06, 29.32],
        '浦江县局': [119.88, 29.46],
        '磐安县局': [119.48, 29.19],
        '兰溪市局': [119.46, 29.21],
        '东阳市局': [120.23, 29.29],
        '舟山市局本级': [122.2, 30],
        '定海区局': [122.11, 30.03],
        '普陀区局': [122.3, 29.95],
        '岱山县局': [122.3, 30.25],
        '嵊泗县局': [122.3, 30.73],
        '台州市局本级': [121.43, 28.68],
        '椒江区局': [121.44, 28.67],
        '路桥区局': [121.38, 28.58],
        '黄岩区局': [121.27, 28.64],
        '临海市局': [121.13, 28.8],
        '温岭市局': [121.36, 28.36],
        '仙居县局': [120.73, 28.85],
        '天台县局': [121.03, 29.15],
        '三门县局': [121.38, 29.11],
        '玉环县局': [121.23, 28.14],
        '衢州市局本级': [118.87, 28.93],
        '常山县局': [118.5, 28.9],
        '江山市局': [118.61, 28.74],
        '开化县局': [118.39, 29.15],
        '龙游县局': [119.17, 29.03],
        '绍兴市局本级': [120.58, 30.01],
        '柯桥区局': [120.49, 30.08],
        '新昌县局': [120.89, 29.49],
        '诸暨市局': [120.23, 29.71],
        '上虞区局': [120.87, 30.03],
        '嵊州市局': [120.81, 29.6]
    };
    var ab = [
        '省局直属局',
        '嘉兴市局本级',
        '嘉兴三局',
        '嘉善县局',
        '平湖市局',
        '海盐县局',
        '桐乡市局',
        '海宁市局',
        '杭州市局本级',
        // '上城区':[120.17,30.25],
        // '下城区':[120.17,30.28],
        // '江干区':[120.2	,30.27],
        // '拱墅区':[120.13,30.32],
        // '西湖区':[120.13,30.27],
        // '滨江区':[120.2	,30.2 ],
        // '萧山区':[120.27,30.17],
        // '余杭区':[120.3	,30.42],
        '桐庐县局',
        '富阳市局',
        '临安县局',
        '余杭局',
        '淳安县局',
        '建德市局',
        '萧山局',
        '宁波直属分局',
        '保税区',
        '海曙区',
        '江东区',
        '江北区',
        '北仑区',
        '宁波高新分局',
        '东钱湖分局',
        '大榭开发区',
        '镇海区',
        '宁波杭州湾分局',
        '象山县',
        '宁海县',
        '余姚市',
        '鄞州区',
        '慈溪市',
        '奉化市',
        '宁波契税征收管理中心',
        '丽水市局本级',
        '龙泉市局',
        '青田县局',
        '云和县局',
        '庆元县局',
        '缙云县局',
        '遂昌县局',
        '松阳县局',
        '景宁县局',
        '义乌',
        '温州市局本级',
        '洞头区局',
        '乐清市局',
        '永嘉县局',
        '平阳县局',
        '苍南县局',
        '文成县局',
        '泰顺县局',
        '瑞安市局',
        '湖州市局本级',
        '德清县局',
        '长兴县局',
        '安吉县局',
        '金华市局本级',
        '永康市局',
        '武义县局',
        '义乌市局',
        '浦江县局',
        '磐安县局',
        '兰溪市局',
        '东阳市局',
        '舟山市局本级',
        '定海区局',
        '普陀区局',
        '岱山县局',
        '嵊泗县局',
        '台州市局本级',
        '椒江区局',
        '路桥区局',
        '黄岩区局',
        '临海市局',
        '温岭市局',
        '仙居县局',
        '天台县局',
        '三门县局',
        '玉环县局',
        '衢州市局本级',
        '常山县局',
        '江山市局',
        '开化县局',
        '龙游县局',
        '绍兴市局本级',
        '柯桥区局',
        '新昌县局',
        '诸暨市局',
        '上虞区局',
        '嵊州市局'
    ];
    require.config({
        paths: {
            echarts: '.././js/src',
            zrender: '.././js/zrender/src'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (echarts) {
            myChart = echarts.init($('.leftBox')[0]);//jquery转换为dom对象
            placeList = [
                //{name:'嘉兴',geoCoord:[120.84, 30.70]},
                {name: '杭州', geoCoord: [120.19, 30.26]},
                {name: '上城区', geoCoord: [120.17, 30.25]},
                {name: '下城区', geoCoord: [120.17, 30.28]},
                {name: '江干区', geoCoord: [120.2, 30.27]},
                {name: '拱墅区', geoCoord: [120.13, 30.32]},
                {name: '西湖区', geoCoord: [120.13, 30.27]},
                {name: '滨江区', geoCoord: [120.2, 30.2]},
                {name: '萧山区', geoCoord: [120.27, 30.17]},
                {name: '余杭区', geoCoord: [120.3, 30.42]},
                {name: '桐庐县', geoCoord: [119.67, 29.8]},
                {name: '淳安县', geoCoord: [119.03, 29.6]},
                {name: '建德', geoCoord: [119.28, 29.48]},

                {name: '宁波', geoCoord: [121.51, 29.88]},

                {name: '丽水', geoCoord: [119.92, 28.45]},
                {name: '义乌', geoCoord: [120.06, 29.32]},
                {name: '温州', geoCoord: [120.65, 28.01]},
                {name: '湖州', geoCoord: [119.90, 30.76]},
                {name: '金华', geoCoord: [119.64, 29.12]},

                {name: '舟山', geoCoord: [122.2, 29.97]},

                {name: '台州', geoCoord: [121.43, 28.68]},
                {name: '衢州', geoCoord: [118.87, 28.93]},
                {name: '临安', geoCoord: [119.72, 30.23]},
                {name: '淳安', geoCoord: [119.05, 29.61]},

                {name: '镇海', geoCoord: [121.52, 29.73]},

                {name: '温州', geoCoord: [120.65, 28.01]},
                {name: '瓯海', geoCoord: [120.65, 28.01]},
                {name: '永喜', geoCoord: [120.68, 28.16]},
                {name: '洞头', geoCoord: [121.02, 27.94]},
                {name: '平阳', geoCoord: [120.55, 27.68]},
                {name: '泰顺', geoCoord: [119.7, 27.77]},
                {name: '乐清', geoCoord: [120.94, 28.14]},
                {name: '瑞安', geoCoord: [120.52, 27.8]},
                {name: '文成', geoCoord: [120.08, 27.58]},
                {name: '苍南', geoCoord: [120.46, 27.63]},

                {name: '平湖', geoCoord: [120.94, 30.5]},
                {name: '桐乡', geoCoord: [120.57, 30.61]},
                {name: '嘉善', geoCoord: [120.90, 30.73]},
                {name: '海盐', geoCoord: [120.92, 30.53]},
                {name: '海宁', geoCoord: [120.69, 30.53]},

                {name: '德清', geoCoord: [120.08, 30.54]},
                {name: '安吉', geoCoord: [119.88, 30.68]},
                {name: '长兴', geoCoord: [119.91, 30.01]},

                //{name:'定海',geoCoord: [122.11,30.03]},
                //{name:'岱山',geoCoord: [122.2 ,30.26]},
                //{name:'嵊四',geoCoord: [122.45,30.72]},
                //{name:'普陀',geoCoord: [122.3 ,29.97 ]},
                {name: '鄞县', geoCoord: [121.46, 29.84]},
                {name: '象山', geoCoord: [121.8, 29.48]},
                {name: '奉化', geoCoord: [121.41, 29.66]},
                {name: '慈溪', geoCoord: [121.21, 30.14]},
                {name: '宁海', geoCoord: [121.42, 28.95]},
                {name: '余姚', geoCoord: [121.16, 30.04]},
                {name: '绍兴', geoCoord: [120.58, 30.01]},
                {name: '新昌', geoCoord: [120.89, 29.49]},
                {name: '诸暨', geoCoord: [120.23, 29.71]},
                {name: '上虞', geoCoord: [120.87, 30.03]},
                {name: '嵊县', geoCoord: [120.81, 29.6]},
                {name: '椒江', geoCoord: [121.44, 28.67]},
                {name: '临海', geoCoord: [121.13, 28.8]},
                {name: '三门', geoCoord: [121.38, 29.11]},
                {name: '温岭', geoCoord: [121.36, 28.36]},
                {name: '仙居', geoCoord: [120.73, 28.85]},
                {name: '天台', geoCoord: [121.03, 29.15]},
                {name: '黄岩', geoCoord: [121.27, 28.64]},
                {name: '玉环', geoCoord: [121.23, 28.14]},
                {name: '青田', geoCoord: [120.28, 28.45]},
                {name: '庆无', geoCoord: [119.16, 27.71]},
                {name: '遂昌', geoCoord: [119.25, 28.59]},
                {name: '缙云', geoCoord: [120.6, 28.66]},
                {name: '云和', geoCoord: [119.56, 28.12]},
                {name: '龙泉', geoCoord: [119.13, 28.08]},
                {name: '松阳', geoCoord: [119.48, 28.46]},
                {name: '浦江', geoCoord: [119.88, 29.46]},
                {name: '东阳', geoCoord: [120.23, 29.27]},
                {name: '武义', geoCoord: [119.81, 28.9]},
                {name: '江山', geoCoord: [118.71, 28.74]},
                {name: '开化', geoCoord: [118.39, 29.15]},
                {name: '衢州', geoCoord: [118.88, 28.97]},
                {name: '兰溪', geoCoord: [119.48, 29.19]},
                {name: '永康', geoCoord: [120.02, 28.92]},
                {name: '常山', geoCoord: [118.6, 28.9]}];
            //共82；
            require('echarts/util/mapData/params').params.zj = {
                getGeoJson: function (callback) {
                    $.getJSON('../zhejiang.json', function (data) {
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
                title: {
                    text: '',
                    subtext: '',
                    x: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
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
                tooltip: {
                    trigger: 'item'
                    //formatter: function (params) {
                    //    console.log(params)
                    //    var res=params.data.name+'<hr style="margin: 2% 0"/>登记注册用户户数：<span style="color: yellow">'+params.data.value+
                    //        '<br/></span>占全省百分比:<span style="color: yellow">'+params.data.bfb+'</span>'
                    //    return res;
                    //}
                },
                series: [
                    {
                        name: '个人',
                        type: 'map',
                        mapType: 'zj',
                        showLegendSymbol: false,
                        roam: false,
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
                                label: {textStyle: {color: 'red'}, show: false},
                                borderColor: 'rgba(200,249,137,0.3)',
                                borderWidth: 0.5,
                                color: 'rgba(200,249,137,0.3)'

                            }
                        },
                        data: [],
                        markPoint: {
                            show: false,
                            symbolSize: 1,
                            large: true,
                            effect: {
                                show: true
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
                                            geoCoord[0] + Math.random() * 0.5 - 0.282,
                                            geoCoord[1] + Math.random() * 0.5 - 0.212
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
                    }//,
                    //{
                    //    name: '企业',
                    //    type: 'map',
                    //    mapType: 'zj',
                    //    roam: false,
                    //    showLegendSymbol: false,
                    //    itemStyle: {
                    //        normal: {
                    //            borderColor: 'rgba(100,149,237,1)',
                    //            borderWidth: 1.5,
                    //            areaStyle: {
                    //                color: 'rgba(30,31,109,0.3)'
                    //            }
                    //        },
                    //        emphasis: {
                    //            label: {textStyle: {color: '#2d2925'}, show: false},
                    //            borderColor: 'rgba(200,249,137,0.3)',
                    //            borderWidth: 0.5,
                    //            color: 'rgba(200,249,137,0.3)'
                    //
                    //        }
                    //    },
                    //    data: [],
                    //    markPoint: {
                    //        show: false,
                    //        symbol: 'diamond',
                    //        symbolSize: 0.5,
                    //        large: true,
                    //        effect: {
                    //            show: true
                    //        },
                    //        data: (function () {
                    //            var data = [];
                    //            var len = 10000;
                    //            var geoCoord;
                    //            while (len--) {
                    //                geoCoord = placeList[len % placeList.length].geoCoord;
                    //                data.push({
                    //                    name: placeList[len % placeList.length].name + len,
                    //                    value: 10,
                    //                    geoCoord: [
                    //                        geoCoord[0] + Math.random() * 0.5 - 0.282,
                    //                        geoCoord[1] + Math.random() * 0.5 - 0.212
                    //                    ]
                    //                })
                    //            }
                    //
                    //            data.push(
                    //                {name: '杭州', geoCoord: [119, 30.2]},
                    //                {name: '杭州', geoCoord: [119.2, 30.1]},
                    //                {name: '杭州', geoCoord: [119.3, 30.15]},
                    //                {name: '舟山', geoCoord: [122.31, 30.43]},
                    //                {name: '舟山', geoCoord: [122.32, 30.43]},
                    //                {name: '舟山', geoCoord: [122.31, 30.45]},
                    //                {name: '舟山', geoCoord: [122.1, 30.61]},
                    //                {name: '舟山', geoCoord: [121.98, 30.71]},
                    //                {name: '舟山', geoCoord: [121.97, 30.72]},
                    //                {name: '舟山', geoCoord: [122.45, 30.72]}
                    //            );
                    //            return [];
                    //
                    //        })()
                    //    }
                    //}
                ]
            };
            myChart.setOption(option1);
        });
    /**http**/
    $scope.ssDate = '';
    $scope.companyData = [];
    var sssbtjsj = '';
    var ul_top = 0;
    var index = 0;
    var index_2 = 0;
    var bishu = 0;
    var count = 0;
    var zongshu = 0;
    var count_drsb=true;
    var timer_drsb = $interval(function(){
        if(count_drsb){
            zongshu+=27769644.04;
            bishu+=3572;
            $scope.www=zongshu.toFixed(2)-0;
            $scope.index_2=bishu;
        }else{
            $interval.cancel(timer_drsb)
        }
    },20);
    $http.get($scope.URL+'/sssb?sbtjsj=0&jgsj=300&flag=1&tybm=33').success(function (data) {

        sssbtjsj = data.root.sssbtjsj;
        bishu = data.root.sssbGrid.length;
        for (var i = 0; i < bishu; i++) {
            zongshu += data.root.sssbGrid[i]['sbje'];
        }
        $scope.companyData = data.root.sssbGrid.slice(0, 152);//144 18(20 000)
        var companyData_2 = [];
        for (var i = 0; i < $scope.companyData.length; i++) {
            if ($scope.companyData[i].qymc) {
                companyData_2.push($scope.companyData[i])
            }
        }
        $scope.companyData = companyData_2;
        console.log($scope.companyData);
        map_timer = $interval(function () {
            if ($(".scroll_container ul li").length !== 0) {
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
                                geoCoord: [
                                    geoCoord[0] + Math.random() * 0.5 - 0.282,
                                    geoCoord[1] + Math.random() * 0.5 - 0.212
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
                        var n = Math.floor(Math.random() * data.length);
                        var n2 = Math.floor(Math.random() * data.length);
                        var n3 = Math.floor(Math.random() * data.length);
                        var n4 = Math.floor(Math.random() * data.length);

                        return [data[n], data[n2], data[n3], data[n4]];

                    })()
                };
                myChart.setOption(option1)
            } else {
                $interval.cancel(map_timer);
            }
        }, 5000);
        timer = $interval(function () {
            //if($('.scroll_container ul').offset().top-237.59375<=-($('.scroll_container ul').height()-$('.scroll_container').height())){
            //    $(".scroll_container ul").css('top', -($('.scroll_container ul').height()-$('.scroll_container').height()) + 'px');
            //}
            if ($scope.companyData) {
                $(".scroll_container ul").css('top', ul_top + 'px');
                ul_top -= 1;
                if (ul_top % 35 === 0) {
                    if ($scope.companyData[index] !== undefined) {
                        count += $scope.companyData[index_2].sbje;
                        $scope.www = Math.floor(parseFloat(count.toFixed(2)) + zongshu);
                        //option1.series[0].markPoint.data[0].name=$scope.companyData[index_2].swjmc;
                        //   myChart.setOption(option1)

                        $('.scroll_container ul li:first').remove();
                        $('.scroll_container ul').css('top', 0);
                        ul_top = 0;
                        index_2++;
                        $scope.index_2 = bishu + index_2;
                    }
                    else {
                        $scope.www = 0;
                        $scope.index = 0;
                    }
                }
            }
        }, 60);
        stopTimer = $interval(function () {
            $http.get($scope.URL+'/sssb?sbtjsj=' + sssbtjsj + '&jgsj=300&flag=1&tybm=33').success(function (data_ss) {
                $scope.companyData = $scope.companyData.concat(data_ss.root.sssbGrid)
                console.log(data_ss);
                sssbtjsj = data_ss.root.sssbtjsj;
            })
        }, 300000)
    });
    $http.get($scope.URL+'/sbmc?bj=2').success(function (month) {
        month = month.root.value;
        var month_name = [];
        var month_value = [];

        for (var i = 0; i < month.length; i++) {
            month_name.push(month[i].sbsj);
            month_value.push(month[i].sbjl)
        }
        $http.get($scope.URL+'/sbmc?bj=1').success(function (data) {
            data = data.root.value;
            var r_sb_name = [];
            var r_sb_value = [];
            for (var i = 0; i < data.length; i++) {
                r_sb_name.push(data[i].sbsj);
                r_sb_value.push(data[i].sbjl)
            }
            for (var i = 0; i < r_sb_name.length; i++) {
                r_sb_name[i] = r_sb_name[i].slice(r_sb_name[i].length - 4);
                r_sb_name[i] = r_sb_name[i].slice(0, 2) + ":" + r_sb_name[i].slice(2)
            }
            for (var i = 0; i < month_name.length; i++) {
                month_name[i] = /*month_name[i].slice(0,4)+"-"+*/month_name[i].slice(4, 6) + "-" + month_name[i].slice(6)
            }
            require.config({
                paths: {
                    echarts: '.././js/src',
                    zrender: '.././js/zrender/src'
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
                        color: ['rgb(7,37,109)'],
                        title: {},
                        grid: {
                            borderColor: 'rgb(7,37,109)'
                        },
                        tooltip: {
                            trigger: 'axis',
                            formatter: function (params) {
                                return params[0].name + '<br/>'
                                    + params[0].seriesName + ' : ' + params[0].value + ' (笔)'
                            }
                        },
                        legend: {
                            data: ['月申报量'],
                            x: 'left',
                            y: 'bottom',
                            show: false,
                            textStyle: {
                                color: 'rgb(7,37,109)'
                            }
                            //selectedMode:'single',
                            //selected:{
                            //    '日申报量':false
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
                                    color: 'rgb(7,37,109)'
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
                                name: '月申报量',
                                type: 'value',
                                //gridIndex:0,
                                splitNumber: 1,
                                nameTextStyle: {
                                    color: 'rgba(0,0,0,0)'
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: ["rgb(7,37,109)"],
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgb(7,37,109)',
                                        opacity: 0
                                    }


                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "rgba(0,0,0,0)"
                                    }
                                }

                            }
                        ],
                        series: [
                            {
                                name: '月申报量',
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
            yue.onclick = function () {
                $(this).css("backgroundColor", "rgb(7,37,255)");
                $("#ri").css("backgroundColor", "rgb(7,37,109)");
                require(
                    [
                        'echarts',
                        'echarts/chart/line'
                    ],
                    function (echarts) {
                        var lineChart = echarts.init(document.getElementById('sssb_canvas'));
                        option = {
                            color: ['rgb(7,37,109)'],
                            title: {},
                            grid: {
                                borderColor: "rgb(7,37,109)"
                            },
                            tooltip: {
                                trigger: 'axis',
                                formatter: function (params) {
                                    return params[0].name + '<br/>'
                                        + params[0].seriesName + ' : ' + params[0].value + ' (笔)'
                                }
                            },
                            legend: {
                                data: ['月申报量'],
                                x: 'left',
                                y: 'bottom',
                                show: false,
                                textStyle: {
                                    color: 'rgb(7,37,109)'
                                },
                                //selectedMode:'single',
                                //selected:{
                                //    '日申报量':false
                                //}
                            },
                            xAxis: [{
                                type: 'category',
                                boundaryGap: false,
                                axisLabel: {
                                    textStyle: {
                                        color: 'rgb(7,37,109)'
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
                                    name: '月申报量',
                                    type: 'value',
                                    show: false,
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: ["rgb(7,37,109)"],
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: 'rgb(7,37,109)',
                                            opacity: 0
                                        }


                                    }

                                }
                            ],
                            series: [
                                {
                                    name: '月申报量',
                                    type: 'line',
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
                            color: ['rgb(7,37,109)'],
                            title: {},
                            grid: {
                                borderColor: 'rgb(7,37,109)'
                            },
                            tooltip: {
                                trigger: 'axis',
                                formatter: function (params) {
                                    return params[0].name + '<br/>'
                                        + params[0].seriesName + ' : ' + params[0].value + ' (笔)'
                                }
                            },
                            legend: {
                                data: ['日申报量'],
                                x: 'left',
                                y: 'bottom',
                                show: false,
                                textStyle: {
                                    color: 'rgb(7,37,109)'
                                },
                                //selectedMode:'single',
                                //selected:{
                                //    '日申报量':false
                                //}
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    position: "bottom",
                                    axisLabel: {
                                        textStyle: {
                                            color: 'rgb(7,37,109)'
                                        }
                                    },
                                    axisTick: {
                                        show: true,
                                        inside: true,
                                        lineStyle: {
                                            color: "rgb(7,37,109)"
                                        },
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
                                    name: '日申报量',
                                    type: 'value',
                                    show: false,
                                    max: "500000",
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: ["rgb(7,37,109)"],
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: 'rgb(7,37,109)',
                                            opacity: 0
                                        }


                                    }

                                }
                            ],
                            series: [
                                {
                                    name: '日申报量',
                                    type: 'line',
                                    itemStyle: {
                                        normal: {
                                            areaStyle: {type: 'default'},
                                            lineStyle: {}
                                        }
                                    },
                                    data: r_sb_value
                                    //[
                                    //4,4,4,4,4,4,4,4,2,7,2,4,6,1,7,3,6,2,5,6,13,20,5,7,2,5,5,5,3,2,1,3,6,6,6,3,2,
                                    //    4,4,4,4,4,4,4,4,2,7,2,4,6,1,7,3,6,2,5,6,13,20
                                    //]

                                }
                            ]
                        };
                        lineChart.setOption(option);
                    }
                );
            }

        })
    })


}]);
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
                    console.log('获取信息失败');
                });
            return defer.promise;
        }
    }
}]);
