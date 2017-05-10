var models = require('./models');
var mlRestClient = require('../ml-rest-client');
var _ = require('lodash');

const ML_CATEGORY_ID = 'category';

module.exports.getItem = getItem;
module.exports.getSearchCategories = getSearchCategories;
module.exports.getPictureDetails = getPictureDetails;
module.exports.getLargePicture = getLargePicture;
module.exports.getSmallPicture = getSmallPicture;

/* Build Item */
function getItem(data, callback) {
    var price = new models.price(data.price, data.currency_id);
    var author = new models.author('Manuele', 'Carlini');
    // Extract pictureId either from pictures collection or thubmnail
    // TODO: improve this!
    var pictureId = _.isUndefined(data.pictures) ? data.thumbnail.match(/\d+-[A-Z]{3}\d+_\d+/) : _.head(data.pictures).id;

    getPictureDetails(pictureId, function (picture) {
        callback(
            new models.item(
                data.id,
                data.title,
                price,
                author,
                picture,
                data.condition,
                data.shipping.free_shipping,
                data.sold_quantity,
                (data.description !== undefined && data.description !== null) ? data.description : ''
            ));
    });
}

function getSearchItem(data, callback) {
    var price = new models.price(data.price, data.currency_id);
    var author = new models.author('Manuele', 'Carlini');
    var pictureId = _.head(data.pictures).id;

    getPictureDetails(pictureId, function (picture) {
        callback(
            new models.item(
                data.id,
                data.title,
                price,
                author,
                picture,
                data.condition,
                data.shipping.free_shipping,
                data.sold_quantity,
                (data.description !== undefined && data.description !== null) ? data.description : ''
            ));
    });
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

    callback(categoriesCollection);
}

/**
 * Get Picture details
 */
function getPictureDetails(pictureId, callback) {
    mlRestClient.methods.mlPictures(
        { path: { 'pictureId': pictureId } },
        function (data) {
            var picture = new models.picture(
                data.id,
                getLargePicture(data.variations),
                getSmallPicture(data.variations)
            );
            callback(picture);
        }
    );
}


/**
 * Get 680x680 Picture or the bigger available
 */
function getLargePicture(variations) {
    var results = _.filter(variations, function (variation) {
        return equalOrBiggerCondition(variation, 680);
    });

    results = orderVariations(results);

    return _.head(results);
}

/**
 * Get 180x180 Picture or the bigger available
 */
function getSmallPicture(variations) {
    var results = _.filter(variations, function (variation) {
        return equalOrBiggerCondition(variation, 180);
    });

    results = orderVariations(results);

    return _.head(results);
}

/**
 * Compare if the given picture variation is bigger than a specific size
 */
function equalOrBiggerCondition(variation, size) {
    var sizes = _.split(variation.size, 'x');
    return sizes[0] >= size && sizes[1] >= size;
}

/**
 * Order picture variations in ascending order
 */
function orderVariations(variations) {
    return _.sortBy(variations, function (variation) {
        return _.toNumber(_.split(variation.size, 'x')[0]);
    })
}