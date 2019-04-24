var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1){
    return `In your cart, you have ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  var i = 0;
  var statement = ["In your cart, you have"];
  var cartItems = []
  for (i=0; i < cart.length - 1 ; i++) {
    cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
    cartItems.push(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
    cartItems.join(", ")
    statement.push(cartItems)
      return statement.join("")
}

function total() {
  // write your code here
  var sum = 0;
  var i = 0;
  for (i=0; i < cart.length; i++){
      sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var i=0;
  for (i=0; i < cart.length; i++){
      if (cart[i].itemName == item) {
      cart.splice(cart[i])
    }
    break
  }
      return "That item is not in your cart."
  }

function placeOrder(cardNumber) {
  // write your code here
}
