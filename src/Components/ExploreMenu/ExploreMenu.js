import React, { useEffect, useState } from 'react'
import "./ExploreMenu.css"


function ExploreMenu(props) {

    const [menuList,setMenuList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/menulist')
          .then(response => response.json())
          .then(setMenuList);
    },[]);

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse range of cuisines and restaurants featuring an array of delicious dishes crafted with perfection.</p>
        <div className="explore-menu-list">
            {menuList.map((item,index) => {
                return (
                    <div key={index} onClick={() => props.setCat(prev => prev===item.name? "All":item.name)} className='explore-menu-list-item'>
                        <img className={props.cat===item.name?"active":""} src={process.env.PUBLIC_URL + item.image} alt=''></img>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu
