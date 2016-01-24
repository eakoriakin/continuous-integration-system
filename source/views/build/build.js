angular.module('app.views').directive('build', build);

function build() {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        replace: true,
        templateUrl: 'views/build/build.html'
    };
}