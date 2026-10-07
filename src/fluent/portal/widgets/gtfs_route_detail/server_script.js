(function () {
    data.route = null;
    data.trips = [];
    data.routeId = '';
    data.date = '';
    data.direction = '';
    data.stopPage = 'x_msag_gtfs_schedu_stop';
    data.tripPage = 'x_msag_gtfs_schedu_trip';

    var svc = new GtfsPublicService();
    data.hasFeed = svc.getFeedInfo() !== null;

    var routeId = $sp.getParameter('route_id');
    data.routeId = routeId ? routeId + '' : '';

    if (routeId) {
        data.route = svc.getRoute(routeId);

        var date = (input && input.date != null) ? input.date : null;
        var direction = (input && input.direction != null && input.direction !== '') ? input.direction : null;
        data.date = date || '';
        data.direction = (input && input.direction != null) ? input.direction + '' : '';

        if (data.route) {
            data.trips = svc.getRouteTrips(routeId, direction, date);
        }
    }
})();
