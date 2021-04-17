function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  console.log(buy_buttons)
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    console.log(item.price, shopping_cart_total)
    console.log(item.price + shopping_cart_total >= 20)
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
}