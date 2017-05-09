(function() {
    'use strict';

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
    }
})();
