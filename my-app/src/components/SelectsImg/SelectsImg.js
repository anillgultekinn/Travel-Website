import "./SelectsImgStyles.css";

import React from "react";

const SelectsImg = ({ bgImg, text }) => {
    return (
        <div className="selects-location">
            <img src={bgImg} alt="" />
            <div className="overlay"></div>
            <p> {text} </p>
        </div>
    );
};

export default SelectsImg;
