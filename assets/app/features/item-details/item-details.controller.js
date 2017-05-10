(function() {
    'use strict';

    /**
     * This is the controller used on the Item Details page
     */
    angular.module('mlApp.item-details')
        .controller('ItemDetailsController', ItemDetailsController);

    ItemDetailsController.$inject = [ '$translate', 'itemsFactory', '$stateParams' ];
    // @ngInject
    function ItemDetailsController($translate, itemsFactory, $stateParams) {
        var vm = this;

        // TODO: Get itemId from request
        itemsFactory.getItemDetails($stateParams.itemId)
            .then(
                function (response) {
                    vm.item = response.data;
                },
                function (errorResponse) {
                    console.log(errorResponse);
                }
            );
    }
})();
