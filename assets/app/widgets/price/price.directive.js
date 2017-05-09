(function() {
    'use strict';

    angular
        .module('mlWidgets')
        .directive('mlPrice', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/price/price.directive.html',
            scope: {
                price: '='
            }
        };
    }
})();
