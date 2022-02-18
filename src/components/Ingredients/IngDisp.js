import React from "react";
import instance from "../../stores/instance";

const IngDisp = ({ ingredient }) => {
  return (
    // <Link to={`/categories/${catg.slug}`}>
    <div className="list">
      <img
        className="list-img"
        src={`${instance.defaults.baseURL}${ingredient.image}`}
        alt="..."
      ></img>
      <div className="overlay">
        <div className="text">{ingredient.name}</div>
      </div>
    </div>
    // </Link>
  );
};

export default IngDisp;
