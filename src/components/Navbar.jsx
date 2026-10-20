import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import content from "../data/content";
import { useCart } from "../context/useCart";

const links = [
  { to: "/", label: content.nav.home, end: true },
  { to: "/shop", label: content.nav.shop },
  { to: "/orders", label: content.nav.orders },
];

const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-forest text-cream" : "hover:bg-sand"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const cartLabel = `${content.nav.cart} (${cart.count})`;

  return (
    <header className="sticky top-0 z-20 border-b border-sand bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-3xl font-bold text-rust">
          {content.siteName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
          <NavLink to="/cart" className={linkClass}>{cartLabel}</NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={content.nav.menu}
          className="rounded-full px-3 py-2 text-xl hover:bg-sand md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sand px-4 py-3 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>{cartLabel}</NavLink>
        </nav>
      )}
    </header>
  );
}
