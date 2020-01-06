const getMug = require('./getMug');
const drink = require('./drink');

function drinkCoffee () {
  getMug();
  setTimeout(drink, 1000);
  return;
}

drinkCoffee();