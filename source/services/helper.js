angular.module('app.services').factory('helper', helper);

function helper() {
    return {
        // Determines whether the date is valid.
        isDate: function (value) {
            if (!value) {
                return false;
            }

            return Object.prototype.toString.call(value) === '[object Date]' && value.getTime && !isNaN(value.getTime());
        },

        // Determines whether the status is valid.
        isValidStatus: function (status) {
            return status === 'pending' || status === 'running' || status === 'passed' || status === 'failed' || status === null;
        },

        // Converts seconds to h.mm format.
        formatTime: function (value) {
            value = parseInt(value, 10);

            var hours = Math.floor(value / 3600),
                minutes = Math.floor((value - (hours * 3600)) / 60);

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            return hours + '.' + minutes;
        }
    };
}