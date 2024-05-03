import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Order from "./Components/Order/Order";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Login from "./Components/Login/Login";

function App() {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <div>
      {showLogin? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
