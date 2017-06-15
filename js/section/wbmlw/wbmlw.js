/**
 * Created by ww on 2016/7/11.
 */
angular.module('wbmlwApp', [])
    .controller('wbmlwCtrl', ['$window', '$interval', '$scope', '$timeout','alertService',"$http", function ($window, $interval, $scope, $timeout,alertService,$http) {
        //$window.location.reload();
        //$window.reload();
        //$scope.$on('$viewContentLoaded',function(){
        //$window.onload = function () {
        //$(function(){
        $timeout(function(){
            var cishu = 0;
            var data_count = null;
            alertService.mask();
            //银联
            var one = document.getElementById("one");
            var svg_1 = one.getSVGDocument();
            //svg_1 ? '' : $window.location.reload();
            var svgdoc_1 = svg_1.documentElement;
            var po_1 = svgdoc_1.getElementsByTagName('defs')[0];
            var linear_2 = po_1.getElementsByTagName('linearGradient')[0];
            var stop_1_1 = linear_2.getElementsByTagName("stop")[0];
            var stop_2_1 = linear_2.getElementsByTagName('stop')[1];
            var stop_3_1 = linear_2.getElementsByTagName("stop")[2];

            //工商部门
            var two = document.getElementById("two");
            var svg_2 = two.getSVGDocument();
            var svgdoc_2 = svg_2.documentElement;
            var po_2 = svgdoc_2.getElementsByTagName('defs')[0];
            var linear_2 = po_2.getElementsByTagName('linearGradient')[0];
            var stop_1_2 = linear_2.getElementsByTagName("stop")[0];
            var stop_2_2 = linear_2.getElementsByTagName('stop')[1];
            var stop_3_2 = linear_2.getElementsByTagName("stop")[2];

            //人民银行
            var three = document.getElementById("three");
            var svg_3 = three.getSVGDocument();
            var svgdoc_3 = svg_3.documentElement;
            var po_3 = svgdoc_3.getElementsByTagName('defs')[0];
            var linear_3 = po_3.getElementsByTagName('linearGradient')[0];
            var stop_1_3 = linear_3.getElementsByTagName("stop")[0];
            var stop_2_3 = linear_3.getElementsByTagName('stop')[1];
            var stop_3_3 = linear_3.getElementsByTagName("stop")[2];

            //公安部门
            var for_ = document.getElementById("for");
            var svg_4 = for_.getSVGDocument();
            var svgdoc_4 = svg_4.documentElement;
            var po_4 = svgdoc_4.getElementsByTagName('defs')[0];
            var linear_4 = po_4.getElementsByTagName('linearGradient')[0];
            var stop_1_4 = linear_4.getElementsByTagName("stop")[0];
            var stop_2_4 = linear_4.getElementsByTagName('stop')[1];
            var stop_3_4 = linear_4.getElementsByTagName("stop")[2];

            //建设部门
            var five = document.getElementById("five");
            var svg_5 = five.getSVGDocument();
            var svgdoc_5 = svg_5.documentElement;
            var po_5 = svgdoc_5.getElementsByTagName('defs')[0];
            var linear_5 = po_5.getElementsByTagName('linearGradient')[0];
            var stop_1_5 = linear_5.getElementsByTagName("stop")[0];
            var stop_2_5 = linear_5.getElementsByTagName('stop')[1];
            var stop_3_5 = linear_5.getElementsByTagName("stop")[2];

            //国土部门
            var six = document.getElementById("six");
            var svg_6 = six.getSVGDocument();
            var svgdoc_6 = svg_6.documentElement;
            var po_6 = svgdoc_6.getElementsByTagName('defs')[0];
            var linear_6 = po_6.getElementsByTagName('linearGradient')[0];
            var stop_1_6 = linear_6.getElementsByTagName("stop")[0];
            var stop_2_6 = linear_6.getElementsByTagName('stop')[1];
            var stop_3_6 = linear_6.getElementsByTagName("stop")[2];
            //国税部门
            var seven = document.getElementById("seven");
            var svg_7 = seven.getSVGDocument();
            var svgdoc_7 = svg_7.documentElement;
            var po_7 = svgdoc_7.getElementsByTagName('defs')[0];
            var linear_7 = po_7.getElementsByTagName('linearGradient')[0];
            var stop_1_7 = linear_7.getElementsByTagName("stop")[0];
            var stop_2_7 = linear_7.getElementsByTagName('stop')[1];
            var stop_3_7 = linear_7.getElementsByTagName("stop")[2];

            //社保
            var et = document.getElementById("et");
            var svg_8 = et.getSVGDocument();
            var svgdoc_8 = svg_8.documentElement;
            var po_8 = svgdoc_8.getElementsByTagName('defs')[0];
            var linear_8 = po_8.getElementsByTagName('linearGradient')[0];
            var stop_1_8 = linear_8.getElementsByTagName("stop")[0];
            var stop_2_8 = linear_8.getElementsByTagName('stop')[1];
            var stop_3_8 = linear_8.getElementsByTagName("stop")[2];

            var gongs_bg = svgdoc_2.getElementsByTagName("path")[0];
            var ga_bg = svgdoc_4.getElementsByTagName("path")[0];
            var rh_bg = svgdoc_3.getElementsByTagName("path")[0];
            var yl_bg = svgdoc_1.getElementsByTagName("path")[0];
            var gs_bg = svgdoc_7.getElementsByTagName("path")[0];
            var sb_bg = svgdoc_8.getElementsByTagName("path")[0];
            var js_bg = svgdoc_5.getElementsByTagName("path")[0];
            var gt_bg = svgdoc_6.getElementsByTagName("path")[0];

            gongs_bg.removeAttribute("style");
            gongs_bg.setAttribute("fill", "#1e3465");
            ga_bg.removeAttribute("style");
            ga_bg.setAttribute("fill", "#1e3465");
            rh_bg.removeAttribute("style");
            rh_bg.setAttribute("fill", "#1e3465");
            yl_bg.removeAttribute("style");
            yl_bg.setAttribute("fill", "#1e3465");
            gs_bg.removeAttribute("style");
            gs_bg.setAttribute("fill", "#1e3465");
            sb_bg.removeAttribute("style");
            sb_bg.setAttribute("fill", "#1e3465");
            js_bg.removeAttribute("style");
            js_bg.setAttribute("fill", "#1e3465");
            gt_bg.removeAttribute("style");
            gt_bg.setAttribute("fill", "#1e3465");

            var i = 0;
            var j = 100;
            $scope.timer1 = $interval(function () {
                stop_1_1.setAttribute('offset', i + '%');
                stop_2_1.setAttribute('offset', i + "%");
                stop_3_1.setAttribute("offset", i + 10 + "%");

                stop_1_2.setAttribute('offset', j + '%');
                stop_2_2.setAttribute('offset', j + "%");
                stop_3_2.setAttribute("offset", j + 10 + "%");

                stop_1_3.setAttribute('offset', i + '%');
                stop_2_3.setAttribute('offset', i + "%");
                stop_3_3.setAttribute("offset", i + 10 + "%");

                stop_1_4.setAttribute('offset', i + '%');
                stop_2_4.setAttribute('offset', i + "%");
                stop_3_4.setAttribute("offset", i + 10 + "%");

                stop_1_5.setAttribute('offset', i + '%');
                stop_2_5.setAttribute('offset', i + "%");
                stop_3_5.setAttribute("offset", i + 10 + "%");

                stop_1_6.setAttribute('offset', i + '%');
                stop_2_6.setAttribute('offset', i + "%");
                stop_3_6.setAttribute("offset", i + 10 + "%");

                stop_1_7.setAttribute('offset', i + '%');
                stop_2_7.setAttribute('offset', i + "%");
                stop_3_7.setAttribute("offset", i + 10 + "%");

                stop_1_8.setAttribute('offset', i + '%');
                stop_2_8.setAttribute('offset', i + "%");
                stop_3_8.setAttribute("offset", i + 10 + "%");

                i -= 1;
                j -= 2;
                if (i <= 0) {
                    i = 100
                }
                if (j <= 0) {
                    j = 100
                }
            }, 20);
            $(".centerBox").click(function (e) {
                var tar = e.target;
                switch (e.target.className) {
                    case "sbbm_bg bg_all":
                        $(".sbbm_bg").css({"opacity": 0, "z-index": 10});
                        $(".sbbm").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "sbbm":
                        $(".sbbm").css({"opacity": 0, "z-index": 10});
                        $(".sbbm_bg").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "gsbm_bg bg_all":
                        $(".gsbm_bg").css({"opacity": 0, "z-index": 10});
                        $(".gsbm").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "gsbm":
                        $(".gsbm_bg").css({"opacity": 1, "z-index": 1000});
                        $(".gsbm").css({"opacity": 0, "z-index": 10});
                        break;
                    case "ylhgsy_2_bg bg_all":
                        $(".ylhgsy_2_bg").css({"opacity": 0, "z-index": 10});
                        $(".ylhgsy_2").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "ylhgsy_2":
                        $(".ylhgsy_2_bg").css({"opacity": 1, "z-index": 1000});
                        $(".ylhgsy_2").css({"opacity": 0, "z-index": 10});
                        break;
                    case "gabm_bg bg_all":
                        $(".gabm_bg").css({"opacity": 0, "z-index": 10});
                        $(".gabm").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "gabm":
                        $(".gabm").css({"opacity": 0, "z-index": 10});
                        $(".gabm_bg").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "rmyh_bg bg_all":
                        $(".rmyh").css({"opacity": 1, "z-index": 1000});
                        $(".rmyh_bg").css({"opacity": 0, "z-index": 10});
                        break;
                    case "rmyh":
                        $(".rmyh").css({"opacity": 0, "z-index": 10});
                        $(".rmyh_bg").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "ylhgsy_bg bg_all":
                        $(".ylhgsy_bg").css({"opacity": 0, "z-index": 10});
                        $(".ylhgsy").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "ylhgsy":
                        $(".ylhgsy").css({"opacity": 0, "z-index": 10});
                        $(".ylhgsy_bg").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "gtbm":
                        $(".gtbm").css({"opacity": 0, "z-index": 10});
                        $(".gtbm_bg").css({"opacity": 1, "z-index": 1000});
                        break;
                    case "gtbm_bg bg_all":
                        $(".gtbm").css({"opacity": 1, "z-index": 1000});
                        $(".gtbm_bg").css({"opacity": 0, "z-index": 10});
                        break;
                    default:
                        "";

                }

            })
            $("#two").css('z-index', 1);
            var data_count = null;    //获取到的数据
            var cishu = 0;


            //$.ajax({
            //        type: 'get',
            //        url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=3",
            //        success: function (data) {
            //            alertService.unmask();
            //            data_count = data.root.wbmGrid[0];
            //            var rh = data_count.rh;
            //            //人行4s增加的数据;
            //            var rh_zz = rh / 6 / 150;
            //            rh = parseInt(rh - rh / 6);
            //
            //            var ga = data_count.ga;
            //            var ga_zz = ga / 6 / 150;
            //            ga = parseInt(ga - ga / 6);
            //
            //            var yl = data_count.yl;
            //            var yl_zz = yl / 6 / 150;
            //            yl = parseInt(yl - yl / 6);
            //
            //            var gongs = data_count.gongs;
            //            var gongs_zz = gongs / 6 / 150;
            //            gongs = parseInt(gongs - gongs / 6);
            //
            //            var gs = data_count.gs;
            //            var gs_zz = gs / 6 / 150;
            //            gs = parseInt(gs - gs / 6);
            //
            //            var sb = data_count.sb;
            //            var sb_zz = sb / 6 / 150;
            //            sb = parseInt(sb - sb / 6);
            //            $scope.numRun1 = $(".numberRun1").numberAnimate({num: rh, speed: 1000});
            //            $scope.numRun2 = $(".numberRun2").numberAnimate({num: ga, speed: 1000});
            //            $scope.numRun3 = $(".numberRun3").numberAnimate({num: yl, speed: 1000});
            //            $scope.numRun4 = $(".numberRun4").numberAnimate({num: gongs, speed: 1000});
            //            $scope.numRun5 = $(".numberRun5").numberAnimate({num: gs, speed: 1000});
            //            $scope.numRun6 = $(".numberRun6").numberAnimate({num: sb, speed: 1000});
            //            $(".mt-number-animate-span").css({fontSize:'24px'});
            //            $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
            //            //得到数据之后让背景颜色动起来
            //            if(gongs) {
            //                gongs_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#two").css('z-index', 1);
            //            }
            //            if(ga) {
            //                ga_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#for_").css('z-index',1)
            //            }
            //            if(rh){
            //            rh_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#three").css('z-index',1)
            //            }
            //            if(yl) {
            //                yl_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#one").css('z-index',1)
            //            }
            //            if(gs) {
            //                gs_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#seven").css('z-index',1)
            //            }
            //            if(sb) {
            //                sb_bg.setAttribute("style", "fill:url(#orange_red)");
            //                $("#et").css('z-index',1)
            //
            //
            //            }
            //            var nums1 = rh;
            //            var nums2 = ga;
            //            var nums3 = yl;
            //            var nums4 = gongs;
            //            var nums5 = gs;
            //            var nums6 = sb;
            //            $scope.intv = $interval(function () {
            //                cishu++;
            //                if (cishu >= 150) {
            //                    cishu = 0;
            //                    $.ajax(
            //                        {
            //                            type: 'get',
            //                            url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=1",
            //                            success: function (data) {
            //                                gongs_bg.removeAttribute("style");
            //                                gongs_bg.setAttribute("fill", "#1e3465");
            //                                ga_bg.removeAttribute("style");
            //                                ga_bg.setAttribute("fill", "#1e3465");
            //                                rh_bg.removeAttribute("style");
            //                                rh_bg.setAttribute("fill", "#1e3465");
            //                                yl_bg.removeAttribute("style");
            //                                yl_bg.setAttribute("fill", "#1e3465");
            //                                gs_bg.removeAttribute("style");
            //                                gs_bg.setAttribute("fill", "#1e3465");
            //                                sb_bg.removeAttribute("style");
            //                                sb_bg.setAttribute("fill", "#1e3465");
            //                                data_count = data.root.wbmGrid[0];
            //                                if (data_count.gongs == 0 || data_count.gongs == null) {
            //                                    gongs_bg.removeAttribute("style");
            //                                    gongs_bg.setAttribute("fill", "#1e3465")
            //                                } else {
            //                                    gongs_bg.setAttribute("style", "fill:url(#orange_red)")
            //                                }
            //                                if (data_count.ga == 0 || data_count.ga == null) {
            //                                    ga_bg.removeAttribute("style");
            //                                    ga_bg.setAttribute("fill", "#1e3465");
            //                                } else {
            //                                    ga_bg.setAttribute("style", "fill:url(#orange_red)")
            //                                }
            //                                if (data_count.rh == 0 || data_count.rh == null) {
            //                                    rh_bg.removeAttribute("style");
            //                                    rh_bg.setAttribute("fill", "#1e3465");
            //                                } else {
            //                                    rh_bg.setAttribute("style", "fill:url(#orange_red)")
            //                                }
            //                                if (data_count.yl == 0 || data_count.yl == null) {
            //                                    yl_bg.removeAttribute("style");
            //                                    yl_bg.setAttribute("fill", "#1e3465");
            //                                } else {
            //                                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
            //                                }
            //                                if (data_count.gs == 0 || data_count.gs == null) {
            //                                    gs_bg.removeAttribute("style");
            //                                    gs_bg.setAttribute("fill", "#1e3465");
            //                                } else {
            //                                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
            //                                }
            //                                if (data_count.sb == 0 || data_count.sb == null) {
            //                                    sb_bg.removeAttribute("style");
            //                                    sb_bg.setAttribute("fill", "#1e3465");
            //                                } else {
            //                                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
            //                                }
            //                                rh = data_count.rh;
            //                                rh_zz = rh / 6 / 150;
            //
            //                                ga = data_count.ga;
            //                                ga_zz = ga / 6 / 150;
            //
            //                                yl = data_count.yl;
            //                                yl_zz = yl / 6 / 150;
            //
            //                                gongs = data_count.gongs;
            //                                gongs_zz = gongs / 6 / 150;
            //
            //                                gs = data_count.gs;
            //                                gs_zz = gs / 6 / 150;
            //
            //                                sb = data_count.sb;
            //                                sb_zz = sb / 6 / 150;
            //                            }
            //                        }
            //                    )
            //                }
            //                //nums1 += 500000000;
            //                //nums2 += 500000000;
            //                //nums3 += 500000000;
            //                //nums4 += 500000000;
            //                //nums5 += 500000000;
            //                //nums6 += 500000000;
            //                nums1 += rh_zz;
            //                nums2 += ga_zz;
            //                nums3 += yl_zz;
            //                nums4 += gongs_zz;
            //                nums5 += gs_zz;
            //                nums6 += sb_zz;
            //                if ($scope.numRun1 !== undefined) {
            //                    $scope.numRun1.resetData(parseInt(nums1));
            //                }
            //                if ($scope.numRun2 !== undefined) {
            //                    $scope.numRun2.resetData(parseInt(nums2));
            //                }
            //                if ($scope.numRun3 !== undefined) {
            //                    $scope.numRun3.resetData(parseInt(nums3));
            //                }
            //                if ($scope.numRun4 !== undefined) {
            //                    $scope.numRun4.resetData(parseInt(nums4));
            //                }
            //                if ($scope.numRun5 !== undefined) {
            //                    $scope.numRun5.resetData(parseInt(nums5));
            //                }
            //                if ($scope.numRun6 !== undefined) {
            //                    $scope.numRun6.resetData(parseInt(nums6));
            //                }
            //                $(".mt-number-animate-span").css({fontSize:'24px'});
            //                $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
            //                alertService.unmask();
            //            }, 4000);
            //
            //        },
            //        error: function () {
            //            alertService.unmask();
            //        }
            //    });

            //$scope.post('CxglDtzs2016BLH_selectWbmlw', {tjsj:0,jgsj:600,flag:3})
            $http.get('./data_json/wbmlw/tjsj0jgsj600flag3.json')
                .success(function (data) {
                    console.log("data",data);
                alertService.unmask();
                data_count = JSON.parse(data.data[0].value)[0];
                //data_count ={
                //    ga:"6000000",
                //    gongs:"6000000",
                //    gt:"6000000",
                //    gs:"6000000",
                //    js:"6000000",
                //    sb:"6000000",
                //    rh:"6000000",
                //    yl:"6000000",
                //    hj:"6000000"
                //}
                var rh = data_count.rh;
                    console.log("data_couont",data_count);
                    console.log("rh",rh);
                //人行4s增加的数据;
                    if(rh!=0) {
                        var rh_zz = rh / 6 / 150;
                        rh = parseInt(rh - rh / 6);
                    }
                var ga = data_count.ga;
                    if(ga!=0) {
                        var ga_zz = ga / 6 / 150;
                        ga = parseInt(ga - ga / 6);
                    }
                        var yl = data_count.yl;
                    if(yl!=0) {
                        var yl_zz = yl / 6 / 150;
                        yl = parseInt(yl - yl / 6);
                    }
                var gongs = data_count.gongs;
                    if(gongs!=0) {
                        var gongs_zz = gongs / 6 / 150;
                        gongs = parseInt(gongs - gongs / 6);
                    }
                var gs = data_count.gs;
                    if(gs!=0) {
                        var gs_zz = gs / 6 / 150;
                        gs = parseInt(gs - gs / 6);
                    }
                var sb = data_count.sb;
                    if(sb!=0) {
                        var sb_zz = sb / 6 / 150;
                        sb = parseInt(sb - sb / 6);
                    }
                var gt =data_count.gt;
                    if(gt!=0){
                        var gt_zz = gt/6/150;
                        gt =parseInt(gt-gt/6);
                    }
                $scope.numRun1 = $(".numberRun1").numberAnimate({num: rh, speed: 1000});
                $scope.numRun2 = $(".numberRun2").numberAnimate({num: ga, speed: 1000});
                $scope.numRun3 = $(".numberRun3").numberAnimate({num: yl, speed: 1000});
                $scope.numRun4 = $(".numberRun4").numberAnimate({num: gongs, speed: 1000});
                $scope.numRun5 = $(".numberRun5").numberAnimate({num: gs, speed: 1000});
                $scope.numRun6 = $(".numberRun6").numberAnimate({num: sb, speed: 1000});
                $scope.numRun7 = $(".numberRun7").numberAnimate({num: gt, speed: 1000});
                $(".mt-number-animate-span").css({fontSize:'24px'});
                $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
                //得到数据之后让背景颜色动起来
                if(parseFloat(gongs)) {
                    gongs_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#two").css('z-index', 1);
                }
                if(parseFloat(ga)) {
                    ga_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#for_").css('z-index',1)
                }
                if(parseFloat(rh)){
                    rh_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#three").css('z-index',1)
                }
                if(parseFloat(yl)) {
                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#one").css('z-index',1)
                }
                if(parseFloat(gs)) {
                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#seven").css('z-index',1)
                }
                if(parseFloat(sb)) {
                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
                    $("#et").css('z-index',1)
                }
                if(parseFloat(gt)) {
                        gt_bg.setAttribute("style", "fill:url(#orange_red)");
                        $("#et").css('z-index',1)
                    }
                var nums1 = rh;
                var nums2 = ga;
                var nums3 = yl;
                var nums4 = gongs;
                var nums5 = gs;
                var nums6 = sb;
                var nums7 = gt;
                $scope.intv = $interval(function () {
                    console.log(cishu);
                    cishu++;
                    if (cishu >= 150) {
                        cishu = 0;
                        //$.ajax(
                        //    {
                        //        type: 'get',
                        //        url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=1",
                        //        success: function (data) {
                        //            gongs_bg.removeAttribute("style");
                        //            gongs_bg.setAttribute("fill", "#1e3465");
                        //            ga_bg.removeAttribute("style");
                        //            ga_bg.setAttribute("fill", "#1e3465");
                        //            rh_bg.removeAttribute("style");
                        //            rh_bg.setAttribute("fill", "#1e3465");
                        //            yl_bg.removeAttribute("style");
                        //            yl_bg.setAttribute("fill", "#1e3465");
                        //            gs_bg.removeAttribute("style");
                        //            gs_bg.setAttribute("fill", "#1e3465");
                        //            sb_bg.removeAttribute("style");
                        //            sb_bg.setAttribute("fill", "#1e3465");
                        //            data_count = data.root.wbmGrid[0];
                        //            if (data_count.gongs == 0 || data_count.gongs == null) {
                        //                gongs_bg.removeAttribute("style");
                        //                gongs_bg.setAttribute("fill", "#1e3465")
                        //            } else {
                        //                gongs_bg.setAttribute("style", "fill:url(#orange_red)")
                        //            }
                        //            if (data_count.ga == 0 || data_count.ga == null) {
                        //                ga_bg.removeAttribute("style");
                        //                ga_bg.setAttribute("fill", "#1e3465");
                        //            } else {
                        //                ga_bg.setAttribute("style", "fill:url(#orange_red)")
                        //            }
                        //            if (data_count.rh == 0 || data_count.rh == null) {
                        //                rh_bg.removeAttribute("style");
                        //                rh_bg.setAttribute("fill", "#1e3465");
                        //            } else {
                        //                rh_bg.setAttribute("style", "fill:url(#orange_red)")
                        //            }
                        //            if (data_count.yl == 0 || data_count.yl == null) {
                        //                yl_bg.removeAttribute("style");
                        //                yl_bg.setAttribute("fill", "#1e3465");
                        //            } else {
                        //                yl_bg.setAttribute("style", "fill:url(#orange_red)");
                        //            }
                        //            if (data_count.gs == 0 || data_count.gs == null) {
                        //                gs_bg.removeAttribute("style");
                        //                gs_bg.setAttribute("fill", "#1e3465");
                        //            } else {
                        //                gs_bg.setAttribute("style", "fill:url(#orange_red)");
                        //            }
                        //            if (data_count.sb == 0 || data_count.sb == null) {
                        //                sb_bg.removeAttribute("style");
                        //                sb_bg.setAttribute("fill", "#1e3465");
                        //            } else {
                        //                sb_bg.setAttribute("style", "fill:url(#orange_red)");
                        //            }
                        //            rh = data_count.rh;
                        //            rh_zz = rh / 6 / 150;
                        //
                        //            ga = data_count.ga;
                        //            ga_zz = ga / 6 / 150;
                        //
                        //            yl = data_count.yl;
                        //            yl_zz = yl / 6 / 150;
                        //
                        //            gongs = data_count.gongs;
                        //            gongs_zz = gongs / 6 / 150;
                        //
                        //            gs = data_count.gs;
                        //            gs_zz = gs / 6 / 150;
                        //
                        //            sb = data_count.sb;
                        //            sb_zz = sb / 6 / 150;
                        //        }
                        //    }
                        //)
                        //$scope.post('CxglDtzs2016BLH_selectWbmlw', {tjsj:0,jgsj:600,flag:1})
                        $http.get('./data_json/wbmlw/tjsj0jgsj600flag1.json')
                            .success(function (data) {
                                gongs_bg.removeAttribute("style");
                                gongs_bg.setAttribute("fill", "#1e3465");
                                ga_bg.removeAttribute("style");
                                ga_bg.setAttribute("fill", "#1e3465");
                                rh_bg.removeAttribute("style");
                                rh_bg.setAttribute("fill", "#1e3465");
                                yl_bg.removeAttribute("style");
                                yl_bg.setAttribute("fill", "#1e3465");
                                gs_bg.removeAttribute("style");
                                gs_bg.setAttribute("fill", "#1e3465");
                                sb_bg.removeAttribute("style");
                                sb_bg.setAttribute("fill", "#1e3465");
                                gt_bg.removeAttribute("style");
                                gt_bg.setAttribute("fill", "#1e3465");
                                data_count = JSON.parse(data.data[0].value)[0];
                                if (data_count.gongs == 0 || data_count.gongs == null) {
                                    gongs_bg.removeAttribute("style");
                                    gongs_bg.setAttribute("fill", "#1e3465")
                                } else {
                                    gongs_bg.setAttribute("style", "fill:url(#orange_red)")
                                }
                                if (data_count.ga == 0 || data_count.ga == null) {
                                    ga_bg.removeAttribute("style");
                                    ga_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    ga_bg.setAttribute("style", "fill:url(#orange_red)")
                                }
                                if (data_count.rh == 0 || data_count.rh == null) {
                                    rh_bg.removeAttribute("style");
                                    rh_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    rh_bg.setAttribute("style", "fill:url(#orange_red)")
                                }
                                if (data_count.yl == 0 || data_count.yl == null) {
                                    yl_bg.removeAttribute("style");
                                    yl_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
                                }
                                if (data_count.gs == 0 || data_count.gs == null) {
                                    gs_bg.removeAttribute("style");
                                    gs_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
                                }
                                if (data_count.sb == 0 || data_count.sb == null) {
                                    sb_bg.removeAttribute("style");
                                    sb_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
                                }
                                if (data_count.gt == 0 || data_count.gt == null) {
                                    gt_bg.removeAttribute("style");
                                    gt_bg.setAttribute("fill", "#1e3465");
                                } else {
                                    gt_bg.setAttribute("style", "fill:url(#orange_red)");
                                }
                                rh = data_count.rh;
                                rh_zz = rh / 6 / 150;

                                ga = data_count.ga;
                                ga_zz = ga / 6 / 150;

                                yl = data_count.yl;
                                yl_zz = yl / 6 / 150;

                                gongs = data_count.gongs;
                                gongs_zz = gongs / 6 / 150;

                                gs = data_count.gs;
                                gs_zz = gs / 6 / 150;

                                sb = data_count.sb;
                                sb_zz = sb / 6 / 150;

                                gt = data_count.gt;
                                gt_zz = gt / 6 / 150;
                            })

                    }
                    //nums1 += 500000000;
                    //nums2 += 500000000;
                    //nums3 += 500000000;
                    //nums4 += 500000000;
                    //nums5 += 500000000;
                    //nums6 += 500000000;
                    nums1 += rh_zz;
                    nums2 += ga_zz;
                    nums3 += yl_zz;
                    nums4 += gongs_zz;
                    nums5 += gs_zz;
                    nums6 += sb_zz;
                    nums7 += gt_zz;
                    if ($scope.numRun1 !== undefined) {
                        $scope.numRun1.resetData(parseInt(nums1));
                    }
                    if ($scope.numRun2 !== undefined) {
                        $scope.numRun2.resetData(parseInt(nums2));
                    }
                    if ($scope.numRun3 !== undefined) {
                        $scope.numRun3.resetData(parseInt(nums3));
                    }
                    if ($scope.numRun4 !== undefined) {
                        $scope.numRun4.resetData(parseInt(nums4));
                    }
                    if ($scope.numRun5 !== undefined) {
                        $scope.numRun5.resetData(parseInt(nums5));
                    }
                    if ($scope.numRun6 !== undefined) {
                        $scope.numRun6.resetData(parseInt(nums6));
                    }
                    if ($scope.numRun7 !== undefined) {
                        $scope.numRun7.resetData(parseInt(nums7));
                    }
                    $(".mt-number-animate-span").css({fontSize:'24px'});
                    $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
                    alertService.unmask();
                }, 4000);

            }).error(function () {
                    alertService.unmask();
                })

            //});
            // };
            //});
            //背景效果
            //var script = document.createElement("script");
            //script.src = "js/bg/bg_1.js";
            //document.body.appendChild(script);
            //数字滚动
            $scope.$on('$destroy', function () {
                $timeout.cancel($scope.timer0);
                $interval.cancel($scope.timer1);
                $interval.cancel($scope.intv);
            });
        },500)


    }]);