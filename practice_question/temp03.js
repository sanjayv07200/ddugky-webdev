/*// Create a Constructor Function "Bottle"
//props: color, material, capacity(litre), price
//Instance Method : fill, empty
//Static Method : compare*

const Bottle = function (colorName, material, capacity, price) {
  this.color = colorName;
  this.material = material;
  this.capacity = capacity;
  this.price = price;
  this.wanterQuantity = 0;
};

Bottle.prototype.fill = function () {
  this.wanterQuantity = this.capacity;
};
Bottle.prototype.empty = function () {
  this.wanterQuantity = 0;
};
Bottle.compare = function(Bottle01, Bottle02){
    if(Bottle01.price > Bottle02.price)console.log("Bottle01 is expensive than Bottle02");
    else("Bottle02 is expensive than Bottle01")
}

const Bottle01 = new Bottle("red", "plastic", 1, 100);
const Bottle02 = new Bottle("green", "glass", 1, 300);
console.log(Bottle01.wanterQuantity);
Bottle01.fill();
console.log(Bottle01.wanterQuantity);
*/
// ESE6 class

class Bottle {
  constructor(colorName, material, capacity, price) {
    this.color = colorName;
    this.material = material;
    this.capacity = capacity;
    this.price = price;
    this.wanterQuantity = 0;
  }
  fill() {
    this.wanterQuantity = this.capacity;
  }
  empty() {
    this.wanterQuantity = 0;
  }
  static compare(Bottle01, Bottle02) {
    if (Bottle01.price > Bottle02.price)
      console.log("Bottle01 is expensive than Bottle02");
    else console.log("Bottle02 is expensive than Bottle01");
  }
}

const Bottle01 = new Bottle("brown", "iron", 2, 400);
const Bottle02 = new Bottle("white", "platinum", 2, 200);

Bottle01.fill();
console.log(Bottle01.wanterQuantity);
Bottle.compare(Bottle01, Bottle02);
