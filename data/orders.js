import formatCurrency from "../scripts/utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getProduct, loadProductsFetch } from "./products.js";
import { updateCartQuantity } from "../scripts/amazon.js";

if (window.location.pathname === '/orders.html') {
  renderOrdersGrid();
}

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function formatTime(time) {
  const dayjsTime = dayjs(time);
  return dayjsTime.format('MMMM D');
}

async function renderOrdersGrid() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  updateCartQuantity();

  let ordersGridHTML = '';

  orders.forEach(order => {
    ordersGridHTML += `        
      <div class="order-container">
          
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${formatTime(order.orderTime)}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatCurrency(order.totalCostCents)}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>

        <div class="order-details-grid">
          ${generateOrderDetails(order.products)}
        </div>
      </div>
    `;
  });

  document.querySelector('.js-orders-grid')
    .innerHTML = ordersGridHTML || 'Looks like you have no placed orders yet.';
}

function generateOrderDetails(products) {
  let orderDetailsHTML = '';

  products.forEach((productDetails) => {
    const product = getProduct(productDetails.productId);
    orderDetailsHTML += `
      <div class="product-image-container">
        <img src="${product.image}">
      </div>

      <div class="product-details">
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${formatTime(productDetails.estimatedDeliveryTime)}
        </div>
        <div class="product-quantity">
          Quantity: ${productDetails.quantity}
        </div>
        <button class="buy-again-button button-primary">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <a href="tracking.html">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    `
  })

  return orderDetailsHTML;
}