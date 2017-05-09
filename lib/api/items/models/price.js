// Price model

function Price(amount, currency) {
  this.currency = currency;
  this.amount = Math.floor(amount);
  this.decimals = Math.floor((amount - this.amount) * 100);
}

module.exports = Price;
