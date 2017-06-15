angular.module('ui.alert', [])
    .directive("uicAlert", function () {
        return {
            restrict: "A",
            templateUrl: "./service/alertLink.html",
            replace: false,
            scope: true,
            controller: ["$scope", "alertService", function ($scope, alertService) {
                $scope.mark = alertService.mark;
            }]
        }
    })
    .factory('alertService', ['$rootScope', function ($rootScope) {
        var service = {
            mark: []
        };
        //弹出loading
        service.mask = function (msg) {
            var self = this;
            self.mark[0] = msg;
            $rootScope.cvs = false;
        };
        service.unmask = function () {
            var self = this;
            if(self.mark && self.mark.length > 0) {
                self.mark.splice(0, 1);
            }
            $rootScope.cvs = true;
        };
        return service;
    }]);