import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector('.js-checkout-cart-quantity')
    .innerHTML = cartQuantity === 1 ? `${cartQuantity} item` : `${cartQuantity} items`;
}