import { Link, useLocation } from "react-router-dom";
import { FaHome, FaRegUser, FaShoppingBag, FaStore } from "react-icons/fa";
import { useStore } from "../Context/store";

const items = [
  { label: "Home", to: "/", Icon: FaHome },
  { label: "Shop", to: "/store", Icon: FaStore },
  { label: "Cart", to: "/cart", Icon: FaShoppingBag },
  { label: "Account", to: "/login", Icon: FaRegUser },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const { itemCount } = useStore();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#18201d]/10 bg-[#f8f8f3]/95 px-2 pb-[max(.45rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ label, to, Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return <Link key={to} to={to} className={`relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition ${active ? "bg-[#eef4df] text-[#527026]" : "text-[#69736d]"}`} aria-current={active ? "page" : undefined}><span className="relative text-base"><Icon />{label === "Cart" && itemCount > 0 && <span className="absolute -right-3 -top-2 grid min-h-4 min-w-4 place-items-center rounded-full bg-[#18201d] px-1 text-[8px] text-white">{itemCount > 99 ? "99+" : itemCount}</span>}</span>{label}</Link>;
        })}
      </div>
    </nav>
  );
}
