// Every item is one-of-a-kind, so each product can only be in the cart once.
// Methods return a NEW Cart so React notices the change.
export default class Cart {
  constructor(items = []) {
    this.items = items;
  }

  get count() {
    return this.items.length;
  }

  get total() {
    return this.items.reduce((sum, product) => sum + product.price, 0);
  }

  has(productId) {
    return this.items.some((product) => product.id === productId);
  }

  add(product) {
    return this.has(product.id) ? this : new Cart([...this.items, product]);
  }

  remove(productId) {
    return new Cart(this.items.filter((product) => product.id !== productId));
  }
}
