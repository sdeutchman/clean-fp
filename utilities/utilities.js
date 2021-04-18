const process_button_click = (event) => {
  const { price, item } = event.target.dataset;
  const intPrice = parse_price(price);
  add_item_to_cart(item, intPrice)
}

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", process_button_click);
})


const set_cart_total_dom = () => {
  const newTotal = format_total(shopping_cart_total);
  set_cart_total_element(newTotal);
}

const get_buy_buttons_dom = () => {
  const buttonElements = get_array_buttons();
  return buttonElements.map((current) => {
    return make_button_object(current)
  })
}

const set_tax_dom = (tax) => {
  const cartTotalElement = get_cart_total_element()
  const priceString = get_price_string(cartTotalElement);
  const current_total = parse_price(priceString);
  const plusTax = current_total + tax;
  const plusTaxFormatted = format_total(plusTax);
  set_cart_total_element(plusTaxFormatted)
}

const format_total = (total) => {
  return `$${(Math.round(total * 100) / 100).toFixed(2).toString()}`;
}

const get_cart_total_element = () => {
  return document.getElementById("cart-total")
}

const set_cart_total_element = (newTotal) => {
  document.getElementById("cart-total").innerHTML = newTotal
}

const parse_price = (priceString) => {
  return Number.parseInt(10, priceString.slice(1))
}

const get_price_string = (element) => {
  return element.innerHTML;
}

const get_array_buttons = () => {
  return Array.prototype.slice.call(document.querySelectorAll(".button"))
}

const make_button_object = (button_element) => {
  const { price, item } = button_element.dataset
  const icon = get_shipping_icon(item);
  return {
    item: {
      name: item,
      price: parse_price(price),

    },
    hide_free_shipping_icon: () => {
      icon.style.visibility = "hidden";
    },
    show_free_shipping_icon: () => {
      icon.style.visibility = "visible";
    }
  }
}

const get_shipping_icon = (item) => {
  return document.getElementById(`free-shipping-${item}`)
}