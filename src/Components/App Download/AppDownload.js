import React from "react";
import "./AppDownload.css";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Our App
      </p>
      <div className="app-download-platforms">
        <img src={process.env.PUBLIC_URL + "/play_store.png"} alt=""></img>
        <img src={process.env.PUBLIC_URL + "/app_store.png"} alt=""></img>
      </div>
    </div>
  );
}

export default AppDownload;
