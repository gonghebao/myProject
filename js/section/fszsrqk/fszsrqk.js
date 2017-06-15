/**
 * Created by dingtianxiu on 16/5/13.
 */
angular.module('fszsrApp', [])
    .controller('fszsrCtrl', ['$scope', '$http', 'alertService', function ($scope, $http, alertService) {
        alertService.mask();
        var grsds = [];
        var yue = [];
        var yue_title = "个人所得税";
        var ss_2009 = [], ss_2010 = [], ss_2011 = [], ss_2012 = [], ss_2013 = [], ss_2014 = [], ss_2015 = [], ss_2016 = [], ss_2016_name = [], ss_2016_value = [],
            fss_2009 = [], fss_2010 = [], fss_2011 = [], fss_2012 = [], fss_2013 = [], fss_2014 = [], fss_2015 = [], fss_2016 = [], fss_2016_name = [], fss_2016_value = [],
            ss_yys = [], ss_grsds = [], ss_qysds = [], ss_cjs = [], ss_tdzzs = [], ss_fcs = [], ss_tdsys = [], ss_yhs = [], ss_ccs = [], ss_zys = [], ss_gdzctzfxtjs = [], ss_yanys = [], ss_qtss = [], ss_qs = [],
            fss_ylbxjj = [], fss_yiliaobaoxian = [], fss_jyfjs = [], fss_dfsljsjj = [], fss_dfjyfj = [], fss_sybxjj = [], fss_qtsbf = [], fss_gsbxjj = [], fss_cjrjybzj = [], fss_shengyubxjj = [], fss_qtsr = [], fss_whsyjss = [], fss_swbmfmsr = [];
        var fss_501_name = {};
        var fss_501_value = {};
        var ss_501_name = {};
        var ss_501_value = {};
        //设置点击柱状图 设置option_2柱状图的点击事件
        var option2_column = {
            column: {
                depth: 25,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    color: '#fff',
                    fontFamily: 'Arial'
                },
                states: {
                    hover: {
                        //brightness: 0.5,
                        color: 'rgb(200,183,29)',
                        halo: {
                            attributes: {
                                fill: 'red',
                                'stroke-width': 2
                            }
                        }
                    }
                },
                //定义柱状图点击事件
                events: {
                    click: function (e) {
                        if (e.point.color == 'rgb(200,183,29)') {
                            e.point.color = '#2f7ed8';//如果是点击之前已经点击了的则把颜色变回来
                        } else {
                            for (var i = 0; i < e.point.series.data.length; i++) {
                                var temp = e.point.series.data[i];
                                if (temp.color == 'rgb(200,183,29)') {
                                    e.point.series.data[i].color = '#2f7ed8';//去掉已点击的颜色
                                    e.point.series.data[i].update(e.point.series.data[i]);
                                    break;
                                }
                            }
                            e.point.color = 'rgb(200,183,29)';//设置点击后的柱状图 的柱形颜色
                        }
                        e.point.update(e.point);
                        var chart = option_1;
                        //if(chart.series.length===1){
                        if (e.point.category == $scope.curYear - 7) {
                            var ss_2009_name = [];
                            var ss_2009_value = [];
                            ss_2009.sort(function (a, b) {
                                return b.value - a.value
                            })
                            for (var i = 0; i < ss_2009.length; i++) {
                                ss_2009_value.push(parseFloat(ss_2009[i].value))
                                ss_2009_name.push(ss_2009[i].name)
                            }
                            console.log("ss_2009_name", ss_2009_name)
                            var d = ss_2009_value
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2009_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 7] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 7) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart)
                        } else if (e.point.category == $scope.curYear - 6) {
                            var ss_2010_name = [];
                            var ss_2010_value = [];
                            ss_2010.sort(function (a, b) {
                                return b.value - a.value
                            });
                            for (var i = 0; i < ss_2010.length; i++) {
                                ss_2010_name.push(ss_2010[i].name)
                                ss_2010_value.push(parseFloat(ss_2010[i].value));
                            }
                            d = ss_2010_value;
                            chart.xAxis.categories = ss_2010_name;
                            chart.series[0].data = d.concat([])
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 6] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 6) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart)
                        } else if (e.point.category == $scope.curYear - 5) {
                            ss_2011.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var ss_2011_name = [];
                            var ss_2011_value = [];
                            for (var i = 0; i < ss_2011.length; i++) {
                                ss_2011_name.push(ss_2011[i].name);
                                ss_2011_value.push(parseFloat(ss_2011[i].value));
                            }
                            d = ss_2011_value;
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2011_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 5] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 5) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart);
                        } else if (e.point.category == $scope.curYear - 4) {
                            ss_2012.sort(function (a, b) {
                                return b.value - a.value;
                            })
                            var ss_2012_name = [];
                            var ss_2012_value = [];
                            for (var i = 0; i < ss_2012.length; i++) {
                                ss_2012_name.push(ss_2012[i].name);
                                ss_2012_value.push(parseFloat(ss_2012[i].value));
                            }
                            d = ss_2012_value;
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2012_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 4] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 4) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart)
                        } else if (e.point.category == $scope.curYear - 3) {
                            ss_2013.sort(function (a, b) {
                                return b.value - a.value
                            });
                            var ss_2013_name = [];
                            var ss_2013_value = [];
                            for (var i = 0; i < ss_2013.length; i++) {
                                ss_2013_name.push(ss_2013[i].name);
                                ss_2013_value.push(parseFloat(ss_2013[i].value))
                            }
                            d = ss_2013_value;
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2013_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 3] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 3) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart);
                        } else if (e.point.category == $scope.curYear - 2) {
                            ss_2014.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var ss_2014_name = [];
                            var ss_2014_value = [];
                            for (var i = 0; i < ss_2014.length; i++) {
                                ss_2014_name.push(ss_2014[i].name);
                                ss_2014_value.push(parseFloat(ss_2014[i].value))
                            }
                            d = ss_2014_value
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2014_name;

                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 2] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 2) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart);
                        } else if (e.point.category == $scope.curYear - 1) {
                            ss_2015.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var ss_2015_name = [];
                            var ss_2015_value = [];
                            for (var i = 0; i < ss_2015.length; i++) {
                                ss_2015_name.push(ss_2015[i].name);
                                ss_2015_value.push(parseFloat(ss_2015[i].value));
                            }
                            d = ss_2015_value;
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2015_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear - 1] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 1) + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart);
                        } else if (e.point.category == $scope.curYear) {
                            var ss_2016_name = [];
                            var ss_2016_value = [];
                            for (var i = 0; i < ss_2016.length; i++) {
                                ss_2016_value.push(parseFloat(ss_2016[i].value))
                                ss_2016_name.push(ss_2016[i].name);
                            }
                            d = ss_2016_value;
                            chart.series[0].data = d.concat([]);
                            chart.xAxis.categories = ss_2016_name;
                            chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_ss[$scope.curYear] + '</span> <b class="unit">亿元</b>';
                            chart.title.text = '<span class="unit" style="color:#2669ce">' + $scope.curYear + '年税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart = new Highcharts.chart(chart);
                        }
                        // }
                        //非税收情况
                        var chart_3 = option_3;
                        if (e.point.category == $scope.curYear - 7) {
                            fss_2009.sort(function (a, b) {
                                return b.value - a.value;
                            });
                            var fss_2009_name = [];
                            var fss_2009_value = [];
                            for (var i = 0; i < fss_2009.length; i++) {
                                fss_2009_name.push(fss_2009[i].name);
                                fss_2009_value.push(parseFloat(fss_2009[i].value));
                            }
                            var d = fss_2009_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2009_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 7] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 7) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 6) {
                            fss_2010.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var fss_2010_name = [];
                            var fss_2010_value = [];

                            for (var i = 0; i < fss_2010.length; i++) {
                                fss_2010_name.push(fss_2010[i].name);
                                fss_2010_value.push(parseFloat(fss_2010[i].value))
                            }
                            d = fss_2010_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2010_name
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 6] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 6) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 5) {
                            fss_2011.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var fss_2011_name = [];
                            var fss_2011_value = [];
                            for (var i = 0; i < fss_2011.length; i++) {
                                fss_2011_name.push(fss_2011[i].name);
                                fss_2011_value.push(parseFloat(fss_2011[i].value));
                            }
                            d = fss_2011_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2011_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 5] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 5) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 4) {
                            fss_2012.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var fss_2012_name = [];
                            var fss_2012_value = [];
                            for (var i = 0; i < fss_2012.length; i++) {
                                fss_2012_name.push(fss_2012[i].name);
                                fss_2012_value.push(parseFloat(fss_2012[i].value));
                            }
                            d = fss_2012_value
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2012_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 4] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 4) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 3) {
                            fss_2013.sort(function (a, b) {
                                return b.value - a.value
                            })
                            var fss_2013_name = [];
                            var fss_2013_value = [];
                            for (var i = 0; i < fss_2013.length; i++) {
                                fss_2013_name.push(fss_2013[i].name);
                                fss_2013_value.push(parseFloat(fss_2013[i].value));
                            }
                            d = fss_2013_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2013_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 3] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 3) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 2) {
                            fss_2014.sort(function (a, b) {
                                return b.value - a.value;
                            })
                            var fss_2014_name = [];
                            var fss_2014_value = [];
                            for (var i = 0; i < fss_2014.length; i++) {
                                fss_2014_name.push(fss_2014[i].name);
                                fss_2014_value.push(parseFloat(fss_2014[i].value));
                            }
                            d = fss_2014_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2014_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 2] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 2) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        } else if (e.point.category == $scope.curYear - 1) {
                            fss_2015.sort(function (a, b) {
                                return b.value - a.value
                            });
                            var fss_2015_name = [];
                            var fss_2015_value = [];
                            for (var i = 0; i < fss_2015.length; i++) {
                                fss_2015_name.push(fss_2015[i].name);
                                fss_2015_value.push(parseFloat(fss_2015[i].value));
                            }
                            d = fss_2015_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2015_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear - 1] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + ($scope.curYear - 1) + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3)
                        } else if (e.point.category == $scope.curYear) {
                            fss_2016.sort(function (a, b) {
                                return b.value - a.value
                            });
                            var fss_2016_name = [];
                            var fss_2016_value = [];
                            for (var i = 0; i < fss_2016.length; i++) {
                                fss_2016_value.push(fss_2016[i].value)
                                fss_2016_name.push(fss_2016[i].name)
                            }
                            d = fss_2016_value;
                            chart_3.series[0].data = d.concat([]);
                            chart_3.xAxis.categories = fss_2016_name;
                            chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + $scope.all_fss[$scope.curYear] + '</span> <b class="unit">亿元</b>';
                            chart_3.title.text = '<span class="unit" style="color:#2669ce">' + $scope.curYear + '年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                            chart_3 = new Highcharts.chart(chart_3);
                        }
                    }
                }
            }
        };
        var option2_line = {
            line: {
                depth: 25,
                cursor: 'pointer',
                dataLabels: {
                    //设置折线图标签是否显示
                    enabled: false,
                    allowOverlap: false,
                    color: '#fff'
                    // zIndex:1
                },
                states: {
                    hover: {
                        //brightness: 0.5,
                        color: 'rgb(200,183,29)',
                        halo: {
                            attributes: {
                                fill: 'red',
                                'stroke-width': 2
                            }
                        }
                    }
                },
                events: {
                    click: function (e) {
                        var chart = option_1;
                        var chart_3 = option_3;
                        for (var i = 0; i < $scope.yue_cate.length; i++) {
                            if (e.point.category == $scope.yue_cate[i]) {
                                console.log($scope.yue_cate[i]);
                                if (fss_501_name[$scope.yue_cate[i]] !== []) {
                                    fss_501_name[$scope.yue_cate[i]] = []
                                }
                                if (fss_501_value[$scope.yue_cate[i]] != []) {
                                    fss_501_value[$scope.yue_cate[i]] = [];
                                }
                                $scope.fss_obj[$scope.yue_cate[i]].sort(function (a, b) {
                                    return b.y - a.y
                                });
                                for (var j = 0; j < $scope.fss_obj[$scope.yue_cate[i]].length; j++) {
                                    fss_501_value[$scope.yue_cate[i]].push(parseFloat($scope.fss_obj[$scope.yue_cate[i]][j].y))
                                    fss_501_name[$scope.yue_cate[i]].push($scope.fss_obj[$scope.yue_cate[i]][j].name)
                                }
                                chart_3.series[0].data = fss_501_value[$scope.yue_cate[i]].concat([]);
                                chart_3.xAxis.categories = fss_501_name[$scope.yue_cate[i]];
                                for (var p = 0, j = 0; p < fss_501_value[$scope.yue_cate[i]].length; p++) {
                                    j += fss_501_value[$scope.yue_cate[i]][p];
                                }
                                chart_3.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                                chart_3.title.text = '<span class="unit" style="color:#2669ce">' + $scope.yue_cate[i] + '非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                                chart_3 = new Highcharts.chart(chart_3);
                                if (ss_501_name[$scope.yue_cate[i]] !== []) {
                                    ss_501_name[$scope.yue_cate[i]] = []
                                }
                                if (ss_501_value[$scope.yue_cate[i]] != []) {
                                    ss_501_value[$scope.yue_cate[i]] = [];
                                }
                                $scope.yue_obj[$scope.yue_cate[i]].sort(function (a, b) {
                                    return b.y - a.y;
                                });
                                for (var j = 0; j < $scope.yue_obj[$scope.yue_cate[i]].length; j++) {
                                    ss_501_value[$scope.yue_cate[i]].push(parseFloat($scope.yue_obj[$scope.yue_cate[i]][j].y));
                                    ss_501_name[$scope.yue_cate[i]].push($scope.yue_obj[$scope.yue_cate[i]][j].name);
                                }
                                chart.series[0].data = ss_501_value[$scope.yue_cate[i]].concat([]);
                                chart.xAxis.categories = ss_501_name[$scope.yue_cate[i]];
                                console.log("ss_501_name", ss_501_name[$scope.yue_cate[i]]);
                                for (var p = 0, j = 0; p < ss_501_value[$scope.yue_cate[i]].length; p++) {
                                    j += ss_501_value[$scope.yue_cate[i]][p];
                                }
                                chart.subtitle.text = '<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                                chart.title.text = '<span class="unit" style="color:#2669ce">' + $scope.yue_cate[i] + '税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                                chart = new Highcharts.chart(chart);
                            }
                        }
                        //    if(e.point.category=="201501"){
                        //        var fss_501_name=[];
                        //        var fss_501_value=[];
                        //        fss_501.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_501.length; i++) {
                        //            fss_501_value.push(parseFloat(fss_501[i].y))
                        //            fss_501_name.push(fss_501[i].name)
                        //        }
                        //        chart_3.series[0].data=fss_501_value.concat([]);
                        //        chart_3.xAxis.categories=fss_501_name;
                        //        for (var i = 0, j = 0; i < fss_501_value.length; i++) {
                        //            j += fss_501_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年1月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_501_name = [];
                        //        var ss_501_value = [];
                        //        ss_501.sort(function (a, b) {
                        //            return b.y - a.y;
                        //        })
                        //        for (var i = 0; i < ss_501.length; i++) {
                        //            ss_501_value.push(parseFloat(ss_501[i].y));
                        //            ss_501_name.push(ss_501[i].name);
                        //        }
                        //        chart.series[0].data=ss_501_value.concat([])
                        //        chart.xAxis.categories=ss_501_name;
                        //        for (var i = 0, j = 0; i < ss_501_value.length; i++) {
                        //            j += ss_501_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年1月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201502"){
                        //        var fss_502_name=[];
                        //        var fss_502_value=[];
                        //        fss_502.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_502.length; i++) {
                        //            fss_502_value.push(parseFloat(fss_502[i].y));
                        //            fss_502_name.push(fss_502[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_502_value.concat([]);
                        //        chart_3.xAxis.categories=fss_502_name;
                        //        for (var i = 0, j = 0; i < fss_502_value.length; i++) {
                        //            j += fss_502_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年2月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //
                        //        var ss_502_name = [];
                        //        var ss_502_value = [];
                        //        ss_502.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_502.length; i++) {
                        //            ss_502_value.push(parseFloat(ss_502[i].y));
                        //            ss_502_name.push(ss_502[i].name);
                        //        }
                        //        chart.series[0].data=ss_502_value.concat([]);
                        //        chart.xAxis.categories=ss_502_name;
                        //        for (var i = 0, j = 0; i < ss_502_value.length; i++) {
                        //            j += ss_502_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年2月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201503"){
                        //        var fss_503_name=[];
                        //        var fss_503_value=[];
                        //        fss_503.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_503.length; i++) {
                        //            fss_503_value.push(parseFloat(fss_503[i].y));
                        //            fss_503_name.push(fss_503[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_503_value.concat([]);
                        //        chart_3.xAxis.categories=fss_503_name;
                        //        for (var i = 0, j = 0; i < fss_503_value.length; i++) {
                        //            j += fss_503_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年3月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_503_name = [];
                        //        var ss_503_value = [];
                        //        ss_503.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_503.length; i++) {
                        //            ss_503_value.push(parseFloat(ss_503[i].y));
                        //            ss_503_name.push(ss_503[i].name);
                        //        }
                        //        chart.series[0].data=ss_503_value.concat([]);
                        //        chart.xAxis.categories=ss_503_name;
                        //        for (var i = 0, j = 0; i < ss_503_value.length; i++) {
                        //            j += ss_503_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年3月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201504"){
                        //        var fss_504_name=[];
                        //        var fss_504_value=[];
                        //        fss_504.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_504.length; i++) {
                        //            fss_504_value.push(parseFloat(fss_504[i].y))
                        //            fss_504_name.push(fss_504[i].name)
                        //        }
                        //        chart_3.series[0].data=fss_504_value.concat([]);;
                        //        chart_3.xAxis.categories=fss_504_name;
                        //        for (var i = 0, j = 0; i < fss_504_value.length; i++) {
                        //            j += fss_504_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年4月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_504_name = [];
                        //        var ss_504_value = [];
                        //        ss_504.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_504.length; i++) {
                        //            ss_504_value.push(parseFloat(ss_504[i].y))
                        //            ss_504_name.push(ss_504[i].name);
                        //        }
                        //        chart.series[0].data=ss_504_value.concat([]);
                        //
                        //        chart.xAxis.categories=ss_504_name;
                        //        for (var i = 0, j = 0; i < ss_504_value.length; i++) {
                        //            j += ss_504_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年4月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201505"){
                        //        var fss_505_name=[];
                        //        var fss_505_value=[];
                        //        fss_505.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_505.length; i++) {
                        //            fss_505_value.push(parseFloat(fss_505[i].y));
                        //            fss_505_name.push(fss_505[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_505_value.concat([]);
                        //        chart_3.xAxis.categories=fss_505_name;
                        //        for (var i = 0, j = 0; i < fss_505_value.length; i++) {
                        //            j += fss_505_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年5月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_505_name = [];
                        //        var ss_505_value = [];
                        //        ss_505.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_505.length; i++) {
                        //            ss_505_value.push(parseFloat(ss_505[i].y));
                        //            ss_505_name.push(ss_505[i].name);
                        //        }
                        //        chart.series[0].data=ss_505_value.concat([]);
                        //        chart.xAxis.categories=ss_505_name;
                        //        for (var i = 0, j = 0; i < ss_505_value.length; i++) {
                        //            j += ss_505_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年5月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201506"){
                        //        var fss_506_name=[];
                        //        var fss_506_value=[];
                        //        fss_506.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_506.length; i++) {
                        //            fss_506_value.push(parseFloat(fss_506[i].y));
                        //            fss_506_name.push(fss_506[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_506_value.concat([]);
                        //        chart_3.xAxis.categories=fss_506_name;
                        //        for (var i = 0, j = 0; i < fss_506_value.length; i++) {
                        //            j += fss_506_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年6月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_506_name = [];
                        //        var ss_506_value = [];
                        //        ss_506.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_506.length; i++) {
                        //            ss_506_value.push(parseFloat(ss_506[i].y));
                        //            ss_506_name.push(ss_506[i].name);
                        //        }
                        //        chart.series[0].data=ss_506_value.concat([]);
                        //        chart.xAxis.categories=ss_506_name;
                        //        for (var i = 0, j = 0; i < ss_506_value.length; i++) {
                        //            j += ss_506_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年6月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart)
                        //    }
                        //    else if(e.point.category=="201507"){
                        //        var fss_507_name=[];
                        //        var fss_507_value=[];
                        //        fss_507.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_507.length; i++) {
                        //            fss_507_value.push(parseFloat(fss_507[i].y));
                        //            fss_507_name.push(fss_507[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_507_value.concat([]);
                        //
                        //        chart_3.xAxis.categories=fss_507_name;
                        //        for (var i = 0, j = 0; i < fss_507_value.length; i++) {
                        //            j += fss_507_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年7月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_507_name = [];
                        //        var ss_507_value = [];
                        //        ss_507.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_507.length; i++) {
                        //            ss_507_value.push(parseFloat(ss_507[i].y))
                        //            ss_507_name.push(ss_507[i].name)
                        //        }
                        //        chart.series[0].data=ss_507_value.concat([]);
                        //        chart.xAxis.categories=ss_507_name;
                        //        for (var i = 0, j = 0; i < ss_507_value.length; i++) {
                        //            j += ss_507_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年7月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201508"){
                        //        var fss_508_name=[];
                        //        var fss_508_value=[];
                        //        fss_508.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_508.length; i++) {
                        //            fss_508_value.push(parseFloat(fss_508[i].y));
                        //            fss_508_name.push(fss_508[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_508_value.concat([]);
                        //        chart_3.xAxis.categories=fss_508_name;
                        //        for (var i = 0, j = 0; i < fss_508_value.length; i++) {
                        //            j += fss_508_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年8月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_508_name = [];
                        //        var ss_508_value = [];
                        //        ss_508.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_508.length; i++) {
                        //            ss_508_value.push(parseFloat(ss_508[i].y));
                        //            ss_508_name.push(ss_508[i].name);
                        //        }
                        //        chart.series[0].data=ss_508_value.concat([]);
                        //        chart.xAxis.categories=ss_508_name;
                        //        for (var i = 0, j = 0; i < ss_508_value.length; i++) {
                        //            j += ss_508_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年8月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201509"){
                        //        var fss_509_name=[];
                        //        var fss_509_value=[];
                        //        fss_509.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_509.length; i++) {
                        //            fss_509_value.push(parseFloat(fss_509[i].y));
                        //            fss_509_name.push(fss_509[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_509_value.concat([]);
                        //        chart_3.xAxis.categories=fss_509_name;
                        //        for (var i = 0, j = 0; i < fss_509_value.length; i++) {
                        //            j += fss_509_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年9月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_509_name = [];
                        //        var ss_509_value = [];
                        //        ss_509.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_509.length; i++) {
                        //            ss_509_value.push(parseFloat(ss_509[i].y));
                        //            ss_509_name.push(ss_509[i].name);
                        //        }
                        //        chart.series[0].data=ss_509_value.concat([]);
                        //        chart.xAxis.categories=ss_509_name;
                        //        for (var i = 0, j = 0; i < ss_509_value.length; i++) {
                        //            j += ss_509_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年9月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201510"){
                        //        var fss_510_name=[];
                        //        var fss_510_value=[];
                        //        fss_510.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_510.length; i++) {
                        //            fss_510_value.push(parseFloat(fss_510[i].y));
                        //            fss_510_name.push(fss_510[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_510_value.concat([]);
                        //        chart_3.xAxis.categories=fss_510_name;
                        //        for (var i = 0, j = 0; i < fss_510_value.length; i++) {
                        //            j += fss_510_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年10月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_510_name = [];
                        //        var ss_510_value = [];
                        //        ss_510.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_510.length; i++) {
                        //            ss_510_value.push(parseFloat(ss_510[i].y))
                        //            ss_510_name.push(ss_510[i].name)
                        //        }
                        //        chart.series[0].data=ss_510_value.concat([]);
                        //        chart.xAxis.categories=ss_510_name;
                        //        for (var i = 0, j = 0; i < ss_510_value.length; i++) {
                        //            j += ss_510_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年10月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201511"){
                        //        var fss_511_name=[];
                        //        var fss_511_value=[];
                        //        fss_511.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_511.length; i++) {
                        //            fss_511_value.push(parseFloat(fss_511[i].y));
                        //            fss_511_name.push(fss_511[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_511_value.concat([]);
                        //        chart_3.xAxis.categories=fss_511_name;
                        //        for (var i = 0, j = 0; i < fss_511_value.length; i++) {
                        //            j += fss_511_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年11月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_511_name = [];
                        //        var ss_511_value = [];
                        //        ss_511.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_511.length; i++) {
                        //            ss_511_value.push(parseFloat(ss_511[i].y));
                        //            ss_511_name.push(ss_511[i].name)
                        //        }
                        //        chart.series[0].data= ss_511_value.concat([]);
                        //        chart.xAxis.categories=ss_511_name;
                        //        for (var i = 0, j = 0; i < ss_511_value.length; i++) {
                        //            j += ss_511_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年11月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201512"){
                        //        var fss_512_name=[];
                        //        var fss_512_value=[];
                        //        fss_512.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_512.length; i++) {
                        //            fss_512_value.push(parseFloat(fss_512[i].y));
                        //            fss_512_name.push(fss_512[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_512_value.concat([]);
                        //        chart_3.xAxis.categories=fss_512_name;
                        //        for (var i = 0, j = 0; i < fss_512_value.length; i++) {
                        //            j += fss_512_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2015年12月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_512_name = [];
                        //        var ss_512_value = [];
                        //        ss_512.sort(function (a, b) {
                        //            return b.y - a.y;
                        //        })
                        //        for (var i = 0; i < ss_512.length; i++) {
                        //            ss_512_value.push(parseFloat(ss_512[i].y));
                        //            ss_512_name.push(ss_512[i].name);
                        //        }
                        //        chart.series[0].data=ss_512_value.concat([]);
                        //        chart.xAxis.categories=ss_512_name;
                        //        for (var i = 0, j = 0; i < ss_512_value.length; i++) {
                        //            j += ss_512_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2015年12月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201601"){
                        //        var fss_601_name=[];
                        //        var fss_601_value=[];
                        //        fss_601.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_601.length; i++) {
                        //            fss_601_value.push(parseFloat(fss_601[i].y));
                        //            fss_601_name.push(fss_601[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_601_value.concat([]);
                        //        chart_3.xAxis.categories=fss_601_name;
                        //        for (var i = 0, j = 0; i < fss_601_value.length; i++) {
                        //            j += fss_601_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年1月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_601_name = [];
                        //        var ss_601_value = [];
                        //        ss_601.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_601.length; i++) {
                        //            ss_601_value.push(parseFloat(ss_601[i].y));
                        //            ss_601_name.push(ss_601[i].name);
                        //        }
                        //        chart.series[0].data=ss_601_value.concat([]);
                        //        chart.xAxis.categories=ss_601_name;
                        //        for (var i = 0, j = 0; i < ss_601_value.length; i++) {
                        //            j += ss_601_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年1月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201602"){
                        //        var fss_602_name=[];
                        //        var fss_602_value=[];
                        //        fss_602.sort(function(a,b){return b.y- a.y})
                        //        for (var i = 0; i < fss_602.length; i++) {
                        //            fss_602_value.push(parseFloat(fss_602[i].y))
                        //            fss_602_name.push(fss_602[i].name)
                        //        }
                        //        chart_3.series[0].data=fss_602_value.concat([]);
                        //        chart_3.xAxis.categories=fss_602_name;
                        //        for (var i = 0, j = 0; i < fss_602_value.length; i++) {
                        //            j += fss_602_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年2月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_602_name = [];
                        //        var ss_602_value = [];
                        //        ss_602.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_602.length; i++) {
                        //            ss_602_value.push(parseFloat(ss_602[i].y));
                        //            ss_602_name.push(ss_602[i].name);
                        //        }
                        //        chart.series[0].data=ss_602_value.concat([]);
                        //        chart.xAxis.setCategories=ss_602_name;
                        //        for (var i = 0, j = 0; i < ss_602_value.length; i++) {
                        //            j += ss_602_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年2月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201603"){
                        //        var fss_603_name=[];
                        //        var fss_603_value=[];
                        //        fss_603.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_603.length; i++) {
                        //            fss_603_value.push(parseFloat(fss_603[i].y));
                        //            fss_603_name.push(fss_603[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_603_value.concat([]);
                        //        chart_3.xAxis.categories=fss_603_name;
                        //        for (var i = 0, j = 0; i < fss_603_value.length; i++) {
                        //            j += fss_603_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年3月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_603_name = [];
                        //        var ss_603_value = [];
                        //        ss_603.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_603.length; i++) {
                        //            ss_603_value.push(parseFloat(ss_603[i].y));
                        //            ss_603_name.push(ss_603[i].name);
                        //        }
                        //        chart.series[0].data=ss_603_value.concat([]);
                        //        chart.xAxis.setCategories=ss_603_name;
                        //        for (var i = 0, j = 0; i < ss_603_value.length; i++) {
                        //            j += ss_603_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年3月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201604"){
                        //        var fss_604_name=[];
                        //        var fss_604_value=[];
                        //        fss_604.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_604.length; i++) {
                        //            fss_604_value.push(parseFloat(fss_604[i].y));
                        //            fss_604_name.push(fss_604[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_604_value.concat([]);
                        //        chart_3.xAxis.categories=fss_604_name;
                        //        for (var i = 0, j = 0; i < fss_604_value.length; i++) {
                        //            j += fss_604_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年4月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_604_name = [];
                        //        var ss_604_value = [];
                        //        ss_604.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_604.length; i++) {
                        //            ss_604_value.push(parseFloat(ss_604[i].y));
                        //            ss_604_name.push(ss_604[i].name);
                        //        }
                        //        chart.series[0].data=ss_604_value.concat([]);
                        //        chart.xAxis.categories=ss_604_name;
                        //        for (var i = 0, j = 0; i < ss_604_value.length; i++) {
                        //            j += ss_604_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年4月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201605"){
                        //        var fss_605_name=[];
                        //        var fss_605_value=[];
                        //        fss_605.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_605.length; i++) {
                        //            fss_605_value.push(parseFloat(fss_605[i].y));
                        //            fss_605_name.push(fss_605[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_605_value.concat([]);
                        //        chart_3.xAxis.categories=fss_605_name;
                        //        for (var i = 0, j = 0; i < fss_605_value.length; i++) {
                        //            j += fss_605_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年5月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_605_name = [];
                        //        var ss_605_value = [];
                        //        ss_605.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_605.length; i++) {
                        //            ss_605_value.push(parseFloat(ss_605[i].y));
                        //            ss_605_name.push(ss_605[i].name);
                        //        }
                        //        chart.series[0].data=ss_605_value.concat([]);
                        //        chart.xAxis.categories=ss_605_name;
                        //        for (var i = 0, j = 0; i < ss_605_value.length; i++) {
                        //            j += ss_605_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年5月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201606"){
                        //        var fss_606_name=[];
                        //        var fss_606_value=[];
                        //        fss_606.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_606.length; i++) {
                        //            fss_606_value.push(parseFloat(fss_606[i].y));
                        //            fss_606_name.push(fss_606[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_606_value.concat([]);
                        //        chart_3.xAxis.categories=fss_606_name;
                        //        for (var i = 0, j = 0; i < fss_606_value.length; i++) {
                        //            j += fss_606_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年6月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_606_name = [];
                        //        var ss_606_value = [];
                        //        ss_606.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_606.length; i++) {
                        //            ss_606_value.push(parseFloat(ss_606[i].y));
                        //            ss_606_name.push(ss_606[i].name);
                        //        }
                        //        chart.series[0].data=ss_606_value.concat([]);
                        //        chart.xAxis.categories=ss_606_name;
                        //        for (var i = 0, j = 0; i < ss_606_value.length; i++) {
                        //            j += ss_606_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年6月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                        //    else if(e.point.category=="201607"){
                        //        var fss_607_name=[];
                        //        var fss_607_value=[];
                        //        fss_607.sort(function(a,b){return b.y- a.y});
                        //        for (var i = 0; i < fss_607.length; i++) {
                        //            fss_607_value.push(parseFloat(fss_607[i].y));
                        //            fss_607_name.push(fss_607[i].name);
                        //        }
                        //        chart_3.series[0].data=fss_607_value.concat([]);
                        //        chart_3.xAxis.categories=fss_607_name;
                        //        for (var i = 0, j = 0; i < fss_607_value.length; i++) {
                        //            j += fss_607_value[i];
                        //        }
                        //        chart_3.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart_3.title.text='<span class="unit" style="color:#2669ce">2016年7月非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart_3=new Highcharts.chart(chart_3);
                        //        var ss_607_name = [];
                        //        var ss_607_value = [];
                        //        ss_607.sort(function (a, b) {
                        //            return b.y - a.y
                        //        })
                        //        for (var i = 0; i < ss_607.length; i++) {
                        //            ss_607_value.push(parseFloat(ss_607[i].y))
                        //            ss_607_name.push(ss_607[i].name)
                        //        }
                        //        chart.series[0].data=ss_607_value.concat([]);
                        //        chart.xAxis.categories=ss_607_name;
                        //        for (var i = 0, j = 0; i < ss_607_value.length; i++) {
                        //            j += ss_607_value[i];
                        //        }
                        //        chart.subtitle.text='<span style="font-size: 18px; color: #ffea3c">' + parseFloat(j.toFixed(2)) + '</span> <b class="unit">亿元</b>';
                        //        chart.title.text='<span class="unit" style="color:#2669ce">2016年7月税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>';
                        //        chart=new Highcharts.chart(chart);
                        //    }
                    }
                }
            }
        }
        //$http.get($scope.URL + '/srdb?qsnf=' + ($scope.curYear - 7) + '&zznf=' + $scope.curYear + '&tybm=33&bj=1')
        //$scope.post('CxglDtzs2016BLH_selectSrdb', {qsnf: $scope.curYear - 7, zznf: $scope.curYear, tybm: 33, bj: 1})
            $http.get("./data_json/fszsr/qsnf2010zznf2017tybm33bg1.json")
            .success(function (result) {
                //2009-2016 税收与非税收合计
                var data = {};
                angular.forEach(result.data, function(value, key){
                    data[value.name] = JSON.parse(value.value);
                });
                console.log(data);
                $scope.all_ss = {};
                $scope.all_fss = {};
                for (var key in data) {
                    for (var j = 0, p = data[key]; j < p.length; j++) {
                        if (p[j].xmbmSz == 2) {
                            //console.log($scope.all_ss_fss[key][p[j]][xmmcSz])
                            $scope.all_ss[key] = (p[j].nLj / 100000000).toFixed(2)
                        }
                        if (p[j].xmbmSz == 18) {
                            $scope.all_fss[key] = (p[j].nLj / 100000000).toFixed(2)
                        }
                    }
                }
                console.log($scope.all_ss);
                console.log($scope.all_fss);
                alertService.unmask();
                for (var key in data) {
                    for (var i = 0; i < data[key].length; i++) {
                        data[key][i].xmmcSz = data[key][i].xmmcSz.trim();
                    }
                }
                //'教育附加税','文化事业建设费','税务部门罚没收入','养老保险基金','失业保险基金','医疗保险基金','工商保险基金','生育保险基金','其他社保费','地方水利建设基金','地方教育附加','残疾人就业保障金','其他收入'
                for (var i = 0, j = data[$scope.curYear - 7]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2009.push({"name": "营业税", "value": fix_2(j[i].nLj)})
                        ss_yys.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2009.push({"name": "企业所得税", "value": fix_2(j[i].nLj)})
                        ss_qysds.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2009.push({"name": "个人所得税", "value": fix_2(j[i].nLj)})
                        grsds.push(fix_2(j[i].nLj))
                        ss_grsds.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2009.push({"name": "资源税", "value": fix_2(j[i].nLj)})
                        ss_zys.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2009.push({"name": "土地使用税", "value": fix_2(j[i].nLj)})
                        ss_tdsys.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2009.push({"name": "固定资产投资方向调节税", "value": fix_2(j[i].nLj)})
                        ss_gdzctzfxtjs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2009.push({"name": "城建税", "value": fix_2(j[i].nLj)})
                        ss_cjs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2009.push({"name": "印花税", "value": fix_2(j[i].nLj)})
                        ss_yhs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2009.push({"name": "土地增值税", "value": fix_2(j[i].nLj)})
                        ss_tdzzs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2009.push({"name": "房产税", "value": fix_2(j[i].nLj)})
                        ss_fcs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2009.push({"name": "车船税", "value": fix_2(j[i].nLj)})
                        ss_ccs.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2009.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2009.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2009.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2009.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2009.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2009.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2009.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2009.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2009.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2009.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2009.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2009.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2009.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2009.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2009.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2009.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 6]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2010.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2010.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2010.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2010.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2010.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2010.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2010.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2010.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2010.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2010.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2010.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2010.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2010.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2010.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2010.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2010.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2010.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2010.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2010.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2010.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2010.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2010.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2010.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2010.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2010.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2010.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2010.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 5]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2011.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2011.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2011.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2011.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2011.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2011.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2011.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2011.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2011.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2011.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2011.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2011.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2011.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2011.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2011.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2011.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2011.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2011.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2011.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2011.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2011.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2011.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2011.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2011.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2011.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2011.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2011.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 4]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2012.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2012.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2012.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2012.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2012.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2012.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2012.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2012.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2012.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2012.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2012.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2012.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2012.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2012.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2012.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2012.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2012.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2012.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2012.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2012.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2012.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2012.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2012.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2012.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2012.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2012.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2012.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 3]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2013.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2013.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2013.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2013.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2013.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2013.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz ===9) {
                        ss_2013.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2013.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2013.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2013.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2013.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2013.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2013.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2013.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2013.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz ===20) {
                        fss_2013.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2013.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2013.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2013.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2013.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2013.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2013.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2013.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2013.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2013.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2013.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2013.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 2]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2014.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2014.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2014.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2014.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2014.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2014.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2014.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2014.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2014.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2014.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2014.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2014.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2014.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2014.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2014.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2014.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2014.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2014.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2014.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2014.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2014.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2014.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2014.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2014.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2014.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2014.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2014.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear - 1]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2015.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2015.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2015.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2015.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2015.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2015.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2015.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 10) {
                        ss_2015.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2015.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2015.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2015.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2015.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2015.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2015.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2015.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz ===20) {
                        fss_2015.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2015.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2015.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2015.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2015.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2015.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2015.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2015.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2015.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2015.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2015.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2015.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                for (var i = 0, j = data[$scope.curYear]; i < j.length; i++) {
                    if (j[i].xmbmSz === 3) {
                        ss_2016.push({"name": "营业税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yys.push(fix_2(j[i].nLj))
                    }
                    if (j[i].xmbmSz === 4) {
                        ss_2016.push({"name": "企业所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qysds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 5) {
                        ss_2016.push({"name": "个人所得税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                        ss_grsds.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 6) {
                        ss_2016.push({"name": "资源税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_zys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 7) {
                        ss_2016.push({"name": "土地使用税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdsys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 8) {
                        ss_2016.push({"name": "固定资产投资方向调节税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_gdzctzfxtjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 9) {
                        ss_2016.push({"name": "城建税", "value": parseFloat(j[i].nLj / 100000000).toFixed(2)})
                        ss_cjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz ===10) {
                        ss_2016.push({"name": "印花税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yhs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 11) {
                        ss_2016.push({"name": "土地增值税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_tdzzs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 12) {
                        ss_2016.push({"name": "房产税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_fcs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 13) {
                        ss_2016.push({"name": "车船税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_ccs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 14) {
                        ss_2016.push({"name": "烟叶税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_yanys.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 15) {
                        ss_2016.push({"name": "契税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 17) {
                        ss_2016.push({"name": "其他税收", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        ss_qtss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 19) {
                        fss_2016.push({"name": "教育附加税", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_jyfjs.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 20) {
                        fss_2016.push({"name": "文化事业建设费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_whsyjss.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 21) {
                        fss_2016.push({"name": "税务部门罚没收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_swbmfmsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 24) {
                        fss_2016.push({"name": "养老保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_ylbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 25) {
                        fss_2016.push({"name": "失业保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_sybxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 26) {
                        fss_2016.push({"name": "医疗保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_yiliaobaoxian.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 27) {
                        fss_2016.push({"name": "工伤保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_gsbxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 28) {
                        fss_2016.push({"name": "生育保险基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_shengyubxjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 29) {
                        fss_2016.push({"name": "其他社保费", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsbf.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 30) {
                        fss_2016.push({"name": "地方水利建设基金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfsljsjj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 31) {
                        fss_2016.push({"name": "地方教育附加", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_dfjyfj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 32) {
                        fss_2016.push({"name": "残疾人就业保障金", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_cjrjybzj.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                    if (j[i].xmbmSz === 33) {
                        fss_2016.push({"name": "其他收入", "value": parseFloat((j[i].nLj / 100000000).toFixed(2))})
                        fss_qtsr.push(parseFloat((j[i].nLj / 100000000).toFixed(2)))
                    }
                }
                ss_2016.sort(function (a, b) {
                    return b.value - a.value
                })
                for (var i = 0; i < ss_2016.length; i++) {
                    ss_2016_name.push(ss_2016[i].name);
                    ss_2016_value.push(parseFloat(ss_2016[i].value));
                }
                fss_2016.sort(function (a, b) {
                    return b.value - a.value
                });
                for (var i = 0; i < fss_2016.length; i++) {
                    fss_2016_name.push(fss_2016[i].name);
                    fss_2016_value.push(parseFloat(fss_2016[i].value));
                }
                //2016税收 累计数量
                for (var i = 0, ss_2016_count = 0; i < ss_2016_value.length; i++) {
                    ss_2016_count += ss_2016_value[i];
                }
                for (var i = 0, fss_2016_count = 0; i < fss_2016_value.length; i++) {
                    fss_2016_count += fss_2016_value[i]
                }
                Highcharts.setOptions({
                    chart: {
                        type: 'column',
                        margin: 75,
                        backgroundColor: 'rgba(1,46,138,0.2)',
                        options3d: {
                            enabled: true,
                            alpha: 0,
                            beta: 0,
                            depth: 40,
                            viewDistance: 25
                        },
                        borderWidth: 1,
                        borderRadius: 7
                    },
                    colors: ['#0d95f2'],
                    exporting: {
                        enabled: false
                    },
                    xAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            style: {
                                color: '#fff'
                            },
                            rotation: 0
                        }
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        alternateGridColor: '',
                        gridLineColor: '#2669ce',
                        labels: {
                            style: {
                                color: '#2669ce'
                            }
                        }
                    },
                    title: {
                        style: {
                            color: '#2669ce'
                        }
                    }
                });
                //function sortedData(event, isYear){
                //    $('.kind').removeClass('kindClicked');
                //    $(event.target).addClass('kindClicked');
                //    if(isYear){
                //
                //    }else{
                //
                //    }
                //};
                // Set up the chart
                option_1 = {
                    chart: {
                        renderTo: 'cavs1',
                        type: 'column'
                    },
                    legend: {
                        enabled: false
                    },
                    title: {
                        text: '<span class="unit" style="color:#2669ce">' + $scope.curYear + '年税收情况</span><b class="unit" style="color:#2669ce;">（单位：亿元）</b>',
                        useHTML: true,
                        align: 'left',
                        x: 20,
                        y: 20
                    },
                    subtitle: {
                        text: '<span style="font-size: 18px; color: #ffea3c;font-family:Arial">' + $scope.all_ss[$scope.curYear] + '</span> <b class="unit">亿元</b>',
                        useHTML: true,
                        align: 'right',
                        y: 10,
                        x: -20
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
                        formatter: function () {
                            return '<span style="color:#fff;font-family:方正小标宋简体 ">' + this.x + '</span><br/><span style="color:yellow;font-family:Arial">' + this.y + '</span><span style="font-family:方正小标宋简体;color:#fff">亿</span>';
                        }
                    },
                    plotOptions: {
                        column: {
                            borderColor: 'rgb(200,183,29)',
                            // allowPointSelect:true,
                            //colorByPoint:true,
                            //colors:['rgb(200,183,29)'],
                            depth: 25,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true,
                                color: '#fff'
                            },
                            states: {
                                hover: {
                                    //brightness: 0.5,
                                    color: 'rgb(200,183,29)',
                                    halo: {
                                        attributes: {
                                            fill: 'red',
                                            'stroke-width': 2
                                        }
                                    }
                                }
                            },
                            events: {
                                click: function (e) {
                                    if (e.point.color == 'rgb(200,183,29)') {
                                        e.point.color = '#2f7ed8';//如果是点击之前已经点击了的则把颜色变回来
                                    } else {
                                        for (var i = 0; i < e.point.series.data.length; i++) {
                                            var temp = e.point.series.data[i];
                                            if (temp.color == 'rgb(200,183,29)') {
                                                e.point.series.data[i].color = '#2f7ed8';//去掉已点击的颜色
                                                e.point.series.data[i].update(e.point.series.data[i]);
                                                break;
                                            }
                                        }
                                        e.point.color = 'rgb(200,183,29)';//设置点击后的柱状图 的柱形颜色
                                    }
                                    e.point.update(e.point);
                                    var chart = option_2;
                                    if (chart.series.length === 1) {
                                        if (e.point.category == "营业税") {
                                            for (var i = 0; i < ss_yys.length; i++) {
                                                if (typeof(ss_yys[i]) == "object") {
                                                    ss_yys[i] = ss_yys[i].y;
                                                }
                                            }

                                            yue_title = "营业税";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_yys.concat([]);
                                            chart.plotOptions = option2_column;
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart = new Highcharts.chart(chart);
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                        } else if (e.point.category == '个人所得税') {
                                            for (var i = 0; i < ss_grsds.length; i++) {
                                                if (typeof(ss_grsds[i]) == "object") {
                                                    ss_grsds[i] = ss_grsds[i].y
                                                }
                                            }
                                            yue_title = "个人所得税";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_grsds.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");

                                        } else if (e.point.category == '企业所得税') {
                                            for (var i = 0; i < ss_qysds.length; i++) {
                                                if (typeof(ss_qysds[i]) == "object") {
                                                    ss_qysds[i] = ss_qysds[i].y
                                                }
                                            }


                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "企业所得税";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_qysds.concat([]);
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart.xAxis.tickInterval = 1;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '城建税') {
                                            for (var i = 0; i < ss_cjs.length; i++) {
                                                if (typeof(ss_cjs[i]) == "object") {
                                                    ss_cjs[i] = ss_cjs[i].y
                                                }
                                            }

                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "城建税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_cjs.concat([]);
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart.xAxis.tickInterval = 1;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '土地使用税') {
                                            for (var i = 0; i < ss_tdsys.length; i++) {
                                                if (typeof(ss_tdsys[i]) == "object") {
                                                    ss_tdsys[i] = ss_tdsys[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "土地使用税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_tdsys.concat([]);
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart.xAxis.tickInterval = 1;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '房产税') {
                                            for (var i = 0; i < ss_fcs.length; i++) {
                                                if (typeof(ss_fcs[i]) == "object") {
                                                    ss_fcs[i] = ss_fcs[i].y
                                                }
                                            }

                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "房产税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_fcs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '土地增值税') {
                                            for (var i = 0; i < ss_tdzzs.length; i++) {
                                                if (typeof(ss_tdzzs[i]) == "object") {
                                                    ss_tdzzs[i] = ss_tdzzs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "土地增值税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_tdzzs.concat([]);
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart.xAxis.tickInterval = 1;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '印花税') {
                                            for (var i = 0; i < ss_yhs.length; i++) {
                                                if (typeof(ss_yhs[i]) == "object") {
                                                    ss_yhs[i] = ss_yhs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "印花税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_yhs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '车船税') {
                                            for (var i = 0; i < ss_ccs.length; i++) {
                                                if (typeof(ss_ccs[i]) == "object") {
                                                    ss_ccs[i] = ss_ccs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "车船税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_ccs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '资源税') {
                                            for (var i = 0; i < ss_zys.length; i++) {
                                                if (typeof(ss_zys[i]) == "object") {
                                                    ss_zys[i] = ss_zys[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "资源税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_zys.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '契税') {
                                            for (var i = 0; i < ss_qs.length; i++) {
                                                if (typeof(ss_qs[i]) == "object") {
                                                    ss_qs[i] = ss_qs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "契税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_qs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '烟叶税') {
                                            for (var i = 0; i < ss_yanys.length; i++) {
                                                if (typeof(ss_yanys[i]) == "object") {
                                                    ss_yanys[i] = ss_yanys[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "烟叶税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_yanys.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '固定资产投资方向调节税') {
                                            for (var i = 0; i < ss_gdzctzfxtjs.length; i++) {
                                                if (typeof(ss_gdzctzfxtjs[i]) == "object") {
                                                    ss_gdzctzfxtjs[i] = ss_gdzctzfxtjs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "固定资产投资方向调节税"
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_gdzctzfxtjs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '其他税收') {
                                            for (var i = 0; i < ss_qtss.length; i++) {
                                                if (typeof(ss_qtss[i]) == "object") {
                                                    ss_qtss[i] = ss_qtss[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "其他税收";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = ss_qtss.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    xAxis: {
                        categories: ss_2016_name,
                        gridLineWidth: 0,
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16',
                                fontFamily: '方正小标宋简体'
                            }
                        }
                    },
                    yAxis: {
                        id: "Y1",
                        gridLineDashStyle: 'longdash',
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16px',
                                fontFamily: 'Arial'
                            }
                        }
                    },
                    series: [{
                        //allowPointSelect:true  选中
                        data: ss_2016_value
                    }]
                };
                chart_1 = new Highcharts.Chart(option_1);
                // Set up the chart
                option_2 = {
                    chart: {
                        renderTo: 'cavs2',
                        type: "column",
                        marginTop: 150,
                        marginBottom: 100,
                        marginRight: 30
                    },
                    legend: {
                        enabled: false
                    },
                    exporting: {
                        enabled: false
                    },
                    title: {
                        text: '个人所得税',
                        useHTML: true
                    },
                    subtitle: {
                        text: "<span style='color:rgb(38,105,206)'>亿元</span>",
                        x: -190,
                        useHTML: true,
                        y: 100
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
                        formatter: function () {
                            return this.x < 10000 ? ('<span style="color:#fff;font-family:Arial">' + this.x + '</span><span style="font-family:方正小标宋简体">年</span><br/><span style="color:yellow;font-family:Arial">' + this.y + '</span><span style="font-family:方正小标宋简体">亿</span>') : ('<span style="color:#fff";font-family:Arial>' + this.x + '</span><br/><span style="color:yellow;font-family:Arial">' + this.y + '</span><span style="font-family:方正小标宋简体">亿</span>')
                        }
                        //backgroundColor: '#010d3b',
                        //borderWidth: 1,
                        //borderColor: '#fff'
                    },
                    plotOptions: option2_column,
                    xAxis: {
                        categories: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear],
                        gridLineWidth: 0,
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16',
                                fontFamily: 'Arial'
                            }
                        }
                    },
                    yAxis: {
                        gridLineDashStyle: 'longdash',
                        name: "亿元",
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16',
                                fontFamily: 'Arial'
                            }
                        }
                    },
                    series: [{
                        data: grsds
                    }]
                };
                chart_2 = new Highcharts.Chart(option_2)
                // Set up the chart
                option_3 = {
                    chart: {
                        renderTo: 'cavs3'
                    },
                    legend: {
                        enabled: false
                    },
                    exporting: {
                        enabled: false
                    },
                    title: {
                        text: '<span class="unit" style="color:#2669ce"> '+$scope.curYear+'年非税收情况</span><b class="unit" style="color:#2669ce">（单位：亿元）</b>',
                        useHTML: true,
                        align: 'left',
                        x: 20,
                        y: 20
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
                        formatter: function () {
                            return '<span style="color: #fff;font-family:方正小标宋简体">' + this.x + '</span><br/><span style="color:yellow;font-family:Arial ">' + this.y + '</span><span style="font-family:方正小标宋简体;color:#fff">亿</span>';
                        }
                    },
                    subtitle: {
                        text: '<span style="font-size: 18px; color: #ffea3c;font-family:Arial">' + parseFloat(fss_2016_count.toFixed(2)) + '</span> <b class="unit" style="font-family:方正小标宋简体">亿元</b>',
                        useHTML: true,
                        align: 'right',
                        y: 10,
                        x: -20
                    },
                    plotOptions: {
                        column: {
                            depth: 25,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true,
                                color: '#fff'

                            },
                            states: {
                                hover: {
                                    //brightness: 0.5,
                                    color: 'rgb(200,183,29)',
                                    halo: {
                                        attributes: {
                                            fill: 'red',
                                            'stroke-width': 2
                                        }
                                    }
                                }
                            },
                            events: {
                                click: function (e) {
                                    if (e.point.color == 'rgb(200,183,29)') {
                                        e.point.color = '#2f7ed8';//如果是点击之前已经点击了的则把颜色变回来
                                    } else {
                                        for (var i = 0; i < e.point.series.data.length; i++) {
                                            var temp = e.point.series.data[i];
                                            if (temp.color == 'rgb(200,183,29)') {
                                                e.point.series.data[i].color = '#2f7ed8';//去掉已点击的颜色
                                                e.point.series.data[i].update(e.point.series.data[i]);
                                                break;
                                            }
                                        }
                                        e.point.color = 'rgb(200,183,29)';//设置点击后的柱状图 的柱形颜色
                                    }
                                    e.point.update(e.point);
                                    var chart = option_2;
                                    if (chart.series.length === 1) {
                                        if (e.point.category == "养老保险基金") {
                                            for (var i = 0; i < fss_ylbxjj.length; i++) {
                                                if (typeof(fss_ylbxjj[i]) == "object") {
                                                    fss_ylbxjj[i] = fss_ylbxjj[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "养老保险基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_ylbxjj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '医疗保险基金') {
                                            for (var i = 0; i < fss_yiliaobaoxian.length; i++) {
                                                if (typeof(fss_yiliaobaoxian[i]) == "object") {
                                                    fss_yiliaobaoxian[i] = fss_yiliaobaoxian[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "医疗保险基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_yiliaobaoxian.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart)
                                        } else if (e.point.category == '教育附加税') {
                                            for (var i = 0; i < fss_jyfjs.length; i++) {
                                                if (typeof(fss_jyfjs[i]) == "object") {
                                                    fss_jyfjs[i] = fss_jyfjs[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "教育附加税";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_jyfjs.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '地方水利建设基金') {
                                            for (var i = 0; i < fss_dfsljsjj.length; i++) {
                                                if (typeof(fss_dfsljsjj[i]) == "object") {
                                                    fss_dfsljsjj[i] = fss_dfsljsjj[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "地方水利建设基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_dfsljsjj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '地方教育附加') {
                                            for (var i = 0; i < fss_dfjyfj.length; i++) {
                                                if (typeof(fss_dfjyfj[i]) == "object") {
                                                    fss_dfjyfj[i] = fss_dfjyfj[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "地方教育附加";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_dfjyfj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart)
                                        } else if (e.point.category == '其他社保费') {
                                            for (var i = 0; i < fss_qtsbf.length; i++) {
                                                if (typeof(fss_qtsbf[i]) == "object") {
                                                    fss_qtsbf[i] = fss_qtsbf[i].y
                                                }
                                            }
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "其他社保费";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_qtsbf.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart)
                                        } else if (e.point.category == '失业保险基金') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "失业保险基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_sybxjj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '工伤保险基金') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "工伤保险基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_gsbxjj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '生育保险基金') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "生育保险基金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_shengyubxjj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '其他收入') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "其他收入";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_qtsr.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '残疾人就业保障金') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "残疾人就业保障金";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_cjrjybzj.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '文化事业建设费') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "文化事业建设费";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_whsyjss.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        } else if (e.point.category == '税务部门罚没收入') {
                                            $('.kindClicked').removeClass('kindClicked');
                                            $(".kind").first().addClass("kindClicked");
                                            yue_title = "税务部门罚没收入";
                                            chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                            chart.title.text = yue_title;
                                            chart.series[0].data = fss_swbmfmsr.concat([]);
                                            chart.xAxis.tickInterval = 1;
                                            chart.chart.type = "column";
                                            chart.plotOptions = option2_column;
                                            chart = new Highcharts.chart(chart);
                                        }
                                    }
                                }
                            }
                        }

                    },
                    xAxis: {
                        categories: fss_2016_name,
                        gridLineWidth: 0,
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16px',
                                fontFamily: '方正小标宋简体'
                            }
                        }
                    },
                    yAxis: {
                        gridLineDashStyle: 'longdash',
                        labels: {
                            style: {
                                color: '#fff',
                                fontSize: '16px',
                                fontFamily: 'Arial'
                            }
                        }
                    },
                    series: [{
                        data: fss_2016_value
                    }]
                };
                chart_3 = new Highcharts.chart(option_3)
                //$http.get($scope.URL+"/srdbfy?nf="+$scope.curYear+"&tybm=33")
                //$scope.post('CxglDtzs2016BLH_selectSrdbfy', {nf: $scope.curYear, tybm: 33})
                    $http.get("./data_json/fszsr/nf2017tybm33.json")
                    .success(function (res) {
                        var data = JSON.parse(res.data[0].value);
                        var yue_first = data[0].jgny;
                        var yue_last = data[data.length - 1].jgny;
                        $scope.yue_cate = [];
                        for (var i = 0; i < 12; i++) {
                            $scope.yue_cate.push(yue_first + i)
                        }
                        for (var i = 0; i < yue_last - parseInt(yue_last / 10) * 10; i++) {
                            $scope.yue_cate.push(parseInt(yue_last / 10) * 10 + i + 1)
                        }
                        yue_yys = [];
                        yue_grsds = [];
                        yue_qysds = [];
                        yue_qs = [];
                        yue_cjs = [];
                        yue_tdzzs = [];
                        yue_fcs = [];
                        yue_tdsys = [];
                        yue_yhs = [];
                        yue_ccs = [];
                        yue_zys = [];
                        yue_gdzctzfxtjs = [];
                        yue_yanys = [];
                        yue_qtss = [];
                        yue_ylbxjj = [];
                        yue_yiliaobxjj = [];
                        yue_jyfjs = [];
                        yue_dfsljsjj = [];
                        yue_dfjyfj = [];
                        yue_qtsbf = [];
                        yue_sybxjj = [];
                        yue_gsbxjj = [];
                        yue_shengyubxjj = [];
                        yue_qtsr = [];
                        yue_cjrjybzj = [];
                        yue_whsyjsf = [];
                        yue_swbmfmsr = [];
                        //data = data.root[$scope.curYear];
                        $scope.yue_obj = {}
                        $scope.fss_obj = {}

                        for (var i = 0; i < $scope.yue_cate.length; i++) {
                            $scope.yue_obj[$scope.yue_cate[i]] = []
                            $scope.fss_obj[$scope.yue_cate[i]] = []
                        }
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].xmbmSz == 3) {
                                //点击营业税 设置分月的数据
                                yue_yys.push(fix_2(data[i].nBy));
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "营业税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "营业税", y: fix_2(data[i].nLj)})
                                //}

                            } else if (data[i].xmbmSz == 4) {
                                yue_qysds.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "企业所得税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 5) {
                                yue_grsds.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "个人所得税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 6) {
                                yue_zys.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "资源税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "资源税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 7) {
                                yue_tdsys.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "土地使用税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 8) {
                                yue_gdzctzfxtjs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({
                                            name: "固定资产投资方向调节税",
                                            y: fix_2(data[i].nLj)
                                        })
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "固定资产投资方向调节税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 9) {
                                yue_cjs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "城建税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "城建税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 10) {
                                yue_yhs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "印花税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "印花税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz ==11 ) {
                                yue_tdzzs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "土地增值税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 12) {
                                yue_fcs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "房产税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "房产税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 13) {
                                yue_ccs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "车船税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "车船税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 14) {
                                yue_yanys.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "烟叶税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz ==15) {
                                yue_qs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "契税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                //if (data[i].jgny == 201501) {
                                //    ss_501.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201502) {
                                //    ss_502.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201503) {
                                //    ss_503.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201504) {
                                //    ss_504.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201505) {
                                //    ss_505.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201506) {
                                //    ss_506.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201507) {
                                //    ss_507.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201508) {
                                //    ss_508.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201509) {
                                //    ss_509.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201510) {
                                //    ss_510.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201511) {
                                //    ss_511.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201512) {
                                //    ss_512.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201601) {
                                //    ss_601.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201602) {
                                //    ss_602.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201603) {
                                //    ss_603.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201604) {
                                //    ss_604.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201605) {
                                //    ss_605.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201606) {
                                //    ss_606.push({name: "契税", y: fix_2(data[i].nLj)})
                                //} else if (data[i].jgny == 201607) {
                                //    ss_607.push({name: "契税", y: fix_2(data[i].nLj)})
                                //}
                            } else if (data[i].xmbmSz == 17) {
                                yue_qtss.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.yue_obj[$scope.yue_cate[j]].push({name: "其他税收", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     ss_501.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     ss_502.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     ss_503.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     ss_504.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     ss_505.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     ss_506.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     ss_507.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     ss_508.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     ss_509.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     ss_510.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     ss_511.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     ss_512.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     ss_601.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     ss_602.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     ss_603.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     ss_604.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     ss_605.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     ss_606.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     ss_607.push({name: "其他税收", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz ==19) {
                                yue_jyfjs.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "教育费附加", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "教育附加税", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 20) {
                                yue_whsyjsf.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "契税", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 21) {
                                yue_swbmfmsr.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({
                                            name: "税务部门罚没收入",
                                            y: fix_2(data[i].nLj)
                                        })
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "税务部门罚没收入", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 24) {
                                yue_ylbxjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "养老保险基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 25) {
                                yue_sybxjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "失业保险基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 26) {
                                yue_yiliaobxjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "医疗保险基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 27) {
                                yue_gsbxjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "工商保险基金", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "工伤保险基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 28) {
                                yue_shengyubxjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {

                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "生育保险基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 29) {
                                yue_qtsbf.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {
                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "其他社保费", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 30) {
                                yue_dfsljsjj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {
                                        $scope.fss_obj[$scope.yue_cate[j]].push({
                                            name: "地方水利建设基金",
                                            y: fix_2(data[i].nLj)
                                        })
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "地方水利建设基金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 31) {
                                yue_dfjyfj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {
                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "地方教育附加", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 32) {
                                yue_cjrjybzj.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {

                                    if (data[i].jgny == $scope.yue_cate[j]) {
                                        $scope.fss_obj[$scope.yue_cate[j]].push({
                                            name: "残疾人就业保障金",
                                            y: fix_2(data[i].nLj)
                                        })
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "文化事业建设费", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "残疾人就业保障金", y: fix_2(data[i].nLj)})
                                // }
                            } else if (data[i].xmbmSz == 33) {
                                yue_qtsr.push((data[i].nBy / 100000000).toFixed(2) - 0);
                                for (var j = 0; j < $scope.yue_cate.length; j++) {
                                    if (data[i].jgny == $scope.yue_cate[j]) {
                                        $scope.fss_obj[$scope.yue_cate[j]].push({name: "其他收入", y: fix_2(data[i].nLj)})
                                    }
                                }
                                // if (data[i].jgny == 201501) {
                                //     fss_501.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201502) {
                                //     fss_502.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201503) {
                                //     fss_503.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201504) {
                                //     fss_504.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201505) {
                                //     fss_505.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201506) {
                                //     fss_506.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201507) {
                                //     fss_507.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201508) {
                                //     fss_508.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201509) {
                                //     fss_509.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201510) {
                                //     fss_510.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201511) {
                                //     fss_511.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201512) {
                                //     fss_512.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201601) {
                                //     fss_601.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201602) {
                                //     fss_602.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201603) {
                                //     fss_603.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201604) {
                                //     fss_604.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201605) {
                                //     fss_605.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201606) {
                                //     fss_606.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // } else if (data[i].jgny == 201607) {
                                //     fss_607.push({name: "其他收入", y: fix_2(data[i].nLj)})
                                // }
                            }
                        }


                        //ss_501.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_502.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_503.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_504.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_505.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_506.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_507.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_508.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_509.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_510.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_511.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_512.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_601.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_602.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_603.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_604.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_605.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_606.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //ss_607.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_501.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_502.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_503.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_504.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_505.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_506.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_507.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_508.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_509.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_510.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_511.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_512.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_601.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_602.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_603.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_604.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_605.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_606.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                        //fss_607.sort(function (a, b) {
                        //    return b.y - a.y
                        //})
                    })

            }).error(function () {
                alertService.unmask();
            })

        function fix_2(n) {
            return parseFloat((n / 100000000).toFixed(2))
        }

        $scope.sortedData = function (event, isYear) {
            if (isYear) {
                if (!($("#cavs2_s1").hasClass("kindClicked"))) {
                    $('#cavs2_s2').removeClass('kindClicked');
                    $("#cavs2_s1").addClass('kindClicked');
                    var gr_arr = [];
                    var chart = option_2;
                    if (chart.title.text == "营业税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_yys.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        //点击分年设置option_2的点击事件
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "个人所得税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_grsds.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "企业所得税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_qysds.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "契税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_qs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart)
                    } else if (chart.title.text == "城建税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_cjs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "土地增值税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_tdzzs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "房产税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_fcs.concat([]);
                        chart.chart.type = "column";
                        chart.xAxis.tickInterval = 1;
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "土地使用税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_tdsys.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(option_2);
                    } else if (chart.title.text == "印花税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_yhs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "车船税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_ccs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "资源税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_zys.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "固定资产投资方向调节税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_gdzctzfxtjs.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "烟叶税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_yanys.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(option_2)
                    } else if (chart.title.text == "其他税收") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = ss_qtss.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(option_2)
                    } else if (chart.title.text == "养老保险基金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_ylbxjj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(option_2)
                    } else if (chart.title.text == "医疗保险基金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_yiliaobaoxian.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "教育附加税") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_yiliaobaoxian.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "地方水利建设基金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_dfsljsjj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart = new Highcharts.chart(chart)
                    } else if (chart.title.text == "地方教育附加") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_dfjyfj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "其他社保费") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_qtsbf.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "失业保险基金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_sybxjj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "工伤保险基金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_gsbxjj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "生育保险基金") {
                        option_2.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        option_2.series[0].data = fss_shengyubxjj.concat([]);
                        option_2.xAxis.tickInterval = 1;
                        option_2.chart.type = "column";
                        option_2.plotOptions = option2_column;
                        chart_2 = new Highcharts.chart(option_2)
                    } else if (chart.title.text == "其他收入") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_qtsr.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "残疾人就业保障金") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_cjrjybzj.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "文化事业建设费") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_whsyjss.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    } else if (chart.title.text == "税务部门罚没收入") {
                        chart.xAxis.categories = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                        chart.series[0].data = fss_swbmfmsr.concat([]);
                        chart.xAxis.tickInterval = 1;
                        chart.chart.type = "column";
                        chart.plotOptions = option2_column;
                        chart = new Highcharts.chart(chart);
                    }
                }
            } else {
                //tickInterval
                if (!($("#cavs2_s2").hasClass("kindClicked"))) {
                    $('#cavs2_s1').removeClass('kindClicked');
                    $(this).addClass("kindClicked");
                    var chart = option_2;
                    if (chart.title.text == "营业税") {
                        chart.series[0].data = yue_yys;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "个人所得税") {
                        chart.series[0].data = yue_grsds;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "企业所得税") {
                        chart.series[0].data = yue_qysds;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "契税") {
                        chart.series[0].data = yue_qs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "城建税") {
                        chart.series[0].data = yue_cjs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "土地增值税") {
                        chart.series[0].data = yue_tdzzs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "房产税") {
                        chart.series[0].data = yue_fcs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "土地使用税") {
                        chart.series[0].data = yue_tdsys;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "印花税") {
                        chart.series[0].data = yue_yhs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "车船税") {
                        chart.series[0].data = yue_ccs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "资源税") {
                        chart.series[0].data = yue_zys;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "固定资产投资方向调节税") {
                        chart.series[0].data = yue_gdzctzfxtjs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "烟叶税") {
                        chart.series[0].data = yue_yanys;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "其他税收") {
                        chart.series[0].data = yue_qtss;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "养老保险基金") {
                        chart.series[0].data = yue_ylbxjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "医疗保险基金") {
                        chart.series[0].data = yue_yiliaobxjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "教育附加税") {
                        chart.series[0].data = yue_jyfjs;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "地方水利建设基金") {
                        chart.series[0].data = yue_dfsljsjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "地方教育附加") {
                        chart.series[0].data = yue_dfjyfj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "其他社保费") {
                        chart.series[0].data = yue_qtsbf;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "失业保险基金") {
                        chart.series[0].data = yue_sybxjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "工伤保险基金") {
                        chart.series[0].data = yue_gsbxjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "生育保险基金") {
                        chart.series[0].data = yue_shengyubxjj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "其他收入") {
                        chart.series[0].data = yue_qtsr;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "残疾人就业保障金") {
                        chart.series[0].data = yue_cjrjybzj;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate,
                            chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "文化事业建设费") {
                        chart.series[0].data = yue_whsyjsf;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    } else if (chart.title.text == "税务部门罚没收入") {
                        chart.series[0].data = yue_swbmfmsr;
                        chart.xAxis.tickInterval = 3;
                        chart.chart.type = "line";
                        chart.plotOptions = option2_line;
                        chart.yAxis.labels.format = '{value}';
                        chart.yAxis.name = '亿元';
                        chart.title.text = yue_title;
                        chart.xAxis.categories = $scope.yue_cate;
                        chart = new Highcharts.Chart(chart);
                    }
                    $(".kindClicked").removeClass("kindClicked");
                    $(".kind").eq(1).addClass("kindClicked");
                }
            }
        }
        $scope.$on('$destroy', function () {
            Highcharts.setOptions({});
        });
        //添加背景效果
        var script = document.createElement("script");
        script.src = "js/bg/bg_1.js";
        document.body.appendChild(script);

    }]);

//.factory('Highcharts', [function(){
//    return {
//        setOptions: function(opt){
//            Highcharts.setOptions(opt);
//        },
//        init: function(opt){
//            new Highcharts.Chart(opt);
//        }
//    }
//}
//])
