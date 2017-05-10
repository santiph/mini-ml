(function() {
    'use strict';

    /**
     * @desc Price directive to display prices according with different ISO currencies
     * @example <ml-price price="{amount: '390', decimals: '20', currency: 'ARS'}"></ml-price>
     */
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
    };
})();
