angular.module('app').controller('app_smt_lines_list', app_smt_lines_list);
function app_smt_lines_list($scope, app) {
    'use strict';
    app.init($scope, function(){
        app.call('smt_lines_list.stopRefresh')
    });
}
