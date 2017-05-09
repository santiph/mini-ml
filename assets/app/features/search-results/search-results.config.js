(function () {
    'use strict';

    angular
        .module('mlApp.search-results')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
    // @ngInject
    function configuration($stateProvider, $urlRouterProvider) {

      /**
       * Configure States, Views and Urls
       */
        $stateProvider
            .state('search-results', {
                url: '/items?q',
                templateUrl: 'app/features/search-results/templates/search-results.html',
                controller: 'SearchResultsController',
                controllerAs: 'searchResultsControllerVm'
            });
    }
})();
