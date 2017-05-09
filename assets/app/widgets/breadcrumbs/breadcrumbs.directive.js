(function() {
    'use strict';

    angular
        .module('mlWidgets')
        .directive('mlBreadcrumbs', crowbarHeader);

    function crowbarHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/breadcrumbs/breadcrumbs.directive.html',
            scope: {
                links: '='
            }
        };
    }
})();
