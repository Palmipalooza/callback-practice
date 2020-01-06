const pourCoffeeIntoMug = require('./pourCoffeeIntoMug');

module.exports = function getMug() {
  console.log('getting mug from cabinet');
  setTimeout(pourCoffeeIntoMug, 1000)
}


  //  setTimeout(() => {
  //    console.log('getting mug from cabinet');
  //  }, 1000);
  //  pourCoffeeIntoMug();