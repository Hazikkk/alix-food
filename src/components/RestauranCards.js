import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const {resData} = props;

    const {cloudinaryImageId , name , cuisines , costForTwo , avgRating} = resData?.info;
    
    return(
        <div className='m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg shadow-xl hover:bg-gray-400'>
            <img className="rounded-lg " src ={ CDN_URL+ cloudinaryImageId} />
            <h2 className="font-bold py-4 text-lg ">{name}</h2>
            <h3 className="py-2 font-serif">{cuisines.join(", ")}</h3>
            <h3 className="py-2">{costForTwo}</h3>
            <h3 className="py-2">{avgRating}</h3>
        </div>
    )

}

//Higher Order Component for open Reataurant

export const isOpen =(RestauranCards) =>{
    return(props) => {
            return(
                <div>
                    <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open Now</label>
                    <RestauranCards {...props}/>
                </div>
            )
    } 
}

export default RestaurantCards;