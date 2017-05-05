(function() {
    'use strict';

    /**
     * Main module of the application.
     */
    angular
        .module('mlApp', [
            'mlCore',
            'mlData',
            'mlWidgets',

            /*
            * Feature areas
            */
            'mlApp.homepage',
            'mlApp.search-results',
            'mlApp.item-details',
        ])
        .config(configuration);

    configuration.$inject = ['$urlRouterProvider', '$locationProvider'];
    function configuration($urlRouterProvider, $locationProvider) {

        configureRouter();

        //@todo: SOC - Store routing configurations into separate files
        function configureRouter() {
            $locationProvider.html5Mode(true);

            // For any unmatched url, redirect to /
            $urlRouterProvider.otherwise('/');
        }
    }
})();
