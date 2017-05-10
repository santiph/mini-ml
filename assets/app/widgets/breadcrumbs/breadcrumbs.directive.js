(function() {
    'use strict';

    /**
     * @desc Breadcrumbs directive to display multiple links
     * @example <ml-breadcrumbs links='["Electrónica, Audio y Video", "Accesorios para Audio y Video", "Media Streaming", "Chromecast"]'></ml-breadcrumbs>
     */
    angular
        .module('mlWidgets')
        .directive('mlBreadcrumbs', mlBreadcrumbs);

    function mlBreadcrumbs() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/breadcrumbs/breadcrumbs.directive.html',
            scope: {
                links: '='
            }
        };
    };
})();
