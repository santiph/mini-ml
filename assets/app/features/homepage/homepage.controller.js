(function() {
    'use strict';

    /**
     * This is the controller used on the Homepage
     */
    angular.module('mlApp.homepage')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject = [ '$translate' ];
    // @ngInject
    function HomepageController($translate) {
        var vm = this;
    }
})();
