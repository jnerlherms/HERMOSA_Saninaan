# Sanina'an (React)

A front-end rewrite of the Sanina'an thrift marketplace using **React.js + Tailwind CSS only**.

## Links
- Figma design: PASTE_YOUR_FIGMA_LINK_HERE
- Class diagram: [docs/class-diagram.mmd](docs/class-diagram.mmd) and `docs/class-diagram.png`

## Features
- Multi-page routing (Home, Shop, Product Details, Cart, Orders) with React Router
- Dynamic filtering: search, category, condition, max price, sorting, hide sold items
- Cart and checkout with React Context (every item is one-of-a-kind, so no quantities)
- All text comes from `src/data/content.js` and all items come from the model classes in `src/models`
- Responsive layout styled strictly with Tailwind CSS

## Run it
```bash
npm install
npm run dev
```

## Folder guide
```
src/
  models/      Category, ProductCondition, Vendor, Product, Buyer, Cart, Order
  data/        content.js (all UI text), categories, conditions, vendors, products, lookup
  context/     cart state (CartProvider, useCart)
  components/  Navbar, Footer, ProductCard
  pages/       Home, Shop, ProductDetails, Cart, Orders
docs/          class diagram
```
