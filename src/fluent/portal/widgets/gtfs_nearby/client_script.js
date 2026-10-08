api.controller = function ($scope) {
    var c = this;
    // idle | locating | denied | unavailable | done
    c.geoState = 'idle';

    c.locate = function () {
        if (!navigator.geolocation) {
            c.geoState = 'unavailable';
            return;
        }
        c.geoState = 'locating';
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                $scope.$apply(function () {
                    c.geoState = 'done';
                    c.data.lat = pos.coords.latitude;
                    c.data.lon = pos.coords.longitude;
                    c.data.radius = 1000;
                    // c.server.update() sends c.data (incl. lat/lon/radius) as input.
                    c.server.update();
                });
            },
            function (err) {
                $scope.$apply(function () {
                    c.geoState = (err && err.code === 1) ? 'denied' : 'unavailable';
                });
            }
        );
    };
};
