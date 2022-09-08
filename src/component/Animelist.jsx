import { useEffect, useState } from "react";

const Animelist = ({animes}) => {
    let[wish, setWish] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem("wish")==null) //if wish array is not present before
        {
            localStorage.setItem("wish" , "[]"); //then only you add wish array
        }
               
    } , [])
    let handleWishlist = (id)=>{
         let x = localStorage.getItem("wish");

         x = JSON.parse(x)

         if(!x.includes(id) ) //id id is not present
         { 
            x.push(id)
            x= JSON.stringify(x)
            localStorage.setItem("wish", x);
            console.log(x , typeof x);
         }
         else
         {
            let i = x.indexOf(id);
             x.splice(i,1);
             x=JSON.stringify(x);
             localStorage.setItem("wish",x);
         }
        
    }
    return (  
        <div className="animelist">
         {
            animes.map((anime)=>{
                return(
                    <div key={anime.mal_id} className="anime">
                        <img src={anime.images.jpg.small_image_url} alt="not Found" />
                         <h4>Title:{anime.title}</h4>
                         <h4>Type:{anime.type}</h4>
                         <h4>Source:{anime.source}</h4>
                         <button onClick={()=>{handleWishlist(anime.mal_id)}}>
                             &#10084; 
                             </button>
                         
                    </div>
                )
            })
         }
        </div>
    );
}
 
export default Animelist;