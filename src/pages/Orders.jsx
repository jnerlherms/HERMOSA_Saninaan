import { Link } from "react-router-dom";
import content from "../data/content";
import { useCart } from "../context/useCart";
import { formatDate, formatPrice } from "../utils/format";

export default function Orders() {
  const t = content.orders;
  const { orders } = useCart();

  return (
    <div>
      <h1 className="font-display text-5xl font-bold">{t.title}</h1>

      {orders.length === 0 ? (
        <div className="py-16 text-center">
          <p>{t.empty}</p>
          <Link to="/shop" className="mt-4 inline-block font-semibold text-rust hover:underline">{content.cart.emptyCta}</Link>
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {orders.map((o) => (
            <li key={o.id} className="rounded-2xl border border-sand bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-bold text-rust">{t.orderNo(o.id)}</h2>
                <p className="text-sm text-ink/70">{t.placedOn} {formatDate(o.date)}</p>
              </div>
              <p className="mt-1 text-sm">{t.deliverTo}: {o.buyer.name}, {o.buyer.city} · {o.buyer.phone}</p>
              <ul className="mt-3 divide-y divide-sand text-sm">
                {o.items.map((p) => (
                  <li key={p.id} className="flex justify-between py-2"><span>{p.emoji} {p.name}</span><span>{formatPrice(p.price)}</span></li>
                ))}
              </ul>
              <p className="mt-3 flex justify-between border-t border-sand pt-3 font-semibold"><span>{t.total}</span><span className="text-rust">{formatPrice(o.total)}</span></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
