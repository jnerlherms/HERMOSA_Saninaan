import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import content from "../data/content";
import { categories } from "../data/categories";
import { conditions } from "../data/conditions";
import { products } from "../data/products";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/format";

const maxLimit = Math.max(...products.map((p) => p.price));

const sorters = {
  newest: (a, b) => b.dateListed - a.dateListed,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
};

const fieldClass = "w-full rounded-xl border border-sand bg-white px-3 py-2";

export default function Shop() {
  const t = content.shop;
  const { isSold } = useCart();
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "all";

  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState("all");
  const [maxPrice, setMaxPrice] = useState(maxLimit);
  const [sort, setSort] = useState("newest");
  const [hideSold, setHideSold] = useState(false);

  const shown = products
    .filter(
      (p) =>
        (category === "all" || p.categoryId === Number(category)) &&
        (condition === "all" || p.conditionId === Number(condition)) &&
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(search.trim().toLowerCase()) &&
        (!hideSold || !isSold(p))
    )
    .sort(sorters[sort]);

  const setCategory = (value) => setParams(value === "all" ? {} : { category: value });

  const reset = () => {
    setParams({});
    setSearch("");
    setCondition("all");
    setMaxPrice(maxLimit);
    setSort("newest");
    setHideSold(false);
  };

  return (
    <div>
      <h1 className="font-display text-5xl font-bold">{t.title}</h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-4 self-start rounded-2xl border border-sand bg-white p-5">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className={fieldClass}
          />

          <label className="block text-sm font-medium">
            {t.categoryLabel}
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${fieldClass} mt-1`}>
              <option value="all">{t.allCategories}</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>

          <label className="block text-sm font-medium">
            {t.conditionLabel}
            <select value={condition} onChange={(e) => setCondition(e.target.value)} className={`${fieldClass} mt-1`}>
              <option value="all">{t.anyCondition}</option>
              {conditions.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>

          <label className="block text-sm font-medium">
            {t.maxPrice}: {formatPrice(maxPrice)}
            <input
              type="range"
              min="0"
              max={maxLimit}
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-1 w-full accent-rust"
            />
          </label>

          <label className="block text-sm font-medium">
            {t.sortLabel}
            <select value={sort} onChange={(e) => setSort(e.target.value)} className={`${fieldClass} mt-1`}>
              {t.sorts.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={hideSold} onChange={(e) => setHideSold(e.target.checked)} className="accent-rust" />
            {t.hideSold}
          </label>

          <button type="button" onClick={reset} className="w-full rounded-full border border-rust px-4 py-2 text-sm font-semibold text-rust hover:bg-rust hover:text-cream">
            {t.reset}
          </button>
        </aside>

        <section>
          <p className="mb-3 text-sm text-ink/70">{t.results(shown.length)}</p>
          {shown.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-sage p-10 text-center">{t.empty}</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
