import { loadProductsFetch, getProduct } from "../data/products.js";
import { updateCartQuantity } from "./amazon.js";
import { getOrderProduct, getOrder } from "../data/orders.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const url = new URL(window.location.href);
const orderId = url.searchParams.get('orderId');
const productId = url.searchParams.get('productId');

if (!(orderId && productId)) {
  window.location.href = '/orders.html';
  alert('Invalid Order Id or Invalid Product Id.');
}

async function renderTrackingInfo() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  const product = getProduct(productId);
  const order = getOrder(orderId);
  const orderProduct = getOrderProduct(orderId, productId);

  if (!(orderProduct && product)) {
    alert('Invalid Order Id or Invalid Product Id.');
    window.location.href = '/orders.html';
  }

  updateCartQuantity();

  const trackingInfoHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${formatTime(orderProduct.estimatedDeliveryTime)}
    </div>

    <div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${orderProduct.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${getDeliveryPercentage(dayjs(order.orderTime), dayjs(orderProduct.estimatedDeliveryTime))}%;"></div>
    </div>
  `;

  document.querySelector('.js-order-tracking')
    .innerHTML = trackingInfoHTML;
}

function formatTime(time) {
  const dayjsTime = dayjs(time);
  return dayjsTime.format('dddd, MMMM D');
}

function getDeliveryPercentage(orderTime, deliveryTime) {
  const now = dayjs();
  const percentage = (now.diff(orderTime) / deliveryTime.diff(orderTime)) * 100;
  return percentage;
}

renderTrackingInfo();