/**
 * Created by dingtianxiu on 16/5/13.
 */
angular.module('fhysrApp', ['ui.alert'])
    .controller('fhysrCtrl', ["$http", 'alertService', '$scope', function ($http, alertService, $scope) {
        alertService.mask();
        var nf_num = $scope.curYear - 6;
        var tool_nf_num = $scope.curYear - 6;     //保存toolTip的年份2009 200903
        var yue = null;
        var year = null;
        var year_inBar = null;
        var cky = [], zzy = [], dlrq = [], jzy = [], dscy = [], jtys = [], xxcs = [],
            pfhl = [], zshc = [], jry = [], fdcy = [], zphs = [], jmfw = [], jy = [], wssh = [], whty = [], ggg = [], qthy = [],
            yue_501 = [], yue_502 = [], yue_503 = [], yue_504 = [], yue_505 = [], yue_506 = [], yue_507 = [], yue_508 = [], yue_509 = [], yue_510 = [],
            yue_511 = [], yue_512 = [], yue_601 = [], yue_602 = [], yue_603 = [], yue_604 = [], yue_605 = [], yue_606 = [], yue_607 = [];
        var sr_2010 = [], sr_2011 = [], sr_2012 = [], sr_2013 = [], sr_2014 = [], sr_2015 = [], sr_2016 = [],
            dicy_2010 = 0, dicy_2011 = 0, dicy_2012 = 0, dicy_2013 = 0, dicy_2014 = 0, dicy_2015 = 0, dicy_2016 = 0,
            decy_2010 = 0, decy_2011 = 0, decy_2012 = 0, decy_2013 = 0, decy_2014 = 0, decy_2015 = 0, decy_2016 = 0,
            cky_2010 = 0, cky_2011 = 0, cky_2012 = 0, cky_2013 = 0, cky_2014 = 0, cky_2015 = 0, cky_2016 = 0,
            zzy_2010 = 0, zzy_2011 = 0, zzy_2012 = 0, zzy_2013 = 0, zzy_2014 = 0, zzy_2015 = 0, zzy_2016 = 0,
            dlrq_2010 = 0, dlrq_2011 = 0, dlrq_2012 = 0, dlrq_2013 = 0, dlrq_2014 = 0, dlrq_2015 = 0, dlrq_2016 = 0,
            jzy_2010 = 0, jzy_2011 = 0, jzy_2012 = 0, jzy_2013 = 0, jzy_2014 = 0, jzy_2015 = 0, jzy_2016 = 0,
            dscy_2010 = 0, dscy_2011 = 0, dscy_2012 = 0, dscy_2013 = 0, dscy_2014 = 0, dscy_2015 = 0, dscy_2016 = 0,
            jtys_2010 = 0, jtys_2011 = 0, jtys_2012 = 0, jtys_2013 = 0, jtys_2014 = 0, jtys_2015 = 0, jtys_2016 = 0,
            xxcs_2010 = 0, xxcs_2011 = 0, xxcs_2012 = 0, xxcs_2013 = 0, xxcs_2014 = 0, xxcs_2015 = 0, xxcs_2016 = 0,
            pfhl_2010 = 0, pfhl_2011 = 0, pfhl_2012 = 0, pfhl_2013 = 0, pfhl_2014 = 0, pfhl_2015 = 0, pfhl_2016 = 0,
            zshc_2010 = 0, zshc_2011 = 0, zshc_2012 = 0, zshc_2013 = 0, zshc_2014 = 0, zshc_2015 = 0, zshc_2016 = 0,
            jry_2010 = 0, jry_2011 = 0, jry_2012 = 0, jry_2013 = 0, jry_2014 = 0, jry_2015 = 0, jry_2016 = 0,
            fdcy_2010 = 0, fdcy_2011 = 0, fdcy_2012 = 0, fdcy_2013 = 0, fdcy_2014 = 0, fdcy_2015 = 0, fdcy_2016 = 0,
            zphs_2010 = 0, zphs_2011 = 0, zphs_2012 = 0, zphs_2013 = 0, zphs_2014 = 0, zphs_2015 = 0, zphs_2016 = 0,
            jmfw_2010 = 0, jmfw_2011 = 0, jmfw_2012 = 0, jmfw_2013 = 0, jmfw_2014 = 0, jmfw_2015 = 0, jmfw_2016 = 0,
            jy_2010 = 0, jy_2011 = 0, jy_2012 = 0, jy_2013 = 0, jy_2014 = 0, jy_2015 = 0, jy_2016 = 0,
            wssh_2010 = 0, wssh_2011 = 0, wssh_2012 = 0, wssh_2013 = 0, wssh_2014 = 0, wssh_2015 = 0, wssh_2016 = 0,
            whty_2010 = 0, whty_2011 = 0, whty_2012 = 0, whty_2013 = 0, whty_2014 = 0, whty_2015 = 0, whty_2016 = 0,
            ggg_2010 = 0, ggg_2011 = 0, ggg_2012 = 0, ggg_2013 = 0, ggg_2014 = 0, ggg_2015 = 0, ggg_2016 = 0,
            qthy_2010 = 0, qthy_2011 = 0, qthy_2012 = 0, qthy_2013 = 0, qthy_2014 = 0, qthy_2015 = 0, qthy_2016 = 0;
        var zf = {     //各个税收增幅
            fdcy: [],         //b14 房地产业
            zzy: [],          //b5  制造业
            jzy: [],          //b7  建筑业
            pfhlsy: [],       //b11 批发和零售业
            zlhswfwy: [],     //b15 租赁和商务服务也
            jmfwhqtfwy: [],   //b16 居民服务和其他服务业
            jry: [],          //b13 金融业
            ggglhshzz: [],    //b20 公共管理和社会组织
            jtysccjyzy: [],   //b9  交通运输、仓储及邮政业
            jy: [],           //b17 教育
            zshcyy: [],       //b12 住宿和餐饮业
            wsshbxhshfly: [], //b18 卫生、社会保险和社会福利业
            qthy: [],         //b21  其他行业
            xxcsjsjfwhrjy: [],//b10 信息传输、计算机服务和软件业
            dlrqjsdschgy: [], //b6  电力、燃气及水的生产和供应
            whtyhyyl: [],     //b19 文化、体育和娱乐业
            cky: []           //b4  采矿业s

        };
        $scope.yue_obj = {};

        var zf_data = null   //增幅数据;
        //$http.get($scope.URL+"/srlx?ny=201605").success(function (data) {     //返回各个税种 以及编码
        //$scope.post('CxglDtzs2016BLH_selectSrlx', {ny: 201605})
        $http.get('./data_json/fhysr/ny201605.json')
            .success(function (data) {
                console.log("201605", data);
                //$http.get($scope.URL+"/fhysr?qsnf="+($scope.curYear-7)+"&zznf="+$scope.curYear+"&tybm=33&srlx=1")
                //    .success(function (data) {
                //$scope.post('CxglDtzs2016BLH_selectFhysr', {
                //    qsnf: $scope.curYear - 7,
                //    zznf: $scope.curYear,
                //    tybm: 33,
                //    srlx: 1
                //})

                $http.get('./data_json/fhysr/qsnf2010zznf2017tybm33srlx1.json')
                    .success(function (data) {
                        console.log("123",data);
                        data = data.data;
                        console.log("data", data);
                        //$http.get($scope.URL+"/fhysrfy?qsnf="+$scope.curYear+"&zznf="+$scope.curYear+"&tybm=33&srlx=1")
                        //    .success(function (yue_data) {
                        //$scope.post('CxglDtzs2016BLH_selectFhysrfy', {
                        //    qsnf: $scope.curYear,
                        //    zznf: $scope.curYear,
                        //    tybm: 33,
                        //    srlx: 1
                        //})
                        $http.get('./data_json/fhysr/Fy_qsnf2011zznf2017tybm33srlx'+2+'.json')
                            .success(function (yue_data) {
                                console.log("yue_data", yue_data);
                                alertService.unmask();
                                //后台取月份
                                yue_data = JSON.parse(yue_data.data[0].value);
                                $scope.yue_data = [];
                                for (var i = 0; i < yue_data.length; i++) {
                                    $scope.yue_data.push(yue_data[i].jgny);
                                    $scope.yue_obj[yue_data[i].jgny] = []
                                }
                                //console.log("$scope.yue_obj",$scope.yue_obj);
                                // console.log("$scope.yue_data",$scope.yue_data);
                                yue = [];
                                for (var i = 0; i < yue_data.length; i++) {
                                    for (var j = 0; j < $scope.yue_data.length; j++) {
                                        if (yue_data[i].jgny == $scope.yue_data[j]) {
                                            yue.push({
                                                value: (yue_data[i].n1 / 100000000).toFixed(2) - 0
                                            })
                                            $scope.yue_obj[$scope.yue_data[j]].push(
                                                {name: "采矿业", y: fix_2(yue_data[i].n4)},
                                                {name: "制造业", y: fix_2(yue_data[i].n5)},
                                                {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data[i].n6)},
                                                {name: "建筑业", y: fix_2(yue_data[i].n7)},
                                                {name: "交通运输、仓储及邮政业", y: fix_2(yue_data[i].n9)},
                                                {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data[i].n10)},
                                                {name: "批发和零售业", y: fix_2(yue_data[i].n11)},
                                                {name: "住宿和餐饮业", y: fix_2(yue_data[i].n12)},
                                                {name: "金融业", y: fix_2(yue_data[i].n13)},
                                                {name: "房地产业", y: fix_2(yue_data[i].n14)},
                                                {name: "租赁和商务服务业", y: fix_2(yue_data[i].n15)},
                                                {name: "居民服务和其他服务业", y: fix_2(yue_data[i].n16)},
                                                {name: "教育", y: fix_2(yue_data[i].n17)},
                                                {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data[i].n18)},
                                                {name: "文化、体育和娱乐业", y: fix_2(yue_data[i].n19)},
                                                {name: "公共管理和社会组织", y: fix_2(yue_data[i].n20)},
                                                {name: "其他行业", y: fix_2(yue_data[i].n21)}
                                            )
                                        }

                                    }
                                    //    if (yue_data.root[2016][i].jgny == 201501) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_501.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201502) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_502.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201503) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        });
                                    //        yue_503.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201504) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_504.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201505) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_505.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201506) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_506.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201507) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_507.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201508) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_508.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201509) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_509.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201510) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_510.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201511) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_511.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201512) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_512.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201601) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_601.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201602) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_602.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201603) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_603.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201604) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_604.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201605) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_605.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201606) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_606.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    } else if (yue_data.root[2016][i].jgny == 201607) {
                                    //        yue.push({
                                    //            value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                    //        })
                                    //        yue_607.push(
                                    //            {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                    //            {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                    //            {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                    //            {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                    //            {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                    //            {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                    //            {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                    //            {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                    //            {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                    //            {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                    //            {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                    //            {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                    //            {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                    //            {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                    //            {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                    //            {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                    //            {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                    //        );
                                    //    }
                                }
                                for (var i = 0, j = JSON.parse(data[1].value); i < j.length; i++) {
                                    cky_2010 += j[i].n4;
                                    zzy_2010 += j[i].n5;
                                    dlrq_2010 += j[i].n6;
                                    jzy_2010 += j[i].n7;
                                    jtys_2010 += j[i].n9;
                                    xxcs_2010 += j[i].n10;
                                    pfhl_2010 += j[i].n11;
                                    zshc_2010 += j[i].n12;
                                    jry_2010 += j[i].n13;
                                    fdcy_2010 += j[i].n14;
                                    zphs_2010 += j[i].n15;
                                    jmfw_2010 += j[i].n16;
                                    jy_2010 += j[i].n17;
                                    wssh_2010 += j[i].n18;
                                    whty_2010 += j[i].n19;
                                    ggg_2010 += j[i].n20;
                                    qthy_2010 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);

                                }
                                for (var key in zf) {
                                    zf[key][0] = 0
                                }
                                for (var i = 0, j = JSON.parse(data[2].value); i < j.length; i++) {
                                    cky_2011 += j[i].n4;
                                    zzy_2011 += j[i].n5;
                                    dlrq_2011 += j[i].n6;
                                    jzy_2011 += j[i].n7;
                                    jtys_2011 += j[i].n9;
                                    xxcs_2011 += j[i].n10;
                                    pfhl_2011 += j[i].n11;
                                    zshc_2011 += j[i].n12;
                                    jry_2011 += j[i].n13;
                                    fdcy_2011 += j[i].n14;
                                    zphs_2011 += j[i].n15;
                                    jmfw_2011 += j[i].n16;
                                    jy_2011 += j[i].n17;
                                    wssh_2011 += j[i].n18;
                                    whty_2011 += j[i].n19;
                                    ggg_2011 += j[i].n20;
                                    qthy_2011 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                for (var i = 0, j = JSON.parse(data[3].value); i < j.length; i++) {
                                    cky_2012 += j[i].n4;
                                    zzy_2012 += j[i].n5;
                                    dlrq_2012 += j[i].n6;
                                    jzy_2012 += j[i].n7;
                                    jtys_2012 += j[i].n9;
                                    xxcs_2012 += j[i].n10;
                                    pfhl_2012 += j[i].n11;
                                    zshc_2012 += j[i].n12;
                                    jry_2012 += j[i].n13;
                                    fdcy_2012 += j[i].n14;
                                    zphs_2012 += j[i].n15;
                                    jmfw_2012 += j[i].n16;
                                    jy_2012 += j[i].n17;
                                    wssh_2012 += j[i].n18;
                                    whty_2012 += j[i].n19;
                                    ggg_2012 += j[i].n20;
                                    qthy_2012 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                for (var i = 0, j = JSON.parse(data[4].value); i < j.length; i++) {
                                    cky_2013 += j[i].n4;
                                    zzy_2013 += j[i].n5;
                                    dlrq_2013 += j[i].n6;
                                    jzy_2013 += j[i].n7;
                                    jtys_2013 += j[i].n9;
                                    xxcs_2013 += j[i].n10;
                                    pfhl_2013 += j[i].n11;
                                    zshc_2013 += j[i].n12;
                                    jry_2013 += j[i].n13;
                                    fdcy_2013 += j[i].n14;
                                    zphs_2013 += j[i].n15;
                                    jmfw_2013 += j[i].n16;
                                    jy_2013 += j[i].n17;
                                    wssh_2013 += j[i].n18;
                                    whty_2013 += j[i].n19;
                                    ggg_2013 += j[i].n20;
                                    qthy_2013 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                for (var i = 0, j = JSON.parse(data[5].value); i < j.length; i++) {
                                    cky_2014 += j[i].n4;
                                    zzy_2014 += j[i].n5;
                                    dlrq_2014 += j[i].n6;
                                    jzy_2014 += j[i].n7;
                                    jtys_2014 += j[i].n9;
                                    xxcs_2014 += j[i].n10;
                                    pfhl_2014 += j[i].n11;
                                    zshc_2014 += j[i].n12;
                                    jry_2014 += j[i].n13;
                                    fdcy_2014 += j[i].n14;
                                    zphs_2014 += j[i].n15;
                                    jmfw_2014 += j[i].n16;
                                    jy_2014 += j[i].n17;
                                    wssh_2014 += j[i].n18;
                                    whty_2014 += j[i].n19;
                                    ggg_2014 += j[i].n20;
                                    qthy_2014 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                for (var i = 0, j = JSON.parse(data[6].value); i < j.length; i++) {
                                    cky_2015 += j[i].n4;
                                    zzy_2015 += j[i].n5;
                                    dlrq_2015 += j[i].n6;
                                    jzy_2015 += j[i].n7;
                                    jtys_2015 += j[i].n9;
                                    xxcs_2015 += j[i].n10;
                                    pfhl_2015 += j[i].n11;
                                    zshc_2015 += j[i].n12;
                                    jry_2015 += j[i].n13;
                                    fdcy_2015 += j[i].n14;
                                    zphs_2015 += j[i].n15;
                                    jmfw_2015 += j[i].n16;
                                    jy_2015 += j[i].n17;
                                    wssh_2015 += j[i].n18;
                                    whty_2015 += j[i].n19;
                                    ggg_2015 += j[i].n20;
                                    qthy_2015 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                for (var i = 0, j = JSON.parse(data[7].value); i < j.length; i++) {
                                    cky_2016 += j[i].n4;
                                    zzy_2016 += j[i].n5;
                                    dlrq_2016 += j[i].n6;
                                    jzy_2016 += j[i].n7;
                                    jtys_2016 += j[i].n9;
                                    xxcs_2016 += j[i].n10;
                                    pfhl_2016 += j[i].n11;
                                    zshc_2016 += j[i].n12;
                                    jry_2016 += j[i].n13;
                                    fdcy_2016 += j[i].n14;
                                    zphs_2016 += j[i].n15;
                                    jmfw_2016 += j[i].n16;
                                    jy_2016 += j[i].n17;
                                    wssh_2016 += j[i].n18;
                                    whty_2016 += j[i].n19;
                                    ggg_2016 += j[i].n20;
                                    qthy_2016 += j[i].n21;
                                    zf.fdcy.push(j[i].b14);
                                    zf.zzy.push(j[i].b5);
                                    zf.jzy.push(j[i].b7);
                                    zf.pfhlsy.push(j[i].b11);
                                    zf.zlhswfwy.push(j[i].b15);
                                    zf.jmfwhqtfwy.push(j[i].b16);
                                    zf.jry.push(j[i].b13);
                                    zf.ggglhshzz.push(j[i].b20);
                                    zf.jtysccjyzy.push(j[i].b9);
                                    zf.jy.push(j[i].b17);
                                    zf.zshcyy.push(j[i].b12);
                                    zf.wsshbxhshfly.push(j[i].b18);
                                    zf.qthy.push(j[i].b21);
                                    zf.xxcsjsjfwhrjy.push(j[i].b10);
                                    zf.dlrqjsdschgy.push(j[i].b6);
                                    zf.whtyhyyl.push(j[i].b19);
                                    zf.cky.push(j[i].b4);
                                }
                                //处理增幅的数据
                                for (var k in zf) {
                                    for (var i = 0; i < zf[k].length; i++) {
                                        zf[k][i] = parseInt(zf[k][i] * 100);
                                    }
                                }
                                zf_data = zf.cky;
                                cky.push({y: parseFloat((cky_2010 / 100000000).toFixed(2))}, {y: parseFloat((cky_2011 / 100000000).toFixed(2))}, {y: parseFloat((cky_2012 / 100000000).toFixed(2))}, {y: parseFloat((cky_2013 / 100000000).toFixed(2))}, {y: parseFloat((cky_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((cky_2015 / 100000000).toFixed(2))}, {y: parseFloat((cky_2016 / 100000000).toFixed(2))}
                                );
                                zzy.push({y: parseFloat((zzy_2010 / 100000000).toFixed(2))}, {y: parseFloat((zzy_2011 / 100000000).toFixed(2))}, {y: parseFloat((zzy_2012 / 100000000).toFixed(2))}, {y: parseFloat((zzy_2013 / 100000000).toFixed(2))}, {y: parseFloat((zzy_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((zzy_2015 / 100000000).toFixed(2))}, {y: parseFloat((zzy_2016 / 100000000).toFixed(2))}
                                );
                                dlrq.push({y: parseFloat((dlrq_2010 / 100000000).toFixed(2))}, {y: parseFloat((dlrq_2011 / 100000000).toFixed(2))}, {y: parseFloat((dlrq_2012 / 100000000).toFixed(2))}, {y: parseFloat((dlrq_2013 / 100000000).toFixed(2))}, {y: parseFloat((dlrq_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((dlrq_2015 / 100000000).toFixed(2))}, {y: parseFloat((dlrq_2016 / 100000000).toFixed(2))}
                                );
                                jzy.push({y: parseFloat((jzy_2010 / 100000000).toFixed(2))}, {y: parseFloat((jzy_2011 / 100000000).toFixed(2))}, {y: parseFloat((jzy_2012 / 100000000).toFixed(2))}, {y: parseFloat((jzy_2013 / 100000000).toFixed(2))}, {y: parseFloat((jzy_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((jzy_2015 / 100000000).toFixed(2))}, {y: parseFloat((jzy_2016 / 100000000).toFixed(2))}
                                );
                                jtys.push({y: parseFloat((jtys_2010 / 100000000).toFixed(2))}, {y: parseFloat((jtys_2011 / 100000000).toFixed(2))}, {y: parseFloat((jtys_2012 / 100000000).toFixed(2))}, {y: parseFloat((jtys_2013 / 100000000).toFixed(2))}, {y: parseFloat((jtys_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((jtys_2015 / 100000000).toFixed(2))}, {y: parseFloat((jtys_2016 / 100000000).toFixed(2))}
                                );
                                xxcs.push({y: parseFloat((xxcs_2010 / 100000000).toFixed(2))}, {y: parseFloat((xxcs_2011 / 100000000).toFixed(2))}, {y: parseFloat((xxcs_2012 / 100000000).toFixed(2))}, {y: parseFloat((xxcs_2013 / 100000000).toFixed(2))}, {y: parseFloat((xxcs_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((xxcs_2015 / 100000000).toFixed(2))}, {y: parseFloat((xxcs_2016 / 100000000).toFixed(2))}
                                );
                                pfhl.push({y: parseFloat((pfhl_2010 / 100000000).toFixed(2))}, {y: parseFloat((pfhl_2011 / 100000000).toFixed(2))}, {y: parseFloat((pfhl_2012 / 100000000).toFixed(2))}, {y: parseFloat((pfhl_2013 / 100000000).toFixed(2))}, {y: parseFloat((pfhl_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((pfhl_2015 / 100000000).toFixed(2))}, {y: parseFloat((pfhl_2016 / 100000000).toFixed(2))}
                                );
                                zshc.push({y: parseFloat((zshc_2010 / 100000000).toFixed(2))}, {y: parseFloat((zshc_2011 / 100000000).toFixed(2))}, {y: parseFloat((zshc_2012 / 100000000).toFixed(2))}, {y: parseFloat((zshc_2013 / 100000000).toFixed(2))}, {y: parseFloat((zshc_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((zshc_2015 / 100000000).toFixed(2))}, {y: parseFloat((zshc_2016 / 100000000).toFixed(2))}
                                );
                                jry.push(
                                    {y: parseFloat((jry_2010 / 100000000).toFixed(2))}, {y: parseFloat((jry_2011 / 100000000).toFixed(2))}, {y: parseFloat((jry_2012 / 100000000).toFixed(2))}, {y: parseFloat((jry_2013 / 100000000).toFixed(2))}, {y: parseFloat((jry_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((jry_2015 / 100000000).toFixed(2))}, {y: parseFloat((jry_2016 / 100000000).toFixed(2))}
                                );
                                fdcy.push(
                                    {y: parseFloat((fdcy_2010 / 100000000).toFixed(2))}, {y: parseFloat((fdcy_2011 / 100000000).toFixed(2))}, {y: parseFloat((fdcy_2012 / 100000000).toFixed(2))}, {y: parseFloat((fdcy_2013 / 100000000).toFixed(2))}, {y: parseFloat((fdcy_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((fdcy_2015 / 100000000).toFixed(2))}, {y: parseFloat((fdcy_2016 / 100000000).toFixed(2))}
                                );
                                zphs.push(
                                    {y: parseFloat((zphs_2010 / 100000000).toFixed(2))}, {y: parseFloat((zphs_2011 / 100000000).toFixed(2))}, {y: parseFloat((zphs_2012 / 100000000).toFixed(2))}, {y: parseFloat((zphs_2013 / 100000000).toFixed(2))}, {y: parseFloat((zphs_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((zphs_2015 / 100000000).toFixed(2))}, {y: parseFloat((zphs_2016 / 100000000).toFixed(2))}
                                );
                                jmfw.push(
                                    {y: parseFloat((jmfw_2010 / 100000000).toFixed(2))}, {y: parseFloat((jmfw_2011 / 100000000).toFixed(2))}, {y: parseFloat((jmfw_2012 / 100000000).toFixed(2))}, {y: parseFloat((jmfw_2013 / 100000000).toFixed(2))}, {y: parseFloat((jmfw_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((jmfw_2015 / 100000000).toFixed(2))}, {y: parseFloat((jmfw_2016 / 100000000).toFixed(2))}
                                );
                                jy.push(
                                    {y: parseFloat((jy_2010 / 100000000).toFixed(2))}, {y: parseFloat((jy_2011 / 100000000).toFixed(2))}, {y: parseFloat((jy_2012 / 100000000).toFixed(2))}, {y: parseFloat((jy_2013 / 100000000).toFixed(2))}, {y: parseFloat((jy_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((jy_2015 / 100000000).toFixed(2))}, {y: parseFloat((jy_2016 / 100000000).toFixed(2))}
                                );
                                wssh.push(
                                    {y: parseFloat((wssh_2010 / 100000000).toFixed(2))}, {y: parseFloat((wssh_2011 / 100000000).toFixed(2))}, {y: parseFloat((wssh_2012 / 100000000).toFixed(2))}, {y: parseFloat((wssh_2013 / 100000000).toFixed(2))}, {y: parseFloat((wssh_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((wssh_2015 / 100000000).toFixed(2))}, {y: parseFloat((wssh_2016 / 100000000).toFixed(2))}
                                );
                                whty.push(
                                    {y: parseFloat((whty_2010 / 100000000).toFixed(2))}, {y: parseFloat((whty_2011 / 100000000).toFixed(2))}, {y: parseFloat((whty_2012 / 100000000).toFixed(2))}, {y: parseFloat((whty_2013 / 100000000).toFixed(2))}, {y: parseFloat((whty_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((whty_2015 / 100000000).toFixed(2))}, {y: parseFloat((whty_2016 / 100000000).toFixed(2))}
                                );
                                ggg.push(
                                    {y: parseFloat((ggg_2010 / 100000000).toFixed(2))}, {y: parseFloat((ggg_2011 / 100000000).toFixed(2))}, {y: parseFloat((ggg_2012 / 100000000).toFixed(2))}, {y: parseFloat((ggg_2013 / 100000000).toFixed(2))}, {y: parseFloat((ggg_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((ggg_2015 / 100000000).toFixed(2))}, {y: parseFloat((ggg_2016 / 100000000).toFixed(2))}
                                );
                                qthy.push(
                                    {y: parseFloat((qthy_2010 / 100000000).toFixed(2))}, {y: parseFloat((qthy_2011 / 100000000).toFixed(2))}, {y: parseFloat((qthy_2012 / 100000000).toFixed(2))}, {y: parseFloat((qthy_2013 / 100000000).toFixed(2))}, {y: parseFloat((qthy_2014 / 100000000).toFixed(2))},
                                    {y: parseFloat((qthy_2015 / 100000000).toFixed(2))}, {y: parseFloat((qthy_2016 / 100000000).toFixed(2))}
                                );
                                sr_2010.push({name: "采矿业", y: fix_2(cky_2010)}, {name: "制造业", y: fix_2(zzy_2010)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2010)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2010)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2010)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2010)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2010)}, {name: "住宿和餐饮业", y: fix_2(zshc_2010)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2010)
                                    }, {name: "房地产业", y: fix_2(fdcy_2010)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2010)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2010)},
                                    {name: "教育", y: fix_2(jy_2010)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2010)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2010)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2010)}, {name: '其他行业', y: fix_2(qthy_2010)}
                                )
                                sr_2011.push({name: "采矿业", y: fix_2(cky_2011)}, {name: "制造业", y: fix_2(zzy_2011)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2011)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2011)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2011)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2011)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2011)}, {name: "住宿和餐饮业", y: fix_2(zshc_2011)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2011)
                                    }, {name: "房地产业", y: fix_2(fdcy_2011)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2011)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2011)},
                                    {name: "教育", y: fix_2(jy_2011)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2011)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2011)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2011)}, {name: '其他行业', y: fix_2(qthy_2011)}
                                )
                                sr_2012.push({name: "采矿业", y: fix_2(cky_2012)}, {name: "制造业", y: fix_2(zzy_2012)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2012)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2012)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2012)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2012)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2012)}, {name: "住宿和餐饮业", y: fix_2(zshc_2012)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2012)
                                    }, {name: "房地产业", y: fix_2(fdcy_2012)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2012)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2012)},
                                    {name: "教育", y: fix_2(jy_2012)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2012)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2012)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2012)}, {name: '其他行业', y: fix_2(qthy_2012)}
                                )
                                sr_2013.push({name: "采矿业", y: fix_2(cky_2013)}, {name: "制造业", y: fix_2(zzy_2013)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2013)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2013)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2013)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2013)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2013)}, {name: "住宿和餐饮业", y: fix_2(zshc_2013)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2013)
                                    }, {name: "房地产业", y: fix_2(fdcy_2013)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2013)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2013)},
                                    {name: "教育", y: fix_2(jy_2013)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2013)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2013)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2013)}, {name: '其他行业', y: fix_2(qthy_2013)}
                                )
                                sr_2014.push({name: "采矿业", y: fix_2(cky_2014)}, {name: "制造业", y: fix_2(zzy_2014)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2014)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2014)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2014)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2014)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2014)}, {name: "住宿和餐饮业", y: fix_2(zshc_2014)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2014)
                                    }, {name: "房地产业", y: fix_2(fdcy_2014)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2014)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2014)},
                                    {name: "教育", y: fix_2(jy_2014)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2014)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2014)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2014)}, {name: '其他行业', y: fix_2(qthy_2014)}
                                )
                                sr_2015.push({name: "采矿业", y: fix_2(cky_2015)}, {name: "制造业", y: fix_2(zzy_2015)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2015)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2015)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2015)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2015)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2015)}, {name: "住宿和餐饮业", y: fix_2(zshc_2015)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2015)
                                    }, {name: "房地产业", y: fix_2(fdcy_2015)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2015)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2015)},
                                    {name: "教育", y: fix_2(jy_2015)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2015)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2015)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2015)}, {name: '其他行业', y: fix_2(qthy_2015)}
                                );
                                sr_2016.push({name: "采矿业", y: fix_2(cky_2016)}, {name: "制造业", y: fix_2(zzy_2016)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2016)}, {
                                        name: "建筑业",
                                        y: fix_2(jzy_2016)
                                    }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2016)},
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2016)},
                                    {name: "批发和零售业", y: fix_2(pfhl_2016)}, {name: "住宿和餐饮业", y: fix_2(zshc_2016)}, {
                                        name: "金融业",
                                        y: fix_2(jry_2016)
                                    }, {name: "房地产业", y: fix_2(fdcy_2016)}, {
                                        name: "租凭和商务服务业",
                                        y: fix_2(zphs_2016)
                                    }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2016)},
                                    {name: "教育", y: fix_2(jy_2016)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2016)}, {
                                        name: "文化、体育和娱乐业",
                                        y: fix_2(whty_2016)
                                    }, {name: "公共管理和社会组织", y: fix_2(ggg_2016)}, {name: '其他行业', y: fix_2(qthy_2016)}
                                );
                                console.log("data_nf", data);
                                for (var i = 0; i < data.length; i++) {
                                    if (parseInt(data[i].name) == nf_num) {
                                        data = JSON.parse(data[i].value)
                                    }
                                }

                                //for (var i = 0; i < cky.length; i++) {
                                //    cky[i].color = "#2f7ed8";
                                //}
                                sr_2010.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2011.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2012.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2013.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2014.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2015.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                sr_2016.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_501.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_502.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_503.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_504.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_505.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_506.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_507.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_508.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_509.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_510.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_511.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_512.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_601.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_602.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_603.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_604.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_605.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_606.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                yue_607.sort(function (a, b) {
                                    return b.y - a.y
                                });
                                //cky[nf_num % 10].color = "rgb(200,183,29)";
                                year = cky.concat([]);
                                year_inBar = year.concat([]);
                                var hy = [];
                                var n4 = 0, n5 = 0, n6 = 0, n7 = 0, n9 = 0, n10 = 0, n11 = 0, n12 = 0, n13 = 0, n14 = 0, n15 = 0, n16 = 0, n17 = 0, n18 = 0, n19 = 0, n20 = 0, n21 = 0;
                                for (var i = 0; i < data.length; i++) {
                                    n4 += data[i].n4;
                                    n5 += data[i].n5;
                                    n6 += data[i].n6;
                                    n7 += data[i].n7;
                                    n9 += data[i].n9;
                                    n10 += data[i].n10;
                                    n11 += data[i].n11;
                                    n12 += data[i].n12;
                                    n13 += data[i].n13;
                                    n14 += data[i].n14;
                                    n15 += data[i].n15;
                                    n16 += data[i].n16;
                                    n17 += data[i].n17;
                                    n18 += data[i].n18;
                                    n19 += data[i].n19;
                                    n20 += data[i].n20;
                                    n21 += data[i].n21
                                }
                                hy.push({name: "采矿业", y: fix_2(n4)}, {name: "制造业", y: fix_2(n5)},
                                    {name: "电力、燃气及水的生产和供应", y: fix_2(n6)}, {name: "建筑业", y: fix_2(n7)}, {
                                        name: "交通运输、仓储及邮政业",
                                        y: fix_2(n9)
                                    },
                                    {name: "信息传输、计算机服务和软件业", y: fix_2(n10)}, {name: "批发和零售业", y: fix_2(n11)}, {
                                        name: "住宿和餐饮业",
                                        y: fix_2(n12)
                                    }, {
                                        name: "金融业",
                                        y: fix_2(n13)
                                    },
                                    {name: "房地产业", y: fix_2(n14)}, {name: "租赁和商务服务业", y: fix_2(n15)}, {
                                        name: "居民服务和其他服务业",
                                        y: fix_2(n16)
                                    }, {
                                        name: "教育",
                                        y: fix_2(n17)
                                    }, {name: "卫生、社会保险和社会福利业", y: fix_2(n18)},
                                    {name: "文化、体育和娱乐业", y: fix_2(n19)}, {name: "公共管理和社会组织", y: fix_2(n20)}, {
                                        name: "其他行业",
                                        y: fix_2(n21)
                                    }
                                )
                                hy.sort(function (a, b) {
                                    return b.y - a.y
                                })
                                chartPie = new Highcharts.Chart(option_2 = {
                                    chart: {
                                        type: 'pie',
                                        renderTo: $('.fhysrPie')[0],
                                        backgroundColor: 'rgba(7,36,106,0.0)',
                                        slicedOffset: 150,
                                        margin: 10,
                                        borderWidth: 0,
                                        // size:500,
                                        options3d: {
                                            enabled: true,
                                            alpha: 45,
                                            beta: 0
                                        }
                                    },
                                    colors: [
                                        '#2972ff',
                                        '#8434f8',
                                        '#24bef2',
                                        '#d2ee12',
                                        '#0ad760',
                                        '#2070ae',
                                        "#584db8",
                                        "#018b90",
                                        "#004793",
                                        "#977d49",
                                        "#9c9620",
                                        "#5985ab",
                                        "#75adf2",
                                        "#8e86b6",
                                        "#7ac289"
                                    ],
                                    title: {
                                        text: ''
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: function (e) {
                                            //console.log(nf_num);
                                            var count = 0, zhanbi = null;
                                            for (var i = 0, j = e.chart.series[0].data; i < j.length; i++) {
                                                count += j[i].y
                                            }
                                            zhanbi = ((this.y / count) * 100).toFixed(2);
                                            return '<span style="color: white; font-family: \'方正小标宋简体\'">' + tool_nf_num + '：</span>' + '<span style="color: white; font-family: \'方正小标宋简体\'">' + this.key + '</span><br/>' +
                                                '<span style="color: white; font-family: \'方正小标宋简体\'">收入：</span><span style="color: yellow; font-family: \'Arial\'">' + this.y + '</span><span style="color: white; font-family: \'方正小标宋简体\'"> 亿</span><br>' +
                                                '<span style="color: white; font-family: \'方正小标宋简体\'">占比：</span>' + '<span style="color: yellow; font-family: \'Arial\'">' + zhanbi + '</span>' + '<span style="color:white">%</span>';
                                        },
                                        backgroundColor: 'rgba(35, 65, 103, 0.6)',
                                        style: {
                                            fontSize: '16px',
                                            padding: '10px'
                                        }
                                    },
                                    exporting: {
                                        enabled: false
                                    },
                                    timeline: {
                                        //x:0,//左侧距离
                                        //controlStyle:{
                                        //  normal:{
                                        //    color:'#fff'
                                        //  }
                                        //},
                                        //data : [
                                        //  '2009','2010', '2011', '2012', '2013','2014',
                                        //  { name:'2015', symbol:'emptyStar6', symbolSize:8 },
                                        //],
                                        //autoPlay:true,//自动播放
                                        //label : {
                                        //  textStyle:{
                                        //    color:'#2669ce'
                                        //  },
                                        //  formatter : function(s) {
                                        //    return s.slice(0, 7);
                                        //  }
                                        //}  //无效，可能highcharts没有这种组件
                                    },
                                    plotOptions: {
                                        pie: {
                                            allowPointSelect: true,
                                            cursor: 'pointer',
                                            size: "80%",
                                            depth: 35,
                                            slicedOffset: 40,//改变饼图突出多少
                                            dataLabels: {
                                                softConnector: false,
                                                connectPadding: 0,
                                                enabled: true,
                                                style: {
                                                    color: '#fff',
                                                    fontSize: '16',
                                                    fontFamily: '方正小标宋简体'
                                                },
                                                connectorPadding: 20,
                                                distance: 1,
                                                formatter: function () {
                                                    var k = this.key;
                                                    k = k.length > 3 ? k.substring(0, 3) + "…" : k.substring(0);
                                                    return k;
                                                }
                                            },
                                            //startAngle: 270,
                                            events: {
                                                click: function (e) { //e为点击事件，带有指向当前数据指针
                                                    //console.log(e);
                                                    if (e.point.name == "采矿业") {
                                                        for (var i = 0; i < cky.length; i++) {
                                                            for (var k in cky[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete cky[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < cky.length; i++) {
                                                            cky[i].color = "#2f7ed8";
                                                        }

                                                        cky[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = cky.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.cky;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.cky;
                                                        option.series[0].data = cky.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "制造业") {
                                                        for (var i = 0; i < zzy.length; i++) {
                                                            for (var k in zzy[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete zzy[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < zzy.length; i++) {
                                                            zzy[i].color = "#2f7ed8";
                                                        }
                                                        zzy[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = zzy.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.zzy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.zzy;
                                                        option.series[0].data = zzy.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "电力、燃气及水的生产和供应") {
                                                        for (var i = 0; i < dlrq.length; i++) {
                                                            for (var k in dlrq[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete dlrq[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < dlrq.length; i++) {
                                                            dlrq[i].color = "#2f7ed8";
                                                        }
                                                        dlrq[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = dlrq.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.dlrqjsdschgy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.dlrqjsdschgy;
                                                        option.series[0].data = dlrq.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "建筑业") {
                                                        for (var i = 0; i < jzy.length; i++) {
                                                            for (var k in jzy[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete jzy[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < jzy.length; i++) {
                                                            jzy[i].color = "#2f7ed8";
                                                        }
                                                        jzy[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = jzy.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.jzy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.jzy;
                                                        option.series[0].data = jzy.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "交通运输、仓储及邮政业") {
                                                        for (var i = 0; i < jtys.length; i++) {
                                                            for (var k in jtys[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete jtys[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < jtys.length; i++) {
                                                            jtys[i].color = "#2f7ed8";
                                                        }
                                                        jtys[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = jtys.concat([])
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.jtysccjyzy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.jtysccjyzy;
                                                        option.series[0].data = jtys.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "批发和零售业") {
                                                        for (var i = 0; i < pfhl.length; i++) {
                                                            for (var k in pfhl[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete pfhl[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < pfhl.length; i++) {
                                                            pfhl[i].color = "#2f7ed8";
                                                        }
                                                        pfhl[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = pfhl.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.pfhlsy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.pfhlsy;
                                                        option.series[0].data = pfhl.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "金融业") {
                                                        for (var i = 0; i < jry.length; i++) {
                                                            for (var k in jry[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete jry[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < jry.length; i++) {
                                                            jry[i].color = "#2f7ed8";
                                                        }
                                                        jry[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = jry.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.jry;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.jry;
                                                        option.series[0].data = jry.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "房地产业") {
                                                        //console.log(12);
                                                        for (var i = 0; i < fdcy.length; i++) {
                                                            for (var k in fdcy[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete fdcy[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < fdcy.length; i++) {
                                                            fdcy[i].color = "#2f7ed8";
                                                        }
                                                        fdcy[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = fdcy.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.fdcy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.fdcy;
                                                        option.series[0].data = fdcy.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name.search("商务服务") != -1) {
                                                        //console.log(1);
                                                        for (var i = 0; i < zphs.length; i++) {
                                                            for (var k in zphs[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete zphs[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < zphs.length; i++) {
                                                            zphs[i].color = "#2f7ed8";
                                                        }
                                                        zphs[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = zphs.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.zlhswfwy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        //console.log(zf);
                                                        //console.log(zphs);
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.zlhswfwy;
                                                        option.series[0].data = zphs.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "居民服务和其他服务业") {
                                                        for (var i = 0; i < jmfw.length; i++) {
                                                            for (var k in jmfw[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete jmfw[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < jmfw.length; i++) {
                                                            jmfw[i].color = "#2f7ed8";
                                                        }
                                                        jmfw[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = jmfw.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.jmfwhqtfwy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.jmfwhqtfwy;
                                                        option.series[0].data = jmfw.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "教育") {
                                                        for (var i = 0; i < jy.length; i++) {
                                                            for (var k in jy[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete jy[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < jy.length; i++) {
                                                            jy[i].color = "#2f7ed8";
                                                        }
                                                        jy[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = jy.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.jy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.jy;
                                                        option.series[0].data = jy.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "信息传输、计算机服务和软件业") {
                                                        for (var i = 0; i < xxcs.length; i++) {
                                                            for (var k in xxcs[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete xxcs[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < xxcs.length; i++) {
                                                            xxcs[i].color = "#2f7ed8";
                                                        }
                                                        xxcs[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = xxcs.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.xxcsjsjfwhrjy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.xxcsjsjfwhrjy;
                                                        option.series[0].data = xxcs.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "文化、体育和娱乐业") {
                                                        for (var i = 0; i < whty.length; i++) {
                                                            for (var k in whty[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete whty[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < whty.length; i++) {
                                                            whty[i].color = "#2f7ed8";
                                                        }
                                                        whty[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = whty.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.whtyhyyl;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.whtyhyyl;
                                                        option.series[0].data = whty.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "住宿和餐饮业") {
                                                        for (var i = 0; i < zshc.length; i++) {
                                                            for (var k in zshc[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete zshc[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < zshc.length; i++) {
                                                            zshc[i].color = "#2f7ed8";
                                                        }
                                                        zshc[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = zshc.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.zshcyy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.zshcyy;
                                                        option.series[0].data = zshc.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option);
                                                    } else if (e.point.name == "卫生、社会保险和社会福利业") {
                                                        for (var i = 0; i < wssh.length; i++) {
                                                            for (var k in wssh[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete wssh[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < wssh.length; i++) {
                                                            wssh[i].color = "#2f7ed8";
                                                        }
                                                        wssh[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = wssh.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.wsshbxhshfly;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.wsshbxhshfly;
                                                        option.series[0].data = wssh.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "公共管理和社会组织") {
                                                        for (var i = 0; i < ggg.length; i++) {
                                                            for (var k in ggg[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete ggg[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < ggg.length; i++) {
                                                            ggg[i].color = "#2f7ed8";
                                                        }
                                                        ggg[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = ggg.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.ggglhshzz;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.ggglhshzz;
                                                        option.series[0].data = ggg.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    } else if (e.point.name == "其他行业") {
                                                        for (var i = 0; i < qthy.length; i++) {
                                                            for (var k in qthy[i]) {
                                                                if (!(k == 'y' || k == "color")) {
                                                                    delete qthy[i][k]
                                                                }
                                                            }
                                                        }
                                                        for (var i = 0; i < qthy.length; i++) {
                                                            qthy[i].color = "#2f7ed8";
                                                        }
                                                        qthy[nf_num % 10].color = "rgb(200,183,29)";
                                                        year = qthy.concat([]);
                                                        year_inBar = year.concat([]);
                                                        zf_data = zf.qthy;
                                                        $("#s2").removeClass("s_click");
                                                        $("#s1").addClass("s_click");
                                                        option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                                        option.xAxis.tickInterval = 1;
                                                        option.chart.type = "column";
                                                        option.series[1].data = zf.qthy;
                                                        option.series[0].data = qthy.concat([]);
                                                        option.series[0].type = "column";
                                                        chart = new Highcharts.Chart(option)
                                                    }

                                                }
                                            }
                                        }
                                    },
                                    series: [{
                                        type: 'pie',
                                        name: '收入(元)',
                                        data: hy.concat([])//s2015
                                    }]
                                });
                                chart = new Highcharts.Chart(option = {
                                    //图表的配置
                                    chart: {
                                        backgroundColor: 'rgba(7,36,106,0.0)',
                                        renderTo: $('.fhysrBar')[0],
                                        type: 'column',
                                        margin: 75,
                                        marginTop: 120,
                                        borderWidth: 0,
                                        options3d: {
                                            enabled: true,
                                            alpha: 0,
                                            beta: 0,
                                            depth: 50,
                                            viewDistance: 25
                                        }
                                    },
                                    legend: {
                                        enabled: false
                                    },
                                    exporting: {
                                        enabled: false
                                    },
                                    title: {
                                        text: ''
                                    },
                                    tooltip: {
                                        formatter: function (e) {
                                            console.log("this", this)
                                            console.log("e", e);
                                            if (this.series.symbol && this.x < 3000) {
                                                return '<span style="color: white; font-family: \'方正小标宋简体\'">' + this.x + '年</span><br/>' +
                                                    '<span style="color: yellow; font-family: \'Arial\'">' + this.y + '</span><span style="color: white; font-family: \'方正小标宋简体\'"> %</span>'
                                            }
                                            return this.x < 10000 ? ('<span style="color: white; font-family: \'方正小标宋简体\'">' + this.x + '年</span><br/>' +
                                            '<span style="color: yellow; font-family: \'Arial\'">' + this.y + '</span><span style="color: white; font-family: \'方正小标宋简体\'"> 亿</span>') : ('<span style="color: white; font-family: \'方正小标宋简体\'">' + this.x + '</span><br/><span style="color: yellow; font-family: \'Arial\'">' + this.y + '</span><span style="color: white; font-family: \'方正小标宋简体\'"> 亿</span>')
                                        },
                                        backgroundColor: 'rgba(35, 65, 103, 0.6)',
                                        style: {
                                            fontSize: '16px',
                                            padding: '10px'
                                        }
                                    },
                                    subtitle: {
                                        text: "<span style='color:#fff; font-family: \'方正小标宋简体\''>亿元</span>",
                                        x: -260,
                                        y: 80,
                                        useHTML: true,
                                        style: {
                                            color: '#fff',
                                            fontFamily: '方正小标宋简体',
                                            fontSize: 16
                                        }
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
                                        categories: [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear]
                                    },
                                    yAxis: [{
                                        gridLineColor: 'rgb(38,105,206)',
                                        gridLineWidth: 1,
                                        gridLineDashStyle: 'longdash',
                                        name: "亿元",
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
                                    }, {
                                        gridLineColor: 'rgb(38,105,206)',
                                        gridLineWidth: 1,
                                        gridLineDashStyle: 'longdash',
                                        name: "亿元",
                                        labels: {
                                            align: 'right',
                                            style: {
                                                color: '#fff',
                                                fontSize: '16',
                                                fontFamily: 'Arial'
                                            }
                                        },
                                        opposite: true,
                                        title: {
                                            text: '百分比',
                                            rotation: 0,
                                            align: 'high',
                                            style: {
                                                color: '#fff',
                                                fontFamily: '方正小标宋简体'
                                            },
                                            x: -50,
                                            y: -30

                                        }
                                    }
                                    ],
                                    plotOptions: {

                                        //点击柱状图切换拼图各年份数据
                                        series: {
                                            cursor: 'pointer',
                                            events: {
                                                click: function (e) {
                                                    // chartPie.series[0].setData(choosePieData(e.point.category));
                                                    //设置选中后柱状图选中的颜色

                                                    if (!this.symbol) {
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
                                                    }
                                                    if (e.point.category == $scope.curYear - 6) {
                                                        option_2.series[0].data = sr_2010.concat([]);
                                                        chart = new Highcharts.Chart(option_2)
                                                        nf_num = $scope.curYear - 6;
                                                        tool_nf_num = $scope.curYear - 6;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear - 5) {
                                                        option_2.series[0].data = sr_2011.concat([]);
                                                        chart = new Highcharts.Chart(option_2)
                                                        nf_num = $scope.curYear - 5;
                                                        tool_nf_num = $scope.curYear - 5;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear - 4) {
                                                        option_2.series[0].data = sr_2012.concat([]);
                                                        chart = new Highcharts.Chart(option_2)
                                                        nf_num = $scope.curYear - 4;
                                                        tool_nf_num = $scope.curYear - 4;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear - 3) {
                                                        option_2.series[0].data = sr_2013.concat([]);
                                                        chart = new Highcharts.Chart(option_2);
                                                        nf_num = $scope.curYear - 3;
                                                        tool_nf_num = $scope.curYear - 3;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear - 2) {
                                                        option_2.series[0].data = sr_2014.concat([]);
                                                        chart = new Highcharts.Chart(option_2);
                                                        nf_num = $scope.curYear - 2;
                                                        tool_nf_num = $scope.curYear - 2;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear - 1) {
                                                        option_2.series[0].data = sr_2015.concat([]);
                                                        chart = new Highcharts.Chart(option_2);
                                                        nf_num = $scope.curYear - 1;
                                                        tool_nf_num = $scope.curYear - 1;
                                                        year_inBar = year.concat([])
                                                    } else if (e.point.category == $scope.curYear) {
                                                        option_2.series[0].data = sr_2016.concat([]);
                                                        chart = new Highcharts.Chart(option_2);
                                                        nf_num = $scope.curYear;
                                                        tool_nf_num = $scope.curYear;
                                                        year_inBar = year.concat([])
                                                    }
                                                    for (var i = 0; i < $scope.yue_data.length; i++) {
                                                        if (e.point.category == $scope.yue_data[i]) {
                                                            option_2.series[0].data = $scope.yue_obj[$scope.yue_data[i]].concat([]);
                                                            tool_nf_num = $scope.yue_data[i];
                                                            chart = new Highcharts.Chart(option_2);
                                                        }
                                                    }
                                                    //if (e.point.category == 201501) {
                                                    //    option_2.series[0].data = yue_501.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201502) {
                                                    //    option_2.series[0].data = yue_502.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201503) {
                                                    //    option_2.series[0].data = yue_503.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201504) {
                                                    //    option_2.series[0].data = yue_504.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201505) {
                                                    //    option_2.series[0].data = yue_505.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201506) {
                                                    //    option_2.series[0].data = yue_506.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201507) {
                                                    //    option_2.series[0].data = yue_507.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201508) {
                                                    //    option_2.series[0].data = yue_508.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201509) {
                                                    //    option_2.series[0].data = yue_509.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201510) {
                                                    //    option_2.series[0].data = yue_510.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201511) {
                                                    //    option_2.series[0].data = yue_511.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201512) {
                                                    //    option_2.series[0].data = yue_512.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201601) {
                                                    //    option_2.series[0].data = yue_601.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201602) {
                                                    //    option_2.series[0].data = yue_602.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201603) {
                                                    //    option_2.series[0].data = yue_603.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201604) {
                                                    //    option_2.series[0].data = yue_604.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201605) {
                                                    //    option_2.series[0].data = yue_605.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201606) {
                                                    //    option_2.series[0].data = yue_606.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //} else if (e.point.category == 201607) {
                                                    //    option_2.series[0].data = yue_607.concat([]);
                                                    //    chart = new Highcharts.Chart(option_2);
                                                    //}
                                                }
                                            }
                                        }
                                    },
                                    series: [{
                                        name: ['收入(元)'],
                                        type: 'column',
                                        data: cky.concat([]),
                                        showInLegend: false // 设置为 false 即为不显示在图例中
                                    }, {
                                        yAxis: 1,
                                        type: "line",
                                        data: zf_data,
                                        color: "rgb(249,221,35)",
                                        zIndex: 10000
                                    }
                                        //    {
                                        //        name:['收入(亿元)'],
                                        //        data:linedata,
                                        //        type:'line',
                                        //        color:'#fff'
                                        //    }
                                    ]
                                });
                                $("#s2").click(function () {
                                    //console.log(zf_data);
                                    if (!($(this).hasClass("s_click"))) {
                                        $("#s1").removeClass("s_click")
                                        $(this).addClass("s_click");
                                        var value = [];

                                        for (var i = 0; i < yue.length; i++) {
                                            value.push(yue[i].value);
                                        }
                                        console.log("$scope.yue_data", $scope.yue_data)
                                        console.log("value", value);
                                        //console.log(value);
                                        option.xAxis.categories = $scope.yue_data;
                                        option.series[0].data = value;
                                        option.series[0].type = "line";
                                        option.series[1].data = [];
                                        option.xAxis.tickInterval = 3;
                                        option.chart.type = "line";
                                        chart = new Highcharts.Chart(option)
                                    }
                                });
                                $("#s1").click(function () {
                                    if (!($(this).hasClass("s_click"))) {
                                        for (var i = 0; i < year_inBar.length; i++) {
                                            for (var k in year_inBar[i]) {
                                                if (!(k == 'y' || k == "color")) {
                                                    delete year_inBar[i][k]
                                                }
                                            }
                                        }
                                        //for (var i = 0; i < year_inBar.length; i++) {
                                        //    year_inBar[i].color = "#2f7ed8";
                                        //}
                                        //year_inBar[nf_num % 10].color = "rgb(200,183,29)"
                                        $("#s2").removeClass("s_click");
                                        $(this).addClass("s_click");
                                        categories: option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                        option.xAxis.tickInterval = 1;
                                        option.chart.type = "column";
                                        option.series[0].data = year_inBar.concat([]);
                                        option.series[0].type = "column";
                                        option.series[1].data = zf_data;
                                        chart = new Highcharts.Chart(option);
                                    }

                                })
                            })
                            .error(function () {
                                alertService.unmask();
                            });
                    })
                    .error(function () {
                        alertService.unmask();
                    });
                var ss = [];
                console.log("data_value", data);
                data = JSON.parse(data.data[0].value);
                for (var i = 0; i < data.length; i++) {
                    ss.push((data[i].xmmc).trim())
                }
                var frag = document.createDocumentFragment();
                var select = document.createElement("select");
                select.style.zIndex = 10000000000;
                for (var i = 0; i < ss.length; i++) {
                    var op = document.createElement("option");
                    op.innerHTML = ss[i];
                    select.appendChild(op);
                }
                frag.appendChild(select);
                $(".fhysr").prepend(frag);
                $("select").css({
                    position: "absolute",
                    zIndex: 10,
                    top: "60px",
                    left: "30px",
                    backgroundColor: '#021037',
                    color: '#fff',
                    borderColor: '#021037',
                    fontFamily: 'Arial',
                    fontFamily: '方正小标宋简体'
                });
                $("select").change(function () {
                    alertService.mask();
                    var val = $('select').val();
                    var srlx = null;
                    for (var i = 0; i < ss.length; i++) {
                        if ((data[i].xmmc).trim() == val) {
                            srlx = data[i].xmbm
                        }
                    }
                    //$http.get($scope.URL+"/fhysr?qsnf="+($scope.curYear-6)+"&zznf="+$scope.curYear+"&tybm=33&srlx=" + srlx)
                    //    .success(function (data) {
                    //$scope.post('CxglDtzs2016BLH_selectFhysr', {
                    //    qsnf: $scope.curYear - 6,
                    //    zznf: $scope.curYear,
                    //    tybm: 33,
                    //    srlx: srlx
                    //})
                    $http.get('data_json/fhysr/qsnf2011zznf2017tybm33srlx'+srlx+'.json')
                        .success(function (data) {
                            //$http.get($scope.URL+"/fhysrfy?qsnf="+($scope.curYear-6)+"&zznf="+$scope.curYear+"&tybm=33&srlx=" + srlx).success(function (yue_data) {
                            //$scope.post('CxglDtzs2016BLH_selectFhysrfy', {
                            //    qsnf: $scope.curYear - 6,
                            //    zznf: $scope.curYear,
                            //    tybm: 33,
                            //    srlx: srlx
                            //})
                            $http.get('./data_json/fhysr/Fy_qsnf2011zznf2017tybm33srlx'+srlx+'.json')
                                .success(function (yue_data) {
                                    for (var i = 0, j = yue_data.data; i < j.length; i++) {
                                        if (parseInt(j[i].name) == $scope.curYear) {
                                            yue_data = JSON.parse(j[i].value)
                                        }
                                    }
                                    console.log("yue_data_ang", yue_data);
                                    alertService.unmask();
                                    yue = [];
                                    cky = [], zzy = [], dlrq = [], jzy = [], dscy = [], jtys = [], xxcs = [],
                                        pfhl = [], zshc = [], jry = [], fdcy = [], zphs = [], jmfw = [], jy = [], wssh = [], whty = [], ggg = [], qthy = [],
                                        yue_501 = [], yue_502 = [], yue_503 = [], yue_504 = [], yue_505 = [], yue_506 = [], yue_507 = [], yue_508 = [], yue_509 = [], yue_510 = [],
                                        yue_511 = [], yue_512 = [], yue_601 = [], yue_602 = [], yue_603 = [], yue_604 = [], yue_605 = [], yue_606 = [], yue_607 = [];
                                    sr_2010 = [], sr_2011 = [], sr_2012 = [], sr_2013 = [], sr_2014 = [], sr_2015 = [], sr_2016 = [],
                                        dicy_2010 = 0, dicy_2011 = 0, dicy_2012 = 0, dicy_2013 = 0, dicy_2014 = 0, dicy_2015 = 0, dicy_2016 = 0,
                                        decy_2010 = 0, decy_2011 = 0, decy_2012 = 0, decy_2013 = 0, decy_2014 = 0, decy_2015 = 0, decy_2016 = 0,
                                        cky_2010 = 0, cky_2011 = 0, cky_2012 = 0, cky_2013 = 0, cky_2014 = 0, cky_2015 = 0, cky_2016 = 0,
                                        zzy_2010 = 0, zzy_2011 = 0, zzy_2012 = 0, zzy_2013 = 0, zzy_2014 = 0, zzy_2015 = 0, zzy_2016 = 0,
                                        dlrq_2010 = 0, dlrq_2011 = 0, dlrq_2012 = 0, dlrq_2013 = 0, dlrq_2014 = 0, dlrq_2015 = 0, dlrq_2016 = 0,
                                        jzy_2010 = 0, jzy_2011 = 0, jzy_2012 = 0, jzy_2013 = 0, jzy_2014 = 0, jzy_2015 = 0, jzy_2016 = 0,
                                        dscy_2010 = 0, dscy_2011 = 0, dscy_2012 = 0, dscy_2013 = 0, dscy_2014 = 0, dscy_2015 = 0, dscy_2016 = 0,
                                        jtys_2010 = 0, jtys_2011 = 0, jtys_2012 = 0, jtys_2013 = 0, jtys_2014 = 0, jtys_2015 = 0, jtys_2016 = 0,
                                        xxcs_2010 = 0, xxcs_2011 = 0, xxcs_2012 = 0, xxcs_2013 = 0, xxcs_2014 = 0, xxcs_2015 = 0, xxcs_2016 = 0,
                                        pfhl_2010 = 0, pfhl_2011 = 0, pfhl_2012 = 0, pfhl_2013 = 0, pfhl_2014 = 0, pfhl_2015 = 0, pfhl_2016 = 0,
                                        zshc_2010 = 0, zshc_2011 = 0, zshc_2012 = 0, zshc_2013 = 0, zshc_2014 = 0, zshc_2015 = 0, zshc_2016 = 0,
                                        jry_2010 = 0, jry_2011 = 0, jry_2012 = 0, jry_2013 = 0, jry_2014 = 0, jry_2015 = 0, jry_2016 = 0,
                                        fdcy_2010 = 0, fdcy_2011 = 0, fdcy_2012 = 0, fdcy_2013 = 0, fdcy_2014 = 0, fdcy_2015 = 0, fdcy_2016 = 0,
                                        zphs_2010 = 0, zphs_2011 = 0, zphs_2012 = 0,zphs_2013 = 0,zphs_2014 = 0,zphs_2015 = 0,zphs_2016 = 0,
                                    jmfw_2010 = 0,jmfw_2011 = 0,jmfw_2012 = 0,jmfw_2013 = 0,jmfw_2014 = 0,jmfw_2015 = 0,jmfw_2016 = 0,
                                    jy_2010 = 0,jy_2011 = 0,jy_2012 = 0,jy_2013 = 0,jy_2014 = 0,jy_2015 = 0,jy_2016 = 0,
                                    wssh_2010 = 0,wssh_2011 = 0,wssh_2012 = 0,wssh_2013 = 0,wssh_2014 = 0,wssh_2015 = 0,wssh_2016 = 0,
                                    whty_2010 = 0,whty_2011 = 0,whty_2012 = 0,whty_2013 = 0,whty_2014 = 0,whty_2015 = 0,whty_2016 = 0,
                                    ggg_2010 = 0,ggg_2011 = 0,ggg_2012 = 0,ggg_2013 = 0,ggg_2014 = 0,ggg_2015 = 0,ggg_2016 = 0,
                                    qthy_2010 = 0,qthy_2011 = 0,qthy_2012 = 0,qthy_2013 = 0,qthy_2014 = 0,qthy_2015 = 0,qthy_2016 = 0;
                                    zf = {     //各个税收增幅
                                        fdcy: [],         //b14 房地产业
                                        zzy: [],          //b5  制造业
                                        jzy: [],          //b7  建筑业
                                        pfhlsy: [],       //b11 批发和零售业
                                        zlhswfwy: [],     //b15 租赁和商务服务也
                                        jmfwhqtfwy: [],   //b16 居民服务和其他服务业
                                        jry: [],          //b13 金融业
                                        ggglhshzz: [],    //b20 公共管理和社会组织
                                        jtysccjyzy: [],   //b9  交通运输、仓储及邮政业
                                        jy: [],           //b17 教育
                                        zshcyy: [],       //b12 住宿和餐饮业
                                        wsshbxhshfly: [], //b18 卫生、社会保险和社会福利业
                                        qthy: [],         //b21  其他行业
                                        xxcsjsjfwhrjy: [],//b10 信息传输、计算机服务和软件业
                                        dlrqjsdschgy: [], //b6  电力、燃气及水的生产和供应
                                        whtyhyyl: [],     //b19 文化、体育和娱乐业
                                        cky: []           //b4  采矿业s

                                    }
                                    for (var key in $scope.yue_obj) {
                                        $scope.yue_obj[key] = [];
                                    }
                                    console.log("yue_data", yue_data);
                                    console.log("yue", yue);
                                    for (var i = 0; i < yue_data.length; i++) {
                                        for (var j = 0; j < $scope.yue_data.length; j++) {
                                            if (yue_data[i].jgny == $scope.yue_data[j]) {
                                                yue.push({
                                                    value: (yue_data[i].n1 / 100000000).toFixed(2) - 0
                                                })
                                                $scope.yue_obj[$scope.yue_data[j]].push(
                                                    {name: "采矿业", y: fix_2(yue_data[i].n4)},
                                                    {name: "制造业", y: fix_2(yue_data[i].n5)},
                                                    {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data[i].n6)},
                                                    {name: "建筑业", y: fix_2(yue_data[i].n7)},
                                                    {name: "交通运输、仓储及邮政业", y: fix_2(yue_data[i].n9)},
                                                    {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data[i].n10)},
                                                    {name: "批发和零售业", y: fix_2(yue_data[i].n11)},
                                                    {name: "住宿和餐饮业", y: fix_2(yue_data[i].n12)},
                                                    {name: "金融业", y: fix_2(yue_data[i].n13)},
                                                    {name: "房地产业", y: fix_2(yue_data[i].n14)},
                                                    {name: "租赁和商务服务业", y: fix_2(yue_data[i].n15)},
                                                    {name: "居民服务和其他服务业", y: fix_2(yue_data[i].n16)},
                                                    {name: "教育", y: fix_2(yue_data[i].n17)},
                                                    {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data[i].n18)},
                                                    {name: "文化、体育和娱乐业", y: fix_2(yue_data[i].n19)},
                                                    {name: "公共管理和社会组织", y: fix_2(yue_data[i].n20)},
                                                    {name: "其他行业", y: fix_2(yue_data[i].n21)}
                                                )
                                            }
                                        }
                                        //if (yue_data.root[2016][i].jgny == 201501) {
                                        //    yue.push({
                                        //        key: 201501,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_501.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201502) {
                                        //    yue.push({
                                        //        key: 201502,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_502.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201503) {
                                        //    yue.push({
                                        //        key: 201503,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    });
                                        //    yue_503.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201504) {
                                        //    yue.push({
                                        //        key: 201504,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_504.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201505) {
                                        //    yue.push({
                                        //        key: 201505,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_505.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201506) {
                                        //    yue.push({
                                        //        key: 201506,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_506.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201507) {
                                        //    yue.push({
                                        //        key: 201507,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_507.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201508) {
                                        //    yue.push({
                                        //        key: 201508,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_508.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201509) {
                                        //    yue.push({
                                        //        key: 201509,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_509.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201510) {
                                        //    yue.push({
                                        //        key: 201510,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_510.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201511) {
                                        //    yue.push({
                                        //        key: 201511,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_511.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201512) {
                                        //    yue.push({
                                        //        key: 201512,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_512.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201601) {
                                        //    yue.push({
                                        //        key: 201601,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_601.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201602) {
                                        //    yue.push({
                                        //        key: 201602,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_602.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201603) {
                                        //    yue.push({
                                        //        key: 201603,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_603.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201604) {
                                        //    yue.push({
                                        //        key: 201604,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_604.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201605) {
                                        //    yue.push({
                                        //        key: 201605,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_605.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201606) {
                                        //    yue.push({
                                        //        key: 201606,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_606.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //} else if (yue_data.root[2016][i].jgny == 201607) {
                                        //    yue.push({
                                        //        key: 201607,
                                        //        value: (yue_data.root[2016][i].n1 / 100000000).toFixed(2) - 0
                                        //    })
                                        //    yue_607.push(
                                        //        {name: "采矿业", y: fix_2(yue_data.root[2016][i].n4)},
                                        //        {name: "制造业", y: fix_2(yue_data.root[2016][i].n5)},
                                        //        {name: "电力、燃气及水的生产和供应", y: fix_2(yue_data.root[2016][i].n6)},
                                        //        {name: "建筑业", y: fix_2(yue_data.root[2016][i].n7)},
                                        //        {name: "交通运输、仓储及邮政业", y: fix_2(yue_data.root[2016][i].n9)},
                                        //        {name: "信息传输、计算机服务和软件业", y: fix_2(yue_data.root[2016][i].n10)},
                                        //        {name: "批发和零售业", y: fix_2(yue_data.root[2016][i].n11)},
                                        //        {name: "住宿和餐饮业", y: fix_2(yue_data.root[2016][i].n12)},
                                        //        {name: "金融业", y: fix_2(yue_data.root[2016][i].n13)},
                                        //        {name: "房地产业", y: fix_2(yue_data.root[2016][i].n14)},
                                        //        {name: "租赁和商务服务业", y: fix_2(yue_data.root[2016][i].n15)},
                                        //        {name: "居民服务和其他服务业", y: fix_2(yue_data.root[2016][i].n16)},
                                        //        {name: "教育", y: fix_2(yue_data.root[2016][i].n17)},
                                        //        {name: "卫生、社会保险和社会福利业", y: fix_2(yue_data.root[2016][i].n18)},
                                        //        {name: "文化、体育和娱乐业", y: fix_2(yue_data.root[2016][i].n19)},
                                        //        {name: "公共管理和社会组织", y: fix_2(yue_data.root[2016][i].n20)},
                                        //        {name: "其他行业", y: fix_2(yue_data.root[2016][i].n21)}
                                        //    );
                                        //}
                                    }

                                    for (var i = 0, j = JSON.parse(data.data[0].value); i < j.length; i++) {
                                        cky_2010 += j[i].n4;
                                        zzy_2010 += j[i].n5;
                                        dlrq_2010 += j[i].n6;
                                        jzy_2010 += j[i].n7;
                                        jtys_2010 += j[i].n9;
                                        xxcs_2010 += j[i].n10;
                                        pfhl_2010 += j[i].n11;
                                        zshc_2010 += j[i].n12;
                                        jry_2010 += j[i].n13;
                                        fdcy_2010 += j[i].n14;
                                        zphs_2010 += j[i].n15;
                                        jmfw_2010 += j[i].n16;
                                        jy_2010 += j[i].n17;
                                        wssh_2010 += j[i].n18;
                                        whty_2010 += j[i].n19;
                                        ggg_2010 += j[i].n20;
                                        qthy_2010 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[1].value); i < j.length; i++) {
                                        cky_2011 += j[i].n4;
                                        zzy_2011 += j[i].n5;
                                        dlrq_2011 += j[i].n6;
                                        jzy_2011 += j[i].n7;
                                        jtys_2011 += j[i].n9;
                                        xxcs_2011 += j[i].n10;
                                        pfhl_2011 += j[i].n11;
                                        zshc_2011 += j[i].n12;
                                        jry_2011 += j[i].n13;
                                        fdcy_2011 += j[i].n14;
                                        zphs_2011 += j[i].n15;
                                        jmfw_2011 += j[i].n16;
                                        jy_2011 += j[i].n17;
                                        wssh_2011 += j[i].n18;
                                        whty_2011 += j[i].n19;
                                        ggg_2011 += j[i].n20;
                                        qthy_2011 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[2].value); i < j.length; i++) {
                                        cky_2012 += j[i].n4;
                                        zzy_2012 += j[i].n5;
                                        dlrq_2012 += j[i].n6;
                                        jzy_2012 += j[i].n7;
                                        jtys_2012 += j[i].n9;
                                        xxcs_2012 += j[i].n10;
                                        pfhl_2012 += j[i].n11;
                                        zshc_2012 += j[i].n12;
                                        jry_2012 += j[i].n13;
                                        fdcy_2012 += j[i].n14;
                                        zphs_2012 += j[i].n15;
                                        jmfw_2012 += j[i].n16;
                                        jy_2012 += j[i].n17;
                                        wssh_2012 += j[i].n18;
                                        whty_2012 += j[i].n19;
                                        ggg_2012 += j[i].n20;
                                        qthy_2012 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[3].value); i < j.length; i++) {
                                        cky_2013 += j[i].n4;
                                        zzy_2013 += j[i].n5;
                                        dlrq_2013 += j[i].n6;
                                        jzy_2013 += j[i].n7;
                                        jtys_2013 += j[i].n9;
                                        xxcs_2013 += j[i].n10;
                                        pfhl_2013 += j[i].n11;
                                        zshc_2013 += j[i].n12;
                                        jry_2013 += j[i].n13;
                                        fdcy_2013 += j[i].n14;
                                        zphs_2013 += j[i].n15;
                                        jmfw_2013 += j[i].n16;
                                        jy_2013 += j[i].n17;
                                        wssh_2013 += j[i].n18;
                                        whty_2013 += j[i].n19;
                                        ggg_2013 += j[i].n20;
                                        qthy_2013 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[4].value); i < j.length; i++) {
                                        cky_2014 += j[i].n4;
                                        zzy_2014 += j[i].n5;
                                        dlrq_2014 += j[i].n6;
                                        jzy_2014 += j[i].n7;
                                        jtys_2014 += j[i].n9;
                                        xxcs_2014 += j[i].n10;
                                        pfhl_2014 += j[i].n11;
                                        zshc_2014 += j[i].n12;
                                        jry_2014 += j[i].n13;
                                        fdcy_2014 += j[i].n14;
                                        zphs_2014 += j[i].n15;
                                        jmfw_2014 += j[i].n16;
                                        jy_2014 += j[i].n17;
                                        wssh_2014 += j[i].n18;
                                        whty_2014 += j[i].n19;
                                        ggg_2014 += j[i].n20;
                                        qthy_2014 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[5].value); i < j.length; i++) {
                                        cky_2015 += j[i].n4;
                                        zzy_2015 += j[i].n5;
                                        dlrq_2015 += j[i].n6;
                                        jzy_2015 += j[i].n7;
                                        jtys_2015 += j[i].n9;
                                        xxcs_2015 += j[i].n10;
                                        pfhl_2015 += j[i].n11;
                                        zshc_2015 += j[i].n12;
                                        jry_2015 += j[i].n13;
                                        fdcy_2015 += j[i].n14;
                                        zphs_2015 += j[i].n15;
                                        jmfw_2015 += j[i].n16;
                                        jy_2015 += j[i].n17;
                                        wssh_2015 += j[i].n18;
                                        whty_2015 += j[i].n19;
                                        ggg_2015 += j[i].n20;
                                        qthy_2015 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var i = 0, j = JSON.parse(data.data[6].value); i < j.length; i++) {
                                        cky_2016 += j[i].n4;
                                        zzy_2016 += j[i].n5;
                                        dlrq_2016 += j[i].n6;
                                        jzy_2016 += j[i].n7;
                                        jtys_2016 += j[i].n9;
                                        xxcs_2016 += j[i].n10;
                                        pfhl_2016 += j[i].n11;
                                        zshc_2016 += j[i].n12;
                                        jry_2016 += j[i].n13;
                                        fdcy_2016 += j[i].n14;
                                        zphs_2016 += j[i].n15;
                                        jmfw_2016 += j[i].n16;
                                        jy_2016 += j[i].n17;
                                        wssh_2016 += j[i].n18;
                                        whty_2016 += j[i].n19;
                                        ggg_2016 += j[i].n20;
                                        qthy_2016 += j[i].n21;
                                        zf.fdcy.push(j[i].b14);
                                        zf.zzy.push(j[i].b5);
                                        zf.jzy.push(j[i].b7);
                                        zf.pfhlsy.push(j[i].b11);
                                        zf.zlhswfwy.push(j[i].b15);
                                        zf.jmfwhqtfwy.push(j[i].b16);
                                        zf.jry.push(j[i].b13);
                                        zf.ggglhshzz.push(j[i].b20);
                                        zf.jtysccjyzy.push(j[i].b9);
                                        zf.jy.push(j[i].b17);
                                        zf.zshcyy.push(j[i].b12);
                                        zf.wsshbxhshfly.push(j[i].b18);
                                        zf.qthy.push(j[i].b21);
                                        zf.xxcsjsjfwhrjy.push(j[i].b10);
                                        zf.dlrqjsdschgy.push(j[i].b6);
                                        zf.whtyhyyl.push(j[i].b19);
                                        zf.cky.push(j[i].b4);
                                    }
                                    for (var k in zf) {
                                        for (var i = 0; i < zf[k].length; i++) {
                                            zf[k][i] = parseInt(zf[k][i] * 100);
                                        }
                                    }
                                    cky.push({y: fix_2(cky_2010)}, {y: fix_2(cky_2011)}, {y: fix_2(cky_2012)}, {y: fix_2(cky_2013)}, {y: fix_2(cky_2014)},
                                        {y: fix_2(cky_2015)}, {y: fix_2(cky_2016)}
                                    );
                                    zzy.push({y: fix_2(zzy_2010)}, {y: fix_2(zzy_2011)}, {y: fix_2(zzy_2012)}, {y: fix_2(zzy_2013)}, {y: fix_2(zzy_2014)},
                                        {y: fix_2(zzy_2015)}, {y: fix_2(zzy_2016)}
                                    );
                                    dlrq.push({y: fix_2(dlrq_2010)}, {y: fix_2(dlrq_2011)}, {y: fix_2(dlrq_2012)}, {y: fix_2(dlrq_2013)}, {y: fix_2(dlrq_2014)},
                                        {y: fix_2(dlrq_2015)}, {y: fix_2(dlrq_2016)}
                                    );
                                    jzy.push({y: fix_2(jzy_2010)}, {y: fix_2(jzy_2011)}, {y: fix_2(jzy_2012)}, {y: fix_2(jzy_2013)}, {y: fix_2(jzy_2014)},
                                        {y: fix_2(jzy_2015)}, {y: fix_2(jzy_2016)}
                                    );
                                    jtys.push({y: fix_2(jtys_2010)}, {y: fix_2(jtys_2011)}, {y: fix_2(jtys_2012)}, {y: fix_2(jtys_2013)}, {y: fix_2(jtys_2014)},
                                        {y: fix_2(jtys_2015)}, {y: fix_2(jtys_2016)}
                                    );
                                    xxcs.push({y: fix_2(xxcs_2010)}, {y: fix_2(xxcs_2011)}, {y: fix_2(xxcs_2012)}, {y: fix_2(xxcs_2013)}, {y: fix_2(xxcs_2014)},
                                        {y: fix_2(xxcs_2015)}, {y: fix_2(xxcs_2016)}
                                    );
                                    pfhl.push({y: fix_2(pfhl_2010)}, {y: fix_2(pfhl_2011)}, {y: fix_2(pfhl_2012)}, {y: fix_2(pfhl_2013)}, {y: fix_2(pfhl_2014)},
                                        {y: fix_2(pfhl_2015)}, {y: fix_2(pfhl_2016)}
                                    );

                                    zshc.push({y: fix_2(zshc_2010)}, {y: fix_2(zshc_2011)}, {y: fix_2(zshc_2012)}, {y: fix_2(zshc_2013)}, {y: fix_2(zshc_2014)},
                                        {y: fix_2(zshc_2015)}, {y: fix_2(zshc_2016)}
                                    );
                                    jry.push(
                                        {y: fix_2(jry_2010)}, {y: fix_2(jry_2011)}, {y: fix_2(jry_2012)}, {y: fix_2(jry_2013)}, {y: fix_2(jry_2014)},
                                        {y: fix_2(jry_2015)}, {y: fix_2(jry_2016)}
                                    );
                                    fdcy.push(
                                        {y: fix_2(fdcy_2010)}, {y: fix_2(fdcy_2011)}, {y: fix_2(fdcy_2012)}, {y: fix_2(fdcy_2013)}, {y: fix_2(fdcy_2014)},
                                        {y: fix_2(fdcy_2015)}, {y: fix_2(fdcy_2016)}
                                    );
                                    zphs.push(
                                        {y: fix_2(zphs_2010)}, {y: fix_2(zphs_2011)}, {y: fix_2(zphs_2012)}, {y: fix_2(zphs_2013)}, {y: fix_2(zphs_2014)},
                                        {y: fix_2(zphs_2015)}, {y: fix_2(zphs_2016)}
                                    );
                                    jmfw.push(
                                        {y: fix_2(jmfw_2010)}, {y: fix_2(jmfw_2011)}, {y: fix_2(jmfw_2012)}, {y: fix_2(jmfw_2013)}, {y: fix_2(jmfw_2014)},
                                        {y: fix_2(jmfw_2015)}, {y: fix_2(jmfw_2016)}
                                    );
                                    jy.push(
                                        {y: fix_2(jy_2010)}, {y: fix_2(jy_2011)}, {y: fix_2(jy_2012)}, {y: fix_2(jy_2013)}, {y: fix_2(jy_2014)},
                                        {y: fix_2(jy_2015)}, {y: fix_2(jy_2016)}
                                    );
                                    wssh.push(
                                        {y: fix_2(wssh_2010)}, {y: fix_2(wssh_2011)}, {y: fix_2(wssh_2012)}, {y: fix_2(wssh_2013)}, {y: fix_2(wssh_2014)},
                                        {y: fix_2(wssh_2015)}, {y: fix_2(wssh_2016)}
                                    );
                                    whty.push(
                                        {y: fix_2(whty_2010)}, {y: fix_2(whty_2011)}, {y: fix_2(whty_2012)}, {y: fix_2(whty_2013)}, {y: fix_2(whty_2014)},
                                        {y: fix_2(whty_2015)}, {y: fix_2(whty_2016)}
                                    );
                                    ggg.push(
                                        {y: fix_2(ggg_2010)}, {y: fix_2(ggg_2011)}, {y: fix_2(ggg_2012)}, {y: fix_2(ggg_2013)}, {y: fix_2(ggg_2014)},
                                        {y: fix_2(ggg_2015)}, {y: fix_2(ggg_2016)}
                                    )
                                    qthy.push(
                                        {y: fix_2(qthy_2010)}, {y: fix_2(qthy_2011)}, {y: fix_2(qthy_2012)}, {y: fix_2(qthy_2013)}, {y: fix_2(qthy_2014)},
                                        {y: fix_2(qthy_2015)}, {y: fix_2(qthy_2016)}
                                    );
                                    sr_2010.push({name: "采矿业", y: fix_2(cky_2010)}, {name: "制造业", y: fix_2(zzy_2010)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2010)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2010)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2010)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2010)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2010)}, {name: "住宿和餐饮业", y: fix_2(zshc_2010)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2010)
                                        }, {name: "房地产业", y: fix_2(fdcy_2010)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2010)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2010)},
                                        {name: "教育", y: fix_2(jy_2010)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2010)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2010)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2010)}, {name: "其他行业", y: fix_2(qthy_2010)}
                                    );
                                    sr_2011.push({name: "采矿业", y: fix_2(cky_2011)}, {name: "制造业", y: fix_2(zzy_2011)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2011)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2011)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2011)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2011)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2011)}, {name: "住宿和餐饮业", y: fix_2(zshc_2011)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2011)
                                        }, {name: "房地产业", y: fix_2(fdcy_2011)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2011)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2011)},
                                        {name: "教育", y: fix_2(jy_2011)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2011)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2011)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2011)}, {name: "其他行业", y: fix_2(qthy_2011)}
                                    );
                                    sr_2012.push({name: "采矿业", y: fix_2(cky_2012)}, {name: "制造业", y: fix_2(zzy_2012)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2012)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2012)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2012)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2012)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2012)}, {name: "住宿和餐饮业", y: fix_2(zshc_2012)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2012)
                                        }, {name: "房地产业", y: fix_2(fdcy_2012)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2012)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2012)},
                                        {name: "教育", y: fix_2(jy_2012)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2012)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2012)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2012)}, {name: "其他行业", y: fix_2(qthy_2012)}
                                    );
                                    sr_2013.push({name: "采矿业", y: fix_2(cky_2013)}, {name: "制造业", y: fix_2(zzy_2013)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2013)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2013)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2013)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2013)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2013)}, {name: "住宿和餐饮业", y: fix_2(zshc_2013)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2013)
                                        }, {name: "房地产业", y: fix_2(fdcy_2013)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2013)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2013)},
                                        {name: "教育", y: fix_2(jy_2013)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2013)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2013)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2013)}, {name: "其他行业", y: fix_2(qthy_2013)}
                                    );
                                    sr_2014.push({name: "采矿业", y: fix_2(cky_2014)}, {name: "制造业", y: fix_2(zzy_2014)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2014)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2014)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2014)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2013)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2014)}, {name: "住宿和餐饮业", y: fix_2(zshc_2014)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2014)
                                        }, {name: "房地产业", y: fix_2(fdcy_2014)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2014)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2014)},
                                        {name: "教育", y: fix_2(jy_2014)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2014)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2014)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2014)}, {name: "其他行业", y: fix_2(qthy_2014)}
                                    );
                                    sr_2015.push({name: "采矿业", y: fix_2(cky_2015)}, {name: "制造业", y: fix_2(zzy_2015)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2015)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2015)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2015)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2015)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2015)}, {name: "住宿和餐饮业", y: fix_2(zshc_2015)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2015)
                                        }, {name: "房地产业", y: fix_2(fdcy_2015)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2015)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2015)},
                                        {name: "教育", y: fix_2(jy_2015)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2015)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2015)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2015)}, {name: "其他行业", y: fix_2(qthy_2015)}
                                    );
                                    sr_2016.push({name: "采矿业", y: fix_2(cky_2016)}, {name: "制造业", y: fix_2(zzy_2016)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(dlrq_2016)}, {
                                            name: "建筑业",
                                            y: fix_2(jzy_2016)
                                        }, {name: "交通运输、仓储及邮政业", y: fix_2(jtys_2016)},
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(xxcs_2015)},
                                        {name: "批发和零售业", y: fix_2(pfhl_2016)}, {name: "住宿和餐饮业", y: fix_2(zshc_2016)}, {
                                            name: "金融业",
                                            y: fix_2(jry_2016)
                                        }, {name: "房地产业", y: fix_2(fdcy_2016)}, {
                                            name: "租凭和商务服务业",
                                            y: fix_2(zphs_2016)
                                        }, {name: "居民服务和其他服务业", y: fix_2(jmfw_2016)},
                                        {name: "教育", y: fix_2(jy_2016)}, {name: "卫生、社会保险和社会福利业", y: fix_2(wssh_2016)}, {
                                            name: "文化、体育和娱乐业",
                                            y: fix_2(whty_2015)
                                        }, {name: "公共管理和社会组织", y: fix_2(ggg_2016)}, {name: "其他行业", y: fix_2(qthy_2015)}
                                    );
                                    console.log("http_data", data.data[1]);
                                    for (var i = 0, j = data["data"]; i < j.length; i++) {
                                        if (parseInt(j[i].name) == nf_num) {
                                            data = JSON.parse(j[i].value);
                                        }
                                    }


                                    var hy = [];
                                    var n4 = 0, n5 = 0, n6 = 0, n7 = 0, n9 = 0, n10 = 0, n11 = 0, n12 = 0, n13 = 0, n14 = 0, n15 = 0, n16 = 0, n17 = 0, n18 = 0, n19 = 0, n20 = 0, n21 = 0;
                                    for (var i = 0; i < data.length; i++) {
                                        n4 += data[i].n4;
                                        n5 += data[i].n5;
                                        n6 += data[i].n6;
                                        n7 += data[i].n7;
                                        n9 += data[i].n9;
                                        n10 += data[i].n10;
                                        n11 += data[i].n11;
                                        n12 += data[i].n12;
                                        n13 += data[i].n13;
                                        n14 += data[i].n14;
                                        n15 += data[i].n15;
                                        n16 += data[i].n16;
                                        n17 += data[i].n17;
                                        n18 += data[i].n18;
                                        n19 += data[i].n19;
                                        n20 += data[i].n20;
                                        n21 += data[i].n21
                                    }
                                    hy.push({name: "采矿业", y: fix_2(n4)}, {name: "制造业", y: fix_2(n5)},
                                        {name: "电力、燃气及水的生产和供应", y: fix_2(n6)}, {name: "建筑业", y: fix_2(n7)}, {
                                            name: "交通运输、仓储及邮政业",
                                            y: fix_2(n9)
                                        },
                                        {name: "信息传输、计算机服务和软件业", y: fix_2(n10)}, {name: "批发和零售业", y: fix_2(n11)}, {
                                            name: "住宿和餐饮业",
                                            y: fix_2(n12)
                                        }, {
                                            name: "金融业",
                                            y: fix_2(n13)
                                        },
                                        {name: "房地产业", y: fix_2(n14)}, {name: "租赁和商务服务业", y: fix_2(n15)}, {
                                            name: "居民服务和其他服务业",
                                            y: fix_2(n16)
                                        }, {
                                            name: "教育",
                                            y: fix_2(n17)
                                        }, {name: "卫生、社会保险和社会福利业", y: fix_2(n18)},
                                        {name: "文化、体育和娱乐业", y: fix_2(n19)}, {name: "公共管理和社会组织", y: fix_2(n20)}, {
                                            name: "其他行业",
                                            y: fix_2(n21)
                                        }
                                    );
                                    for (var key in zf) {
                                        zf[key][0] = 0
                                    }
                                    //console.log(zf)
                                    for (var i = 0; i < cky.length; i++) {
                                        cky[i].color = "#2f7ed8"
                                    }
                                    hy.sort(function (a, b) {
                                        return b.y - a.y
                                    })
                                    sr_2010.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2011.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2012.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2013.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2014.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2015.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    sr_2016.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_501.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_502.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_503.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_504.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_505.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_506.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_507.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_508.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_509.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_510.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_511.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_512.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_601.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_602.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_603.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_604.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_605.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_606.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    yue_607.sort(function (a, b) {
                                        return b.y - a.y
                                    });
                                    //cky[nf_num % 10].color = "rgb(200,183,29)";
                                    $("#s2").removeClass("s_click")
                                    $("#s1").addClass("s_click");
                                    option.xAxis.categories = [$scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
                                    // option.xAxis.tickInterval = 1;
                                    option.chart.type = "column";
                                    option.series[1].data = zf.cky;
                                    option.series[0].data = cky.concat([]);
                                    option_2.series[0].data = hy;
                                    option.series[0].type = "column"
                                    chart = new Highcharts.Chart(option);
                                    chartPie = new Highcharts.Chart(option_2);
                                })
                        })
                        .error(function () {
                            alertService.unmask();
                        })
                })
            })
            .error(function () {
                alertService.unmask();
            });

        var nulldata = [];
        var linedata = [];
        linedata.push(parseFloat(s2009[0].value), parseFloat(s2010[0].value), parseFloat(s2011[0].value), parseFloat(s2012[0].value), parseFloat(s2013[0].value), parseFloat(s2014[0].value), parseFloat(s2015[0].y), 783.68)
        nulldata.push(parseFloat(s2009[0].value), parseFloat(s2010[0].value), parseFloat(s2011[0].value), parseFloat(s2012[0].value), parseFloat(s2013[0].value), parseFloat(s2014[0].value), parseFloat(s2015[0].y))
        nulldata.push({'color': 'rgba(25,146,192, 0.3)', 'y': 783.68});
        var zhudata = [409917, 464082, 507123, 466791, 564596, 569835, 571271, {
            'color': 'rgba(25,146,192, 0.3)',
            'y': 671271
        }];
        var zhudata2 = [809917, 5464082, 407123, 366791, 264596, 469835, 271271, {
            'color': 'rgba(25,146,192, 0.3)',
            'y': 671271
        }];
        var zhudata3 = [49917, 46402, 50712, 466791, 56496, 56835, 57271, {
            'color': 'rgba(25,146,192, 0.3)',
            'y': 671271
        }];
        var zhudata4 = [80917, 546482, 47123, 36791, 26496, 46985, 21271, {
            'color': 'rgba(25,146,192, 0.3)',
            'y': 671271
        }];
        var zhudata5 = [40917, 46482, 5023, 4661, 5645, 56985, 57121, {'color': 'rgba(25,146,192, 0.3)', 'y': 671271}];
        var zhudata6 = [402917, 146482, 15023, 24661, 35645, 156985, 257121, {
            'color': 'rgba(25,146,192, 0.3)',
            'y': 671271
        }];

        function choose(n) {
            var viewdata = [];
            for (i = 0; i < s2015.length; i++) {
                if (s2015[i].name == n) {
                    viewdata.push(parseFloat(s2009[i].value), parseFloat(s2010[i].value), parseFloat(s2011[i].value), parseFloat(s2012[i].value), parseFloat(s2013[i].value), parseFloat(s2014[i].value), parseFloat(hh2015[i].value))
                    viewdata.push({'color': 'rgba(25,146,192, 0.3)', 'y': parseFloat(hh2015[i].value * 1.2, 2)});
                    return viewdata
                }
            }
        }

        function chooseLineData(n) {
            var lineViewData = [];
            for (i = 0; i < s2015.length; i++) {
                if (s2015[i].name == n) {
                    lineViewData.push(parseFloat(s2009[i].value), parseFloat(s2010[i].value), parseFloat(s2011[i].value), parseFloat(s2012[i].value), parseFloat(s2013[i].value), parseFloat(s2014[i].value), parseFloat(hh2015[i].value), parseFloat(hh2015[i].value) * 1.2)
                    return lineViewData
                }
            }
        }

        var hs2015 = [];
        for (i = 0; i < s2015.length; i++) {
            hs2015.push([s2015[i].name, parseFloat(s2015[i].y)]);
            hs2015[0].sliced = true;
        }
        //根据柱状图年份取得饼图相应年份数据
        var choosePieData = function (n) {
            var m = "s" + n;
            var data = [];
            //var pieData = [];
            //josn转化为数组
            data.push({y: parseFloat(sjjson[m].gesds, 2), name: '个人所得税'}, {
                    y: parseFloat(sjjson[m].qysds, 2),
                    name: '企业所得税'
                },
                {y: parseFloat(sjjson[m].qs, 2), name: '契税'}, {y: parseFloat(sjjson[m].yys, 2), name: '营业税'}
                , {y: parseFloat(sjjson.s2015.zys, 2), name: '资源税'},
                {y: parseFloat(sjjson.s2015.tdsys, 2), name: '土地使用税'}, {
                    y: parseFloat(sjjson.s2015.cjs, 2),
                    name: '城建税'
                },
                {y: parseFloat(sjjson.s2015.yhs, 2), name: '印花税'}, {
                    y: parseFloat(sjjson.s2015.tdzzs, 2),
                    name: '土地增值税'
                },
                {y: parseFloat(sjjson.s2015.fcs, 2), name: '房产税'}, {y: parseFloat(sjjson.s2015.ccs, 2), name: '车船税'},
                {y: parseFloat(sjjson.s2015.yys1, 2), name: '烟叶税'}, {
                    y: parseFloat(sjjson.s2015.gdzys, 2),
                    name: '耕地占用税'
                },
                {y: parseFloat(sjjson.s2015.gdzctjs, 2), name: '固定资产投资方向调节税'}, {
                    y: parseFloat(sjjson.s2015.qt, 2),
                    name: '其他'
                });
            for (i = 0; i < data.length; i++) {
                data[i].y = parseFloat((data[i].y / 100000000).toFixed(2))
            }
            ////转化为图形要求格式，数组嵌套数组
            //for(var i=0;i<data.length;i++){
            //  pieData.push([data[i].name, parseFloat(data[i].value)]);
            //  }
            return data
        };

        $(function () {

            var series = {
                yAxis: 0,
                name: "默认测点"
            };//这里是关键


            Highcharts.setOptions({
                colors: ['#1F97EE']
            });
            //柱形图

        });
        function fix_2(n) {
            return parseFloat((n / 100000000).toFixed(2))
        }

//添加背景效果
        var script = document.createElement("script");
        script.src = "js/bg/bg_1.js";
        document.body.appendChild(script);
    }])
;
