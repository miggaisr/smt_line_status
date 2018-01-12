angular.module('app').controller('app_smt_lines_list', app_smt_lines_list);
function app_smt_lines_list($scope, app) {
    'use strict';
    app.init($scope);

    $scope.sleep = function ( sleepDuration ){
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
    };
    $scope.lockRefresh = function () {
        $scope.sleep(180);
    };
    
}