import React from "react";
import { Link } from "react-router-dom";

const CategoryDisp = ({ catg }) => {
  return (
    <Link to={`/categories/${catg.slug}`}>
      <div className="list">
        <img className="list-img" src={catg.image} alt="..."></img>
        <div class="overlay">
          <div class="text">{catg.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryDisp;
