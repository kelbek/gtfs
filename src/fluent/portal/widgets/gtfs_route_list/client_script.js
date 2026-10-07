api.controller = function () {
    var c = this;
    c.selected = {};

    c.matches = function (route) {
        var anySelected = false;
        for (var k in c.selected) {
            if (c.selected[k]) {
                anySelected = true;
                break;
            }
        }
        if (!anySelected) {
            return true;
        }
        return !!c.selected[route.mode_group || 'other'];
    };
};
