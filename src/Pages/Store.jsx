import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import SkeletonProduct from "../Components/SkeletonProduct";
import Error from "../Components/Error";
import { useproducts } from "../Hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import { FaSlidersH } from "react-icons/fa";

export default function Store() {
  const { slug } = useParams();
  const { error, products, loading } = useproducts(slug);
  const [categories, setCatgories] = useState([]);
  useEffect(() => { const fetchcategories = () => { axios.get("https://dummyjson.com/products/categories").then(response => setCatgories(response.data)).catch(() => setCatgories([])); }; fetchcategories(); }, []);
  if (error) return <Error />;
  const title = slug ? slug.replaceAll("-", " ") : "All essentials";
  return <main className="min-h-screen bg-[#f8f8f3] py-10 md:py-16"><div className="page-shell">
    <div className="mb-12 grid gap-6 border-b border-[#18201d]/10 pb-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="section-kicker">Curated catalogue</p><h1 className="mt-3 text-5xl font-extrabold capitalize tracking-[-.055em] text-[#18201d] md:text-7xl">{title}</h1><p className="mt-4 max-w-xl text-[#6c7771]">Useful, beautiful and worth bringing home. Explore the complete Nivara edit.</p></div>{!loading && <span className="w-fit rounded-full bg-[#eef4df] px-4 py-2 text-sm font-bold text-[#527026]">{products.length} considered picks</span>}</div>
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside><div className="sticky top-24 rounded-3xl border border-[#18201d]/8 bg-white p-3"><div className="flex items-center gap-2 px-3 py-3 font-display text-sm font-extrabold"><FaSlidersH className="text-[#6d8c39]" /> Shop by category</div><div className="max-h-[65vh] space-y-1 overflow-auto pr-1"><Link to="/store" className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition ${!slug ? "bg-[#18201d] text-white" : "text-[#66716a] hover:bg-[#eef0e8]"}`}>All essentials</Link>{categories.map(category => <Link key={category.slug} to={`/store/${category.slug}`} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition ${slug === category.slug ? "bg-[#18201d] text-white" : "text-[#66716a] hover:bg-[#eef0e8]"}`}>{category.name}</Link>)}</div></div></aside>
      <section><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{loading ? [1,2,3,4,5,6,7,8].map(item => <SkeletonProduct key={item} />) : products.map(product => <ProductCard key={product.id} product={product} />)}</div></section>
    </div>
  </div></main>;
}
