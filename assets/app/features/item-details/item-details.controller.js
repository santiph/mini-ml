(function() {
    'use strict';

    /**
     * This is the controller used on the Item Details page
     */
    angular.module('mlApp.item-details')
        .controller('ItemDetailsController', ItemDetailsController);

    ItemDetailsController.$inject = [ '$translate' ];
    // @ngInject
    function ItemDetailsController($translate) {
        var vm = this;
    }
})();
