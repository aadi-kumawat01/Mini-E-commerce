import { useStore } from "../Context/store";
import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();
  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border border-[#18201d]/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,32,29,.10)]">
      <Link to={`/product/overview/${product.id}`} className="relative block overflow-hidden bg-[#f0f1eb] p-3 sm:p-5"><span className="absolute left-2 top-2 z-10 rounded-full bg-white/85 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#53605a] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">{product.category}</span><img src={product.thumbnail} alt={product.title} loading="lazy" className="h-36 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-56" /></Link>
      <div className="p-3 sm:p-5"><div className="flex items-start justify-between gap-2 sm:gap-4"><div className="min-w-0"><Link to={`/product/overview/${product.id}`}><h2 className="line-clamp-2 text-sm font-bold leading-snug text-[#18201d] hover:underline sm:font-display sm:text-base">{product.title}</h2></Link><div className="mt-1 flex items-center gap-1 text-[10px] text-[#6d7771] sm:mt-2 sm:gap-1.5 sm:text-xs"><FaStar className="text-[#e2aa38]" /> {product.rating}</div></div><span className="shrink-0 font-display text-sm font-extrabold text-[#18201d] sm:text-lg">${product.price}</span></div>
        <button type="button" onClick={() => addToCart(product)} className="mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-[#18201d] py-2 text-xs font-bold text-white transition hover:bg-[#40542a] sm:mt-5 sm:py-3 sm:text-sm"><FaPlus className="text-xs" /> Add to bag</button>
      </div>
    </article>
  );
}
