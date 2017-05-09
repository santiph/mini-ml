(function () {
    'use strict';

    /**
     * Core module to handle main Angular dependencies, self-owned and 3rd party libraries across several products
     */
    angular.module('mlCore', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngResource', 'ui.router', 'ngSanitize', 'ngTouch',

        /*
         * Our reusable cross app code modules
         * (Logger, authentication)
         */

        /*
         * 3rd Party modules
         */
        'ui.bootstrap',     // ui-bootstrap (ex: carousel, pagination, dialog)
        'pascalprecht.translate',
        'angular-loading-bar',
        'isoCurrency'
    ]);
})();
