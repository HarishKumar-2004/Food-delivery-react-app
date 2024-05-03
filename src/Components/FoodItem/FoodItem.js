import React, { useContext} from 'react'
import './FoodItem.css'
import { StoreContext } from '../AppContextProvider'

function FoodItem(props) {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className='food-item-img-container' >
            <img className='food-item-image' src={process.env.PUBLIC_URL + props.it.image} alt=''></img>
            {!cartItems[props.it._id]
                      ?<img className='add' onClick={()=>addToCart(props.it._id)} src={process.env.PUBLIC_URL + "/add_icon_white.png"} alt=''></img>
                      :<div className= 'food-item-counter' >
                           <img onClick={()=>removeFromCart(props.it._id)} src={process.env.PUBLIC_URL + "/remove_icon_red.png"} alt=''></img>
                           <p> {cartItems[props.it._id]} </p>
                           <img onClick={()=>addToCart(props.it._id)} src={process.env.PUBLIC_URL + "/add_icon_green.png"} alt=''></img>
                       </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{props.it.name}</p>
                <img src={process.env.PUBLIC_URL + '/rating_starts.png'} alt=''></img>
            </div>
            <p className='food-item-price'>${props.it.price}</p>
        </div>
    </div>
  )
}

export default FoodItem
