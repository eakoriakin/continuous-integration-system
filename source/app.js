angular.module('app.views', []);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.filters', []);

var app = angular.module('app', [
    'ngRoute',
    'AngularJS.BEM',
    'chart.js',
    'app.views',
    'app.controllers',
    'app.services',
    'app.filters'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'homeController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);