var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let object = {itemName: item , itemPrice: Math.floor(Math.random()*100 + 1) }
 cart.push(object)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
 if (cart.length === 0) {
   return ("Your shopping cart is empty.")
 }
 else {
   var x = ""
    for (var i = 0; i < cart.length; i++) {
      x = x + cart[i].itemName + " at $" + cart[i].itemPrice + ", "
    }
    while (i === cart.length) {
     var y = cart[cart.length - 1].itemName + "at $" + cart[cart.length - 1].itemprice + "."
    }
    return ("In your cart, you have " + x + y)  
 }
}

function total() {
  for (var i = 0; i < cart.length; i++) {
    var x = x + cart[i].itemPrice
    return x
  }
}

function removeFromCart(item) {
  for (i === 0; i < cart.length; i++) {
   if (cart[i].itemName === item) {
     cart.splice(i, 1)
     return cart
   }
   else {
     return ("That istem is not in your cart.")
   }
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
}
