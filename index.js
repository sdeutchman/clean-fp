// global variables for cart and cart total
var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({                              // Add a record to the cart array to add items to the cart
    name: name,
    price: price
  });
  calc_cart_total();                                // Update the total because the cart just changed
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();          // Get all the buy buttons on the page, then loop through them.
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20)     // Figure out if they get free shipping
      button.show_free_shipping_icon();             // Show free icon
    else
      button.hide_free_shipping_icon();             // Hide free icon
  }
}

function update_tax_dom() {                         // Calculates tax and updates the DOM
  set_tax_dom(shopping_cart_total * 0.10);
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;            // Sum all the prices
  }
  set_cart_total_dom();                           // Update the dom to reflect the new total
  update_shipping_icons();                        // Run the update icons function
  update_tax_dom();
}
