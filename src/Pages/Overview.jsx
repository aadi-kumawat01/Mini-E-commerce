import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaStar, FaTruck, FaUndo, FaArrowLeft, FaShieldAlt } from "react-icons/fa";

export default function Overview() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchProduct = async () => { await axios.get(`https://dummyjson.com/products/${id}`).then(response => setProduct(response.data)).catch(() => setProduct({})); };
  useEffect(() => { fetchProduct(); }, [id]);
  return <main className="min-h-screen py-8 md:py-14"><div className="page-shell">
    <Link to="/store" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#657069] hover:text-[#18201d]"><FaArrowLeft /> Back to the edit</Link>
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#eef0e8] p-8 md:min-h-[620px]"><span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#5e6a63]">Nivara pick</span><img src={product?.thumbnail} alt={product?.title} className="max-h-[520px] w-full object-contain" /></div>
      <div className="flex flex-col justify-center"><span className="section-kicker">{product?.category}</span><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-.05em] text-[#18201d] md:text-6xl">{product?.title}</h1><div className="mt-5 flex items-center gap-3"><span className="flex items-center gap-1.5 rounded-full bg-[#fff1cf] px-3 py-1.5 text-sm font-bold text-[#8a6516]"><FaStar /> {product?.rating}</span><span className="text-sm text-[#7b857f]">Rated by verified buyers</span></div><p className="mt-7 max-w-xl text-lg leading-8 text-[#68736c]">{product?.description}</p>
        <div className="mt-8 flex items-end gap-4"><span className="font-display text-4xl font-extrabold text-[#18201d]">${product?.price}</span><span className="mb-1 rounded-full bg-[#e5f6df] px-3 py-1 text-xs font-bold text-[#39753b]">{product?.discountPercentage}% off</span></div>
        <div className="mt-7 grid grid-cols-2 gap-3 text-sm"><div className="rounded-2xl border border-[#18201d]/10 bg-white p-4"><span className="text-[#7b857f]">Brand</span><p className="mt-1 font-bold">{product?.brand || "Nivara select"}</p></div><div className="rounded-2xl border border-[#18201d]/10 bg-white p-4"><span className="text-[#7b857f]">Availability</span><p className="mt-1 font-bold text-[#39753b]">{product?.stock} in stock</p></div></div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button className="flex-1 rounded-full bg-[#d9ff8c] px-8 py-4 font-bold text-[#18201d] transition hover:bg-[#c7ef72]">Add to bag</button><button className="flex-1 rounded-full bg-[#18201d] px-8 py-4 font-bold text-white transition hover:bg-[#40542a]">Buy it now</button></div>
        <div className="mt-8 grid gap-3 border-t border-[#18201d]/10 pt-7 text-sm text-[#5f6a64]"><p className="flex items-center gap-3"><FaTruck className="text-[#638331]" /> {product?.shippingInformation}</p><p className="flex items-center gap-3"><FaUndo className="text-[#638331]" /> {product?.returnPolicy}</p><p className="flex items-center gap-3"><FaShieldAlt className="text-[#638331]" /> Secure, protected checkout</p></div>
      </div>
    </div>
    {product.reviews?.length > 0 && <section className="mt-20 border-t border-[#18201d]/10 pt-14"><p className="section-kicker">Real words, real people</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em]">What buyers are saying.</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{product.reviews.map((review,index) => <article key={index} className="rounded-3xl border border-[#18201d]/8 bg-white p-6"><p className="text-[#e2aa38]">★ {review.rating}</p><p className="mt-4 leading-7 text-[#66716a]">“{review.comment}”</p><h3 className="mt-6 text-sm font-bold">{review.reviewerName}</h3></article>)}</div></section>}
  </div></main>;
}
