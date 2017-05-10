(function() {
    'use strict';

    angular
        .module('mlData')
        .factory('categoriesFactory', categoriesFactory);

    categoriesFactory.$inject = ['$q', '$http'];
    /* @ngInject */
    function categoriesFactory($q, $http) {
        var factory = {
            getPathFromRoot: getPathFromRoot
        };

        return factory;

        /**
         * Get Item Details
         *
         * @param {String} categoryId Category Id to get details for
         * @return {Promise} Returns the a promise to be resolved as the category details.
         * @throws Will throw an error if the categoryId is null.
         */
        function getPathFromRoot(categoryId) {

            // this should never happen, caller should make sure 'categoryId' is set
            if (angular.isUndefined(categoryId)) {
                throw Error('getPathFromRoot() called without categoryId.');
            }

            var requestOptions = {
                method: 'GET',
                url: '/api/categories/' + categoryId
            };

            return $http(requestOptions);
        };
    }
})();
