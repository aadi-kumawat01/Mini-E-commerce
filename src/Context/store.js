import { createContext, useContext } from "react";
export const StoreContext = createContext(null);
export function useStore() { const value = useContext(StoreContext); if (!value) throw new Error("Store provider is missing"); return value; }
