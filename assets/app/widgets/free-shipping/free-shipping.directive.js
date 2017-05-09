(function() {
    'use strict';

    angular
        .module('mlWidgets')
        .directive('mlFreeShipping', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/free-shipping/free-shipping.directive.html'
        };
    }
})();
