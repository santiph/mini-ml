// Item model

function Item(id, title, price, author, picture, condition, free_shipping, sold_quantity, description) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.author = author;
  this.picture = picture;
  this.condition = condition;
  this.free_shipping = free_shipping;
  this.sold_quantity = sold_quantity;
  this.description = description;
};

module.exports = Item;
