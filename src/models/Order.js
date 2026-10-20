export default class Order {
  constructor({ id, items, buyer, date = new Date() }) {
    this.id = id;
    this.items = items;
    this.buyer = buyer;
    this.date = date;
  }

  get total() {
    return this.items.reduce((sum, product) => sum + product.price, 0);
  }
}
