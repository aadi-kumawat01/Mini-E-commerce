import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="page-shell py-4 md:py-8"><div className="soft-grid relative overflow-hidden rounded-[2rem] bg-[#17201c] text-white md:min-h-[640px]">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#d9ff8c]/10 blur-3xl" />
      <div className="grid min-h-[inherit] items-center gap-8 p-6 sm:p-10 md:grid-cols-[1.02fr_.98fr] md:p-14 lg:p-20">
        <div className="relative z-10 py-2 md:py-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#d9ff8c] sm:px-4 sm:py-2 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ff8c]" /> The new everyday edit</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[.98] tracking-[-.06em] sm:mt-7 sm:text-6xl lg:text-7xl">Better things for <span className="text-[#d9ff8c]">real life.</span></h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/62 sm:mt-6 sm:text-lg sm:leading-7">Thoughtfully chosen tech, beauty and everyday essentials—made to look good, work hard and last longer.</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-9"><Link to="/store" className="flex items-center gap-3 rounded-full bg-[#d9ff8c] px-5 py-3 font-bold text-[#17201c] transition hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:py-3.5">Shop the collection <FaArrowRight className="text-sm" /></Link><Link to="/about" className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3.5">Why Aven?</Link></div>
          <div className="mt-7 hidden items-center gap-4 text-sm text-white/60 sm:mt-10 sm:flex"><div className="flex -space-x-2">{["AM", "RK", "SJ"].map((name) => <span key={name} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#17201c] bg-[#f4eee3] text-[10px] font-bold text-[#17201c]">{name}</span>)}</div><span><b className="text-white">4.9</b> <FaStar className="mx-1 inline text-[#d9ff8c]" /> loved by everyday curators</span></div>
        </div>
        <div className="relative hidden min-h-[350px] md:block md:min-h-[520px]"><div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-[#d9ff8c] via-[#84c6aa] to-[#8b7de8] opacity-90 blur-2xl" /><div className="hero-float absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1312] shadow-2xl"><img src="/hero.png" alt="Curated technology and lifestyle collection" className="h-full w-full object-cover object-[70%_center]" /></div><div className="absolute bottom-5 left-[-8px] z-10 rounded-2xl border border-white/10 bg-white/95 p-4 text-[#17201c] shadow-xl sm:left-[-24px]"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#6b756f]">This week</p><p className="mt-1 font-display text-lg font-bold">Fresh finds, less noise.</p></div></div>
      </div>
    </div></section>
  );
}
