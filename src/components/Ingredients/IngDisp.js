import React from "react";
import { Link } from "react-router-dom";

const IngDisp = ({ ingredient }) => {
  return (
    // <Link to={`/categories/${catg.slug}`}>
    <div className="list">
      <img className="list-img" src={ingredient.image} alt="..."></img>
      <div class="overlay">
        <div class="text">{ingredient.name}</div>
      </div>
    </div>
    // </Link>
  );
};

export default IngDisp;
