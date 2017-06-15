/**
 * Created by Zhaolq on 2016/6/30.
 */
angular.module('gdpcx',[])
    .controller('gdpcxCtrl',['$scope','$http',function($scope,$http){

        //模拟
        //$scope.gdpData = [
        //    {"SSND":2015,"SSMC":"广东省","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2015,"SSMC":"江苏省","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2014,"SSMC":"山东省","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2014,"SSMC":"浙江省","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2013,"SSMC":"上海市","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2013,"SSMC":"北京市","GDP":72813,"GTAX":8895,"DTAX":6615},
        //    {"SSND":2012,"SSMC":"天津市","GDP":72813,"GTAX":8895,"DTAX":6615}
        //];
        //$scope.yearCheck = function(year){
        //    console.log(year);
        //    $scope.curGdpData = [];
        //    for(var i=0;i<$scope.gdpData.length;i++){
        //        if(data == $scope.gdpData[i].SSND){
        //            $scope.curGdpData.push($scope.gdpData[i]);
        //        }
        //    }
        //    console.log($scope.curGdpData);
        //};

        $scope.yearCheck = function(year){
            $http.get("http://144.16.54.56:8088/dtzs/gt3/gdpsel?ssnd="+year).success(function(data){
                $scope.gdpData = data.root.value;
            }).error(function(){alert("请选择年份")});
        };

        //增加
        $scope.addNew = function(){
            var newObj = {};
            newObj.ssnd = $scope.newSSND;
            newObj.ssmc = $scope.newSSMC;
            newObj.gdp = $scope.newGDP;
            newObj.gtax = $scope.newGTAX;
            newObj.dtax = $scope.newDTAX;
            var ooo=newObj;
            $http.post("http://localhost:8080/dtzs/gt3/gdpins",ooo).success(function(data, status, headers, config){
                console.log(21)
                console.log(data);
                console.log(status)
                $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
                    $scope.gdpData = data.root.value;
                });

            })
        };

        //修改删除
        $scope.cxiabiao = function($index){
            $scope.curGdp = $scope.gdpData[$index];
            $scope.revise = function(){
                var newObj = {};
                newObj.ssnd = $scope.curGdp.ssnd;
                newObj.ssmc = $scope.curGdp.ssmc;
                newObj.gdp = $scope.curGdp.gdp;
                newObj.gtax = $scope.curGdp.gtax;
                newObj.dtax = $scope.curGdp.dtax;
                //for(var j=0;j<$scope.gdpData.length;j++){
                //    if($scope.gdpData[j] == $scope.curGdpData[$index]){
                //        $scope.gdpData[j] = newObj;
                //    }
                //}
                $scope.gdpData[$index] = newObj;
                var ooo=$scope.gdpData[$index];
                console.log(ooo)
                $http.post("http://localhost:8080/dtzs/gt3/gdpupd",ooo).success(function(){
                    $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
                        $scope.gdpData = data.root.value;
                    });
                })
            };
            $scope.remove = function(){
                //for(var k=0;k<$scope.gdpData.length;k++){
                //    if($scope.gdpData[k] == $scope.curGdpData[$index]){
                //        $scope.gdpData.splice(k,1);
                //    }
                //}
                console.log($scope.gdpData[$index])
                $http.get("http://localhost:8080/dtzs/gt3/gdpdel?ssnd="+$scope.gdpData[$index].ssnd+"&ssmc="+$scope.gdpData[$index].ssmc).success(function(data){
                    $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
                        $scope.gdpData = data.root.value;
                    });
                })
                $scope.gdpData.splice($index,1);


            };
        }
    }]);