import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {

const [resInfo , setResInfo] = useState([]) ;

const {resId} = useParams();

 useEffect(()=>{
     fetchMenu();
 } , [])
 
 const fetchMenu = async () => {
     const data = await fetch(MENU_API+resId)
     const json =  await data.json();

     console.log(json);

     setResInfo(json.data)
     
 }
 if (resInfo == 0 ) return <Shimmer/>;
 
 const{name , costForTwo} = resInfo?.cards[0]?.card?.card?.info;
 const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 console.log(itemCards)
 
    return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwo}</h2>
      <ul>
          {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.price/100 || item?.card?.info.defaultPrice/100} Rs</li>))}
      </ul>
    </div>
  )
}

export default RestaurantMenu;
