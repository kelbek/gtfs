api.controller = function ($timeout) {
    var c = this;
    c.term = c.data.query || '';
    var timer = null;

    c.onInput = function () {
        if (timer) {
            $timeout.cancel(timer);
        }
        timer = $timeout(function () {
            c.data.q = c.term;
            c.server.get({ q: c.term });
        }, 300);
    };
};
