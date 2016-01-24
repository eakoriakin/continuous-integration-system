angular.module('app.services').factory('Run', Run);

// Initializes a new instance of Run class.
function Run(helper) {
    var run = function (value) {
        value = value || {};
        value.build = value.build || {};
        value.unitTest = value.unitTest || {};
        value.e2eTest = value.e2eTest || {};

        this.changeList = value.changeList ? value.changeList : 0;
        this.owner = value.owner ? value.owner : null;
        this.timeStarted = helper.isDate(value.timeStarted) ? value.timeStarted : null;

        this.build = {};
        this.build.percent = value.build.percent ? value.build.percent : 0;
        this.build.status = helper.isValidStatus(value.build.status) ? value.build.status : null;
        this.build.timeStopped = helper.isDate(value.build.timeStopped) ? value.build.timeStopped : null;

        this.unitTest = {};
        this.unitTest.percent = value.unitTest.percent ? value.unitTest.percent : 0;
        this.unitTest.status = helper.isValidStatus(value.unitTest.status) ? value.unitTest.status : null;
        this.unitTest.type = 'unit';
        this.unitTest.testsPassed = value.unitTest.testsPassed ? value.unitTest.testsPassed : 0;
        this.unitTest.testsFailed = value.unitTest.testsFailed ? value.unitTest.testsFailed : 0;
        // Time spent in minutes.
        this.unitTest.timeSpent = value.unitTest.timeSpent ? value.unitTest.timeSpent : 0;

        this.e2eTest = {};
        this.e2eTest.percent = value.e2eTest.percent ? value.e2eTest.percent : 0;
        this.e2eTest.status = helper.isValidStatus(value.e2eTest.status) ? value.e2eTest.status : null;
        this.e2eTest.type = 'e2e';
        this.e2eTest.testsPassed = value.e2eTest.testsPassed ? value.e2eTest.testsPassed : 0;
        this.e2eTest.testsFailed = value.e2eTest.testsFailed ? value.e2eTest.testsFailed : 0;
        this.e2eTest.timeSpent = value.e2eTest.timeSpent ? value.e2eTest.timeSpent : 0;
    };

    // Returns final status of the run.
    run.prototype.status = function () {
        if (this.e2eTest.status) {
            return this.e2eTest.status;
        }
        else if (this.unitTest.status) {
            return this.unitTest.status;
        }
        else if (this.build.status) {
            return this.build.status;
        }
        else {
            return null;
        }
    };

    return run;
}