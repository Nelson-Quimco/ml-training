/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */
var itemsList = [
  {
    name: "apple",
    price: 10,
  },
  {
    name: "orange",
    price: 10,
  },
  {
    name: "grapes",
    price: 180,
  },
  {
    name: "banana",
    price: 7,
  },
  {
    name: "melon",
    price: 50,
  },
];
var cart = [];
function addItems(items) {
  if (cart.length < 10) {
    cart.push(items);
    return "Items: ".concat(cart);
  } else {
    return "The cart is full.";
  }
}
function discardItem(items) {
  if (cart.includes(items)) {
    var indx = cart.indexOf(items);
    cart.splice(indx, 1);
    return ""
      .concat(items, " Successfully Discarded \nUpdated Items: ")
      .concat(cart);
  } else if (!cart.length) {
    return "Add item first";
  } else {
    return "Item Not Found";
  }
}
function displayTotalPrice() {
  var sum = 0;
  for (var _i = 0, itemsList_1 = itemsList; _i < itemsList_1.length; _i++) {
    var items = itemsList_1[_i];
    for (var _a = 0, cart_1 = cart; _a < cart_1.length; _a++) {
      var cartItem = cart_1[_a];
      if (items.name == cartItem) {
        sum += items.price;
      }
    }
  }
  return "Total: ".concat(sum);
}
function displayCartQuantity() {
  var size = cart.length;
  return "Cart Quantity: ".concat(size);
}
console.log(addItems("apple"));
console.log(addItems("banana"));
console.log(addItems("melon"));
console.log(addItems("banana"));
console.log(addItems("orange"));
console.log(addItems("grapes"));
console.log(addItems("apple"));
console.log(addItems("melon"));
console.log(addItems("banana"));
console.log(addItems("orange"));
console.log(addItems("grapes"));
console.log(addItems("apple"));
console.log(addItems("orange"));
console.log(discardItem("banana"));
console.log(displayTotalPrice());
console.log(displayCartQuantity());
