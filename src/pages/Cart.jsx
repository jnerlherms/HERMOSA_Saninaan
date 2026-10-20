import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import content from "../data/content";
import { getCategory, getVendor } from "../data/lookup";
import { useCart } from "../context/useCart";
import Buyer from "../models/Buyer";
import { formatPrice } from "../utils/format";

const fieldClass = "mt-1 w-full rounded-xl border border-sand bg-white px-3 py-2";

export default function Cart() {
  const t = content.cart;
  const navigate = useNavigate();
  const { cart, removeFromCart, placeOrder } = useCart();
  const [form, setForm] = useState({ name: "", city: "", phone: "" });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(new Buyer(form));
    navigate("/orders");
  };

  if (cart.count === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-5xl font-bold">{t.title}</h1>
        <p className="mt-4">{t.empty}</p>
        <Link to="/shop" className="mt-6 inline-block rounded-full bg-orange px-6 py-3 font-semibold text-ink hover:opacity-90">{t.emptyCta}</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-5xl font-bold">{t.title}</h1>
      <p className="mt-1 text-sm text-ink/70">{t.oneOfAKind}</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
        <ul className="space-y-3">
          {cart.items.map((p) => (
            <li key={p.id} className="flex items-center gap-4 rounded-2xl border border-sand bg-white p-4">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-3xl ${getCategory(p.categoryId).tint}`}>{p.emoji}</div>
              <div className="min-w-0 flex-1">
                <Link to={`/product/${p.id}`} className="font-display text-xl font-bold hover:underline">{p.name}</Link>
                <p className="text-sm text-ink/70">{getVendor(p.vendorId).storeName}</p>
              </div>
              <p className="font-semibold text-rust">{formatPrice(p.price)}</p>
              <button type="button" onClick={() => removeFromCart(p.id)} className="text-sm font-semibold text-ink/60 hover:text-rust">{t.remove}</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4 self-start rounded-2xl border border-sand bg-white p-5">
          <h2 className="font-display text-2xl font-bold">{t.checkoutTitle}</h2>
          <label className="block text-sm font-medium">{t.name}
            <input required value={form.name} onChange={update("name")} className={fieldClass} />
          </label>
          <label className="block text-sm font-medium">{t.city}
            <input required value={form.city} onChange={update("city")} className={fieldClass} />
          </label>
          <label className="block text-sm font-medium">{t.phone}
            <input required type="tel" value={form.phone} onChange={update("phone")} className={fieldClass} />
          </label>
          <p className="flex justify-between border-t border-sand pt-4 text-lg font-semibold">
            <span>{t.total}</span><span className="text-rust">{formatPrice(cart.total)}</span>
          </p>
          <button type="submit" className="w-full rounded-full bg-forest px-6 py-3 font-semibold text-cream hover:opacity-90">{t.placeOrder}</button>
        </form>
      </div>
    </div>
  );
}
