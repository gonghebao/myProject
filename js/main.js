/**
 * @author : dingtianxiu
 * @date : 2016/3/24
 * @module :
 * @description :
 */
var app = angular.module("mainApp", ['ui.alert']);
app.controller("mainCtrl", ['alertService', '$rootScope', '$scope', 'mainService', '$http', '$interval', '$timeout', function (alertService, $rootScope, $scope, mainService, $http, $interval, $timeout) {
    alertService.mask();
    $scope.sortCity = [
        {name: '杭州', value: 0},
        {name: '宁波', value: 0},
        {name: '温州', value: 0},
        {name: '嘉兴', value: 0},
        {name: '湖州', value: 0},
        {name: '绍兴', value: 0},
        {name: '金华', value: 0},
        {name: '衢州', value: 0},
        {name: '舟山', value: 0},
        {name: '丽水', value: 0},
        {name: '台州', value: 0}
    ];
    $scope.viewSortCity = [];
    //var data = {"success":true,"root":{"sssbtjsj":"2016-10-04 10:28:49","sssbGrid":[{"swbmbm":330126,"sbbs":712,"sbje":321745.65},{"swbmbm":330322,"sbbs":99,"sbje":149043.04},{"swbmbm":330329,"sbbs":119,"sbje":644216.62},{"swbmbm":330181,"sbbs":544,"sbje":8793311.83},{"swbmbm":330123,"sbbs":1155,"sbje":4542049.76},{"swbmbm":330324,"sbbs":337,"sbje":4956985.96},{"swbmbm":330101,"sbbs":5062,"sbje":51209823.9},{"swbmbm":330122,"sbbs":251,"sbje":2637156.59},{"swbmbm":330301,"sbbs":1063,"sbje":11259467.36},{"swbmbm":330124,"sbbs":530,"sbje":1262313.51},{"swbmbm":330327,"sbbs":238,"sbje":992830.46},{"swbmbm":330125,"sbbs":1104,"sbje":23387998.93},{"swbmbm":330328,"sbbs":74,"sbje":30810.6},{"swbmbm":330127,"sbbs":171,"sbje":2241906.6},{"swbmbm":330326,"sbbs":401,"sbje":2190612.24},{"swbmbm":330381,"sbbs":111,"sbje":82319.69}]}};
    //angular.forEach(data.root.sssbGrid, function (value, key) {
    //    if (/^3301/.test(value.swbmbm) || /^3300/.test(value.swbmbm)) {
    //        $scope.sortCity[0].value += value.sbje;
    //    }
    //    if (/^3302/.test(value.swbmbm)) {
    //        $scope.sortCity[1].value += value.sbje;
    //    }
    //    if (/^3303/.test(value.swbmbm)) {
    //        $scope.sortCity[2].value += value.sbje;
    //    }
    //    if (/^3304/.test(value.swbmbm)) {
    //        $scope.sortCity[3].value += value.sbje;
    //    }
    //    if (/^3305/.test(value.swbmbm)) {
    //        $scope.sortCity[4].value += value.sbje;
    //    }
    //    if (/^3306/.test(value.swbmbm)) {
    //        $scope.sortCity[5].value += value.sbje;
    //    }
    //    if (/^3307/.test(value.swbmbm)) {
    //        $scope.sortCity[6].value += value.sbje;
    //    }
    //    if (/^3308/.test(value.swbmbm)) {
    //        $scope.sortCity[7].value += value.sbje;
    //    }
    //    if (/^3309/.test(value.swbmbm)) {
    //        $scope.sortCity[8].value += value.sbje;
    //    }
    //    if (/^3325/.test(value.swbmbm)) {
    //        $scope.sortCity[9].value += value.sbje;
    //    }
    //    if (/^3326/.test(value.swbmbm)) {
    //        $scope.sortCity[10].value += value.sbje;
    //    }
    //});
    //$scope.sortCity.sort(function (a, b) {
    //    return b.value - a.value;
    //});
    //console.log($scope.sortCity);
    //$http.get($scope.URL + '/sssb?sbtjsj=0&jgsj=300&flag=3&tybm=33')
    //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: 0, jgsj: 300, flag: 3, tybm: 33})
    $http.get("data_json/main/sbtjsj0jgsj300flag3tybm33.json")
        .success(function (data) {
            angular.forEach(JSON.parse(data.data[0].value), function (value, key) {
                if (/^3301/.test(value.swbmbm) || /^3300/.test(value.swbmbm)) {
                    $scope.sortCity[0].value += parseInt(value.sbje);
                }
                if (/^3302/.test(value.swbmbm)) {
                    $scope.sortCity[1].value += parseInt(value.sbje);
                }
                if (/^3303/.test(value.swbmbm)) {
                    $scope.sortCity[2].value += parseInt(value.sbje);
                }
                if (/^3304/.test(value.swbmbm)) {
                    $scope.sortCity[3].value += parseInt(value.sbje);
                }
                if (/^3305/.test(value.swbmbm)) {
                    $scope.sortCity[4].value += parseInt(value.sbje);
                }
                if (/^3306/.test(value.swbmbm)) {
                    $scope.sortCity[5].value += parseInt(value.sbje);
                }
                if (/^3307/.test(value.swbmbm)) {
                    $scope.sortCity[6].value += parseInt(value.sbje);
                }
                if (/^3308/.test(value.swbmbm)) {
                    $scope.sortCity[7].value += parseInt(value.sbje);
                }
                if (/^3309/.test(value.swbmbm)) {
                    $scope.sortCity[8].value += parseInt(value.sbje);
                }
                if (/^3325/.test(value.swbmbm)) {
                    $scope.sortCity[9].value += parseInt(value.sbje);
                }
                if (/^3326/.test(value.swbmbm)) {
                    $scope.sortCity[10].value += parseInt(value.sbje);
                }
            });
            angular.copy($scope.sortCity, $scope.viewSortCity);
            $scope.viewSortCity.sort(function (a, b) {
                return b.value - a.value;
            });
            console.log($scope.viewSortCity);
        }).error(function () {
        });
    var tmp = {
        '3301': {name: '杭州', value: 0},
        '3302': {name: '宁波', value: 0},
        '3303': {name: '温州', value: 0},
        '3304': {name: '嘉兴', value: 0},
        '3305': {name: '湖州', value: 0},
        '3306': {name: '绍兴', value: 0},
        '3307': {name: '金华', value: 0},
        '3308': {name: '衢州', value: 0},
        '3309': {name: '舟山', value: 0},
        '3325': {name: '丽水', value: 0},
        '3326': {name: '台州', value: 0}
    };
    $scope.sortData = function (data) {
        angular.forEach(data, function (value, key) {
            if (/^3301/.test(value.swbmbm) || /^3300/.test(value.swbmbm)) {
                tmp[3301].value += parseInt(value.sbje);
            }
            if (/^3302/.test(value.swbmbm)) {
                tmp[3302].value += parseInt(value.sbje);
            }
            if (/^3303/.test(value.swbmbm)) {
                tmp[3303].value += parseInt(value.sbje);
            }
            if (/^3304/.test(value.swbmbm)) {
                tmp[3304].value += parseInt(value.sbje);
            }
            if (/^3305/.test(value.swbmbm)) {
                tmp[3305].value += parseInt(value.sbje);
            }
            if (/^3306/.test(value.swbmbm)) {
                tmp[3306].value += parseInt(value.sbje);
            }
            if (/^3307/.test(value.swbmbm)) {
                tmp[3307].value += parseInt(value.sbje);
            }
            if (/^3308/.test(value.swbmbm)) {
                tmp[3308].value += parseInt(value.sbje);
            }
            if (/^3309/.test(value.swbmbm)) {
                tmp[3309].value += parseInt(value.sbje);
            }
            if (/^3325/.test(value.swbmbm)) {
                tmp[3325].value += parseInt(value.sbje);
            }
            if (/^3326/.test(value.swbmbm)) {
                tmp[3326].value += parseInt(value.sbje);
            }
        });
        return tmp;
    };
    var objArr = function (obj) {
        var arr = [];
        angular.forEach(obj, function (value, key) {
            arr.push(value);
        });
        return arr;
    };

    function getHsSs() {
        //$http.get($scope.URL + '/ssdj?tybm=33&tjsj=' + $scope.hssbsj + '&jgsj=300&flag=1')//时时数据
        //$scope.post('CxglDtzs2016BLH_selectSsdj', {tybm: 33, tjsj: $scope.hssbsj, jgsj: 300, flag: 1})
        $http.get("data_json/main/tybm33tjsj2017-02-21jgsj300flag1.json")
            .success(function (data) {
                var ssXdjh = JSON.parse(data.data[0].value);
                $scope.hssbsj = data.data[2].value;//申报时间
                $scope.ssXdjh = 0;//时时新登记户
                var hsTimers = 0;
                hsTimers++;
                var t = 0;
                var endNum = Math.floor(ssXdjh.length / 60);
                if (endNum === 0) {
                    //$scope.ssXdjh = Math.ceil(Math.random() * 10);
                    t = Math.floor(60 / ssXdjh.length);//新登记户小于60时，计算出定时多少次显示一户
                } else {
                    if (ssXdjh.length && ssXdjh.length >= endNum) {
                        var sssrItem = ssXdjh.splice(0, endNum);
                    } else {
                        //var sssrItem = ssXdjh;
                    }
                    angular.forEach(sssrItem, function (value, key) {
                        $scope.ssXdjh += parseInt(value.hs);
                    });
                }
                $scope.djhs += $scope.ssXdjh;

                $scope.timer1 = $interval(function () {

                    if (hsTimers == 60) {
                        $interval.cancel($scope.timer1);
                        getHsSs();
                        hsTimers = 0;
                    } else {
                        hsTimers++;
                        if (endNum === 0) {
                            //$scope.ssXdjh = Math.ceil(Math.random() * 10);
                            t = Math.floor(60 / ssXdjh.length);
                            if (hsTimers % t === 0) {
                                if (ssXdjh.length && ssXdjh.length >= endNum) {
                                    var sssrItem = ssXdjh.splice(0, 1);
                                } else {
                                    //var sssrItem = ssXdjh;
                                }
                                angular.forEach(sssrItem, function (value, key) {
                                    $scope.ssXdjh += parseInt(value.hs);
                                });
                                //$scope.ssXdjh = sssrItem.hs;
                                $scope.djhs += $scope.ssXdjh;

                                if ($scope.ssXdjh != 0) {
                                    $(".int-1").fadeIn(20);
                                    $(".int-1").fadeOut(1000);
                                }
                            }
                        } else {
                            if (ssXdjh.length && ssXdjh.length >= endNum) {
                                var sssrItem = ssXdjh.splice(0, endNum);
                            } else {
                                //var sssrItem = ssXdjh;
                            }
                            angular.forEach(sssrItem, function (value, key) {
                                $scope.ssXdjh += parseInt(value.hs);
                            });
                            $scope.djhs += $scope.ssXdjh;
                            if ($scope.djhs != 0) {
                                $(".int-1").fadeIn(20);
                                $(".int-1").fadeOut(1000);
                            }
                        }
                    }
                }, 5000);
                alertService.unmask();
            })
            .error(function () {
                alertService.unmask();
            });
    }

    //$http.get($scope.URL + '/nsrhs?qsnf=' + $scope.curYear + '&zznf=' + $scope.curYear + '&tybm=33')//当年数据
    //$scope.post('CxglDtzs2016BLH_selectNsrhs', {qsnf: $scope.curYear, zznf: $scope.curYear, tybm: 33})
    $http.get("data_json/main/qsnf2017zznf2017tybm33.json")
        .success(function (data) {
            var hsValue = JSON.parse(data.data[0].value);
            $scope.djhs = 0;//申报户数
            angular.forEach(hsValue, function (value, key) {
                $scope.djhs += parseInt(value.hs);
            });
            //$http.get($scope.URL + '/ssdj?tybm=33&tjsj=0&jgsj=300&flag=2')//当天数据
            //$scope.post('CxglDtzs2016BLH_selectSsdj', {tybm: 33, tjsj: 0, jgsj: 300, flag: 2})
            $http.get("data_json/main/tybm33tjsj0jgsj300flag2.json")
                .success(function (data) {
                    var xdjh = JSON.parse(data.data[0].value);
                    angular.forEach(xdjh, function (value, key) {
                        $scope.djhs += parseInt(value.hs);
                    });
                    $scope.hssbsj = data.data[2].value;//申报时间
                    getHsSs();
                })
                .error(function () {
                    alertService.unmask();
                });
        })
        .error(function () {
            alertService.unmask();
        });


    function getDaySs() {
        //$http.get($scope.URL + '/sssb?sbtjsj=' + $scope.srsbsj + '&jgsj=300&flag=1&tybm=33')//时时数据
        //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: $scope.srsbsj, jgsj: 300, flag: 1, tybm: 33})
        $http.get("data_json/main/sbtjsj2017-02-21jgsj300flag1tybm33.json")
            .success(function (data) {
                var sssr = JSON.parse(data.data[0].value);
                $scope.srsbsj = data.data[1].value;
                $scope.ssbmsr = 0;//实时部门收入
                $scope.ssshuishou = 0;//实时税收
                $scope.ssfeiss = 0;//实时非税收
                console.log("sssr",sssr);
                var times = 0;
                var endNum = Math.floor(sssr.length / 60);
                times++;
                var t = 0;
                if (endNum === 0) {
                    //$scope.ssXdjh = Math.ceil(Math.random() * 10);
                    t = Math.floor(60 / sssr.length);//实时申报小于60时，计算出定时多少次显示一笔申报
                } else {
                    if (sssr.length && sssr.length >= endNum) {
                        var sssrItem = sssr.splice(0, endNum);
                    } else {
                        //var sssrItem = sssr;
                    }
                    angular.forEach(sssrItem, function (value, key) {
                        if (value.zspm && value.zspm.indexOf('税') != -1) {
                            $scope.ssshuishou += parseFloat(value.sbje);
                        } else {
                            $scope.ssfeiss += parseFloat(value.sbje);
                        }
                        $scope.ssbmsr = $scope.ssshuishou + $scope.ssfeiss;
                    });
                    console.log($scope.ssXdjh);
                    console.log($scope.ssbmsr);
                }

                $scope.bmsr += $scope.ssbmsr;
                $scope.shuishou += $scope.ssshuishou;
                $scope.feiss += $scope.ssfeiss;
                $scope.timer2 = $interval(function () {
                    if (times == 60) {
                        $interval.cancel($scope.timer2);
                        getDaySs();
                        times = 0;
                    } else {
                        times++;
                        if (endNum === 0) {
                            t = Math.floor(60 / sssr.length);
                            if (times % t === 0) {
                                $scope.ssbmsr = 0;
                                $scope.ssshuishou = 0;
                                $scope.ssfeiss = 0;

                                if (sssr.length && sssr.length >= endNum) {
                                    var sssrItem = sssr.splice(0, 1);
                                } else {
                                    //var sssrItem = sssr;
                                }

                                angular.forEach(sssr, function (value, key) {
                                    if (/^3301/.test(value.swbmbm) || /^3300/.test(value.swbmbm)) {
                                        $scope.sortCity[0].value += parseFloat(value.sbje);
                                    }
                                    if (/^3302/.test(value.swbmbm)) {
                                        $scope.sortCity[1].value += parseFloat(value.sbje);
                                    }
                                    if (/^3303/.test(value.swbmbm)) {
                                        $scope.sortCity[2].value += parseFloat(value.sbje);
                                    }
                                    if (/^3304/.test(value.swbmbm)) {
                                        $scope.sortCity[3].value += parseFloat(value.sbje);
                                    }
                                    if (/^3305/.test(value.swbmbm)) {
                                        $scope.sortCity[4].value += parseFloat(value.sbje);
                                    }
                                    if (/^3306/.test(value.swbmbm)) {
                                        $scope.sortCity[5].value += parseFloat(value.sbje);
                                    }
                                    if (/^3307/.test(value.swbmbm)) {
                                        $scope.sortCity[6].value += parseFloat(value.sbje);
                                    }
                                    if (/^3308/.test(value.swbmbm)) {
                                        $scope.sortCity[7].value += parseFloat(value.sbje);
                                    }
                                    if (/^3309/.test(value.swbmbm)) {
                                        $scope.sortCity[8].value += parseFloat(value.sbje);
                                    }
                                    if (/^3325/.test(value.swbmbm)) {
                                        $scope.sortCity[9].value += parseFloat(value.sbje);
                                    }
                                    if (/^3326/.test(value.swbmbm)) {
                                        $scope.sortCity[10].value += parseFloat(value.sbje);
                                    }
                                });
                                //排序
                                angular.copy($scope.sortCity, $scope.viewSortCity);
                                $scope.viewSortCity.sort(function (a, b) {
                                    return b.value - a.value;
                                });
                                console.log($scope.viewSortCity);
                                //$scope.sortCity = objArr(obj).sort(function (a, b) {
                                //    return b.value - a.value;
                                //});

                                angular.forEach(sssrItem, function (value, key) {
                                    if (value.zspm && value.zspm.indexOf('税') != -1) {
                                        $scope.ssshuishou += parseFloat(value.sbje);
                                    } else {
                                        $scope.ssfeiss += parseFloat(value.sbje);
                                    }
                                    $scope.ssbmsr = $scope.ssshuishou + $scope.ssfeiss;
                                });

                                $scope.bmsr += $scope.ssbmsr;
                                $scope.shuishou += $scope.ssshuishou;
                                $scope.feiss += $scope.ssfeiss;

                                if ($scope.ssbmsr !== 0) {
                                    $(".int-2").fadeIn(20);
                                    $(".int-2").fadeOut(1000);
                                }
                                if ($scope.ssshuishou !== 0) {
                                    $(".int-3").fadeIn(20);
                                    $(".int-3").fadeOut(1000);
                                }
                                if ($scope.ssfeiss !== 0) {
                                    $(".int-4").fadeIn(20);
                                    $(".int-4").fadeOut(1000);
                                }
                                $(".int-2").fadeIn(20);
                                $(".int-2").fadeOut(1000);
                            }
                        } else {
                            if (sssr.length && sssr.length >= endNum) {
                                var sssrItem = sssr.splice(0, endNum);
                            } else {
                                //var sssrItem = sssr;
                            }
                            //var obj = $scope.sortData(sssrItem);
                            //console.log(obj);

                            angular.forEach(sssr, function (value, key) {
                                if (/^3301/.test(value.swbmbm) || /^3300/.test(value.swbmbm)) {
                                    $scope.sortCity[0].value += parseFloat(value.sbje);
                                }
                                if (/^3302/.test(value.swbmbm)) {
                                    $scope.sortCity[1].value += parseFloat(value.sbje);
                                }
                                if (/^3303/.test(value.swbmbm)) {
                                    $scope.sortCity[2].value += parseFloat(value.sbje);
                                }
                                if (/^3304/.test(value.swbmbm)) {
                                    $scope.sortCity[3].value += parseFloat(value.sbje);
                                }
                                if (/^3305/.test(value.swbmbm)) {
                                    $scope.sortCity[4].value += parseFloat(value.sbje);
                                }
                                if (/^3306/.test(value.swbmbm)) {
                                    $scope.sortCity[5].value += parseFloat(value.sbje);
                                }
                                if (/^3307/.test(value.swbmbm)) {
                                    $scope.sortCity[6].value += parseFloat(value.sbje);
                                }
                                if (/^3308/.test(value.swbmbm)) {
                                    $scope.sortCity[7].value += parseFloat(value.sbje);
                                }
                                if (/^3309/.test(value.swbmbm)) {
                                    $scope.sortCity[8].value += parseFloat(value.sbje);
                                }
                                if (/^3325/.test(value.swbmbm)) {
                                    $scope.sortCity[9].value += parseFloat(value.sbje);
                                }
                                if (/^3326/.test(value.swbmbm)) {
                                    $scope.sortCity[10].value += parseFloat(value.sbje);
                                }
                            });
                            //排序
                            angular.copy($scope.sortCity, $scope.viewSortCity);
                            $scope.viewSortCity.sort(function (a, b) {
                                return b.value - a.value;
                            });
                            console.log($scope.viewSortCity);
                            //$scope.sortCity = objArr(obj).sort(function (a, b) {
                            //    return b.value - a.value;
                            //});
                            $scope.ssbmsr = 0;
                            $scope.ssshuishou = 0;
                            $scope.ssfeiss = 0;
                            angular.forEach(sssrItem, function (value, key) {
                                if (value.zspm && value.zspm.indexOf('税') != -1) {
                                    $scope.ssshuishou += parseFloat(value.sbje);
                                } else {
                                    $scope.ssfeiss += parseFloat(value.sbje);
                                }
                                $scope.ssbmsr = $scope.ssshuishou + $scope.ssfeiss;
                            });

                            if ($scope.ssbmsr !== 0) {
                                $(".int-2").fadeIn(20);
                                $(".int-2").fadeOut(1000);
                            }
                            if ($scope.ssshuishou !== 0) {
                                $(".int-3").fadeIn(20);
                                $(".int-3").fadeOut(1000);
                            }
                            if ($scope.ssfeiss !== 0) {
                                $(".int-4").fadeIn(20);
                                $(".int-4").fadeOut(1000);
                            }
                            $scope.bmsr += $scope.ssbmsr;
                            $scope.shuishou += $scope.ssshuishou;
                            $scope.feiss += $scope.ssfeiss;
                        }
                    }
                }, 5000);
                alertService.unmask();
            })
            .error(function () {
                alertService.unmask();
            });
    }

    //$http.get($scope.URL + '/srqk?nf=' + $scope.curYear + '&tybm=33&bj=1')//当年数据
    //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf: $scope.curYear, tybm: 33, bj: 1})
    $http.get("data_json/main/nf2017tybm33bj1.json")
        .success(function (data) {
            var srValue = JSON.parse(data.data[0].value);
            angular.forEach(srValue, function (value, key) {
                if (value.xmbmSz === 1) {//税务部门组织的收入
                    $scope.bmsr = parseFloat(value.nLj);//组织收入
                }
                if (value.xmbmSz === 2) {//一、税收收入
                    $scope.shuishou = parseFloat(value.nLj);//税收
                }
                if (value.xmbmSz === 18) {//二、非税收入合计
                    $scope.feiss = parseFloat(value.nLj);//非税收
                }
            });
            //$http.get($scope.URL + '/sssb?sbtjsj=0&jgsj=300&flag=2&tybm=33')//当天数据
            //$scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: 0, jgsj: 300, flag: 2, tybm: 33})
            $http.get("data_json/main/sbtjsj0jgsj300flag2tybm33.json")
                .success(function (data) {
                    var res = JSON.parse(data.data[0].value);
                    $scope.bmsr += parseFloat(res[0].sbje);
                    $scope.shuishou += parseFloat(res[0].sbje) / 2;//税收
                    $scope.feiss += parseFloat(res[0].sbje) / 2;//非税收
                    $scope.srsbsj = data.data[1].value;//获取当前时间点，以便下次请求时发送给后台

                    getDaySs()
                })
                .error(function () {
                    alertService.unmask();
                });
        })
        .error(function () {
            alertService.unmask();
        });

    var citydat = [
        {'name': '嘉兴', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '杭州', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '宁波', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '丽水', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '绍兴', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '温州', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '湖州', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '金华', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '舟山', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '台州', 'value': 0, 'updown': "", "index": 0, "varnum": 0},
        {'name': '衢州', 'value': 0, 'updown': "", "index": 0, "varnum": 0}
    ];
    $scope.frist = citydat[0];
    $scope.second = citydat[1];
    $scope.third = citydat[2];
    $scope.ten1 = citydat[3];
    $scope.ten2 = citydat[4];
    $scope.ten3 = citydat[5];
    $scope.ten4 = citydat[6];
    $scope.ten5 = citydat[7];
    $scope.ten6 = citydat[8];
    $scope.ten7 = citydat[9];
    $scope.ten8 = citydat[10];
    //$scope.timeTicket = $interval(function () {
    //    $(".int").fadeIn(10);
    //    $(".int").fadeOut(2000);
    //
    //    var a = $timeout(function () {
    //        for (i = 0; i < citydat.length; i++) {
    //            var k = Math.floor(Math.random() * 100000 + 1);
    //            citydat[i].value += k;
    //            citydat[i].index = i;
    //        }
    //        var newdata = citydat.sort(by("value"));
    //        $scope.frist = newdata[0];
    //
    //        function x() {
    //            if ($scope.frist.index == 0) {
    //                $scope.frist.updown = "";
    //                return 0;
    //            } else {
    //                $scope.frist.updown = "↑";
    //                return $scope.frist.index;
    //            }
    //        }
    //
    //        function y() {
    //            if ($scope.second.index == 1) {
    //                $scope.second.updown = "";
    //                return 0;
    //            } else if ($scope.second.index == 0) {
    //                $scope.second.updown = "↓";
    //
    //                $(".var2").css("color", "#2cf80b");
    //                return 1;
    //            } else {
    //                $scope.second.updown = "↑";
    //                $(".var2").css("color", "#e72a0f");
    //                return $scope.second.index - 1;
    //            }
    //        }
    //
    //        function z() {
    //            var k = 0;
    //            if ($scope.third.index == 0) {
    //                $scope.third.updown = "↓";
    //                $(".var3").css("color", "#2cf80b");
    //                return 2
    //            } else if ($scope.third.index == 2) {
    //                $scope.third.updown = "";
    //                return 0
    //            } else if ($scope.third.index == 1) {
    //                $scope.third.updown = "↓";
    //                $(".var3").css("color", "#2cf80b");
    //                return 1;
    //            } else {
    //                $scope.third.updown = "↑";
    //                $(".var3").css("color", "#e72a0f");
    //                return $scope.third.index - 2;
    //            }
    //        }
    //
    //        $scope.frist.varnum = x();
    //        $scope.second = newdata[1];
    //        $scope.second.varnum = y();
    //        $scope.third = newdata[2];
    //        $scope.third.varnum = z();
    //        $scope.ten1 = newdata[3];
    //        $scope.ten2 = newdata[4];
    //        $scope.ten3 = newdata[5];
    //        $scope.ten4 = newdata[6];
    //        $scope.ten5 = newdata[7];
    //        $scope.ten6 = newdata[8];
    //        $scope.ten7 = newdata[9];
    //        $scope.ten8 = newdata[10];
    //        $scope.$digest();
    //        clearTimeout(a);
    //    }, 2010)
    //}, 5000);

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
        //left折线
        function (echarts) {
            var lineChart = echarts.init(document.getElementById('linecavs'));
            var dszzsr = [{value: parseFloat(sjjson.s2009.swbmsr) / 100000000}, {value: parseFloat(sjjson.s2010.swbmsr) / 100000000}, {value: parseFloat(sjjson.s2011.swbmsr) / 100000000}, {
                value: parseFloat(sjjson.s2012.swbmsr / 100000000)
            }, {value: parseFloat(sjjson.s2013.swbmsr / 100000000)}, {value: parseFloat(sjjson.s2014.swbmsr / 100000000)}, {value: parseFloat(sjjson.s2015.swbmsr / 100000000)}];
            var sssr = [{value: parseFloat(sjjson.s2009.sssr / 100000000)}, {value: parseFloat(sjjson.s2010.sssr / 100000000)}, {value: parseFloat(sjjson.s2011.sssr / 100000000)}, {
                value: parseFloat(sjjson.s2012.sssr / 100000000)
            }, {value: parseFloat(sjjson.s2013.sssr / 100000000)}, {value: parseFloat(sjjson.s2014.sssr / 100000000)}, {value: parseFloat(sjjson.s2015.sssr / 100000000)}];
            var fssr = [{value: parseFloat(sjjson.s2009.fssr / 100000000)}, {value: parseFloat(sjjson.s2010.fssr / 100000000)}, {value: parseFloat(sjjson.s2011.fssr / 100000000)},
                {value: parseFloat(sjjson.s2012.fssr / 100000000)}, {value: parseFloat(sjjson.s2013.fssr / 100000000)}, {value: parseFloat(sjjson.s2014.fssr / 100000000)}, {value: parseFloat(sjjson.s2015.fssr / 100000000)}];
            var sbjjsr = [{value: parseFloat(sjjson.s2009.sbjjsr / 100000000)}, {value: parseFloat(sjjson.s2010.sbjjsr / 100000000)}, {value: parseFloat(sjjson.s2011.sbjjsr / 100000000)},
                {value: parseFloat(sjjson.s2012.sbjjsr / 100000000)}, {value: parseFloat(sjjson.s2013.sbjjsr / 100000000)}, {value: parseFloat(sjjson.s2014.sbjjsr / 100000000)}, {value: parseFloat(sjjson.s2015.sbjjsr / 100000000)}];
            for (i = 0; i < dszzsr.length; i++) {
                dszzsr[i].value = dszzsr[i].value.toFixed(2);
                sssr[i].value = sssr[i].value.toFixed(2);
                fssr[i].value = fssr[i].value.toFixed(2);
                sbjjsr[i].value = sbjjsr[i].value.toFixed(2);
            }
            dszzsr.push('-');
            sssr.push('-');
            fssr.push('-');
            sbjjsr.push('-');
            //左下角四个税种
            var sssr={
                1:{
                    name:"",
                    data:[]
                },
                2:{
                    name:"",
                    data:[]
                },
                18:{
                    name:"",
                    data:[]
                },
                23:{
                    name:"",
                    data:[]
                },
                y2009:[],
                y2010:[],
                y2011:[],
                y2012:[],
                y2013:[],
                y2014:[],
                y2015:[]

            }
            //$scope.post('CxglDtzs2016BLH_selectSrdb', {
            //    qsnf: $scope.curYear - 7,
            //    zznf: $scope.curYear,
            //    tybm: 33,
            //    bj:1
            //})
            $http.get("data_json/main/qsnf2010zznf2017tybm33bj1.json")
                .success(function (data) {
                    data=data.data
                    console.log("data12",data);
                    for(var i=0;i<data.length;i++){
                        data[i].value=JSON.parse(data[i].value)
                    }
                    console.log("data",data);
                    data.pop();
                    angular.forEach(data,function(v){
                        angular.forEach(v.value,function(value){
                            switch(value.xmbmSz){
                                case 1:
                                    sssr[1].name="税务部门组织收入";
                                    sssr[1].mcdm=1;
                                    sssr[1].data.push((value.nLj/100000000).toFixed(2));
                                    break;
                                case 2:
                                    sssr[2].name="税收收入";
                                    sssr[2].mcdm=2;
                                    sssr[2].data.push((value.nLj/100000000).toFixed(2));
                                    break;
                                case 18:
                                    sssr[18].name="非税收收入";
                                    sssr[18].mcdm=18;
                                    sssr[18].data.push((value.nLj/100000000).toFixed(2));
                                    break;
                                case 23:
                                    sssr[23].name="社保基金收入";
                                    sssr[23].mcdm=23;
                                    sssr[23].data.push((value.nLj/100000000).toFixed(2));
                                    break;

                                default:break;

                            }
                        })
                    })
                    console.log("data_209999",data);
                    angular.forEach(data,function(v){
                        switch(parseInt(v.name)){
                            case $scope.curYear-7:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2009"][0]={};
                                            sssr["y2009"][0].name="个人所得税";
                                            sssr["y2009"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2009"][1]={};
                                            sssr["y2009"][1].name="企业所得税";
                                            sssr["y2009"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2009"][2]={};
                                            sssr["y2009"][2].name="契税";
                                            sssr["y2009"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2009"][3]={};
                                            sssr["y2009"][3].name="营业税";
                                            sssr["y2009"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2009"][4]={};
                                            sssr["y2009"][4].name="其他";
                                            sssr["y2009"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-6:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2010"][0]={};
                                            sssr["y2010"][0].name="个人所得税";
                                            sssr["y2010"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2010"][1]={};
                                            sssr["y2010"][1].name="企业所得税";
                                            sssr["y2010"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2010"][2]={};
                                            sssr["y2010"][2].name="契税";
                                            sssr["y2010"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2010"][3]={};
                                            sssr["y2010"][3].name="营业税";
                                            sssr["y2010"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2010"][4]={};
                                            sssr["y2010"][4].name="其他";
                                            sssr["y2010"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-5:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2011"][0]={};
                                            sssr["y2011"][0].name="个人所得税";
                                            sssr["y2011"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2011"][1]={};
                                            sssr["y2011"][1].name="企业所得税";
                                            sssr["y2011"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2011"][2]={};
                                            sssr["y2011"][2].name="契税";
                                            sssr["y2011"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2011"][3]={};
                                            sssr["y2011"][3].name="营业税";
                                            sssr["y2011"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2011"][4]={};
                                            sssr["y2011"][4].name="其他";
                                            sssr["y2011"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-4:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2012"][0]={};
                                            sssr["y2012"][0].name="个人所得税";
                                            sssr["y2012"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2012"][1]={};
                                            sssr["y2012"][1].name="企业所得税";
                                            sssr["y2012"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2012"][2]={};
                                            sssr["y2012"][2].name="契税";
                                            sssr["y2012"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2012"][3]={};
                                            sssr["y2012"][3].name="营业税";
                                            sssr["y2012"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2012"][4]={};
                                            sssr["y2012"][4].name="其他";
                                            sssr["y2012"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-3:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2013"][0]={};
                                            sssr["y2013"][0].name="个人所得税";
                                            sssr["y2013"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2013"][1]={};
                                            sssr["y2013"][1].name="企业所得税";
                                            sssr["y2013"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2013"][2]={};
                                            sssr["y2013"][2].name="契税";
                                            sssr["y2013"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2013"][3]={};
                                            sssr["y2013"][3].name="营业税";
                                            sssr["y2013"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2013"][4]={};
                                            sssr["y2013"][4].name="其他";
                                            sssr["y2013"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-2:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2014"][0]={};
                                            sssr["y2014"][0].name="个人所得税";
                                            sssr["y2014"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2014"][1]={};
                                            sssr["y2014"][1].name="企业所得税";
                                            sssr["y2014"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2014"][2]={};
                                            sssr["y2014"][2].name="契税";
                                            sssr["y2014"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2014"][3]={};
                                            sssr["y2014"][3].name="营业税";
                                            sssr["y2014"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2014"][4]={};
                                            sssr["y2014"][4].name="其他";
                                            sssr["y2014"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            case $scope.curYear-1:
                                angular.forEach(v.value,function(value){
                                    switch(value.xmbmSz){
                                        case 5:
                                            sssr["y2015"][0]={};
                                            sssr["y2015"][0].name="个人所得税";
                                            sssr["y2015"][0].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 4:
                                            sssr["y2015"][1]={};
                                            sssr["y2015"][1].name="企业所得税";
                                            sssr["y2015"][1].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 15:
                                            sssr["y2015"][2]={};
                                            sssr["y2015"][2].name="契税";
                                            sssr["y2015"][2].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 3:
                                            sssr["y2015"][3]={};
                                            sssr["y2015"][3].name="营业税";
                                            sssr["y2015"][3].value=(value.nLj/100000000).toFixed(2);
                                            break;
                                        case 17:
                                            sssr["y2015"][4]={};
                                            sssr["y2015"][4].name="其他";
                                            sssr["y2015"][4].value=(value.nLj/100000000).toFixed(2);
                                    }
                                })
                            default:break;
                        }
                    })
                    sssr[1].data[7]=(sssr[1].data[6]*1.07).toFixed(2);
                    sssr[2].data[7]=(sssr[2].data[6]*1.07).toFixed(2);
                    sssr[18].data[7]=(sssr[18].data[6]*1.07).toFixed(2);
                    sssr[23].data[7]=(sssr[23].data[6]*1.07).toFixed(2);
                    console.log("sssr1211",sssr);
                    var option = {
                        title: {
                            text: '亿元',
                            x: 70,
                            y: 40,
                            textStyle: {
                                fontSize: '16px',
                                color: '#2669ce'
                            }
                        },
                        tooltip: {
                            // show:false,
                            trigger: 'axis',
                            padding: 3,
                            formatter: function (params, ticket, callback) {
                                params = params.sort(by("seriesIndex"));//排序
                                var res = params[0].name + '年<br/>';//抬头
                                for (i = 0; i < params.length; i++) {
                                    if (i % 2 == 0) {
                                        res += params[i].seriesName + ':' + params[i].value + '亿元' + '<br/>';//修改,只显示虚线数据
                                    }
                                }
                                //console.log(callback(ticket, res));
                                var b = setTimeout(function () {
                                    callback(ticket, res);
                                    clearTimeout(b);
                                }, 300);
                                return '计算中...';
                            }
                        },
                        legend: {
                            padding: [0, 90],
                            textStyle: {
                                color: "#ffffff"
                            },
                            // color:['#00448a','#0580b9','#28c6b9','#84e6f1','#dddddd'],
                            data: ['地税组织收入', '税收收入', '社保基金收入', '非税收入'],
                            orient: 'horizontal',
                            x: 'center',
                            y: 'bottom'
                        },
                        color: ['#0ecdf6', '#127cff', '#0edb26', '#ffb21c'],//系列颜色
                        grid: {
                            left: "left",
                            right: '0%',
                            bottom: '0%',
                            containLabel: true,
                            borderWidth: 0
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            right: '40%',
                            axisLabel: {
                                textStyle: {
                                    color: "#2669ce",
                                    fontSize: 12,
                                    fontWeight: "normal"
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            data: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear]
                        },
                        yAxis: {
                            type: 'value',
                            padding: '0',
                            axisLabel: {
                                textStyle: {
                                    color: "#2669ce",
                                    fontSize: 12,
                                    fontWeight: "normal"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#073b83'
                                }
                            }
                        },
                        series: [
                            {
                                name: '社保基金收入',
                                type: 'line',
                                stack: '',
                                //data: sbjjsr,
                                data:(sssr[23].data).slice(0,7),
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            color: '#0edb26'
                                        }
                                    }
                                },
                                smooth: true
                            },
                            {
                                name: '社保基金收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted',
                                            color: '#0edb26'
                                        }
                                    }
                                },
                                //data: [sbjjsr[0], sbjjsr[1], sbjjsr[2], sbjjsr[3], sbjjsr[4], sbjjsr[5], sbjjsr[sbjjsr.length - 2], (sbjjsr[sbjjsr.length - 2].value * 1.07).toFixed(2)]
                            data:sssr[23].data
                            },
                            {
                                name: '非税收入',
                                type: 'line',
                                stack: '',
                                //data: fssr,
                                data:(sssr[18].data).slice(0,7),
                                symbol: 'none',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            color: '#ffb21c'
                                        }
                                    }
                                }
                            },
                            {
                                name: '非税收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted',
                                            color: '#ffb21c'
                                        }
                                    }
                                },
                                //data: [fssr[0], fssr[1], fssr[2], fssr[3], fssr[4], fssr[5], fssr[fssr.length - 2], (fssr[fssr.length - 2].value * 1.07).toFixed(2)]
                             data:sssr[18].data
                            },
                            {
                                name: '税收收入',
                                type: 'line',
                                stack: '',
                                //data: sssr,
                                data:(sssr[2].data).slice(0,7),
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            color: '#127cff'
                                        }
                                    }
                                }
                            },
                            {
                                name: '税收收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted',
                                            color: '#127cff'
                                        }
                                    }
                                },
                                //data: [sssr[0], sssr[1], sssr[2], sssr[3], sssr[4], sssr[5], sssr[sssr.length - 2], (sssr[sssr.length - 2].value * 1.07).toFixed(2)]
                                data:sssr[2].data
                            },
                            {
                                name: '地税组织收入',
                                type: 'line',
                                //data: dszzsr,
                                data:(sssr[1].data).slice(0,7),
                                symbol: 'none',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            color: '#0ecdf6'
                                        }
                                    }
                                }
                            },
                            {
                                name: '地税组织收入',
                                type: 'line',
                                stack: '',
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dotted',
                                            color: '#0ecdf6'
                                        }
                                    }
                                },
                                //data: [dszzsr[0], dszzsr[1], dszzsr[2], dszzsr[3], dszzsr[4], dszzsr[5], dszzsr[dszzsr.length - 2], (dszzsr[dszzsr.length - 2].value * 1.07).toFixed(2)]
                                data:sssr[1].data
                            }
                        ]
                    };
                    lineChart.setOption(option);

                    require(
                        [
                            'echarts',
                            'echarts/chart/line',
                            'echarts/chart/bar'
                        ],
                        //right登记注册情况年度对比
                        function (echarts) {
                            var rightChart1 = echarts.init(document.getElementById('rightcavs1'));
                            //$http.get($scope.URL + '/nsrbd?qsnf=' + ($scope.curYear - 7) + '&zznf=' + $scope.curYear + '&tybm=33')
                            //$scope.post('CxglDtzs2016BLH_selectNsrbd', {qsnf: $scope.curYear - 7, zznf: $scope.curYear, tybm: 33})
                            $http.get("data_json/main/qsnf2010zznf2017tybm33.json")
                                .success(function (data) {
                                    alertService.unmask();
                                    data = JSON.parse(data.data[0].value);
                                    var zc = [];
                                    var zx = [];
                                    var yx = [];
                                    for (var i = 0; i < data.length; i++) {
                                        zc.push((parseInt(data[i]['zc']) / 10000).toFixed(2));
                                        zx.push((parseInt(data[i]['zx']) / 10000).toFixed(2));
                                    }
                                    for (var i = 0; i < zc.length; i++) {
                                        yx.push((zc[i] - zx[i]).toFixed(2))
                                    }
                                    zc.pop();
                                    zx.pop();
                                    yx.pop();
                                    option = {
                                        title: {
                                            text: '万元',
                                            x: 30,
                                            y: 30,
                                            textStyle: {
                                                fontSize: '16px',
                                                color: '#2669ce'
                                            }
                                        },
                                        tooltip: {
                                            trigger: 'axis'
                                        },
                                        calculable: false,
                                        legend: {
                                            textStyle: {
                                                color: "#ffffff"
                                            },
                                            data: ['登记数', '注销数', '增加数']
                                        },
                                        grid: {
                                            borderWidth: 0,
                                            x: '10%',
                                            y: '20%',
                                            width: '80%',
                                            height: '70%'
                                        },
                                        xAxis: [
                                            {
                                                type: 'category',
                                                axisLabel: {
                                                    textStyle: {
                                                        color: "#2669ce",
                                                        fontSize: 12,
                                                        fontWeight: "normal"
                                                    }
                                                },
                                                splitLine: {
                                                    show: false
                                                },
                                                data: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1]
                                            }
                                        ],
                                        yAxis: {
                                            type: 'value',
                                            splitLine: {
                                                show: false
                                            },
                                            axisLabel: {
                                                formatter: function (format) {
                                                    return format;
                                                },

                                                textStyle: {
                                                    color: "#2669ce",
                                                    fontSize: 12,
                                                    fontWeight: "normal"
                                                }
                                            }
                                        },
                                        series: [
                                            {
                                                name: '登记数',
                                                itemStyle: {
                                                    normal: {
                                                        color: '#4169fe'
                                                    }
                                                },

                                                type: 'bar',
                                                data: zc
                                            },
                                            {
                                                name: '注销数',
                                                itemStyle: {
                                                    normal: {
                                                        color: '#17c9f7'
                                                    }
                                                },
                                                type: 'bar',
                                                data: zx
                                            },
                                            {
                                                name: '增加数',
                                                itemStyle: {
                                                    normal: {
                                                        color: '#edd734'
                                                    }
                                                },
                                                type: 'line',
                                                data: yx
                                            }
                                        ]
                                    };
                                    rightChart1.setOption(option);
                                }, function () {
                                    alertService.unmask();
                                });
                        });
                    require(
                        [
                            'echarts',
                            'echarts/chart/pie'

                        ],
                        //分税种收入情况
                        function (echarts) {
                            var right2 = echarts.init(document.getElementById('rightcavs2'));

                            // var idx = 1;
                            //{value: idx * 128 + 80,  name:'个人所得税'},
                            var viewdata = [];
                            var newname = "个人所得税";
                            var dataIndex = 0;
                            viewdata.push(y2009[dataIndex].value, y2010[dataIndex].value, y2011[dataIndex].value,
                                y2012[dataIndex].value, y2013[dataIndex].value, y2014[dataIndex].value, y2015[dataIndex].value);
                            console.log("y2009",y2009);
                            console.log("y2015",y2015);
                            option = {
                                timeline: {
                                    x: '15%',//左侧距离
                                    y: '80%',
                                    controlStyle: {
                                        normal: {
                                            color: '#2669ce'
                                        }
                                    },
                                    //right:100,
                                    padding: [10, 0],
                                    left: 'center',
                                    contrlStyle: {
                                        normal: {
                                            color: '#fff'
                                        }
                                    },
                                    data: [
                                        $scope.curYear - 7 + '', $scope.curYear - 6 + '', $scope.curYear - 5 + '', $scope.curYear - 4 + '', $scope.curYear - 3 + '', $scope.curYear - 2 + '',
                                        {name: '2015', symbol: 'emptyStar6', symbolSize: 8, show: true}
                                    ],
                                    autoPlay: true,//自动播放
                                    label: {
                                        textStyle: {
                                            color: '#2669ce'
                                        },
                                        formatter: function (s) {
                                            return s.slice(0, 7);
                                        }
                                    }
                                },
                                options: [
                                    {
                                        title: {},
                                        tooltip: {
                                            formatter: function (v) {
                                                return v[1] + ":" + v[2]
                                            }
                                            //formatter: "{a} <br/>{b} : {c} ({d}%)"
                                        },
                                        legend: {
                                            orient: 'horizontal',
                                            x: 'left',
                                            textStyle: {
                                                color: "#ffffff"
                                            },
                                            data: [
                                                {name: '个人所得税', icon: 'bar'},
                                                {name: '企业所得税', icon: 'bar'},
                                                {name: '契税', icon: 'bar'},
                                                {name: '营业税', icon: 'bar'},
                                                {name: '其他', icon: 'bar'}
                                            ]
                                        },
                                        toolbox: {
                                            show: false
                                        },
                                        color: ['#2874ff', '#8426f8', '#0cda63', '#dbff14', '#14b4ff'],
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                radius: '50%',
                                                itemStyle: {
                                                    normal: {
                                                        label: {
                                                            //position: 'outer',
                                                            formatter: function (params) {
                                                                return (params.percent - 0).toFixed(2) + '%'
                                                            }
                                                        }
                                                    }
                                                },
                                                //09 年没有数据返回
                                               data: sssr["y2009"]
                                               //   data:sssr["y2010"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2010"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2011"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2012"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2013"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2014"]
                                            }
                                        ]
                                    },
                                    {
                                        series: [
                                            {
                                                name: '税收比',
                                                type: 'pie',
                                                data: sssr["y2015"]
                                            }
                                        ]
                                    }
                                ]
                            };
                            right2.setOption(option);
                            var myChart2 = echarts.init(document.getElementById('rightcavs3'));
                            option2 = {
                                title: {
                                    text: '亿元',
                                    x: 35,
                                    y: 0,
                                    textStyle: {
                                        fontSize: '16px',
                                        color: '#2669ce'
                                    }
                                },
                                tooltip: {
                                    trigger: 'axis'
                                },
                                calculable: false,
                                grid: {
                                    borderWidth: 0,
                                    x: '12%',
                                    y: '5%',
                                    width: '80%',
                                    height: '70%'
                                },
                                xAxis: [
                                    {
                                        type: 'category',
                                        axisLabel: {
                                            textStyle: {
                                                color: "#2669ce",
                                                fontSize: 12,
                                                fontWeight: "normal"
                                            }
                                        },
                                        splitLine: {
                                            show: false
                                        },
                                        data: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1]
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',
                                        axisLabel: {
                                            formatter: "{value}",
                                            textStyle: {
                                                color: "#2669ce",
                                                fontSize: 12,
                                                fontWeight: "normal"
                                            }
                                        },
                                        splitLine: {
                                            show: false
                                        }
                                    }
                                ],
                                series: [
                                    {
                                        name: newname,
                                        itemStyle: {
                                            normal: {color: '#4169fe'}
                                        },
                                        type: 'bar',
                                        data: viewdata
                                    }
                                ]
                            };
                            var c = setTimeout(function () {
                                myChart2.setOption(option2);
                                clearTimeout(c);
                            }, 800);
                            right2.on('click', function (param) {
                                newname = param.name;
                                dataIndex = param.dataIndex;
                                viewdata = [sssr["y2009"][dataIndex].value, sssr["y2010"][dataIndex].value, sssr["y2011"][dataIndex].value, sssr["y2012"][dataIndex].value, sssr["y2013"][dataIndex].value, sssr["y2014"][dataIndex].value, sssr["y2015"][dataIndex].value];
                              console.log("viewdata",viewdata);
                                option2 = {
                                    title: {
                                        text: '亿元',
                                        x: 35,
                                        y: 0,
                                        textStyle: {
                                            fontSize: '16px',
                                            color: '#2669ce'
                                        }
                                    },
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    calculable: false,
                                    grid: {
                                        borderWidth: 0
                                    },
                                    xAxis: [
                                        {
                                            type: 'category',
                                            axisLabel: {
                                                textStyle: {
                                                    color: "#2669ce",
                                                    fontSize: 12,
                                                    fontWeight: "normal"
                                                }
                                            },
                                            splitLine: {
                                                show: false

                                            },
                                            data: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1]
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            type: 'value',
                                            axisLabel: {
                                                formatter: "{value}",
                                                textStyle: {
                                                    color: "#2669ce",
                                                    fontSize: 10,
                                                    fontWeight: "normal"
                                                }
                                            },
                                            splitLine: {
                                                show: false
                                            }
                                        }
                                    ],
                                    series: [
                                        {
                                            name: newname,
                                            itemStyle: {
                                                normal: {
                                                    color: '#4169fe'
                                                }
                                            },
                                            type: 'bar',
                                            data: viewdata
                                        }
                                    ]
                                };
                                myChart2.setOption(option2);
                            });
                        });
                })

        });
    //地图设置
    //$.get('ownGeo/zhejiang.json', function (geoJson) {
    //    echarts3.registerMap('浙江', geoJson);
    //
    //    var myChart = echarts3.init(document.getElementById('mapcavs'));
    //    //地图坐标系
    //    var geoCoord = [
    //        {name: '省局直属局', value: [120.13, 30.27]},
    //        {name: '嘉兴市局本级', value: [120.76, 30.77]},
    //        {name: '嘉兴三局', value: [120.67, 30.51]},
    //        {name: '嘉善县局', value: [120.92, 30.84]},
    //        {name: '平湖市局', value: [121.02, 30.7]},
    //        {name: '海盐县局', value: [120.92, 30.53]},
    //        {name: '桐乡市局', value: [120.54, 30.64]},
    //        {name: '海宁市局', value: [120.69, 30.53]},
    //        {name: '杭州市局本级', value: [120.19, 30.26]},
    //        {name: '上城区', value: [120.17, 30.25]},
    //        {name: '下城区', value: [120.17, 30.28]},
    //        {name: '江干区', value: [120.2, 30.27]},
    //        {name: '拱墅区', value: [120.13, 30.32]},
    //        {name: '西湖区', value: [120.13, 30.27]},
    //        {name: '滨江区', value: [120.2, 30.2]},
    //        {name: '萧山区', value: [120.27, 30.17]},
    //        {name: '余杭区', value: [120.3, 30.42]},
    //        {name: '桐庐县局', value: [119.67, 29.8]},
    //        {name: '富阳市局', value: [119.95, 30.07]},
    //        {name: '临安县局', value: [119.72, 30.23]},
    //        {name: '余杭局', value: [120.3, 30.43]},
    //        {name: '淳安县局', value: [119.03, 29.6]},
    //        {name: '建德市局', value: [119.28, 29.48]},
    //        {name: '萧山局', value: [120.25, 30.16]},
    //        {name: '宁波直属分局', value: [121.55, 29.88]},
    //        {name: '保税区', value: [121.85, 29.92]},
    //        {name: '海曙区', value: [121.55, 29.87]},
    //        {name: '江东区', value: [121.57, 29.87]},
    //        {name: '江北区', value: [121.55, 29.88]},
    //        {name: '北仑区', value: [121.85, 29.93]},
    //        {name: '宁波高新分局', value: [121.61, 29.88]},
    //        {name: '东钱湖分局', value: [121.63, 29.79]},
    //        {name: '大榭开发区', value: [121.93, 29.89]},
    //        {name: '镇海区', value: [121.72, 29.95]},
    //        {name: '宁波杭州湾分局', value: [121.13, 30.25]},
    //        {name: '象山县', value: [121.87, 29.48]},
    //        {name: '宁海县', value: [121.43, 29.28]},
    //        {name: '余姚市', value: [121.15, 30.04]},
    //        {name: '鄞州区', value: [121.53, 29.83]},
    //        {name: '慈溪市', value: [121.23, 30.17]},
    //        {name: '奉化市', value: [121.4, 29.65]},
    //        {name: '宁波契税征收管理中心', value: [121.54, 29.88]},
    //        {name: '丽水市局本级', value: [119.92, 28.45]},
    //        {name: '龙泉市局', value: [119.13, 28.08]},
    //        {name: '青田县局', value: [120.28, 28.45]},
    //        {name: '云和县局', value: [119.56, 28.12]},
    //        {name: '庆元县局', value: [119.06, 27.61]},
    //        {name: '缙云县局', value: [120.6, 28.66]},
    //        {name: '遂昌县局', value: [119.25, 28.59]},
    //        {name: '松阳县局', value: [119.48, 28.46]},
    //        {name: '景宁县局', value: [119.63, 27.98]},
    //        {name: '温州市局本级', value: [120.65, 28.01]},
    //        {name: '洞头区局', value: [121.12, 27.84]},
    //        {name: '乐清市局', value: [120.94, 28.14]},
    //        {name: '永嘉县局', value: [120.68, 28.16]},
    //        {name: '平阳县局', value: [120.55, 27.68]},
    //        {name: '苍南县局', value: [120.36, 27.53]},
    //        //'文成县局': [120.09, 27.79],//位置在海上,坐标不准确
    //        {name: '泰顺县局', value: [119.7, 27.57]},
    //        {name: '瑞安市局', value: [120.62, 27.8]},
    //        {name: '湖州市局本级', value: [120.1, 30.86]},
    //        {name: '德清县局', value: [119.97, 30.57]},
    //        {name: '长兴县局', value: [119.9, 31.02]},
    //        {name: '安吉县局', value: [119.68, 30.68]},
    //        {name: '金华市局本级', value: [119.64, 29.12]},
    //        {name: '永康市局', value: [120.02, 28.92]},
    //        {name: '武义县局', value: [119.81, 28.9]},
    //        {name: '义乌市局', value: [120.06, 29.32]},
    //        {name: '浦江县局', value: [119.88, 29.46]},
    //        {name: '磐安县局', value: [119.48, 29.19]},
    //        {name: '兰溪市局', value: [119.46, 29.21]},
    //        {name: '东阳市局', value: [120.23, 29.29]},
    //        {name: '舟山市局本级', value: [122.2, 30]},
    //        {name: '定海区局', value: [122.11, 30.03]},
    //        {name: '普陀区局', value: [122.3, 29.95]},
    //        {name: '岱山县局', value: [122.3, 30.25]},
    //        {name: '嵊泗县局', value: [122.3, 30.73]},
    //        {name: '台州市局本级', value: [121.43, 28.68]},
    //        {name: '椒江区局', value: [121.44, 28.67]},
    //        {name: '路桥区局', value: [121.38, 28.58]},
    //        {name: '黄岩区局', value: [121.27, 28.64]},
    //        {name: '临海市局', value: [121.13, 28.8]},
    //        {name: '温岭市局', value: [121.36, 28.36]},
    //        {name: '仙居县局', value: [120.73, 28.85]},
    //        {name: '天台县局', value: [121.03, 29.15]},
    //        {name: '三门县局', value: [121.38, 29.11]},
    //        {name: '玉环县局', value: [121.23, 28.14]},
    //        {name: '衢州市局本级', value: [118.87, 28.93]},
    //        {name: '常山县局', value: [118.5, 28.9]},
    //        {name: '江山市局', value: [118.61, 28.74]},
    //        {name: '开化县局', value: [118.39, 29.15]},
    //        {name: '龙游县局', value: [119.17, 29.03]},
    //        {name: '绍兴市局本级', value: [120.58, 30.01]},
    //        {name: '柯桥区局', value: [120.49, 30.08]},
    //        {name: '新昌县局', value: [120.89, 29.49]},
    //        {name: '诸暨市局', value: [120.23, 29.71]},
    //        {name: '上虞区局', value: [120.87, 30.03]},
    //        {name: '嵊州市局', value: [120.81, 29.6]}
    //    ];
    //    $scope.points = [
    //        {name: '省局直属局', value: [120.13, 30.27]},
    //        {name: '嘉兴市局本级', value: [120.76, 30.77]},
    //        {name: '嘉兴三局', value: [120.67, 30.51]},
    //        {name: '嘉善县局', value: [120.92, 30.84]},
    //        {name: '平湖市局', value: [121.02, 30.7]},
    //        {name: '海盐县局', value: [120.92, 30.53]},
    //        {name: '桐乡市局', value: [120.54, 30.64]},
    //        {name: '海宁市局', value: [120.69, 30.53]},
    //        {name: '杭州市局本级', value: [120.19, 30.26]}
    //    ];
    //    var len = geoCoord.length;
    //    var convertData = function () {
    //        var res = [];
    //        for (var i = 0; i < 30; i++) {
    //            var ranVal = Math.floor(Math.random() * 6) + 2;
    //            var ranIndex = Math.floor(Math.random() * len);
    //            res.push({
    //                name: geoCoord[ranIndex].name,
    //                value: geoCoord[ranIndex].value.concat(ranVal)
    //            });
    //        }
    //        return res;
    //    };
    //    var optionMap = {
    //        tooltip: {
    //            trigger: 'item',
    //            formatter: '{b}'
    //        },
    //        geo: {
    //            map: '浙江',
    //            label: {
    //                normal: {
    //                    show: true,
    //                    textStyle: {
    //                        color: '#fff'
    //                    }
    //                },
    //                emphasis: {
    //                    show: true
    //                }
    //            },
    //            //roam: true,
    //            aspectScale: 1,
    //            top: 0,//'10%',
    //            right: '5%',
    //            bottom: 0,
    //            left: '10%',
    //            itemStyle: {
    //                normal: {
    //                    borderWidth: 0.5,
    //                    borderColor: 'rgba(100,149,237,1)',
    //                    areaColor: 'rgba(1,1,1,0.1)'
    //                },
    //                emphasis: {
    //                    areaColor: 'rgb(23,150,200)'
    //                }
    //            }
    //        },
    //        series: [
    //            {
    //                type: 'effectScatter',
    //                coordinateSystem: 'geo',
    //                data: convertData(),
    //                symbol: 'diamond',
    //                symbolSize: function (val) {
    //                    return val[2];
    //                },
    //                showEffectOn: 'render',
    //                rippleEffect: {
    //                    brushType: 'fill',
    //                    period: 2,
    //                    scale: 3
    //                },
    //                hoverAnimation: true,
    //                label: {
    //                    emphasis: {
    //                        formatter: '{b}',
    //                        position: 'right',
    //                        show: true
    //                    }
    //                },
    //                itemStyle: {
    //                    normal: {
    //                        color: '#fffc27',
    //                        shadowColor: 'rgba(220,220,220,0.1)',
    //                        opacity: 0.2,
    //                        shadowBlur: 5
    //                    },
    //                    emphasis: {
    //                        color: '#f4e925',
    //                        shadowBlur: 10,
    //                        shadowColor: '#333'
    //                    }
    //                }
    //            }
    //        ]
    //    };
    //    myChart.setOption(optionMap);
    //    $scope.timer3 = $interval(function () {
    //        optionMap.series[0].data = convertData();
    //        myChart.setOption(optionMap);
    //    }, 2000);
    //});
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
    var myChart = echarts3.init(document.getElementById('mapcavs'));
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
            top: '2%',
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
                top: '2%',
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
        myChart.setOption(optionMap);
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
            myChart.setOption(optionMap);
        }, 1000);
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
            myChart2 = echarts.init($('.pointBox')[0]);//jquery转换为dom对象
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
                {name: 330327, geoCoord: [120.56, 27.43]},
                {name: 330327, geoCoord: [120.48, 27.53]},
                {name: 330327, geoCoord: [120.4, 27.63]},
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
                {name: 330922, geoCoord: [123.5, 30.8]},
                {name: 330922, geoCoord: [123, 31]},
                {name: 330922, geoCoord: [123.2, 30.9]},
                //岱山
                {name: 330921, geoCoord: [122.5, 30.28]},
                {name: 330921, geoCoord: [122.6, 30.24]},
                {name: 330921, geoCoord: [122.8, 30.24]},
                //普陀
                {name: 330903, geoCoord: [122.2, 29.97]},
                {name: 330903, geoCoord: [122.4, 30.1]},
                {name: 330903, geoCoord: [122.6, 29.97]},
                //定海
                {name: 330902, geoCoord: [123, 29.97]},
                {name: 330902, geoCoord: [123.1, 29.97]},
                {name: 330902, geoCoord: [123.3, 29.86]},
                //舟山市局本级
                {name: 330901, geoCoord: [122.9, 29.97]},
                {name: 330901, geoCoord: [122.9, 30.28]},
                {name: 330901, geoCoord: [123.1, 30.43]},
                //龙游
                {name: 330825, geoCoord: [118.82, 28.80]},
                {name: 330825, geoCoord: [118.87, 28.93]},
                {name: 330825, geoCoord: [118.89, 29.05]},
                //开化
                {name: 330824, geoCoord: [117.87, 29.05]},
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
            //共82；
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
                            symbolSize: 1,
                            large: true,
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
                                //return placeList;
                            })()
                        }
                    }
                ]
            };
            myChart2.setOption(option1);
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
                myChart2.setOption(option1)
            }, 10000);
            //$scope.ss_timer = $interval(function () {
            //    //$http.get($scope.URL + "/sssb?sbtjsj=0&jgsj=300&flag=1&tybm=33")
            //    $scope.post('CxglDtzs2016BLH_selectSssb', {sbtjsj: 0, jgsj: 300, flag: 1, tybm: 33})
            //        .success(function (data) {
            //            $interval.cancel($scope.pointTimer);
            //            if (data) {
            //                $scope.pointTimer = $interval(function () {
            //                    option1.series[0].markPoint = {
            //                        show: false,
            //                        symbol: 'diamond',
            //                        symbolSize: 20,
            //                        large: true,
            //                        effect: {
            //                            show: true
            //                        },
            //                        data: (function () {
            //                            var data = [];
            //                            var len = 10000;
            //                            var geoCoord;
            //                            while (len--) {
            //                                geoCoord = placeList[len % placeList.length].geoCoord;
            //                                data.push({
            //                                    name: placeList[len % placeList.length].name + len,
            //                                    value: 10,
            //                                    geoCoord: [
            //                                        geoCoord[0] + Math.random() * 0.5 - 0.282,
            //                                        geoCoord[1] + Math.random() * 0.5 - 0.212
            //                                    ]
            //                                })
            //                            }
            //
            //                            data.push(
            //                                {name: '杭州', geoCoord: [119, 30.2]},
            //                                {name: '杭州', geoCoord: [119.2, 30.1]},
            //                                {name: '杭州', geoCoord: [119.3, 30.15]},
            //                                {name: '舟山', geoCoord: [122.31, 30.43]},
            //                                {name: '舟山', geoCoord: [122.32, 30.43]},
            //                                {name: '舟山', geoCoord: [122.31, 30.45]},
            //                                {name: '舟山', geoCoord: [122.1, 30.61]},
            //                                {name: '舟山', geoCoord: [121.98, 30.71]},
            //                                {name: '舟山', geoCoord: [121.97, 30.72]},
            //                                {name: '舟山', geoCoord: [122.45, 30.72]}
            //                            );
            //                            var n = Math.floor(Math.random() * data.length);
            //                            var n2 = Math.floor(Math.random() * data.length);
            //                            var n3 = Math.floor(Math.random() * data.length);
            //                            var n4 = Math.floor(Math.random() * data.length);
            //                            var n5 = Math.floor(Math.random() * data.length);
            //                            var n6 = Math.floor(Math.random() * data.length);
            //                            var n7 = Math.floor(Math.random() * data.length);
            //                            var n8 = Math.floor(Math.random() * data.length);
            //
            //                            return [data[n], data[n2], data[n3], data[n4], data[n5], data[n6], data[n7], data[n8]];
            //
            //                        })()
            //                    };
            //                    myChart2.setOption(option1)
            //                }, 10000);
            //            } else {
            //                option1.series[0].markPoint = {
            //                    show: false,
            //                    symbol: 'diamond',
            //                    symbolSize: 20,
            //                    large: true,
            //                    effect: {
            //                        show: true
            //                    },
            //                    data: (function () {
            //                        return [];
            //                    })()
            //                };
            //                myChart2.setOption(option1)
            //            }
            //        }).error(function () {
            //            $interval.cancel($scope.pointTimer);
            //        })
            //}, 300000)
        });
    //实时申报取数,第一次
    //mainService.query('http://localhost:8080/gt3/dtzs/sssbss?sssbtjsj=')
    //    .then(
    //        function (data) {
    //          console.log(data,'实时');
    //          // console.log(data.root.sssbGrid[0]);
    //          $scope.ssData = data.root.sssbGrid;
    //          $scope.ssDate = data.root.sssbtjsj;
    //        }
    //    );

    //实时申报取数,300秒一次
    //$scope.sssb = setInterval(
    //    function () {
    //      mainService.query('http://localhost:8080/gt3/dtzs/sssbss?',$scope.ssDate)
    //          .then(
    //              function (data) {
    //                console.log(data,'实时');
    //                // console.log(data.root.sssbGrid[0]);
    //                $scope.ssData = data.root.sssbGrid;
    //                $scope.ssDate = data.root.sssbtjsj;
    //              }
    //          );
    //    },300000);
    //$scope.timeTicket = setInterval(function (){
    //    var mydata=[];
    //    var aadata=[];//保存处理完成的结果集
    //    var str=',{data:[';//保存线性数据
    //    var strpont=',{data:[';//保存点状数据
    //    var number=Math.floor(Math.random()*3+1); //产生的数据数量
    //    for(i=0;i<number;i++){
    //            //mydata = [{'name': $scope.ssData[i].swjmc}, {'name': '省局直属局'}];
    //            aadata.push(mydata);
    //    }
    //
    //    //将数据压入aadata
    //    for(i=0;i<aadata.length;i++){
    //        //str+='[{"name":"'+aadata[i][0].name+'"},{"name":"省局直属局"}],';
    //        //strpont+='{name:"'+aadata[i][0].name+'"},';
    //    }
    //
    //    //过滤用过的数据
    //    $scope.ssData = $scope.ssData.slice(number);
    //
    //    //过滤最后一个数据后面的逗号
    //    str=str.substring(0,(str.length-1))+']})';
    //    strpont=strpont.substring(0,(strpont.length-1))+']})';
    //
    //    //为index为1的系列添加点
    //    eval('myChart.addMarkPoint('+1+strpont);
    //
    //    //为index为1的系列添加线
    //    var t = setTimeout(function(){
    //        eval('myChart.addMarkLine('+1+str);
    //        clearTimeout(t);
    //    },1000);
    //
    //    //回收canvas上的所有线跟点
    //    var r = setTimeout(function(){
    //        for(i=0;i<aadata.length;i++){
    //            eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 杭州市局本级")');
    //            eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
    //        }
    //        clearTimeout(r);
    //    },6000)
    //},4000)


    //全屏
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
    //点击显示隐藏的侧边导航栏
    $(".more").click(function () {
        $(".more_info").addClass("on");
    });
    $(".more_info_close").bind({
        click: function () {
            $(".more_info").removeClass("on");
        },
        mouseover: function () {
            $(this).css('cursor', 'pointer')
        }
    });
    //时钟
    function showLocale(objD) {
        var str, colorhead, colorfoot;
        var yy = objD.getYear();
        if (yy < 1900) yy = yy + 1900;
        var MM = objD.getMonth() + 1;
        if (MM < 10) MM = '0' + MM;
        var dd = objD.getDate();
        if (dd < 10) dd = '0' + dd;
        var hh = objD.getHours();
        if (hh < 10) hh = '0' + hh;
        var mm = objD.getMinutes();
        if (mm < 10) mm = '0' + mm;
        var ss = objD.getSeconds();
        if (ss < 10) ss = '0' + ss;
        var ww = objD.getDay();
        if (ww == 0) colorhead = "<span >";
        if (ww > 0 && ww < 6) colorhead = "<span>";
        if (ww == 6) colorhead = "<span >";
        if (ww == 0) ww = "星期日";
        if (ww == 1) ww = "星期一";
        if (ww == 2) ww = "星期二";
        if (ww == 3) ww = "星期三";
        if (ww == 4) ww = "星期四";
        if (ww == 5) ww = "星期五";
        if (ww == 6) ww = "星期六";
        colorfoot = "</span>";
        str = colorhead + yy + "年" + MM + "月" + dd + "日" + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
        return (str);
    }

    function tick() {
        var today;
        today = new Date();
        document.getElementById("localtime") ? document.getElementById("localtime").innerHTML = showLocale(today) : '';
        $timeout.cancel($scope.timer4);
        $scope.timer4 = $timeout(tick, 1000);
    }

    tick();
    $scope.$on("$destroy", function () {
        //清除配置
        $interval.cancel($scope.timer1);
        $interval.cancel($scope.timer2);
        $interval.cancel($scope.timer4);
        $interval.cancel($scope.pointTimer);
        $interval.cancel($scope.ss_timer)
    });
    //背景效果 */*
    //init(1,"mylegend",1366,764,main);
    //var backLayer,meteorLayer;
    //var back,meteor;
    //var maxFrame = 1,indexFrame = 0;
    //function main(){
    //    LStage.setDebug(true);
    //
    //    //加入底板层
    //    backLayer = new LSprite();
    //    addChild(backLayer);
    //    //加入流星层
    //    meteorLayer = new LSprite();
    //    addChild(meteorLayer);
    //
    //    //画一个黑色矩形作为背景
    //    back = new LGraphics();
    //    back.drawRect(0,"",[0,0,LStage.width,LStage.height],true,"rgba(0,0,0,0)");
    //    backLayer.addChild(back);
    //
    //    //画一个黄色矩形作为一颗流星
    //    meteor = new LSprite();
    //    meteor.graphics.drawArc("rgba(255,255,255,0.6)",1,[0,0,1,1,Math.PI*10],true,"rgb(255,255,255)");
    //    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
    //}
    //function onframe(){
    //    if(indexFrame > maxFrame){
    //        indexFrame = 0;
    //        //为每个流星添加一个拖尾
    //        var smearing = new Smearing(meteor,0);
    //        smearing.x = Math.floor(Math.random() * 1050);
    //        smearing.y = 0;
    //        smearing.to(2,{
    //            x: Math.floor(Math.random() * 1366),
    //            y: 760
    //        });
    //        meteorLayer.addChild(smearing);
    //    }
    //    for(var key in meteorLayer.childList){
    //        if(meteorLayer.childList[key].mode == "complete"){
    //            meteorLayer.removeChild(meteorLayer.childList[key]);
    //        }
    //    }
    //    indexFrame ++;
    //}
    //$('.htmleaf-container').starfield({
    //    starDensity: 2.0,
    //    mouseScale: 0.5,
    //    seedMovement: false
    //});
    //点击主页按钮背景效果出来
    //$(".htmleaf-container").css("display","block");
    $("#snow").css("zIndex", "0")
}]);