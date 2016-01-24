angular.module('app.views').directive('process', process);

function process(eqBem) {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        replace: true,
        templateUrl: 'views/process/process.html',
        link: function (scope, element, attributes, injectables) {
            var model = scope.model;

            scope.$watch('model', function () {
                // Create CSS class.
                var modifiers = {
                    build: model.build.status
                };

                if (model.unitTest.status) {
                    modifiers.unit = model.unitTest.status;
                }

                if (model.e2eTest.status) {
                    modifiers.e2e = model.e2eTest.status;
                }

                if (model.status()) {
                    modifiers[model.status()] = '';
                }

                scope.blockCssClass = eqBem.block('process', modifiers);

                // Calculate total progress.
                scope.totalPercent = (model.build.percent / 2) + (model.unitTest.percent / 2);
            }, true);
        }
    };
}