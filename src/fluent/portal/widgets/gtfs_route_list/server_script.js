(function () {
    data.routes = [];
    data.modes = [];
    data.routePage = 'x_msag_gtfs_schedu_route';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;
    data.routes = svc.getRoutes();

    var LABELS = {
        rail: 'Rail',
        subway: 'Subway',
        tram: 'Tram',
        bus: 'Bus',
        ferry: 'Ferry',
        cable_car: 'Cable car',
        other: 'Other'
    };
    var seen = {};
    for (var i = 0; i < data.routes.length; i++) {
        var m = data.routes[i].mode_group || 'other';
        if (!seen[m]) {
            seen[m] = true;
            data.modes.push({ value: m, label: LABELS[m] || 'Other' });
        }
    }
})();
