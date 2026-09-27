import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaRegUser } from "react-icons/fa";
import { useStore } from "../Context/store";

export default function Header() {
  const { itemCount } = useStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const items = [{ name: "Discover", path: "/" }, { name: "Shop", path: "/store" }, { name: "Our story", path: "/about" }, { name: "Connect", path: "/contact" }];
  const runSearch = (value) => { const trimmedValue = value.trim(); navigate(trimmedValue ? `/search?q=${encodeURIComponent(trimmedValue)}` : "/search", { replace: true }); };
  const handleSearchChange = (event) => { const value = event.target.value; setQuery(value); runSearch(value); };
  const submitSearch = (event) => { event.preventDefault(); runSearch(query); setSearchOpen(false); };
  return (
    <header className="sticky top-0 z-50 border-b border-[#18201d]/8 bg-[#f8f8f3]/90 backdrop-blur-xl">
      <div className="page-shell flex h-[74px] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Aven home"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#18201d] text-sm font-black text-[#d9ff8c]">A</span><span className="font-display text-xl font-extrabold tracking-[-0.04em] text-[#18201d]">AVEN</span></Link>
        <nav className="hidden items-center gap-1 md:ml-6 md:flex" aria-label="Main navigation">
          {items.map((item) => { const active = item.path === "/store" ? pathname.startsWith("/store") : pathname === item.path; return <Link key={item.path} to={item.path} className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition ${active ? "bg-[#18201d] text-white" : "text-[#657069] hover:bg-white hover:text-[#18201d]"}`}>{item.name}</Link>; })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <form onSubmit={submitSearch} className="hidden items-center gap-2 rounded-full border border-[#18201d]/10 bg-white px-4 py-2.5 lg:flex"><FaSearch className="text-sm text-[#7a847e]" /><input value={query} onChange={handleSearchChange} type="search" placeholder="Search the edit" className="w-36 bg-transparent text-sm outline-none placeholder:text-[#99a09c]" aria-label="Search products" /></form>
          <button type="button" onClick={() => setSearchOpen(!searchOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#18201d]/10 bg-white text-[#18201d] lg:hidden" aria-label="Search products"><FaSearch /></button>
          <Link to="/login" className="hidden h-10 w-10 place-items-center rounded-full border border-[#18201d]/10 bg-white text-[#18201d] transition hover:bg-[#eef4df] sm:grid" aria-label="Account"><FaRegUser /></Link>
          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full bg-[#d9ff8c] text-[#18201d] transition hover:scale-105" aria-label={`Cart with ${itemCount} items`}><FaShoppingBag /><span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-[#18201d] px-1 text-[10px] font-bold text-white">{itemCount}</span></Link>
        </div>
      </div>
      {searchOpen && <form onSubmit={submitSearch} className="flex gap-2 border-t border-[#18201d]/8 bg-white p-3 md:hidden"><input autoFocus value={query} onChange={handleSearchChange} className="min-w-0 flex-1 rounded-full border border-[#18201d]/10 px-4 py-3 outline-none" placeholder="Search products" /><button className="rounded-full bg-[#18201d] px-4 text-white" aria-label="Submit search"><FaSearch /></button></form>}
    </header>
  );
}
