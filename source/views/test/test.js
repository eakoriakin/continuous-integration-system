angular.module('app.views').directive('test', test);

function test(eqBem) {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        replace: true,
        templateUrl: 'views/test/test.html',
        link: function (scope, element, attributes, injectables) {
            scope.title = (scope.model.test.type === 'e2e' ? 'E2E' : scope.model.test.type) + ' Test';
            scope.percent = 0;

            // Initialize chart.
            scope.chartLabels = ['Passed', 'Failed'];
            scope.chartColours = ['#1ab394', '#f8ac59'];

            scope.$watch('model', function () {
                var modifiers = {};
                scope.chartData = [scope.model.test.testsPassed, scope.model.test.testsFailed];

                // Calculate percent for passed tests.
                if (scope.model.test.testsPassed + scope.model.test.testsFailed > 0) {
                    scope.percent = Math.round(scope.model.test.testsPassed * 100 / (scope.model.test.testsPassed + scope.model.test.testsFailed));
                }

                // Set status text and CSS classes.
                if (scope.model.test.status === 'failed' || scope.model.run.status() === 'failed') {
                    modifiers.failed = '';
                    scope.statusText = 'Can\'t Run';
                }
                else if (scope.model.test.status === 'running') {
                    modifiers.running = '';
                    scope.statusText = 'Running';
                }
                else if (scope.model.test.status === 'passed') {
                    modifiers.passed = '';
                    scope.statusText = 'Passed';
                }
                else {
                    modifiers.pending = '';
                    scope.statusText = 'Pending';
                }

                scope.blockCssClass = eqBem.block('test', modifiers);
            }, true);
        }
    };
}