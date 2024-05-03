import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-contents">
        <div className="footer-contents-left">
          <img src={process.env.PUBLIC_URL + "/logo.jpeg"} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
          <div className="footer-social-icons">
            <img src={process.env.PUBLIC_URL + "/facebook_icon.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/twitter_icon.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/linkedin_icon.png"} alt="" />
          </div>
        </div>
        <div className="footer-contents-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery guidelines</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-contents-right">
            <h2>Contact Us</h2>
            <ul>
                <li>+91 9710785849</li>
                <li>Contact@FoodDelivery.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright"> Copyright 2024 © Food Delivery - All rights reserved. </p>
    </div>
  );
}

export default Footer;
