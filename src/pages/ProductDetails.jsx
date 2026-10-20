import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import content from "../data/content";
import { products } from "../data/products";
import { getCategory, getCondition, getProduct, getVendor } from "../data/lookup";
import { useCart } from "../context/useCart";
import { formatDate, formatPrice } from "../utils/format";

export default function ProductDetails() {
  const t = content.product;
  const { id } = useParams();
  const { cart, isSold, addToCart } = useCart();
  const product = getProduct(Number(id));

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg">{t.notFound}</p>
        <Link to="/shop" className="mt-4 inline-block font-semibold text-rust hover:underline">{t.back}</Link>
      </div>
    );
  }

  const category = getCategory(product.categoryId);
  const condition = getCondition(product.conditionId);
  const vendor = getVendor(product.vendorId);
  const sold = isSold(product);
  const inCart = cart.has(product.id);
  const related = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-12">
      <Link to="/shop" className="text-sm font-semibold text-rust hover:underline">← {t.back}</Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className={`flex h-72 items-center justify-center rounded-3xl text-9xl md:h-96 ${category.tint}`}>
          <span className={sold ? "opacity-40" : ""}>{product.emoji}</span>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-sage">{category.name}</p>
          <h1 className="font-display text-5xl font-bold leading-tight">{product.name}</h1>
          <p className="text-3xl font-semibold text-rust">{formatPrice(product.price)}</p>
          <p className="text-ink/80">{product.description}</p>

          <dl className="space-y-1 text-sm">
            <div className="flex gap-2"><dt className="font-semibold">{t.conditionLabel}:</dt><dd>{condition.name} · {condition.description}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold">{t.vendorLabel}:</dt><dd>{vendor.storeName}, {vendor.city}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold">{t.listedLabel}:</dt><dd>{formatDate(product.dateListed)}</dd></div>
          </dl>

          {sold ? (
            <p className="rounded-2xl bg-rust/10 p-4 font-medium text-rust">{t.soldNote}</p>
          ) : inCart ? (
            <Link to="/cart" className="inline-block rounded-full bg-forest px-6 py-3 font-semibold text-cream hover:opacity-90">{t.goToCart}</Link>
          ) : (
            <button type="button" onClick={() => addToCart(product)} className="rounded-full bg-orange px-6 py-3 font-semibold text-ink hover:opacity-90">
              {t.addToCart}
            </button>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="mb-4 font-display text-3xl font-bold">{t.relatedTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
