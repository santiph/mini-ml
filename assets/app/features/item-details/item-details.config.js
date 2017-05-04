(function () {
    'use strict';

    angular
        .module('mlApp.item-details')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
    // @ngInject
    function configuration($stateProvider, $urlRouterProvider) {

      /**
       * Configure States, Views and Urls
       */
        $stateProvider
            .state('item-details', {
                url: '/item/{itemId}',
                templateUrl: 'app/features/item-details/templates/item-details.html',
                controller: 'ItemDetailsController',
                controllerAs: 'itemDetailsControllerVm'
            });
    }
})();
