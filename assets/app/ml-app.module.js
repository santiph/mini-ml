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

    configuration.$inject = ['$urlRouterProvider'];
    function configuration($urlRouterProvider) {

        configureRouter();

        //@todo: SOC - Store routing configurations into separate files
        function configureRouter() {
            // For any unmatched url, redirect to /upgrade/prepare
            $urlRouterProvider.otherwise('/');
        }
    }
})();
