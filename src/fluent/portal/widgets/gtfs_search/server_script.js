(function () {
    data.results = [];
    data.query = '';
    data.stopPage = 'x_msag_gtfs_schedu_stop';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    if (input && input.q != null) {
        data.query = input.q + '';
        data.results = svc.searchStops(data.query);
    }
})();
