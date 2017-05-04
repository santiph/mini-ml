(function () {
    'use strict';

    angular
        .module('mlApp.homepage')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];
    // @ngInject
    function configuration($stateProvider, $urlRouterProvider, $translateProvider) {

      /**
       * Configure States, Views and Urls
       */
        $stateProvider
            .state('homepage', {
                url: '/',
                templateUrl: 'app/features/homepage/templates/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'homepageControllerVm'
            });
    }
})();
