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
    var thumbnail = data.thumbnail; // TODO: Turn into 180x180 image

    return new models.item(
        data.id,
        data.title,
        price,
        author,
        thumbnail,
        data.condition,
        data.shipping.free_shipping,
        data.sold_quantity,
        (data.description !== undefined && data.description !== null) ? data.description : ''
    );
}

/**
 * Get Categories collection for a specific Item
 **/
function getItemCategories(category_id, cb) {

    // this should never happen, caller should make sure 'category_id' is set
    if (_.isUndefined(category_id)) {
        throw Error('getItemCategories() called without category_id.');
    }
    var itemCategories = [];

    mlRestClient.methods.mlCategoryDetails(
        { path: { 'categoryId': category_id } },
        function (data) {
            data.path_from_root.forEach(function (category) {
                itemCategories.push(category.name);
            });
        }
    );

    return itemCategories;
}

/**
 * Get Categories Id collection for a search query
 **/
function getSearchCategories(searchResults, callback) {
    var categoriesCollection = [];

    var categoryFilter = _.find(searchResults.available_filters, ['id', ML_CATEGORY_ID]);
    if (!_.isUndefined(categoryFilter)) {
        categoryFilter.values.forEach(function(category) {
            categoriesCollection.push(category.id);
        });
    }
    console.log(categoryFilter, !_.isUndefined(categoryFilter));

    callback(categoriesCollection);
}
