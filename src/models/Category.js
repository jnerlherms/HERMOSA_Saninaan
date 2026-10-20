export default class Category {
  constructor({ id, name, emoji, tint }) {
    this.id = id;
    this.name = name;
    this.emoji = emoji;
    this.tint = tint; // full Tailwind class for the card background
  }
}
