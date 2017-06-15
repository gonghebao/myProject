/**
 * Created by dingtianxiu on 16/5/13.
 */
angular.module('nsrdjApp', ['ui.alert'])
    .controller('nsrdjCtrl', ['$scope', '$http', 'alertService', '$filter', function ($scope, $http, alertService, $filter) {
        alertService.mask();
        $scope.launchFullScreen = function () {
            console.log(1);
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
        //$http.get($scope.URL+'/nsrbd?qsnf=' + ($scope.curYear - 7) + '&zznf=' + $scope.curYear + '&tybm=33')
        //$scope.post("CxglDtzs2016BLH_selectNsrbd", {qsnf: $scope.curYear - 7, zznf: $scope.curYear, tybm: 33})
        $http.get("data_json/nsrdj/qsnf2010zznf2017tybm33.json")
        .success(function (data) {
                //$http.get($scope.URL + '/nsrhs?qsnf=' + $scope.curYear + '&zznf=' + $scope.curYear + '&tybm=33')
                //$scope.post('CxglDtzs2016BLH_selectNsrhs', {qsnf: $scope.curYear, zznf: $scope.curYear, tybm: 33})
                $http.get("data_json/nsrdj/qsnf2017zznf2017tybm33.json")
                .success(function (data_2016) {
                        console.log("data_2016", data_2016);
                        data_2016 = JSON.parse(data_2016.data[0].value);
                        $scope.count = 0;
                        for (var i = 0, j = data_2016.length; i < j; i++) {
                            $scope.count += parseInt(data_2016[i].hs);
                        }
                        console.log($scope.count);
                    });
                console.log("data", data);
                alertService.unmask();
                data = JSON.parse(data.data[0].value);
                console.log(data);
                var nf_index=0;
                for(var i=0;i<data.length;i++){
                    if(data[i].nf>nf_index)
                    {
                            nf_index=i;
                    }
                }
                console.log("nf_index",nf_index);
                $scope.xz = parseInt(data[nf_index].zc);
                $scope.zx = parseInt(data[nf_index].zx);
                var zc = [];
                var zx = [];
                var yx = [];
                for (var i = 0; i < data.length; i++) {
                    zc.push((parseInt(data[i]['zc']) / 10000).toFixed(2) - 0);
                    zx.push((parseInt(data[i]['zx']) / 10000).toFixed(2) - 0);
                }
                for (var i = 0; i < zc.length; i++) {
                    yx.push((zc[i] - zx[i]).toFixed(2) - 0)
                }
                zc.pop();
                zx.pop();
                yx.pop();
                console.log(zc, zx, yx);
                var chart = new Highcharts.Chart({
                    chart: {
                        backgroundColor: 'rgba(7,36,106,0.0)',
                        renderTo: $('.leftBox')[0],
                        type: 'column',
                        margin: [160, 50, 200, 80],
                        options3d: {
                            enabled: true,
                            alpha: 0,
                            beta: 0,
                            depth: 50,
                            viewDistance: 25
                        },
                        borderWidth: 0
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        backgroundColor: '#011641',
                        style: {
                            fontFamily: 'Arial',
                            color: '#fff',
                            fontSize: '16px',
                            lineHeight: '30px',
                            padding: '16px'
                        },
                        //pointFormat:  '<span style="font-family: 方正小标宋简体">{series.name}</span>: <span style="color: yellow"> {point.y}</span><br/>'
                        formatter: function () {
                            var y = this.y;
                            return '<span style="font-family: Arial">' + this.x + '</span><span style="font-family: 方正小标宋简体">年<span></span><br>' +
                                '<span style="font-family: 方正小标宋简体">' + this.series.name[0] + '</span>' +
                                ': <span style="color: yellow">' + $filter('number')(y, 2) + '</span><br/>'
                        }
                    },
                    exporting: {
                        enabled: false
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16',
                                fontFamily: 'Arial'
                            }
                        },
                        gridLineColor: '#E4393c',
                        gridLineWidth: 0,
                        gridLineDashStyle: 'longdash',
                        categories: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1]
                        //categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015]
                    },
                    yAxis: {
                        gridLineColor: 'rgba(255,255,255,0.3)',
                        gridLineWidth: 1,
                        gridLineDashStyle: 'longdash',
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16',
                                fontFamily: 'Arial'
                            }
                        },
                        title: {
                            text: ''
                        }
                    },
                    plotOptions: {
                        series: {
                            //events: {
                            //  legendItemClick: function(e) {
                            //    return true; // 直接 return false 即可禁用图例点击事件
                            //  }
                            //}
                            //pointWidth:60
                        }
                    },
                    legend: {
                        //data:['注册登记数','注册登','注']
                        enable: true,
                        labelFormat: '{name}',
                        itemStyle: {
                            color: '#aaa',
                            fontSize: '18px',
                            fontFamily: '方正小标宋简体'
                        },
                        itemHoverStyle: {
                            color: '#fff'
                        },
                        padding: 70,
                        itemDistance: 25
                    },
                    series: [
                        {
                            name: ['新增纳税人(万)'],
                            color: '#1F97EE',
                            data: zc,
                            zIndex: 5,
                            borderWidth: 10
                        },
                        {
                            name: ['注销纳税人(万)'],
                            data: zx,
                            color: '#9834ff',
                            zIndex: 5
                        },
                        {
                            name: ['实际增加数(万)'],
                            type: 'line',
                            color: 'yellow',
                            data: yx,
                            zIndex: 100
                        }
                    ]
                });
                alertService.unmask();
            })
            .error(function () {
                alertService.unmask();
            });
        //添加背景效果
        var script = document.createElement("script");
        script.src = "js/bg/bg_1.js";
        document.body.appendChild(script);

    }]);
