(function() {
    'use strict';

    /**
     * This is the controller used on the Search Results page
     */
    angular.module('mlApp.search-results')
        .controller('SearchResultsController', SearchResultsController);

    SearchResultsController.$inject = [ '$translate', 'itemsFactory', 'categoriesFactory', '$stateParams' ];
    // @ngInject
    function SearchResultsController($translate, itemsFactory, categoriesFactory, $stateParams) {
        var vm = this;
        vm.categories = [];

        activate();

        function activate() {
            itemsFactory.getSearchResults($stateParams.q)
                .then(
                    function (response) {
                        vm.searchResults = response.data.results;

                        breadcrumbs(response.data.categories[0]);
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
