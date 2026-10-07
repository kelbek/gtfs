(function () {
    data.board = { stop: null, departures: [] };
    data.stopId = '';
    data.tripPage = 'x_msag_gtfs_schedu_trip';
    data.date = '';
    data.time = '';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    var stopId = $sp.getParameter('stop_id');
    data.stopId = stopId ? stopId + '' : '';

    var date = (input && input.date != null) ? input.date : $sp.getParameter('date');
    var timeSec = (input && input.timeSec != null) ? input.timeSec : null;
    var routeId = (input && input.routeId != null) ? input.routeId : null;

    data.date = date || '';
    if (input && input.time != null) {
        data.time = input.time + '';
    } else {
        data.time = $sp.getParameter('time') || '';
    }

    if (stopId) {
        data.board = svc.getDepartures(stopId, date, timeSec, 50, routeId);
    }

    var WB = { '0': 'No information', '1': 'Possible', '2': 'Not possible' };
    for (var i = 0; i < data.board.departures.length; i++) {
        var d = data.board.departures[i];
        d.wheelchair_text = WB[d.wheelchair_accessible] || 'No information';
    }
})();
