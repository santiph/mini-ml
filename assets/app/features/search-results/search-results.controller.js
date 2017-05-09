(function() {
    'use strict';

    /**
     * This is the controller used on the Search Results page
     */
    angular.module('mlApp.search-results')
        .controller('SearchResultsController', SearchResultsController);

    SearchResultsController.$inject = [ '$translate', 'itemsFactory', '$stateParams' ];
    // @ngInject
    function SearchResultsController($translate, itemsFactory, $stateParams) {
        var vm = this;

        // TODO: Get query from request
        itemsFactory.getSearchResults($stateParams.q)
            .then(
                function (response) {
                    vm.searchResults = response.data.results;
                    vm.categories = response.data.categories;
                },
                function (errorResponse) {
                    console.log(errorResponse);
                }
            );
    }
})();
