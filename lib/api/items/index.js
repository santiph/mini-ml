var express = require('express');
var router = express.Router();
var restClient = require('node-rest-client').Client;
restClient = new restClient();
var models = require('./models');

/* GET items results. */
router.get('/', function (req, res, next) {
    restClient.methods.mlItemSearch(
        { path: { 'query': req.query.q } },
        function (data) {
            // Build Results Collection out of Item models and send it back

            // Work only with the first 4 results
            data.results.splice(4);
            data.results.forEach(function (item, index, results) {
                // replace the current unnecesary value
                results[index] = getItem(item);
            });

            var response = {
                'results': data.results,
                // TODO: Add Categories
                // TODO: Add Author
                'author': {},
                'categories': []
            };

            res.send(response);
        }
    );
});

/* GET items details. */
router.get('/:itemId', function (req, res, next) {
    var itemDescription = '';
    var requestConfiguration = { path: { 'itemId': req.params.itemId } };

    // Get item description first
    restClient.methods.mlItemDescription(
        requestConfiguration,
        function (data) {
            itemDescription = data.text;
        }
    );

    // Get item details and return it
    restClient.methods.mlItemDetails(
        requestConfiguration,
        function (data) {

            data.description = itemDescription;

            // Build Item model and send it back
            var itemDetail = getItem(data);

            // Send the item Detail back
            res.send(itemDetail);
        }
    );

});

/* Build Item */
function getItem(data) {
    var price = new models.price(data.price, data.currency_id);
    var author = new models.author('Manuele', 'Carlini');

    return new models.item(
        data.id,
        data.title,
        price,
        author,
        data.thumbnail,
        data.condition,
        data.free_shipping,
        data.sold_quantity,
        (data.description !== undefined && data.description !== null) ? data.description : ''
    );
}

/* Configuring restClient */

// registering remote methods 
// Search
restClient.registerMethod(
    'mlItemSearch',
    'https://api.mercadolibre.com/sites/MLA/search?q=${query}',
    'GET'
);
// Item Details
restClient.registerMethod(
    'mlItemDetails',
    'https://api.mercadolibre.com/items/${itemId}',
    'GET'
);
// Item Description
restClient.registerMethod(
    'mlItemDescription',
    'https://api.mercadolibre.com/items/${itemId}/description',
    'GET'
);

module.exports = router;
