import React from "react";
import "../styles/home.css";
import bkgvideo from "../bkg-videos/zombiesSmall.webm";

const Home = () => {
  return (
    <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source src={bkgvideo} type="video/mp4" />
      </video>
      <header className="viewport-header">
        <h1>Ep Zombie Fest</h1>
      </header>
    </div>
  );
};
export default Home;
