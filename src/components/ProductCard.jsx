import { Link } from "react-router-dom";
import content from "../data/content";
import { getCategory, getCondition, getVendor } from "../data/lookup";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/format";

export default function ProductCard({ product }) {
  const { isSold } = useCart();
  const sold = isSold(product);
  const category = getCategory(product.categoryId);
  const condition = getCondition(product.conditionId);
  const vendor = getVendor(product.vendorId);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-white transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
    >
      <div className={`relative flex h-40 items-center justify-center text-6xl ${category.tint}`}>
        <span className={sold ? "opacity-40" : ""}>{product.emoji}</span>
        {sold && (
          <span className="absolute right-3 top-3 rounded-full bg-rust px-3 py-1 text-xs font-semibold text-cream">
            {content.product.sold}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs uppercase tracking-wide text-sage">{category.name} · {condition.name}</p>
        <h3 className="font-display text-xl font-bold leading-tight">{product.name}</h3>
        <p className="text-sm text-ink/70">{vendor.storeName}</p>
        <p className="mt-auto pt-2 text-lg font-semibold text-rust">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
