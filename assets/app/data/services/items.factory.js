(function() {
    'use strict';

    angular
        .module('mlData')
        .factory('itemsFactory', itemsFactory);

    itemsFactory.$inject = ['$q', '$http'];
    /* @ngInject */
    function itemsFactory($q, $http) {
        var factory = {
            getItemDetails: getItemDetails,
            getSearchResults: getSearchResults
        };

        return factory;

        /**
         * Get Item Details
         *
         * @param {String} itemId Item Id to get details for
         * @return {Promise} Returns the a promise to be resolved as the item details.
         * @throws Will throw an error if the itemId is null.
         */
        function getItemDetails(itemId) {

            // this should never happen, caller should make sure 'itemId' is set
            if (angular.isUndefined(itemId)) {
                throw Error('getItemDetails() called without itemId.');
            }

            var requestOptions = {
                method: 'GET',
                url: '/api/items/' + itemId
            };

            return $http(requestOptions);
        };

        /**
         * Get Search Results
         *
         * @param {String} query Search term to find items for
         * @return {Promise} Returns the a promise to be resolved as the search results.
         * @throws Will throw an error if the query is null.
         */
        function getSearchResults(query) {

            // this should never happen, caller should make sure 'query' is set
            if (angular.isUndefined(query)) {
                throw Error('getSearchResults() called without query.');
            }

            var requestOptions = {
                method: 'GET',
                url: '/api/items',
                params: { 'q': query }
            };

            return $http(requestOptions);
        };
    }
})();
