import RestaurantCards, {isOpen} from './RestauranCards';
import {useState , useEffect} from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";





const Body = () => {

//Local State variable to update list of Restaurants
 const[listOfRestaurants , setListOfRestaurant] =  useState([]);
 const[filteredRestaurant , setFilteredRestaurant] = useState([]);
 
//Local State variable for search

 const[searchText , setSearchText] = useState("");

 const RestaurantIsOpen = isOpen(RestaurantCards)

 

 console.log(listOfRestaurants)
 

 //fetching data from Swiggy's API
 useEffect(()=>{fetchData()} ,  []);

 const fetchData = async () =>{
   const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2313434&lng=77.4326473&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 

  const json = await data.json();
  console.log(json)
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


 
  //Conditional Rendering
 
  
    return listOfRestaurants.length===0 ? <Shimmer/> :(
      <div className='body'>
  <div className='filter flex flex-col sm:flex-row'>
    <div className="search m-4 p-4 flex flex-col sm:flex-row items-center">
      <input
        type='text'
        className='border border-solid to-black mb-2 sm:mb-0 sm:mr-2'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="Search..."
      />
      <button
        className='px-4 bg-green-100 m-2 sm:m-4 rounded-lg'
        onClick={() => {
          const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filteredRestaurant);
        }}
      >
        Search
      </button>
    </div>
    <div className='m-4 p-4 flex items-center'>
      <button
        className="filter-btn flex px-4 bg-gray-100 rounded-lg text-center"
        onClick={() => {
          const filteredList = filteredRestaurant.filter((res) => res.info.avgRating >= 4);
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  </div>
  <div className='flex flex-wrap'>
    {filteredRestaurant.map((restaurant) => (
      <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant.info.id}>
        {restaurant.info.isOpen ? (
          <RestaurantIsOpen resData={restaurant} />
        ) : (
          <RestaurantCards resData={restaurant} />
        )}
      </Link>
    ))}
  </div>
</div>

    )
}

export default Body;