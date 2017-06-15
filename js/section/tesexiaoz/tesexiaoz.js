/**
 * Created by dingtianxiu on 16/5/13.
 */
angular.module('tsxzApp', ['ui.alert'])
    .controller('tsxzCtrl', ['$scope', '$http', 'alertService', '$filter', '$interval', '$rootScope', function ($scope, $http, alertService, $filter, $interval, $rootScope) {
        alertService.mask();

        //$http({
        //    method: 'POST',
        //        url: 'http://144.16.54.58:8088/tfdapp/ajax.sword?r=' + Math.random(),
        //        data: 'postData={"tid": "TestAjaxBLH_query?qsrq=2016-09-01#*^@^*#zzrq=2016-10-10"}',
        //        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        //    })
        //    .success(function(data){
        //        console.log(data);
        //    })
        //    .error(function(){});

        //$scope.post('TestAjaxBLH_query', {qsrq: '2016-09-01', zzrq: '2016-10-10'})
        //    .success(function(data){console.log(data)});

        var city = {
            "330000200002": [120.16, 30.22],//上城玉皇山南基金小镇
            "330000200003": [120.23, 30.36],//江干丁兰智慧小镇
            "330000200004": [120.09, 30.14],//西湖云栖小镇
            "330000200005": [120.038206, 30.179472],//西湖龙坞茶镇
            "330000200006": [120.010219, 30.300412],//余杭梦想小镇
            "330000200007": [120.010219, 30.300412],//余杭艺尚小镇
            "330000200008": [120.010219, 30.300412],//富阳硅谷小镇
            "330000200009": [119.696375, 29.800105],//桐庐健康小镇
            "330000200010": [119.731605, 30.240481],//临安云制造小镇
            "330000200021": [121.420862, 29.652186],//瓯海时尚制造小镇
            "330000200022": [121.420862, 29.652186],//苍南台商小镇
            "330000200037": [120.099057, 30.856640],//湖州丝绸小镇
            "330000200038": [120.443469, 30.871551],//南浔善琏湖笔小镇
            "330000200039": [119.96388, 30.544598],//德清地理信息小镇
            "330000200026": [120.619545, 30.808886],//南湖基金小镇
            "330000200027": [120.995201, 30.795529],//嘉善巧克力甜蜜小镇
            "330000200028": [120.9444, 30.524144],//海盐核电小镇
            "330000200029": [120.925979, 30.516243],//海宁皮革时尚小镇
            "330000200030": [120.619549, 30.693292],//桐乡毛衫时尚小镇
            "330000200043": [120.585785, 30.006742],//越城黄酒小镇
            "330000200044": [120.238121, 29.720367],//诸暨袜艺小镇
            "330000200050": [120.1085, 29.467713],//义乌丝路金融小镇
            "330000200051": [119.831085, 28.892945],//武义温泉小镇
            "330000200052": [120.40499, 29.086049],//磐安江南药镇
            "330000200056": [119.248503, 29.086911],//龙游红木小镇
            "330000200057": [118.498169, 28.917987],//常山赏石小镇
            "330000200058": [118.425856, 29.126262],//开化根缘小镇
            "330000200073": [121.257561, 28.653635],//黄岩智能模具小镇
            "330000200074": [121.380439, 28.587004],//路桥沃尔沃小镇
            "330000200075": [120.625729, 28.724682],//仙居神仙氧吧小镇
            "330000200064": [119.75, 28.30],//莲都古堰画乡小镇
            "330000200065": [120.078464, 28.584037],//龙泉青瓷小镇
            "330000200066": [120.288724, 28.142096],//青田石雕小镇
            "330000200067": [119.644125, 27.983133],//景宁畲乡小镇
            "330000200011": [120.175802, 30.293293],//下城跨贸小镇
            "330000200012": [120.143927, 30.332225],//拱墅运河财富小镇
            "330000200013": [120.227599, 30.214601],//滨江物联网小镇
            "330000200014": [120.253231, 30.209785],//萧山信息港小镇
            "330000200015": [120.253231, 30.209785],//余杭梦栖小镇
            "330000200016": [119.933356, 30.057606],//桐庐智慧安防小镇
            "330000200017": [119.275535, 29.492296],//建德航空小镇
            "330000200018": [119.897859, 30.07138],//富阳药谷小镇
            "330000200019": [120.214242, 30.392412],//天子岭静脉小镇
            "330000200023": [120.637901, 28.045337],//瓯海生命健康小镇
            "330000200024": [119.957776, 27.861032],//文成森林氧吧小镇
            "330000200025": [120.579364, 27.686194],//平阳宠物小镇
            "330000200040": [120.114022, 30.877571],//吴兴美妆小镇
            "330000200041": [119.922554, 31.015734],//长兴新能源小镇
            "330000200042": [119.744879, 30.627297],//安吉天使小镇
            "330000200032": [120.749317, 30.795559],//秀洲光伏小镇
            "330000200033": [121.129914, 30.614171],//平湖九龙山航空运动小镇
            "330000200034": [120.578205, 30.609213],//桐乡乌镇互联网小镇
            "330000200036": [120.848681, 30.77508],//嘉兴马家浜健康食品小镇
            "330000200045": [120.489466, 30.078783],//柯桥酷玩小镇
            "330000200046": [120.83194, 30.037462],//上虞e游小镇
            "330000200047": [120.910511, 29.508325],//新昌智能装备小镇
            "330000200053": [120.246700, 29.284430],//东阳木雕小镇
            "330000200054": [120.194906, 28.946176],//永康赫灵方岩小镇
            "330000200055": [119.672117, 29.127201],//金华新能源汽车小镇
            "330000200059": [118.637507, 28.763945],//江山光谷小镇
            "330000200060": [118.779008, 28.962647],//衢州循环经济小镇
            "330000200061": [122.152399, 30.118668],//定海远洋渔业小镇
            "330000200062": [122.316165, 29.947642],//普陀沈家门渔港小镇
            "330000200063": [122.398654, 29.917403],//朱家尖禅意小镇
            "330000200077": [121.392866, 28.38521],//温岭泵业智造小镇
            "330000200078": [121.035161, 29.155064],//天台天台山和合小镇
            "330000200068": [119.166625, 28.063192],//龙泉宝剑小镇
            "330000200069": [120.904161, 28.002844],//庆元香菇小镇
            "330000200070": [120.262572, 28.809424],//缙云机床小镇
            "330000200071": [119.47109, 28.492723],//松阳茶香小镇
            "330000200048": [120.787435, 30.20102],//杭州湾花田小镇
            "330000200020": [120.1795,30.2642],    //西湖艺创小镇
            "339999200001":[121.5741,29.9009],//江北动力小镇
            "339999200002":[122.0006,29.8013],//梅山海洋金融小镇
            "339999200003":[121.2958,29.6977],//奉化滨海养生小镇
            "339999200004":[121.5748,29.8343],//鄞州四明金融小镇
            "339999200005":[121.1609,30.0428],//余姚模客小镇
            "339999200006":[121.4360,29.2943],//宁海智能汽车小镇
            "339999200007":[121.2032,30.3255]//杭州湾新区滨海欢乐假期小镇
        };
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
        //$http.get($scope.URL + '/tsxz?nf='+ $scope.curYear +'&tybm=33')
        //$scope.post('CxglDtzs2016BLH_selectTsxz', {nf: $scope.curYear, tybm: 33})
        $http.get("data_json/tsxz/nf2017tybm33.json")
            .success(function (data) {
                console.log(data);
                var value = JSON.parse(data.data[0].value);
                console.log("value",value);
                console.log(value);
                $scope.viewData = [0, 0, 0];//小镇数量、企业户数、组织收入
                $scope.viewData[0] = value.length;
                var city1 = [], city2 = [];
                angular.forEach(value, function (value, key) {
                    $scope.viewData[1] += (value.qyhs!=null?parseInt(value.qyhs):0);
                    $scope.viewData[2] += (value.zzsr!=null?parseFloat(value.zzsr):0);
                    if (parseInt(value.xzpc) === 1) {
                        city1.push({
                            name: value.xzmc.replace(' ', ''),
                            value: city[value.tsxzbm],
                            qyhs: value.qyhs,
                            zzsr: value.zzsr,
                            url: value.xzmc.replace(' ', '') + '.jpg'
                        })
                    } else if (parseInt(value.xzpc) === 2) {
                        city2.push({
                            name: value.xzmc.replace(' ', ''),
                            value: city[value.tsxzbm],
                            qyhs: value.qyhs,
                            zzsr: value.zzsr,
                            url: value.xzmc.replace(' ', '') + '.jpg'
                        })
                    }
                });
                //$scope.viewData[1] = $scope.viewData[1] ? $scope.viewData[1] : 0;
                //$scope.viewData[2] = $scope.viewData[2] ? $scope.viewData[2] : 0;
                console.log("city1",city1);
                console.log("city2",city2);
                console.log("$scope.cityData",$scope.viewData)
                $scope.myChart = echarts3.init(document.getElementsByClassName('leftBox')[0]);
                $http.get('ownGeo/zhejiang.json')
                    .success(function (geoJson) {
                        $http.get("js/section/tesexiaoz/tesexiaoz.json").success(function(json){
                        //http://localhost:8080/dtzs/gt3/tsxz?nf=2016&tybm=33
                        echarts3.registerMap('zj', geoJson);
                        $scope.myChart.setOption({
                            tooltip: {
                                trigger: 'item',
                                position: 'top',
                                backgroundColor: 'rgba(35, 65, 103, 0.6)',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                },
                                formatter: function (params) {
                                    if(params.seriesName!=="浙江"){
                                        console.log(params);
                                    }
                                    if(params.data.qyhs!==undefined) {
                                        for(var i=0;i<json.length;i++){
                                            if(json[i].name==params.name){
                                                $(".xz_desc").html("<div style='text-index: 2em'>"+json[i].text+"</div>");
                                                $('.xz_desc').scrollTop(0)
                                            }
                                        }
                                        return '<div>' +
                                            '<div style="width:60px;height:60px;margin:8px 6px 0 6px;border-radius:50%;float:left;background-size:contain;background:url(imges/tsxz/' + params.data.url + ')"></div>' +
                                            '<div style="float:left;"><span style="font-size: 18px;font-weight:700">' + params.name + '</span><hr><span style="float: left;"> 入驻企业(户)：</span><span style="color: yellow; float: right">' + (params.data.qyhs==null?0:params.data.qyhs) + '</span><br/>' +
                                            '<span style="float: left;"> 组织收入(元)：</span><span style="color: yellow; float: right;">' + $filter('number')((params.data.zzsr==null?0:params.data.zzsr), 2) + '</span></div>' +
                                            '</div>';
                                    }
                                }
                            },
                            geo: {
                                map: '浙江县',
                                //roam: 'scale',
                                //zoom: 0.8,
                                top: '10%',
                                right: 0,
                                bottom: 0,
                                left: '5%',
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontFamily: '方正小标宋简体',
                                            fontSize: 16
                                        }
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontFamily: '方正小标宋简体',
                                            fontSize: 16
                                        }
                                    }

                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1.5,
                                        borderColor: '#0079DC',
                                        areaColor: '#0099EF'
                                    },
                                    emphasis: {
                                        areaColor: 'rgb(23,150,200)'
                                    }
                                },
                                regions: cityCenter
                            },
                            series: [
                                {
                                    name: '第一批',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    data: city1,
                                    symbol: 'pin',
                                    symbolSize: 20,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#f00'
                                        },
                                        emphasis: {
                                            borderColor: '#fff',
                                            borderWidth: 1
                                        }
                                    }
                                },
                                {
                                    name: '第二批',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    data: city2,
                                    symbol: 'pin',
                                    symbolSize: 20,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#f80'
                                        },
                                        emphasis: {
                                            borderColor: '#fff',
                                            borderWidth: 1
                                        }
                                    }
                                },
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
                                        },
                                        emphasis:{
                                            show:false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 1,
                                            borderColor: '#004BBD',
                                            areaColor: 'rgba(0,0,0,0)'
                                        },
                                        emphasis: {
                                            show:false,
                                            areaColor: 'rgba(23,150,200,0)'
                                        }
                                    }
                                }

                            ]
                        });
                        alertService.unmask();

                    });
                    })
                    .error(function () {
                        alertService.unmask();
                    });
            })
            .error(function () {
                alertService.unmask();
            });

        $scope.timer = $interval(function () {
            var top = $('.xz_desc').scrollTop();
            if (top >= $(".xz_desc>div").height()-$(".xz_desc").height()) {
                top = 0;
            }
            $('.xz_desc').scrollTop(++top);
        }, 100);

        $(".xz_desc").hover(function(){
            $interval.cancel($scope.timer)
        },function(){
            $scope.timer = $interval(function () {
                var top = $('.xz_desc').scrollTop();
                if (top >= $(".xz_desc>div").height()-$(".xz_desc").height()) {
                    top = 0;
                }
                $('.xz_desc').scrollTop(++top);
            }, 100);
        })
        $scope.$on('$destroy', function () {
            $interval.cancel($scope.timer);
            if($scope.myChart) {
                $scope.myChart.dispose();
            }
        });
    }]);
