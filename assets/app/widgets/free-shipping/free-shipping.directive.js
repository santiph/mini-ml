(function() {
    'use strict';

    /**
     * @desc Free shipping directive to display a small green icon to indicate free shipping
     * @example <ml-free-shipping></ml-free-shipping>
     */
    angular
        .module('mlWidgets')
        .directive('mlFreeShipping', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/free-shipping/free-shipping.directive.html'
        };
    };
})();
