import React from "react";
import "./Preloader.css";
import loader from "../../Assets/loader.gif";

const Preloader = () => {
  return (
    <div className="page-cover">
        <img src={loader} alt="loading..."/>
    </div>
  );
};

export default Preloader;
