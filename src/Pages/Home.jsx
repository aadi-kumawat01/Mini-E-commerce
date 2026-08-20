import React from "react";
import Hero from "../Components/Hero";
import { useproducts } from "../Hooks/useProducts";
import Error from "../Components/Error";
import SkeletonProduct from "../Components/SkeletonProduct";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBoxOpen, FaLeaf, FaShieldAlt } from "react-icons/fa";

function ProductSection({ kicker, title, copy, products, loading, tinted = false }) {
  return <section className={tinted ? "bg-[#eef0e8] py-20 md:py-28" : "py-20 md:py-28"}><div className="page-shell">
    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">{kicker}</p><h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-[-.045em] text-[#18201d] sm:text-5xl">{title}</h2><p className="mt-3 text-[#6c7771]">{copy}</p></div><Link to="/store" className="flex w-fit items-center gap-2 rounded-full border border-[#18201d]/15 px-5 py-2.5 text-sm font-bold text-[#18201d] transition hover:bg-[#18201d] hover:text-white">View the edit <FaArrowRight className="text-xs" /></Link></div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">{loading ? [1,2,3,4,5].map(item => <SkeletonProduct key={item} />) : products.map(product => <ProductCard key={product.id} product={product} />)}</div>
  </div></section>;
}

export default function Home() {
  const { loading, error, products } = useproducts();
  if (error) return <Error />;
  return <main><Hero />
    <section className="page-shell py-6"><div className="grid divide-y divide-[#18201d]/10 rounded-3xl border border-[#18201d]/8 bg-white px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {[[FaBoxOpen,"Easy delivery","Free shipping on every edit"],[FaShieldAlt,"Secure by design","Protected checkout, always"],[FaLeaf,"Mindfully chosen","Better picks, fewer regrets"]].map(([Icon,title,text]) => <div key={title} className="flex items-center gap-4 px-3 py-6 sm:justify-center"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef4df] text-[#527026]"><Icon /></span><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-0.5 text-xs text-[#7a847e]">{text}</p></div></div>)}
    </div></section>
    <ProductSection kicker="Freshly curated" title="The pieces everyone is talking about." copy="Considered finds for your desk, shelf and everyday routine." products={products.slice(0,5)} loading={loading} />
    <ProductSection kicker="Nivara favourites" title="Small upgrades. Noticeable difference." copy="The most-loved picks, chosen for quality and everyday ease." products={products.slice(5,10)} loading={loading} tinted />
  </main>;
}
