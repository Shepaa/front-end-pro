const hamburger = new Hamburger(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_POTATO)
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories())

function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price;
    this.calories += topping.calories;
}

Hamburger.prototype.getPrice = function () {
    return this.price;
}

Hamburger.prototype.getCalories = function () {
    return this.calories;
}
Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_AVERAGE = {
    price: 75,
    calories: 30,
}
Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,

}
Hamburger.TOPPING_CHESEE = {
    price: 10,
    calories: 20,
}
Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}
Hamburger.TOPPING_SEASONING = {
    price: 15,
    calories: 0,
}


