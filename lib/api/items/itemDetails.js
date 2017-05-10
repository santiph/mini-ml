var mlRestClient = require('../ml-rest-client');
var helpers = require('./helpers');

/* GET Item details. */
module.exports.get = function (req, res, next) {
    var itemDescription = '';
    var requestConfiguration = { path: { 'itemId': req.params.itemId } };

    // TODO: Use Promises!!
    getItemDetails(function processResponse(itemDetailResponse) {

        getDescription(function processDescriptionResponse(descriptionResponse) {

            helpers.getItem(itemDetailResponse, function (itemDetails) {

                itemDetails.description = descriptionResponse.text;
                res.send(itemDetails);
            });
        });
    });

    function getDescription(callback) {

        // Get item description first
        mlRestClient.methods.mlItemDescription(
            requestConfiguration,
            callback
        );
    }

    function getItemDetails(callback) {
        // Get item details and return it
        mlRestClient.methods.mlItemDetails(
            requestConfiguration,
            callback
        );
    }
};
