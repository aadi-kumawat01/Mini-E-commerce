import React, { useContext } from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { store } from "../Context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(store);
  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border border-[#18201d]/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,32,29,.10)]">
      <Link to={`/product/overview/${product.id}`} className="relative block overflow-hidden bg-[#f0f1eb] p-5"><span className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#53605a] backdrop-blur">{product.category}</span><img src={product.thumbnail} alt={product.title} className="h-56 w-full object-contain transition duration-500 group-hover:scale-105" /></Link>
      <div className="p-5"><div className="flex items-start justify-between gap-4"><div className="min-w-0"><Link to={`/product/overview/${product.id}`}><h2 className="line-clamp-2 font-display text-base font-bold leading-snug text-[#18201d] hover:underline">{product.title}</h2></Link><div className="mt-2 flex items-center gap-1.5 text-xs text-[#6d7771]"><FaStar className="text-[#e2aa38]" /> {product.rating} <span className="text-[#bcc1be]">•</span> Top rated</div></div><span className="shrink-0 font-display text-lg font-extrabold text-[#18201d]">${product.price}</span></div>
        <button onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail, qty: 1 })} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#18201d] py-3 text-sm font-bold text-white transition hover:bg-[#40542a]"><FaPlus className="text-xs" /> Add to bag</button>
      </div>
    </article>
  );
}
