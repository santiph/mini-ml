var mlRestClient = require('../ml-rest-client');

/* GET Category details. */
module.exports.get = function (req, res, next) {

    // TODO: Use Promises!!
    getCategoryDetails(function processResponse(categoryDetailResponse) {
        var categoriesCollection = [];

        categoryDetailResponse.path_from_root.forEach(function (category) {
            categoriesCollection.push(category.name);
        });
        res.send(categoriesCollection);
    });

    function getCategoryDetails(callback) {

        // Get Category Details
        mlRestClient.methods.mlCategoryDetails(
            { path: { 'categoryId': req.params.categoryId } },
            callback
        );
    }
};
