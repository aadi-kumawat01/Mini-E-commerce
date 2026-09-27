import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="mt-8 bg-[#17201c] pb-20 text-white md:mt-10 lg:pb-0"><div className="page-shell py-16 md:py-20">
    <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_.8fr]">
      <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#d9ff8c]">The Aven approach</p><h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">A smaller edit. A clearer choice.</h2><p className="mt-4 text-white/55">A focused frontend shop built around browsing, product details and a simple cart.</p></div>
      <p className="max-w-sm self-end text-sm leading-6 text-white/50">Explore the collection, compare the details, then keep only what feels useful.</p>
    </div>
    <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4"><div><Link to="/" className="font-display text-2xl font-extrabold tracking-[-.04em]">AVEN</Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/50">Thoughtful essentials for modern, everyday living.</p></div><div><h3 className="text-sm font-bold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/50"><Link to="/">Discover</Link><Link to="/store">Shop all</Link><Link to="/about">Our story</Link></div></div><div><h3 className="text-sm font-bold">Need help?</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/50"><Link to="/contact">Contact</Link><span>Shipping & returns</span><span>Care guide</span></div></div></div>
    <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"><span>© 2026 Aven. Made for everyday.</span><span>Privacy · Terms · Accessibility</span></div>
  </div></footer>;
}
