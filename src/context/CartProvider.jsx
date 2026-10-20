import { useState } from "react";
import { CartContext } from "./cartContext";
import Cart from "../models/Cart";
import Order from "../models/Order";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(new Cart());
  const [orders, setOrders] = useState([]);
  const [soldIds, setSoldIds] = useState([]);

  // A product is sold if the data says so, or if it was bought in this session
  const isSold = (product) => !product.isAvailable || soldIds.includes(product.id);

  const addToCart = (product) => {
    if (!isSold(product)) setCart((current) => current.add(product));
  };

  const removeFromCart = (productId) => setCart((current) => current.remove(productId));

  const placeOrder = (buyer) => {
    const order = new Order({ id: orders.length + 1, items: cart.items, buyer });
    setOrders((current) => [order, ...current]);
    setSoldIds((current) => [...current, ...cart.items.map((p) => p.id)]);
    setCart(new Cart());
    return order;
  };

  return (
    <CartContext.Provider value={{ cart, orders, isSold, addToCart, removeFromCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
}
