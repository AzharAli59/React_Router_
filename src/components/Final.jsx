import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Final = ({ name, image }) => {
  const headingStyle = {
    width: "40%",
  };
  const buttonStyle = {
    borderRadius: '10px', 
    fontSize: '16px',    
  };
  return (
    <div className="pt-5 ">
      <div>
        <h2 className="text-primary">{name}:</h2>
        <img src={image} alt="" className="images mt-3" style={headingStyle} />
      </div>
        <button className="button py-2 px-3 mt-2 " style={buttonStyle}>View Recipe</button>
    </div>
  );
};

export default Final;
