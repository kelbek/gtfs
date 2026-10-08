api.controller = function ($timeout) {
    var c = this
    c.term = c.data.query || ''
    var timer = null

    c.onInput = function () {
        if (timer) {
            $timeout.cancel(timer)
        }
        timer = $timeout(function () {
            // Assign the query onto c.data and round-trip with update(). c.server.update()
            // reliably sends the whole c.data object to the server as `input`, so the
            // server reads input.q. (c.server.get(payload) was not delivering the payload
            // as input.q in this portal runtime, so the server always saw no query.)
            c.data.q = c.term
            c.server.update()
        }, 300)
    }
}
