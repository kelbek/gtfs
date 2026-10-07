function gtfsRouteBadge() {
    var MODE_ICONS = {
        rail: 'fa-train',
        subway: 'fa-subway',
        tram: 'fa-train',
        bus: 'fa-bus',
        ferry: 'fa-ship',
        cable_car: 'fa-train',
        other: 'fa-circle-o'
    };
    var MODE_LABELS = {
        rail: 'Rail',
        subway: 'Subway',
        tram: 'Tram',
        bus: 'Bus',
        ferry: 'Ferry',
        cable_car: 'Cable car',
        other: 'Other'
    };
    return {
        restrict: 'E',
        scope: { route: '=' },
        template:
            '<span class="gtfs-badge" ng-style="{\'background-color\':\'#\'+route.color_bg,\'color\':\'#\'+(route.color_fg_safe||route.color_fg)}">' +
            '<i class="fa" ng-class="iconClass" aria-hidden="true"></i>' +
            '<span ng-bind="route.route_short_name||route.display_name"></span>' +
            '<span class="sr-only"> {{modeLabel}}</span>' +
            '</span>',
        link: function (scope) {
            scope.$watch('route', function (route) {
                var mode = route && route.mode_group ? route.mode_group : 'other';
                scope.iconClass = MODE_ICONS[mode] || MODE_ICONS.other;
                scope.modeLabel = MODE_LABELS[mode] || MODE_LABELS.other;
            });
        }
    };
}
