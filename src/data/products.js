import Product from "../models/Product";

export const products = [
  new Product({ id: 1, vendorId: 1, categoryId: 1, conditionId: 2, name: "Vintage Denim Jacket", price: 850, dateListed: "2026-09-28", emoji: "🧥", description: "Washed 90s denim with brass buttons and a roomy fit." }),
  new Product({ id: 2, vendorId: 2, categoryId: 1, conditionId: 1, name: "Floral Sundress", price: 320, dateListed: "2026-10-02", emoji: "👗", description: "Light cotton dress, perfect for a day at the beach." }),
  new Product({ id: 3, vendorId: 3, categoryId: 1, conditionId: 1, name: "Linen Barong Polo", price: 600, dateListed: "2026-10-05", emoji: "👔", description: "Breathable linen polo with simple barong-style stitching." }),
  new Product({ id: 4, vendorId: 1, categoryId: 2, conditionId: 2, name: "Retro Basketball Sneakers", price: 1200, dateListed: "2026-09-30", emoji: "👟", description: "High-top sneakers with a classic court look." }),
  new Product({ id: 5, vendorId: 4, categoryId: 2, conditionId: 3, name: "Leather Loafers", price: 700, dateListed: "2026-09-20", emoji: "👞", description: "Brown leather loafers with a worn-in shine." }),
  new Product({ id: 6, vendorId: 3, categoryId: 3, conditionId: 1, name: "Woven Banig Tote", price: 450, dateListed: "2026-10-08", emoji: "👜", description: "Handwoven banig tote with sturdy cotton handles." }),
  new Product({ id: 7, vendorId: 2, categoryId: 3, conditionId: 2, name: "Canvas Backpack", price: 380, dateListed: "2026-10-01", emoji: "🎒", description: "Roomy canvas backpack with a padded laptop pocket." }),
  new Product({ id: 8, vendorId: 4, categoryId: 4, conditionId: 2, name: "Analog Wristwatch", price: 950, dateListed: "2026-09-25", emoji: "⌚", description: "Silver analog watch with a new leather strap." }),
  new Product({ id: 9, vendorId: 2, categoryId: 4, conditionId: 1, name: "Beaded Necklace", price: 150, dateListed: "2026-10-06", emoji: "📿", description: "Colorful handmade beads on a long cord." }),
  new Product({ id: 10, vendorId: 3, categoryId: 5, conditionId: 1, name: "Rattan Plant Basket", price: 400, dateListed: "2026-10-04", emoji: "🪴", description: "Woven rattan basket that fits a medium pot." }),
  new Product({ id: 11, vendorId: 1, categoryId: 5, conditionId: 3, name: "Ceramic Coffee Set", price: 520, dateListed: "2026-09-18", emoji: "☕", description: "Two mugs and a small pot with a hand-painted rim." }),
  new Product({ id: 12, vendorId: 4, categoryId: 6, conditionId: 2, name: "Cebuano Folk Tales", price: 180, dateListed: "2026-10-03", emoji: "📚", description: "Collected stories passed down in Cebuano homes." }),
  new Product({ id: 13, vendorId: 1, categoryId: 4, conditionId: 3, name: "Vintage Film Camera", price: 2400, dateListed: "2026-09-10", emoji: "📷", status: "Sold", description: "A 35mm film camera that already found its new owner." }),
  new Product({ id: 14, vendorId: 2, categoryId: 1, conditionId: 2, name: "Wool Cardigan", price: 480, dateListed: "2026-09-22", emoji: "🧶", description: "Soft knit cardigan for cool evenings in Baguio or Busay." }),
];
