angular.module('app').controller('app_smt_lines_list', app_smt_lines_list);
function app_smt_lines_list($scope, app) {
    'use strict';
    app.init($scope);
    var now = new Date().getTime();
    lockState();
    while(new Date().getTime() < now + sleepDuration){ 
        /* do nothing */ 
    } 
    unlockState();
}
