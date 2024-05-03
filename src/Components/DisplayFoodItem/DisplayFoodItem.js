import React, { useEffect, useState } from 'react'
import './DisplayFoodItem.css'
import FoodItem from '../FoodItem/FoodItem';

function DisplayFoodItem(props) {

    const [foodItems,setFoodItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/foodlist')
          .then(response => response.json())
          .then(setFoodItems);
      }, []);

  return (
    <div className='food-display' id='display-food'>
        <h2>Top picks for you</h2>
        <div className='food-display-list'>
            {foodItems.map((item,index)=>{
                if(props.cat==="All" || props.cat === item.category)
                {
                    return <FoodItem key={index} it={item}/>
                }
                return <></>
            })}
        </div>
    </div>
  )
}

export default DisplayFoodItem
