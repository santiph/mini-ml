var restClient = require('node-rest-client').Client;
restClient = new restClient();

/* Configuring restClient */

// registering remote methods 
// Search
restClient.registerMethod(
    'mlItemSearch',
    'https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4',
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
// Category Details
restClient.registerMethod(
    'mlCategoryDetails',
    'https://api.mercadolibre.com/categories/${categoryId}',
    'GET'
);

module.exports = restClient;