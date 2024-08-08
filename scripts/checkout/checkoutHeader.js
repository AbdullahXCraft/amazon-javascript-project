import { cart } from "../../data/cart-class.js";

export function renderCheckoutHeader() {
  const cartQuantity = cart.calculateCartQuantity();
  document.querySelector('.js-checkout-cart-quantity')
    .innerHTML = cartQuantity === 1 ? `${cartQuantity} item` : `${cartQuantity} items`;
}