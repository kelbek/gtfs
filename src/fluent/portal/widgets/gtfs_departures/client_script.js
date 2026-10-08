api.controller = function () {
    var c = this
    c.date = c.data.date || ''
    c.time = c.data.time || ''

    // AngularJS binds <input type="date"> / type="time" as Date objects. Convert to the
    // plain 'yyyy-MM-dd' string and seconds-of-day the service expects, otherwise the
    // serialized Date (e.g. '2007-01-01T00:00:00.000Z') fails the strict isIsoDate check
    // and the service falls back to "today".
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

    // Blank time → 0 (whole day) so a chosen date shows its full schedule, not just
    // from the current time of day.
    function toSeconds(v) {
        if (!v) return 0
        if (Object.prototype.toString.call(v) === '[object Date]') {
            return v.getHours() * 3600 + v.getMinutes() * 60
        }
        var mt = ('' + v).match(/^(\d{1,2}):(\d{2})/)
        return mt ? parseInt(mt[1], 10) * 3600 + parseInt(mt[2], 10) * 60 : 0
    }

    c.refresh = function () {
        c.data.date = toIsoDate(c.date)
        c.data.timeSec = toSeconds(c.time)
        c.server.update()
    }
}
