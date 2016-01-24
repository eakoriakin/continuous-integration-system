/*!
 * AngularJS.BEM is a small AngularJS module that helps to create CSS classes according to the BEM methodology.
 * https://github.com/eakoryakin/angularjs-bem
 *
 * Copyright (c) 2015 Evgenii Koriakin.
 * Released under the MIT license.
 */
angular.module('AngularJS.BEM', []);
angular.module('AngularJS.BEM').factory('eqBem', eqBem);

function eqBem() {
    var bem = {};

    bem.elementSeparator = '__';
    bem.modifierSeparator = '_';
    bem.modifierValueSeparator = '_';

    bem.block = function (blockName, modifiers, cssClasses) {
        blockName = trim(blockName);

        if (isNullOrWhiteSpace(blockName)) {
            return '';
        }

        var resultingCssClass = new StringBuilder()
            .append(blockName)
            .append(' ');

        // Add modifiers.
        if (modifiers) {
            resultingCssClass.append(bem.blockModifier(blockName, modifiers));
            resultingCssClass.append(' ');
        }

        // Add additional CSS classes.
        if (cssClasses && cssClasses.length > 0) {
            for (var i = 0; i < cssClasses.length; i++) {
                if (!isNullOrWhiteSpace(cssClasses[i])) {
                    resultingCssClass.append(cssClasses[i]);
                    resultingCssClass.append(' ');
                }
            }
        }

        return trim(resultingCssClass.toString());
    };

    bem.blockModifier = function (blockName, modifiers) {
        blockName = trim(blockName);

        if (isNullOrWhiteSpace(blockName) || !modifiers) {
            return '';
        }

        var resultingCssClass = new StringBuilder();

        for (var modifierName in modifiers) {
            if (modifiers.hasOwnProperty(modifierName)) {
                var modifierValue = modifiers[modifierName];

                resultingCssClass.append(blockName)
                    .append(bem.modifierSeparator)
                    .append(toHyphenCase(modifierName).toLowerCase());

                if (modifierValue) {
                    resultingCssClass.append(bem.modifierValueSeparator)
                        .append(modifierValue);
                }

                resultingCssClass.append(' ');
            }
        }

        return trim(resultingCssClass.toString());
    };

    bem.element = function (blockName, elementName, modifiers, cssClasses) {
        blockName = trim(blockName);
        elementName = trim(elementName);

        if (isNullOrWhiteSpace(blockName) || isNullOrWhiteSpace(elementName)) {
            return '';
        }

        var resultingCssClass = new StringBuilder()
            .append(blockName)
            .append(bem.elementSeparator)
            .append(elementName)
            .append(' ');

        // Add modifiers.
        if (modifiers) {
            resultingCssClass.append(bem.elementModifier(blockName, elementName, modifiers));
            resultingCssClass.append(' ');
        }

        // Add additional CSS classes.
        if (cssClasses && cssClasses.length > 0) {
            for (var i = 0; i < cssClasses.length; i++) {
                if (!isNullOrWhiteSpace(cssClasses[i])) {
                    resultingCssClass.append(cssClasses[i]);
                    resultingCssClass.append(' ');
                }
            }
        }

        return trim(resultingCssClass.toString());
    };

    bem.elementModifier = function (blockName, elementName, modifiers) {
        blockName = trim(blockName);
        elementName = trim(elementName);

        if (isNullOrWhiteSpace(blockName) || isNullOrWhiteSpace(elementName) || !modifiers) {
            return '';
        }

        var resultingCssClass = new StringBuilder();

        for (var modifierName in modifiers) {
            if (modifiers.hasOwnProperty(modifierName)) {
                var modifierValue = modifiers[modifierName];

                resultingCssClass.append(blockName)
                    .append(bem.elementSeparator)
                    .append(elementName)
                    .append(bem.modifierSeparator)
                    .append(toHyphenCase(modifierName).toLowerCase());

                if (modifierValue) {
                    resultingCssClass.append(bem.modifierValueSeparator)
                        .append(modifierValue);
                }

                resultingCssClass.append(' ');
            }
        }

        return trim(resultingCssClass.toString());
    };

    // Methods (private).
    function trim(value) {
        if (!value) {
            return '';
        }

        return value.replace(/^\s+|\s+$/g, '');
    }

    function isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (angular.isArray(value)) {
            return false;
        }

        // Convert value to string in case if it is not.
        return value.toString().replace(/\s/g, '').length < 1;
    }

    function toHyphenCase(value) {
        // Source: http://stackoverflow.com/questions/155303/net-how-can-you-split-a-caps-delimited-string-into-an-array
        if (!value) {
            return '';
        }

        return value.replace(/([a-z](?=[A-Z])|[A-Z](?=[A-Z][a-z]))/g, '$1' + '-');
    }

    // Nested types.
    function StringBuilder() {
        this.strings = [];

        this.append = function (value) {
            this.strings.push(value);
            return this;
        };

        this.toString = function () {
            return this.strings.join('');
        };
    }

    return bem;
}