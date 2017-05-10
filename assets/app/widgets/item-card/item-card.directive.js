(function() {
    'use strict';

    /**
     * @desc Item card directive to display item details in a card format
     * @example <ml-item-card item="{id, category_id, author, condition, free_shipping, picture, price, title}"></ml-item-card>
     */
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
    };
})();
