angular.module('app.views').directive('grid', grid);
angular.module('app.views').controller('gridItemController', gridItemController);

var rowIndex = 0;

function grid($timeout) {
    return {
        restrict: 'E',
        scope: {
            runs: '='
        },
        controller: 'gridItemController',
        replace: true,
        templateUrl: 'views/grid/grid.html',
        link: function (scope, element, attributes, injectables) {
            // Need to use $timeout because of Angular:
            // http://stackoverflow.com/questions/29229335/angular-element-not-works-when-class-is-added-through-ng-class
            $timeout(function () {
                var rowElements = angular.element(element[0].querySelectorAll('.grid__row')),
                    topElements = angular.element(element[0].querySelectorAll('.grid__top'));

                topElements.on('click', function () {
                    var rowElement = angular.element(this.parentNode),
                        isRowOpened = rowElement.hasClass('grid__row_is-opened');

                    // Close a current row, if it is opened.
                    if (isRowOpened) {
                        rowElement.removeClass('grid__row_is-opened');
                    }
                    else {
                        // Open a current row and close others.
                        rowElements.removeClass('grid__row_is-opened');
                        rowElement.addClass('grid__row_is-opened');
                    }
                });
            });
        }
    }
}

function gridItemController($scope, eqBem) {
    if ($scope.run === undefined) {
        return;
    }

    $scope.time = {
        date: $scope.run.timeStarted
    };

    $scope.unitTest = {
        run: $scope.run,
        test: $scope.run.unitTest
    };

    $scope.e2eTest = {
        run: $scope.run,
        test: $scope.run.e2eTest
    };

    $scope.$watch('run', function () {
        var modifiers = {};
        modifiers[$scope.run.status()] = '';

        // The first row is opened by default.
        if ($scope.rowIndex === 0) {
            modifiers.isOpened = ''
        }

        $scope.rowCssClass = eqBem.element('grid', 'row', modifiers);
    }, true);

    $scope.rowIndex = rowIndex;
    rowIndex++;
}