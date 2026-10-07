/**
 * GtfsUtil — pure, stateless helper functions shared by the GTFS import
 * (Work Package 2) and later by GtfsPublicService (WP5).
 *
 * Class Include context: Glide APIs are auto-available, so nothing is imported here.
 * Keep every method side-effect free and deterministic so it can be unit tested with ATF.
 */
var GtfsUtil = Class.create()
GtfsUtil.prototype = {
    initialize: function () {},

    /**
     * Convert a GTFS time string into seconds since the start of the service day.
     * Accepts 'H:MM:SS' and 'HH:MM:SS'. Values beyond 24:00:00 (e.g. '25:10:00')
     * are intentionally allowed and return > 86400. Empty / unparsable → null.
     */
    toSeconds: function (v) {
        if (v === null || v === undefined) return null
        var str = String(v).trim()
        if (str === '') return null
        var p = str.split(':')
        if (p.length !== 3) return null
        var h = parseInt(p[0], 10)
        var m = parseInt(p[1], 10)
        var s = parseInt(p[2], 10)
        if (isNaN(h) || isNaN(m) || isNaN(s)) return null
        return h * 3600 + m * 60 + s
    },

    /**
     * Parse a GTFS date in 'YYYYMMDD' form into the ServiceNow date format 'yyyy-MM-dd'.
     * Returns '' when the value is missing or malformed.
     */
    parseGtfsDate: function (v) {
        if (!v) return ''
        var str = String(v).trim()
        if (!/^\d{8}$/.test(str)) return ''
        return str.substring(0, 4) + '-' + str.substring(4, 6) + '-' + str.substring(6, 8)
    },

    /** GTFS booleans are '1'/'0'. Treat '1' (trimmed) as true, everything else false. */
    gtfsBool: function (v) {
        return String(v == null ? '' : v).trim() === '1'
    },

    /**
     * Normalized search name (Section 6.1). The SAME transformation is applied at
     * import time (stop_name_search) and to the user's query string so they match.
     * 1) lower case  2) ä→ae ö→oe ü→ue ß→ss and strip remaining diacritics
     * 3) punctuation → space, collapse multiple spaces.
     */
    normalizeSearchName: function (name) {
        if (!name) return ''
        var s = String(name).toLowerCase()
        s = s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
        s = this._stripDiacritics(s)
        s = s.replace(/[^a-z0-9]+/g, ' ')
        s = s.replace(/\s+/g, ' ')
        return s.replace(/^ | $/g, '')
    },

    /**
     * Remove common Latin diacritics without relying on String.prototype.normalize
     * (not reliably available in the Rhino engine). Umlauts/ß are handled by the
     * caller before this runs.
     */
    _stripDiacritics: function (s) {
        var map = {
            à: 'a', á: 'a', â: 'a', ã: 'a', å: 'a', ā: 'a', ă: 'a', ą: 'a',
            ç: 'c', ć: 'c', č: 'c',
            è: 'e', é: 'e', ê: 'e', ë: 'e', ē: 'e', ė: 'e', ę: 'e', ě: 'e',
            ì: 'i', í: 'i', î: 'i', ï: 'i', ī: 'i', į: 'i',
            ñ: 'n', ń: 'n',
            ò: 'o', ó: 'o', ô: 'o', õ: 'o', ø: 'o', ō: 'o', ő: 'o',
            ù: 'u', ú: 'u', û: 'u', ū: 'u', ů: 'u', ű: 'u',
            ý: 'y', ÿ: 'y',
            ś: 's', š: 's', ş: 's',
            ź: 'z', ż: 'z', ž: 'z',
            ł: 'l', đ: 'd',
        }
        var out = ''
        for (var i = 0; i < s.length; i++) {
            var ch = s.charAt(i)
            out += map.hasOwnProperty(ch) ? map[ch] : ch
        }
        return out
    },

    /**
     * Map a GTFS route_type (basic 0–12 and the extended 100–1799 ranges) to one of
     * the coarse mode groups used by the portal: rail, subway, tram, bus, ferry,
     * cable_car, other. Unknown values fall back to 'other' (never an error).
     */
    modeGroup: function (routeType) {
        var t = parseInt(routeType, 10)
        if (isNaN(t)) return 'other'

        // Basic types (GTFS reference, route_type 0–12)
        switch (t) {
            case 0: return 'tram'
            case 1: return 'subway'
            case 2: return 'rail'
            case 3: return 'bus'
            case 4: return 'ferry'
            case 5: return 'cable_car' // cable tram
            case 6: return 'cable_car' // aerial lift / gondola
            case 7: return 'cable_car' // funicular
            case 11: return 'bus' // trolleybus
            case 12: return 'rail' // monorail
        }

        // Extended types (hierarchical vehicle types, 100–1799)
        if (t >= 100 && t <= 117) return 'rail'
        if (t >= 200 && t <= 299) return 'bus' // coach services
        if (t >= 400 && t <= 499) return 'subway' // urban railway / metro
        if (t >= 700 && t <= 799) return 'bus'
        if (t >= 800 && t <= 899) return 'bus' // trolleybus
        if (t >= 900 && t <= 999) return 'tram'
        if (t >= 1000 && t <= 1099) return 'ferry' // water transport
        if (t >= 1200 && t <= 1299) return 'ferry'
        if (t >= 1300 && t <= 1399) return 'cable_car' // aerial lift
        if (t >= 1400 && t <= 1499) return 'cable_car' // funicular

        return 'other'
    },

    /** route_color default per spec: FFFFFF when empty. Strips a leading '#'. */
    colorBg: function (v) {
        var c = String(v == null ? '' : v).trim().replace(/^#/, '')
        return c === '' ? 'FFFFFF' : c
    },

    /** route_text_color default per spec: 000000 when empty. Strips a leading '#'. */
    colorFg: function (v) {
        var c = String(v == null ? '' : v).trim().replace(/^#/, '')
        return c === '' ? '000000' : c
    },

    /**
     * Format seconds-since-service-day-midnight as HH:MM. Times >= 24:00:00 wrap to the
     * next calendar day (e.g. 25:10 -> 01:10 with nextDay=true), per Section 6.3.
     * Returns { text, nextDay }.
     */
    formatHhmm: function (sec) {
        if (sec === null || sec === undefined || sec === '') return { text: '', nextDay: false }
        var s = parseInt(sec, 10)
        if (isNaN(s)) return { text: '', nextDay: false }
        var nextDay = s >= 86400
        var wrapped = ((s % 86400) + 86400) % 86400
        var h = Math.floor(wrapped / 3600)
        var m = Math.floor((wrapped % 3600) / 60)
        return { text: this._pad2(h) + ':' + this._pad2(m), nextDay: nextDay }
    },

    _pad2: function (n) {
        return (n < 10 ? '0' : '') + n
    },

    /**
     * WCAG contrast correction for route badges (Section 7.4). Returns a 6-hex text colour
     * (no '#') with at least a 4.5:1 contrast ratio against the background: the requested
     * foreground if it already passes, otherwise black or white — whichever contrasts more.
     */
    contrastColor: function (bgHex, fgHex) {
        var bg = this._parseHex(bgHex, [255, 255, 255])
        var fg = this._parseHex(fgHex, [0, 0, 0])
        if (this._contrastRatio(bg, fg) >= 4.5) return this._toHex(fg)
        var white = [255, 255, 255]
        var black = [0, 0, 0]
        return this._contrastRatio(bg, white) >= this._contrastRatio(bg, black) ? 'FFFFFF' : '000000'
    },

    _parseHex: function (hex, fallback) {
        var s = String(hex == null ? '' : hex)
            .trim()
            .replace(/^#/, '')
        if (/^[0-9a-fA-F]{3}$/.test(s)) {
            s = s.charAt(0) + s.charAt(0) + s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2)
        }
        if (!/^[0-9a-fA-F]{6}$/.test(s)) return fallback
        return [parseInt(s.substr(0, 2), 16), parseInt(s.substr(2, 2), 16), parseInt(s.substr(4, 2), 16)]
    },

    _toHex: function (rgb) {
        function h(n) {
            var x = n.toString(16).toUpperCase()
            return x.length < 2 ? '0' + x : x
        }
        return h(rgb[0]) + h(rgb[1]) + h(rgb[2])
    },

    _relLum: function (rgb) {
        var a = []
        for (var i = 0; i < 3; i++) {
            var c = rgb[i] / 255
            a[i] = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
        }
        return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
    },

    _contrastRatio: function (rgb1, rgb2) {
        var l1 = this._relLum(rgb1)
        var l2 = this._relLum(rgb2)
        var hi = Math.max(l1, l2)
        var lo = Math.min(l1, l2)
        return (hi + 0.05) / (lo + 0.05)
    },

    /**
     * "Now" as { date: 'yyyy-MM-dd', sec: seconds-since-midnight } in the instance/session
     * timezone.
     *
     * LIMITATION (concept 6.3): scoped code cannot convert to an arbitrary agency_timezone —
     * GlideDateTime.setTimeZone is blocked in scope and GlideScheduleDateTime does not shift
     * the wall clock. Defaults therefore use the instance timezone. Run the instance in the
     * agency timezone, or have the portal pass explicit date/time, for exact agency-local
     * defaults. The DST edge at the service-day boundary is a documented known limitation.
     */
    localNow: function () {
        var internal = new GlideDateTime().getDisplayValueInternal() // 'yyyy-MM-dd HH:mm:ss' in session tz
        var parts = String(internal).split(' ')
        var hms = (parts[1] || '00:00:00').split(':')
        var sec = (parseInt(hms[0], 10) || 0) * 3600 + (parseInt(hms[1], 10) || 0) * 60 + (parseInt(hms[2], 10) || 0)
        return { date: parts[0], sec: sec }
    },

    /** Add (possibly negative) whole days to a 'yyyy-MM-dd' date using UTC arithmetic. */
    addDays: function (dateStr, delta) {
        if (!this.isIsoDate(dateStr)) return ''
        var gdt = new GlideDateTime()
        gdt.setValue(dateStr + ' 00:00:00')
        gdt.addDaysUTC(parseInt(delta, 10) || 0)
        return gdt.getDate().getValue()
    },

    /** Strict 'yyyy-MM-dd' validation. */
    isIsoDate: function (s) {
        return /^\d{4}-\d{2}-\d{2}$/.test(String(s == null ? '' : s))
    },

    type: 'GtfsUtil',
}
