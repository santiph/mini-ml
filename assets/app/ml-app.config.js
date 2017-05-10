(function () {
    'use strict';

    angular
        .module('mlApp')
        .config(configuration);

    configuration.$inject = ['$translateProvider'];
    // @ngInject
    function configuration($translateProvider) {


        /**
         * Configure Translations
         */
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('es');
        $translateProvider.fallbackLanguage('es');
        $translateProvider.useSanitizeValueStrategy('sanitize');

    };
})();
