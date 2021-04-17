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

let free_icon = document.createElement("img")
free_icon.setAttribute("src", "https://www.iconsdb.com/icons/preview/red/free-badge-xxl.png");
free_icon.classList.add("free-icon");