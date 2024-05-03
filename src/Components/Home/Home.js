import React, { useState } from 'react'
import "./Home.css"
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import DisplayFoodItem from '../DisplayFoodItem/DisplayFoodItem';
import Header from '../Header/Header';
import AppDownload from '../App Download/AppDownload';

function Home() {

  const [category,setCategory] = useState("All");

  return (
    <div className='home'>
        <Header/>
        <ExploreMenu cat={category} setCat={setCategory}/>
        <DisplayFoodItem cat={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
