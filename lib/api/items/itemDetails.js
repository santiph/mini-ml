var mlRestClient = require('./ml-rest-client');
var helpers = require('./helpers');

/* GET Item details. */
module.exports.get = function (req, res, next) {
    var itemDescription = '';
    var requestConfiguration = { path: { 'itemId': req.params.itemId } };

    // Get item description first
    mlRestClient.methods.mlItemDescription(
        requestConfiguration,
        function (data) {
            itemDescription = data.text;
        }
    );

    // Get item details and return it
    mlRestClient.methods.mlItemDetails(
        requestConfiguration,
        function (data) {

            data.description = itemDescription;

            // Build Item model and send it back
            var itemDetail = helpers.getItem(data);
            itemDetail.categories = helpers.getItemCategories(data);

            // Send the item Detail back
            res.send(itemDetail);
        }
    );

};
