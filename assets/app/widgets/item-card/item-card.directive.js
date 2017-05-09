(function() {
    'use strict';

    angular
        .module('mlWidgets')
        .directive('mlItemCard', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/item-card/item-card.directive.html',
            scope: {
                item: '='
            }
        };
    }
})();
