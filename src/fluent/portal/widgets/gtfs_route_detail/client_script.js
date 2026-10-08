api.controller = function () {
    var c = this
    c.date = c.data.date || ''
    c.direction = c.data.direction || ''

    // AngularJS binds <input type="date"> as a Date object; convert to the plain
    // 'yyyy-MM-dd' string the service expects (a serialized Date fails isIsoDate and the
    // service then falls back to "today", which has no service days).
    function toIsoDate(v) {
        if (!v) return ''
        if (Object.prototype.toString.call(v) === '[object Date]') {
            var y = v.getFullYear()
            var m = ('0' + (v.getMonth() + 1)).slice(-2)
            var d = ('0' + v.getDate()).slice(-2)
            return y + '-' + m + '-' + d
        }
        return ('' + v).substring(0, 10)
    }

    c.reload = function () {
        c.data.date = toIsoDate(c.date)
        c.data.direction = c.direction
        c.server.update()
    }
}
