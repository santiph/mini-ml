var models = require('./models');
var mlRestClient = require('./ml-rest-client');
var _ = require('lodash');

const ML_CATEGORY_ID = 'category';

module.exports.getItem = getItem;
module.exports.getItemCategories = getItemCategories;
module.exports.getSearchCategories = getSearchCategories;

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

/**
 * Get Categories collection for a specific Item
 **/
function getItemCategories(item) {
    return [];
}

/**
 * Get Categories collection for a search query
 **/
function getSearchCategories(searchResults) {
    var categoriesCollection = [];

    // Return Path of categories whenever it's possible.
    if ( _.isArray(searchResults.filters) && !_.isEmpty(searchResults.filters) && _.head(searchResults.filters).id === ML_CATEGORY_ID) {
        var categoryFilter = _.head(searchResults.filters);
        var appliedCategory = _.head(categoryFilter.values);
        appliedCategory.path_from_root.forEach(function(category) {
            categoriesCollection.push(category.name);
        });
    }

    return categoriesCollection;
}
