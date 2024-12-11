import React from "react";
import "./style.css"; // Custom styles for your card
import BackgroundImage from "./images/background.png" 
const ChristmasCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-primary position-relative text-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="christmas-card">
        <input id="open" type="checkbox" />
        <div className="card-front"></div>
       
      </div>
    </div>
  );
};
// if letter to Narumi => 1 return false return true
export default ChristmasCard;
