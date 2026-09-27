   /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
   import { useState ,useEffect } from "react";
   import axios from "axios";
   
   
   const useProducts = (slug = "")=>{
     const[products ,setProducts] = useState([]);
      const[loading,setLoading] = useState(true);
      const[error ,setError] =useState(null)
    
      const fetchProducts = async () => {
       let API = "https://dummyjson.com/products";
        if(slug !== ""){
          API = API + `/category/${slug}`
        }
          setLoading(true); setError(null);
          try { const response = await axios.get(API); setProducts(response.data.products || []); } catch { setError("We couldn’t load products right now."); } finally { setLoading(false); }
      };  
      useEffect(() => {
    fetchProducts();
  }, [slug]);   
    
  return{
      loading,error,products,refetch:fetchProducts
  }

}   

export {useProducts}
