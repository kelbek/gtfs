api.controller = function () {
    var c = this;
    c.date = c.data.date || '';
    c.direction = c.data.direction || '';

    c.reload = function () {
        c.data.date = c.date;
        c.data.direction = c.direction;
        c.server.update();
    };
};
