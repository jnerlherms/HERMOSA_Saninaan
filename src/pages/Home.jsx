import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import content from "../data/content";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { vendors } from "../data/vendors";

export default function Home() {
  const t = content.home;
  const featured = [...products]
    .filter((p) => p.isAvailable)
    .sort((a, b) => b.dateListed - a.dateListed)
    .slice(0, 4);

  return (
    <div className="space-y-14">
      <section className="rounded-3xl bg-forest px-6 py-14 text-center text-cream md:px-12 md:py-20">
        <p className="text-sm uppercase tracking-widest text-orange">{content.hero.eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-5xl font-bold leading-tight md:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">{content.hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="rounded-full bg-orange px-6 py-3 font-semibold text-ink hover:opacity-90">
            {content.hero.primaryCta}
          </Link>
          <a href="#vendors" className="rounded-full border border-cream/50 px-6 py-3 font-semibold hover:bg-cream/10">
            {content.hero.secondaryCta}
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-3xl font-bold">{t.categoriesTitle}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className={`flex flex-col items-center gap-2 rounded-2xl p-5 text-center font-medium transition hover:-translate-y-1 motion-reduce:transition-none ${c.tint}`}
            >
              <span className="text-4xl">{c.emoji}</span>
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">{t.featuredTitle}</h2>
          <Link to="/shop" className="text-sm font-semibold text-rust hover:underline">{t.featuredCta}</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section id="vendors" className="scroll-mt-24">
        <h2 className="mb-4 font-display text-3xl font-bold">{t.vendorsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((v) => (
            <article key={v.id} className="rounded-2xl border border-sand bg-white p-5">
              <h3 className="font-display text-xl font-bold text-rust">{v.storeName}</h3>
              <p className="text-sm text-sage">{v.city}</p>
              <p className="mt-2 text-sm text-ink/80">{v.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
