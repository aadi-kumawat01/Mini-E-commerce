   import { useState ,useEffect } from "react";
   import axios from "axios";
   
   
   const useproducts = (slug = "")=>{
     const[products ,setProducts] = useState([]);
      const[loading,setLoding] = useState(true);
      const[error ,setError] =useState(null)
    
      const fetchProducts = async () => {
       let API = "https://dummyjson.com/products";
        if(slug !== ""){
          API = API + `/category/${slug}`
        }
          const response = await  
           setLoding(true)
           axios.get(API).then(
              (response)=>{
                 setProducts(response.data.products)
              }
            ).catch(
              (error)=>{
                    setError("internal server error")
              }
            ) .finally(()=>{
                 setLoding(false)
            })
      };  
      useEffect(() => {
    fetchProducts();
  }, [slug]);   
    
  return{
      loading,error,products,refetch:fetchProducts
  }

}   

export {useproducts}