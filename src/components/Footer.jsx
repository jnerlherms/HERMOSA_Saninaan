import content from "../data/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sand py-8 text-center text-sm text-ink/70">
      <p className="font-display text-2xl font-bold text-rust">{content.siteName}</p>
      <p className="mt-1">{content.footer.text(year)}</p>
    </footer>
  );
}
