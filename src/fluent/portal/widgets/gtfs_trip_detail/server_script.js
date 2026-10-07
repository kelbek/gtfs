(function () {
    data.trip = null;
    data.tripId = '';
    data.stopPage = 'x_msag_gtfs_schedu_stop';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    var tripId = $sp.getParameter('trip_id');
    data.tripId = tripId ? tripId + '' : '';

    if (tripId) {
        data.trip = svc.getTrip(tripId);
    }

    if (data.trip) {
        var WB = { '0': 'No information', '1': 'Possible', '2': 'Not possible' };
        var BK = { '0': 'No information', '1': 'Allowed', '2': 'Not allowed' };
        data.trip.wheelchair_text = WB[data.trip.wheelchair_accessible] || 'No information';
        data.trip.bikes_text = BK[data.trip.bikes_allowed] || 'No information';
    }
})();
