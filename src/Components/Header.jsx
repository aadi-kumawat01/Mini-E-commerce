import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaRegUser } from "react-icons/fa";
import { store } from "../Context/StoreContext";

export default function Header() {
  const { cart } = useContext(store);
  const { pathname } = useLocation();
  const items = [{ name: "Discover", path: "/" }, { name: "Shop", path: "/store" }, { name: "Our story", path: "/about" }, { name: "Connect", path: "/contact" }];
  return (
    <header className="sticky top-0 z-50 border-b border-[#18201d]/8 bg-[#f8f8f3]/90 backdrop-blur-xl">
      <div className="page-shell flex h-[74px] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Nivara home"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#18201d] text-sm font-black text-[#d9ff8c]">N</span><span className="font-display text-xl font-extrabold tracking-[-0.04em] text-[#18201d]">NIVARA</span></Link>
        <nav className="hidden items-center gap-1 md:ml-6 md:flex" aria-label="Main navigation">
          {items.map((item) => { const active = item.path === "/store" ? pathname.startsWith("/store") : pathname === item.path; return <Link key={item.path} to={item.path} className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition ${active ? "bg-[#18201d] text-white" : "text-[#657069] hover:bg-white hover:text-[#18201d]"}`}>{item.name}</Link>; })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-full border border-[#18201d]/10 bg-white px-4 py-2.5 lg:flex"><FaSearch className="text-sm text-[#7a847e]" /><input type="text" placeholder="Search the edit" className="w-36 bg-transparent text-sm outline-none placeholder:text-[#99a09c]" aria-label="Search products" /></label>
          <button className="hidden h-10 w-10 place-items-center rounded-full border border-[#18201d]/10 bg-white text-[#18201d] transition hover:bg-[#eef4df] sm:grid" aria-label="Account"><FaRegUser /></button>
          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full bg-[#d9ff8c] text-[#18201d] transition hover:scale-105" aria-label={`Cart with ${cart?.length || 0} items`}><FaShoppingBag /><span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-[#18201d] px-1 text-[10px] font-bold text-white">{cart?.length || 0}</span></Link>
        </div>
      </div>
    </header>
  );
}
