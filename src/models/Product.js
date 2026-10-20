export default class Product {
  constructor({ id, vendorId, categoryId, conditionId, name, description, price, dateListed, emoji, status = "Available" }) {
    this.id = id;
    this.vendorId = vendorId;
    this.categoryId = categoryId;
    this.conditionId = conditionId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.dateListed = new Date(dateListed);
    this.emoji = emoji;
    this.status = status;
  }

  get isAvailable() {
    return this.status === "Available";
  }
}
