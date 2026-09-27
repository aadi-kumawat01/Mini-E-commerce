import { useEffect, useState } from "react";
import { StoreContext } from "./store";

export default function StoreProvider({ children }) {
 const [cart, setCart] = useState(() => { try { const saved = JSON.parse(localStorage.getItem("aven-cart")); return Array.isArray(saved) ? saved.filter((item) => item?.id && item.qty > 0) : []; } catch { return []; } });
 const [toast, setToast] = useState(null);
 useEffect(() => { localStorage.setItem("aven-cart", JSON.stringify(cart)); }, [cart]);
 useEffect(() => { if (!toast) return undefined; const timer = setTimeout(() => setToast(null), 3000); return () => clearTimeout(timer); }, [toast]);

 const addToCart = (product) =>{  
    setCart((current) => current.some((item) => item.id === product.id) ? current.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...current, { id: product.id, title: product.title, price: Number(product.price), thumbnail: product.thumbnail, qty: 1 }]);
    setToast({ message: `${product.title} added to cart` });
 }    

  const updateQuantity = (id, direction) => setCart((current) => current.map((item) => item.id === id ? { ...item, qty: direction === "increase" ? item.qty + 1 : Math.max(1, item.qty - 1) } : item));
  const removeFromCart = (id) => { const item = cart.find((product) => product.id === id); setCart((current) => current.filter((product) => product.id !== id)); if (item) setToast({ message: `${item.title} removed from cart` }); };
  // The badge represents distinct products in the bag, not the units of each product.
  const itemCount = cart.length;
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  return (
    <StoreContext.Provider value={{cart,addToCart,updateQuantity,removeFromCart,itemCount,subtotal,toast,dismissToast: () => setToast(null)}}>
      {children}
    </StoreContext.Provider>
  )
}

