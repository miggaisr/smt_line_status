exports.stopRefresh = function (page, params) {
    // page.extract('smt_lines_list');
    setInterval(function(data) {
        // page.extract('smt_lines_list');
        var cacheData = data;
        page.extract('smt_lines_list');
            if (cacheData != data){
                page.unlockState()
                .onTimer(2000)
                .lockState();
} else {page.lockState()};

    }, 10000);
}
// setInterval(stopRefresh, 180000);


