angular.module('app.controllers').controller('homeController', homeController);

function homeController($scope, Run, $timeout) {
    $scope.runs = [
        new Run({
            changeList: 432460,
            owner: 'Samy',
            timeStarted: new Date('Thu Apr 17 2014 03:14:00 GMT+0400'),
            build: {
                percent: 100,
                status: 'passed',
                timeStopped: new Date('Thu Apr 17 2014 03:52:00 GMT+0400')
            },
            unitTest: {
                percent: 100,
                status: 'passed',
                testsPassed: 342,
                testsFailed: 30,
                timeSpent: 16200
            },
            e2eTest: {
                percent: 100,
                status: 'passed',
                testsPassed: 14321,
                testsFailed: 2000,
                timeSpent: 12600
            }
        }),
        new Run({
            changeList: 432463,
            owner: 'Dora',
            timeStarted: new Date('Thu Apr 17 2014 07:40:00 GMT+0400'),
            build: {
                percent: 78,
                status: 'running'
            }
        }),
        new Run({
            changeList: 432462,
            owner: 'Samy',
            timeStarted: new Date('Thu Apr 17 2014 06:42:00 GMT+0400'),
            build: {
                percent: 100,
                status: 'passed'
            },
            unitTest: {
                percent: 42,
                status: 'running',
                testsPassed: 789,
                testsFailed: 156,
                timeSpent: 5890
            }
        }),
        new Run({
            changeList: 432464,
            owner: 'JTuck',
            timeStarted: new Date('Thu Apr 17 2014 09:42:00 GMT+0400'),
            build: {
                status: 'pending'
            }
        }),
        new Run({
            changeList: 432461,
            owner: 'JTuck',
            timeStarted: new Date('Thu Apr 17 2014 04:28:00 GMT+0400'),
            build: {
                status: 'failed',
                timeStopped: new Date('Thu Apr 17 2014 04:32:00 GMT+0400')
            }
        }),
        new Run({
            changeList: 432459,
            owner: 'Dora',
            timeStarted: new Date('Thu Apr 17 2014 01:14:00 GMT+0400'),
            build: {
                percent: 100,
                status: 'passed',
                timeStopped: new Date('Thu Apr 17 2014 01:34:00 GMT+0400')
            },
            unitTest: {
                status: 'failed'
            }
        }),
        new Run({
            changeList: 432458,
            owner: 'Samy',
            timeStarted: new Date('Thu Apr 17 2014 00:42:00 GMT+0400'),
            build: {
                percent: 100,
                status: 'passed'
            },
            unitTest: {
                status: 'passed',
                percent: 69,
                testsPassed: 176,
                testsFailed: 14,
                timeSpent: 7290
            },
            e2eTest: {
                status: 'running',
                percent: 74,
                testsPassed: 4701,
                testsFailed: 545,
                timeSpent: 89762
            }
        })
    ];

    // Run progress simulation once.
    var run = $scope.runs[3];

    $timeout(function () {
        run.build.status = 'running';
        run.build.percent = 9;
    }, 2000);

    $timeout(function () {
        run.build.percent = 14;
    }, 3500);

    $timeout(function () {
        run.build.percent = 18;
    }, 6000);

    $timeout(function () {
        run.build.percent = 26;
    }, 8000);

    $timeout(function () {
        run.build.percent = 47;
    }, 9000);

    $timeout(function () {
        run.build.percent = 69;
    }, 10000);

    $timeout(function () {
        run.build.percent = 82;
    }, 11000);

    $timeout(function () {
        run.build.percent = 94;
    }, 11500);

    $timeout(function () {
        run.build.percent = 100;
    }, 12000);

    $timeout(function () {
        run.unitTest.status = 'running';
        run.build.status = 'passed';
        run.build.timeStopped = new Date('Thu Apr 17 2014 12:45:00 GMT+0400');
    }, 12700);

    $timeout(function () {
        run.unitTest.percent = 28;
        run.unitTest.testsPassed = 43;
        run.unitTest.testsFailed = 3;
        run.unitTest.timeSpent = 3600;
    }, 13000);

    $timeout(function () {
        run.unitTest.percent = 46;
        run.unitTest.testsPassed = 56;
        run.unitTest.testsFailed = 7;
        run.unitTest.timeSpent = 3660;
    }, 13500);

    $timeout(function () {
        run.unitTest.percent = 66;
        run.unitTest.testsPassed = 91;
        run.unitTest.testsFailed = 9;
    }, 14000);

    $timeout(function () {
        run.unitTest.percent = 89;
        run.unitTest.testsPassed = 101;
        run.unitTest.testsFailed = 10;
        run.unitTest.timeSpent = 7200;
    }, 14500);

    $timeout(function () {
        run.unitTest.percent = 100;
        run.unitTest.testsPassed = 176;
        run.unitTest.testsFailed = 14;
        run.unitTest.timeSpent = 7290;
    }, 15000);

    $timeout(function () {
        run.unitTest.status = 'passed';
        run.e2eTest.status = 'running';
    }, 15700);

    $timeout(function () {
        run.e2eTest.percent = 17;
        run.e2eTest.testsPassed = 2451;
        run.e2eTest.testsFailed = 202;
        run.e2eTest.timeSpent = 36000;
    }, 17000);

    $timeout(function () {
        run.e2eTest.percent = 26;
        run.e2eTest.testsPassed = 3101;
        run.e2eTest.testsFailed = 304;
    }, 17500);

    $timeout(function () {
        run.e2eTest.percent = 39;
        run.e2eTest.testsPassed = 3601;
        run.e2eTest.testsFailed = 360;
        run.e2eTest.timeSpent = 36609;
    }, 18000);

    $timeout(function () {
        run.e2eTest.percent = 53;
        run.e2eTest.testsPassed = 3901;
        run.e2eTest.testsFailed = 405;
    }, 18500);

    $timeout(function () {
        run.e2eTest.percent = 63;
        run.e2eTest.testsPassed = 4101;
        run.e2eTest.timeSpent = 67892;
        run.e2eTest.testsFailed = 467;
    }, 19000);

    $timeout(function () {
        run.e2eTest.percent = 87;
    }, 19500);

    $timeout(function () {
        run.e2eTest.percent = 93;
        run.e2eTest.testsPassed = 4501;
        run.e2eTest.testsFailed = 501;
    }, 20000);

    $timeout(function () {
        run.e2eTest.status = 'passed';
        run.e2eTest.percent = 100;
        run.e2eTest.testsPassed = 4701;
        run.e2eTest.testsFailed = 545;
        run.e2eTest.timeSpent = 89762;
    }, 21000);
}