(function () {
    data.stop = null;
    data.stopId = '';
    data.routePage = 'x_msag_gtfs_schedu_route';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    var stopId = $sp.getParameter('stop_id');
    data.stopId = stopId ? stopId + '' : '';

    if (stopId) {
        data.stop = svc.getStop(stopId);
    }

    if (data.stop) {
        var WB = { '0': 'No information', '1': 'Possible', '2': 'Not possible' };
        data.stop.wheelchair_text = WB[data.stop.wheelchair_boarding] || 'No information';
    }
})();
