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

const itemsList = [
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

let cart = [];

function addItems(items) {
  if (cart.length <= 10) {
    cart.push(items);
  } else {
    console.log("The cart is full.");
  }
  return cart;
}
function discardItem(items) {
  if (cart.includes(items)) {
    const indx = cart.indexOf(items);
    cart.splice(indx, 1);
    console.log(cart);
  } else if (!cart.length) {
    console.log("Add item first");
  } else {
    console.log("Item Not Found");
  }
}

function displayTotalPrice() {
  let sum = 0;
  for (const items of itemsList) {
    for (const cartItem of cart) {
      if (items.name == cartItem) {
        sum += items.price;
      }
    }
  }
  console.log(`Total: ${sum}`);
}

function displayCartQuantity() {
  const size = cart.length;
  console.log(`Cart Quantity: ${size}`);
}
// discardItem("banana");
addItems("apple");
addItems("banana");
addItems("melon");
discardItem("banana");
displayTotalPrice();
displayCartQuantity();
