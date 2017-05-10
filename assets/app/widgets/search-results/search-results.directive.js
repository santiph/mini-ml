(function() {
    'use strict';

    /**
     * @desc Search results directive to display a collection of itemCards
     * @example <ml-search-results results="{results}"></ml-search-results>
     */
    angular
        .module('mlWidgets')
        .directive('mlSearchResults', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/search-results/search-results.directive.html',
            scope: {
                results: '='
            }
        };
    };
})();
