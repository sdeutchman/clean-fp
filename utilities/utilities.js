// ignore code below this line
const set_cart_total_dom = () => {
  const cartTotalElement = document.getElementById("cart-total")
  const newTotal = `$${(Math.round(shopping_cart_total * 100) / 100).toFixed(2).toString()}`;
  cartTotalElement.innerHTML = newTotal;
}

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", (event) => {
    const { price, item } = event.target.dataset;
    const intPrice = Number.parseInt(10, price)
    add_item_to_cart(item, intPrice)
  })
})



const get_buy_buttons_dom = () => {
  const buttonElements = Array.prototype.slice.call(document.querySelectorAll(".button"));
  return buttonElements.map((current) => {
    const { price, item } = current.dataset
    const icon = document.getElementById(`free-shipping-${item}`)
    return {
      item: {
        name: item,
        price: Number.parseInt(10, price),

      },
      hide_free_shipping_icon: () => {
        icon.style.visibility = "hidden";
      },
      show_free_shipping_icon: () => {
        icon.style.visibility = "visible";
      }
    }
  })
}

