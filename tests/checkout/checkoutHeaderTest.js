import { renderCheckoutHeader } from "../../scripts/checkout/checkoutHeader.js";
import { loadFromStorage } from "../../data/cart.js";
import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

describe('test suite: renderCheckoutHeader', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML  = `
      <div class="js-checkout-cart-quantity"></div>
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();
    renderCheckoutHeader();
    renderOrderSummary();
  });

  it('displays the header correctly', () => {
    expect(document.querySelector('.js-checkout-cart-quantity').innerText).toContain('3 items');
  });

  it('update the header when deleting a product', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(document.querySelector('.js-checkout-cart-quantity').innerText).toContain('1 items');
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });
});