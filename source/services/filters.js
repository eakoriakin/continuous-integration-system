angular.module('app.filters')
    // Formats spent time.
    .filter('timeSpent', function (helper) {
        return function (time) {
            time = time || 0;

            return helper.formatTime(time);
        };
    });