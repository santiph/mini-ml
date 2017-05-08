var mlRestClient = require('./ml-rest-client');
var helpers = require('./helpers');
var models = require('./models');

/* GET Search Items Results. */
module.exports.get = function (req, res, next) {
    mlRestClient.methods.mlItemSearch(
        { path: { 'query': req.query.q } },
        function (data) {
            var author = new models.author('Manuele', 'Carlini');
            var categories = helpers.getSearchCategories(data);
            // Build Results Collection out of Item models and send it back

            // Work only with the first 4 results
            data.results.splice(4);
            data.results.forEach(function (item, index, results) {
                // replace the current unnecesary value
                results[index] = helpers.getItem(item);
            });

            var response = {
                'results': data.results,
                // TODO: Add Categories
                // TODO: Add Author
                'author': author,
                'categories': categories
            };

            res.send(response);
        }
    );
};
