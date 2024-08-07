import { formatCurrency } from "../scripts/utils/money.js"

console.log('test suite: formatCurrency');

console.log('convert cents into dollars');
if (formatCurrency(2095)  === '20.95') {
  console.log('%cpassed', 'color: green');
} else {
  console.log('%cfailed', 'color: red');
}

console.log('works with 0');
if (formatCurrency(0)  === '0.00') {
  console.log('%cpassed', 'color: green');
} else {
  console.log('%cfailed', 'color: red');
}

console.log('round up when needed');
if (formatCurrency(2000.5)  === '20.01') {
  console.log('%cpassed', 'color: green');
} else {
  console.log('%cfailed', 'color: red');
}

console.log('round down when needed');
if (formatCurrency(2000.4)  === '20.00') {
  console.log('%cpassed', 'color: green');
} else {
  console.log('%cfailed', 'color: red');
}

console.log('handles a lot of decimal digits');
if (formatCurrency(1312.99999)  === '13.13') {
  console.log('%cpassed', 'color: green');
} else {
  console.log('%cfailed', 'color: red');
}