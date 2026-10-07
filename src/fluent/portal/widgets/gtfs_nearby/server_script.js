(function () {
    data.stops = [];
    data.stopPage = 'x_msag_gtfs_schedu_stop';
    data.searched = false;

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    if (input && input.lat != null && input.lon != null) {
        data.searched = true;
        data.stops = svc.getNearbyStops(input.lat, input.lon, input.radius);
    }
})();
