exports.stopRefresh = function (page, params) {
    page.lockState();
    page.onTimer(10000);
    page.extract('smt_lines_list');
    page.unlockState();
}