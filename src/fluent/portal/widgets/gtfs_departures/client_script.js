api.controller = function () {
    var c = this;
    c.date = c.data.date || '';
    c.time = c.data.time || '';

    c.refresh = function () {
        var timeSec = null;
        if (c.time && /^\d{1,2}:\d{2}$/.test(c.time)) {
            var p = c.time.split(':');
            timeSec = (parseInt(p[0], 10) || 0) * 3600 + (parseInt(p[1], 10) || 0) * 60;
        }
        c.data.date = c.date;
        c.data.time = c.time;
        c.data.timeSec = timeSec;
        c.server.update();
    };
};
