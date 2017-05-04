(function() {
    'use strict';

    /**
     * This is the controller used on the Search Results page
     */
    angular.module('mlApp.search-results')
        .controller('SearchResultsController', SearchResultsController);

    SearchResultsController.$inject = [ '$translate' ];
    // @ngInject
    function SearchResultsController($translate) {
        var vm = this;
    }
})();
