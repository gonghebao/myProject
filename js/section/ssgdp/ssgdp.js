/**
 * @author : DingTianXiu
 * @date : 2016/4/19
 * @module : ssGDP
 * @description :
 */

var app = angular.module("ssgdpApp", ['ui.alert']);
app.controller("ssgdpCtrl", ['$scope', '$http', 'alertService', function ($scope, $http, alertService) {
    alertService.mask();
    //$http.get($scope.URL+'/gsssdb?qsnf=' + ($scope.curYear - 6) + '&zznf=' + ($scope.curYear - 1))
    //    .success(function (data) {
    //$scope.post('CxglDtzs2016BLH_selectGsssdb', {qsnf:$scope.curYear-6,zznf:$scope.curYear-1})
    $http.get('./data_json/ssgdp/qsnf2011zznf2016.json')
        .success(function (data) {
            console.log("gdp_data",data);
            //可以清晰看出数据结构
            var ss_obj = {          //税收对象
                s2010: {
                    sname: [],     //省市名称
                    sssl: [],      //税收率
                    sgdp: [],      //gdp
                    sss: []        //税收
                },
                s2011: {
                    sname: [],
                    sssl: [],
                    sgdp: [],
                    sss: []
                },
                s2012: {
                    sname: [],
                    sssl: [],
                    sgdp: [],
                    sss: []
                },
                s2013: {
                    sname: [],
                    sssl: [],
                    sgdp: [],
                    sss: []
                },
                s2014: {
                    sname: [],
                    sssl: [],
                    sgdp: [],
                    sss: []
                },
                s2015: {
                    sname: [],
                    sssl: [],
                    sgdp: [],
                    sss: []
                }
            }
            var sj_obj_2010 = [];
            var sj_gdp_2010 = [];
            var sj_shuishou_2010 = [];
            var sj_shl_2010 = [];
            var sj_name_2010 = [];
            var arr_2010 = JSON.parse(data.data[0].value);
            for (var i = 0; i < arr_2010.length; i++) {
                sj_obj_2010.push(arr_2010[i])
            }
            sj_obj_2010.sort(by("round(gdp/10000,2)"));
            console.log("sj_obj_2010",sj_obj_2010)
            for (var i = 0; i < sj_obj_2010.length; i++) {
                sj_gdp_2010.push(parseFloat((sj_obj_2010[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2010.push(parseFloat((sj_obj_2010[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2010.push((sj_obj_2010[i]['gdptaxl'] * 100));
                sj_name_2010.push(sj_obj_2010[i]['ssmc'])
            }
            ss_obj.s2010.sname = sj_name_2010;
            ss_obj.s2010.sss = sj_shuishou_2010;
            ss_obj.s2010.sssl = sj_shl_2010;
            ss_obj.s2010.sgdp = sj_gdp_2010;
            var sj_obj_2011 = [];
            var sj_gdp_2011 = [];
            var sj_shuishou_2011 = [];
            var sj_shl_2011 = [];
            var sj_name_2011 = [];
            var arr_2011 = JSON.parse(data.data[1].value);
            for (var i = 0; i < arr_2011.length; i++) {
                sj_obj_2011.push(arr_2011[i])
            }
            sj_obj_2011.sort(by("round(gdp/10000,2)"));
            for (var i = 0; i < sj_obj_2011.length; i++) {
                sj_gdp_2011.push(parseFloat((sj_obj_2011[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2011.push(parseFloat((sj_obj_2011[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2011.push((sj_obj_2011[i]['gdptaxl'] * 100));
                sj_name_2011.push(sj_obj_2011[i]['ssmc'])
            }
            ss_obj.s2011.sname = sj_name_2011;
            ss_obj.s2011.sss = sj_shuishou_2011;
            ss_obj.s2011.sssl = sj_shl_2011;
            ss_obj.s2011.sgdp = sj_gdp_2011;
            var sj_obj_2012 = [];
            var sj_gdp_2012 = [];
            var sj_shuishou_2012 = [];
            var sj_shl_2012 = [];
            var sj_name_2012 = [];
            var arr_2012 = JSON.parse(data.data[2].value);
            for (var i = 0; i < arr_2012.length; i++) {
                sj_obj_2012.push(arr_2012[i])
            }
            sj_obj_2012.sort(by("round(gdp/10000,2)"));
            for (var i = 0; i < sj_obj_2012.length; i++) {
                sj_gdp_2012.push(parseFloat((sj_obj_2012[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2012.push(parseFloat((sj_obj_2012[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2012.push((sj_obj_2012[i]['gdptaxl'] * 100));
                sj_name_2012.push(sj_obj_2012[i]['ssmc'])
            }
            ss_obj.s2012.sname = sj_name_2012;
            ss_obj.s2012.sss = sj_shuishou_2012;
            ss_obj.s2012.sssl = sj_shl_2012;
            ss_obj.s2012.sgdp = sj_gdp_2012;
            var sj_obj_2013 = [];
            var sj_gdp_2013 = [];
            var sj_shuishou_2013 = [];
            var sj_shl_2013 = [];
            var sj_name_2013 = [];
            var arr_2013 = JSON.parse(data.data[3].value);
            for (var i = 0; i < arr_2013.length; i++) {
                sj_obj_2013.push(arr_2013[i])
            }
            sj_obj_2013.sort(by("round(gdp/10000,2)"));
            for (var i = 0; i < sj_obj_2013.length; i++) {
                sj_gdp_2013.push(parseFloat((sj_obj_2013[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2013.push(parseFloat((sj_obj_2013[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2013.push((sj_obj_2013[i]['gdptaxl'] * 100));
                sj_name_2013.push(sj_obj_2013[i]['ssmc'])
            }
            ss_obj.s2013.sname = sj_name_2013;
            ss_obj.s2013.sss = sj_shuishou_2013;
            ss_obj.s2013.sssl = sj_shl_2013;
            ss_obj.s2013.sgdp = sj_gdp_2013;
            var sj_obj_2014 = [];
            var sj_gdp_2014 = [];
            var sj_shuishou_2014 = [];
            var sj_shl_2014 = [];
            var sj_name_2014 = [];
            var arr_2014 =JSON.parse(data.data[4].value);
            for (var i = 0; i < arr_2014.length; i++) {
                sj_obj_2014.push(arr_2014[i])
            }
            sj_obj_2014.sort(by("round(gdp/10000,2)"));
            for (var i = 0; i < sj_obj_2014.length; i++) {
                sj_gdp_2014.push(parseFloat((sj_obj_2014[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2014.push(parseFloat((sj_obj_2014[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2014.push((sj_obj_2014[i]['gdptaxl'] * 100));
                sj_name_2014.push(sj_obj_2014[i]['ssmc'])
            }
            ss_obj.s2014.sname = sj_name_2014;
            ss_obj.s2014.sss = sj_shuishou_2014;
            ss_obj.s2014.sssl = sj_shl_2014;
            ss_obj.s2014.sgdp = sj_gdp_2014;
            var sj_obj_2015 = [];
            var sj_gdp_2015 = [];
            var sj_shuishou_2015 = [];
            var sj_shl_2015 = [];
            var sj_name_2015 = [];
            var arr_2015 = JSON.parse(data.data[5].value);
            for (var i = 0; i < arr_2015.length; i++) {
                sj_obj_2015.push(arr_2015[i])
            }
            sj_obj_2015.sort(by("round(gdp/10000,2)"));
            for (var i = 0; i < sj_obj_2015.length; i++) {
                sj_gdp_2015.push(parseFloat((sj_obj_2015[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
                sj_shuishou_2015.push(parseFloat((sj_obj_2015[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
                sj_shl_2015.push((sj_obj_2015[i]['gdptaxl'] * 100));
                sj_name_2015.push(sj_obj_2015[i]['ssmc'])
            }
            ss_obj.s2015.sname = sj_name_2015;
            ss_obj.s2015.sss = sj_shuishou_2015;
            ss_obj.s2015.sssl = sj_shl_2015;
            ss_obj.s2015.sgdp = sj_gdp_2015;
            console.log("ss_obj11",ss_obj);
           var option= {
               title:{
                   text:''
               },
               legend:{
                   enabled:true,
                   x:-350,
                   y:-10,
                   verticalAlign:'top',
                   itemStyle:{
                       color:'#fff',
                       fontSize:"20px"
                   },
                   symbolWidth:20,
                   itemHoverStyle:{
                       color:"#fff"
                   }
               },
               chart: {
                   type: 'column',
                   renderTo: 'ssgdp',
                   backgroundColor:'rgba(0,0,0,0)',
                   borderColor:'rgba(0,0,0,0)',
                   type: 'column',
                   margin: 100,
                   borderWidth: 0,
                   options3d: {
                       enabled: true,
                       alpha: 0,
                       beta: 0,
                       depth: 50,
                       viewDistance: 25
                   }
               },
               exporting: {
                   enabled: false
               },
               xAxis: {
                   categories: sj_name_2014,
                   gridLineWidth:0,
                   labels: {
                       style: {
                           color: '#fff',
                           fontSize: '16',
                           fontFamily: '方正小标宋简体'
                       }
                   }
               },
               yAxis:[{
                   gridLineColor: 'rgb(38,105,206)',
                   gridLineWidth: 1,
                   gridLineDashStyle: 'longdash',
                   name: "亿元",
                   tickPixelInterval:120,
                   labels: {
                       style: {
                           color: '#fff',
                           fontSize: '16',
                           fontFamily:'Arial'
                       }
                   },
                   title: {
                       text: '万亿元',
                       rotation:0,
                       align:'high',
                       style:{
                           color:'rgb(38,105,206)',
                           fontFamily:'方正小标宋简体'
                       },
                       y:-30,
                       x:50
                   }
               },{
                   gridLineColor: 'rgb(38,105,206)',
                   gridLineWidth: 1,
                   gridLineDashStyle: 'longdash',
                   name: "亿元",
                   tickPixelInterval:120,
                   labels: {
                       style: {
                           color: '#fff',
                           fontSize: '16',
                           fontFamily:'Arial'
                       }
                   },
                   opposite:true,
                   title: {
                       text: '百分比',
                       rotation:0,
                       align:'high',
                       style:{
                           color:'rgb(38,105,206)',
                           fontFamily:'方正小标宋简体'
                       },
                       x:-50,
                       y:-30

                   }
               }
               ],
               plotOptions: {
                   column: {
                       borderColor: 'rgb(200,183,29)',
                       depth: 25,
                       edgeWidth:1,
                       dataLabels: {
                           enabled: true,
                           allowOverlap: true,
                           color: '#fff',
                        style:{
                            fontSize: "20px"
                        }

                       }
                   },
                   line:{
                       dataLabels: {
                           enabled: true,
                           allowOverlap: true,
                           formatter:function(e){
                               return this.y+" %"
                           },
                           color: 'rgb(255,255,0)',
                           shadow:false,
                           style:{
                               fontSize: "20px"
                           }

                       }
                   }
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
                   formatter: function (p) {
                       //var str = '';
                       //str += '<span style="color:#fff;font-family: \'方正小标宋简体\'">' + this.x + '</span><br/><span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[0].series.name + '：</span><span style="color:#fff;font-family:Arial;float:right ">' + this.points[0].y + '</span><span style="color:#fff;font-family:方正小标宋简体">亿</span><br>';
                       //str += '<span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[1].series.name + '：</span><span style="color:#fff;font-family:Arial ">' +this.points[1].y +'</span><span style="color:#fff;font-family:方正小标宋简体">亿</span><br>';
                       //str += '<span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[2].series.name +'：</span><span style="color:#fff;font-family:Arial ">'  + this.points[2].y + '</span><span style="color:#fff;font-family:方正小标宋简体">%</span><br>';
                       //return str;
                       if(this.series.name=="GDP税收率"){
                           return '<span style="color:#fff;font-family:方正小标宋简体">'+this.key+'</span><br><span style="color:#fff;font-family:方正小标宋简体">'+this.series.name+'：</span><span style="color:yellow;font-family:Arial">'+this.y+'</span><span style="color:#fff;font-family:方正小标宋简体">%</span>'
                       }
                      return '<span style="color:#fff;font-family:方正小标宋简体">'+this.key+'</span><br><span style="color:#fff;font-family:方正小标宋简体">'+this.series.name+'：</span><span style="color:yellow;font-family:Arial">'+this.y+'</span><span style="color:#fff;font-family:方正小标宋简体">万亿</span>'
                   }
               },
               series: [{
                   name:'GDP',
                   color:"rgb(30,194,255)",
                   data: ss_obj.s2015.sgdp
               },{
                   name:'税收',
                   color:"rgb(131,38,246)",
                   data:ss_obj.s2015.sss
               },{
                   name:"GDP税收率",
                   type:'line',
                   color:"rgb(249,221,35)",
                   data:ss_obj.s2015.sssl,
                   yAxis:1,
                   zIndex:200
               }
               ]
           };
            option1=new Highcharts.chart(option);
            $("#gdp_line").click(function (e) {
                var tar = e.target ;   //获得当前元素
                $("#gdp_line li").removeClass("line");
                $(tar).addClass("line");
                if (tar.innerHTML == ($scope.curYear - 6) + "年") {
                    option.series[0].data = ss_obj.s2010.sgdp;
                    option.series[1].data = ss_obj.s2010.sss;
                    option.series[2].data = ss_obj.s2010.sssl;
                    option1=new Highcharts.chart(option)
                } else if (tar.innerHTML == ($scope.curYear - 5) + "年") {
                    option.series[0].data = ss_obj.s2011.sgdp;
                    option.series[1].data = ss_obj.s2011.sss;
                    option.series[2].data = ss_obj.s2011.sssl;
                    option1=new Highcharts.chart(option)
                } else if (tar.innerHTML == ($scope.curYear - 4) + "年") {
                    option.series[0].data = ss_obj.s2012.sgdp;
                    option.series[1].data = ss_obj.s2012.sss;
                    option.series[2].data = ss_obj.s2012.sssl;
                    option1=new Highcharts.chart(option)
                } else if (tar.innerHTML == ($scope.curYear - 3) + "年") {
                    option.series[0].data = ss_obj.s2013.sgdp;
                    option.series[1].data = ss_obj.s2013.sss;
                    option.series[2].data = ss_obj.s2013.sssl;
                    option1=new Highcharts.chart(option)
                } else if (tar.innerHTML == ($scope.curYear - 2) + "年") {
                    option.series[0].data = ss_obj.s2014.sgdp;
                    option.series[1].data = ss_obj.s2014.sss;
                    option.series[2].data = ss_obj.s2014.sssl;
                    option1=new Highcharts.chart(option)
                } else if (tar.innerHTML == ($scope.curYear - 1) + "年") {
                    option.series[0].data = ss_obj.s2015.sgdp;
                    option.series[1].data = ss_obj.s2015.sss;
                    option.series[2].data = ss_obj.s2015.sssl;
                    option1=new Highcharts.chart(option)
                }

            });
            alertService.unmask();
        })
        .error(function(){
            alertService.unmask();
        })
    //添加背景效果
    var script=document.createElement("script");
    script.src="js/bg/bg_1.js";
    document.body.appendChild(script);
}]);
