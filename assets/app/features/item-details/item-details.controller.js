(function() {
    'use strict';

    /**
     * This is the controller used on the Item Details page
     */
    angular.module('mlApp.item-details')
        .controller('ItemDetailsController', ItemDetailsController);

    ItemDetailsController.$inject = [ '$translate', 'itemsFactory', 'categoriesFactory', '$stateParams' ];
    // @ngInject
    function ItemDetailsController($translate, itemsFactory, categoriesFactory, $stateParams) {
        var vm = this;
        vm.categories = [];

        activate();

        function activate() {
            itemsFactory.getItemDetails($stateParams.itemId)
                .then(
                    function (response) {
                        vm.item = response.data;
                        breadcrumbs(vm.item.category_id);
                    },
                    function (errorResponse) {
                        console.log(errorResponse);
                    }
                );
        };

        function breadcrumbs(categoryId) {
            categoriesFactory.getPathFromRoot(categoryId)
                .then(
                    function (response) {
                        vm.categories = response.data;
                    },
                    function (errorResponse) {
                        console.log(errorResponse);
                    }
                );
        };
    };
})();
