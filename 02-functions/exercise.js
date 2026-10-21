export function greet(name) {
  return `Hello, ${name}!`;
}

export const double = (n) => {
  return n * 2;
};

export const applyDiscount = (amount, percentage) => {
  return amount - (amount * percentage) / 100;
};

export function formatPrice(amount, currency = "EGP") {
  return `${amount} ${currency}`;
}

export function applyTwice(fn, value) {
  return fn(fn(value));
}