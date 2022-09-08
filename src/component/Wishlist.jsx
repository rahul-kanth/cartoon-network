import { useState } from "react";
import useFetch from "./useFetch";

const Wishlist = () => {
    let{data:animes,pending,error}=useFetch("https://api.jikan.moe/v4/anime");


    const[wish,setwish] = useState(null);
    
    useFetch(()=>{
        
        var wish = localStorage.getItem("wish");
        wish = JSON.parse(wish);
        setwish(wish);

    },[])
    return ( 
        <div>
  
        {pending && <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden"> Loading....</span>
         </div>}
    
    {animes && <Animeslist animes={animes.filter((animes)=>{return wish.includes(animes.mal_id)})}  /> }
    
       </div>     
     );
}
 
export default Wishlist;