var app = angular.module("dtzsApp", ['ui.alert', 'ui.router', 'mainApp', 'tsxzApp', 'fcjyApp', 'ssgdpApp', 'qsnsrApp', 'nsrdjApp', 'dssrApp', 'fhysrApp', 'wbmlwApp', 'qsdssrApp', 'sssbApp', 'srpmApp', 'fszsrApp','gdpcx']);
app.controller('left_nav', ['$scope', '$rootScope', function ($scope, $rootScope) {
    //点击显示隐藏的侧边导航栏
    //$(".more").click(function(){
    //    $(".more_info").addClass("on");
    //});
    //$(".more_info_close").bind({
    //    click:function(){
    //        $(".more_info").removeClass("on");
    //    },
    //    mouseover:function(){
    //        $(this).css('cursor','pointer')
    //    }
    //});
}]);
app.factory('mainService', ['$http', '$q', function ($http, $q) {
    return {
        query: function (url, date) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url,
                // 'http://localhost:8080/gt3/dtzs/sssbdt'
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
}])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('index', {
            url: '/',
            views: {
                header: {},
                main: {
                    templateUrl: 'views/main.html',
                    controller: 'mainCtrl'
                }
            }
        })
            .state('tsxz', {
                url: '/tsxz',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/tesexiaoz.html',
                        controller: 'tsxzCtrl'
                    }
                }
            })
            .state('fcjy', {
                url: '/fcjy',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/fcjyqkzs.html',
                        controller: 'fcjyCtrl'
                    }
                }
            })
            .state('ssgdp', {
                url: '/ssgdp',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/ssgdp.html',
                        controller: 'ssgdpCtrl'
                    }
                }
            }).state('gdpinfo', {
                url: '/gdpinfo',
                views: {
                    main: {
                        templateUrl: 'gdpInfo/index.html',
                        controller: 'gdpcxCtrl'
                    }
                }
            })
            .state('qsnsr', {
                url: '/qsnsr',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/qsnsr.html',
                        controller: 'qsnsrCtrl'
                    }
                }
            })
            .state('nsrdj', {
                url: '/nsrdj',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/nsrdjzcqknddb.html',
                        controller: 'nsrdjCtrl'
                    }
                }
            })
            .state('dssr', {
                url: '/dssr',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/dssrnddb.html',
                        controller: 'dssrCtrl'
                    }
                }
            })
            .state('fhysr', {
                url: '/fhysr',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/fhysrqk.html',
                        controller: 'fhysrCtrl'
                    }
                }
            })
            .state('wbmlw', {
                url: '/wbmlw',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/wbmlw_2.html',
                        controller: 'wbmlwCtrl'
                    }
                }
            })
            .state('qsdssr', {
                url: '/qsdssr',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/qsdssrztzs.html',
                        controller: 'qsdssrCtrl'
                    }
                }
            })
            .state('sssb', {
                url: '/sssb',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/sssbqkjk.html',
                        controller: 'sssbCtrl'
                    }
                }
            })
            .state('srpm', {
                url: '/srpm',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/dqsrpm.html',
                        controller: 'srpmCtrl'
                    }
                }
            })
            .state('fszsr', {
                url: '/fszsr',
                views: {
                    header: {
                        templateUrl: 'views/header.html',
                        controller: 'left_nav'
                    },
                    main: {
                        templateUrl: 'views/fszsrqk.html',
                        controller: 'fszsrCtrl'
                    }
                }
            });
    }])
    .run(['$templateCache', '$rootScope', '$state', '$stateParams', '$http', '$interval', 'URL',
        function ($templateCache, $rootScope, $state, $stateParams, $http, $interval, URL) {
            $rootScope.curYear = (new Date()).getFullYear();
            console.log($rootScope.curYear);
            $rootScope.URL = URL;
            $rootScope.post = function (url, obj) {
                var data = [];
                angular.forEach(obj, function (value, key) {
                    data.push(key + '=' + value);
                });
                var param = data.join('#*^@^*#');
                //console.log(param);
                param = param.replace(/\"/g, '');
                //console.log(param);
                return $http({
                    method: 'POST',
                    url: URL + '/tfdapp/ajax.sword?r=' + Math.random(),
                    data: 'postData={"tid": "' + url + '?' + param + '"}',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
                });
            };
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            //每个页面的标题
            $rootScope.titles = {
                'index': '浙江地税动态展示',
                'qsnsr': '全省纳税人登记注册情况',
                'nsrdj': '纳税人登记注册情况年度对比',
                'dssr': '地税收入年度对比',
                'fszsr': '分税种收入情况',
                'sssb': '实时申报情况监控',
                'tsxz': '特色小镇展示',
                'qsdssr': '全省地税收入整体展示',
                'srpm': '地区收入排名',
                'wbmlw': '外部门联网',
                'fhysr': '分行业收入情况',
                'ssgdp': '部分省市GDP与税收对比',
                'fcjy': '房产交易情况展示'
            };
            //右上角的页面切换逻辑实现
            var stateArr = ['qsnsr', 'nsrdj', 'dssr', 'fszsr', 'sssb', 'tsxz', 'qsdssr', 'srpm', 'wbmlw', 'fhysr', 'ssgdp', 'fcjy'];
            var back = function () {
                console.log("$state",$stateParams);
                if (stateArr.indexOf($state.current.name) == 0) {
                    return stateArr[stateArr.length - 1];
                } else {
                    var index = stateArr.indexOf($state.current.name);
                    return stateArr[index - 1];
                }
            };
            var forward = function () {
                if (stateArr.indexOf($state.current.name) == stateArr.length - 1) {
                    return stateArr[0];
                } else {
                    var index = stateArr.indexOf($state.current.name);
                    return stateArr[index + 1];
                }
            };
            $rootScope.changeState = function (flag) {
                flag ? $state.go(forward()) : $state.go(back());
            };
            //左侧导航栏的显示与隐藏
            $rootScope.addOn = function () {
                $rootScope.isShow = true;
            };
            $rootScope.removeOn = function (e) {
                $(".more_info").removeClass("on");
                $rootScope.isShow = false;
            };
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $templateCache.removeAll();
                    $rootScope.launchFullScreen = function () {
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
                })
        }
    ]);
//app.constant("URL", "http://localhost:8080/dtzs/gt3");
//app.constant("URL", "http://144.12.66.10:6001/dtzs/root/gt3");
//app.constant("URL", "/dtzs/root/gt3");
//app.constant("URL", "http://144.16.54.56:8088");
app.constant("URL", "http://144.16.54.58:8088");
