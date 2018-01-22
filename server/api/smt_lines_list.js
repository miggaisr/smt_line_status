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

    }, 180000);
}

exports.changeSource = function (page, params) {
    opener.top.location.href='../login.php'
}
// setInterval(stopRefresh, 180000);


