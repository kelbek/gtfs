(function () {
    data.compact = options.compact === true || options.compact === 'true';
    data.feed = null;

    var svc = new GtfsPublicService();
    data.feed = svc.getFeedInfo();
})();
