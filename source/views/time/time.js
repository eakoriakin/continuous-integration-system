angular.module('app.views').directive('time', time);

function time() {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        replace: true,
        templateUrl: 'views/time/time.html'
    };
}