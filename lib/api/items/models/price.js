// Price model

function Price(amount, currency) {
  this.currency = currency;
  this.amount = amount;
  this.decimals = 0;
}

module.exports = Price;
