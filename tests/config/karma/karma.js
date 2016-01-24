module.exports = function (config) {
    config.set({
        basePath: './../../../',
        autoWatch: true,
        frameworks: [
            'jasmine'
        ],
        browsers: [
            'Chrome'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'source/app.js',
            'source/services/helper.js',
            'tests/unit/services/helper.js'
        ]
    });
};