import Category from "../models/Category";

export const categories = [
  new Category({ id: 1, name: "Clothing", emoji: "👕", tint: "bg-orange/25" }),
  new Category({ id: 2, name: "Shoes", emoji: "👟", tint: "bg-sage/30" }),
  new Category({ id: 3, name: "Bags", emoji: "👜", tint: "bg-rust/20" }),
  new Category({ id: 4, name: "Accessories", emoji: "⌚", tint: "bg-sand" }),
  new Category({ id: 5, name: "Home & Decor", emoji: "🪴", tint: "bg-forest/15" }),
  new Category({ id: 6, name: "Books", emoji: "📚", tint: "bg-orange/15" }),
];
