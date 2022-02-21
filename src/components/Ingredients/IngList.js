import React from "react";
import store from "../../stores/Store";
import IngDisp from "./IngDisp";
import { observer } from "mobx-react";
import CreateIngredientsModal from "../Modal/CreateIngredientsModal";
import IngrediantCard from "./IngrediantCard";

const IngList = () => {
  // if (store.ingredientList == null) {
  //   return <p>Loading...</p>;
  // }
  const ingDisplayed = store.ingredientList.map((ing) => (
    <div key={ing._id} className="margin-list">
      <IngrediantCard ingredient={ing} />
    </div>
  ));
  return (
    // <div className="home">
    //   <div className="headings">Ingredients</div>
    //   <div
    //     className={
    //       store.ingredientList.length > 7
    //         ? "whole-list padding-list-top"
    //         : "whole-list"
    //     }
    //   >
    //     {ingDisplayed}
    //     <CreateIngredientsModal />
    //   </div>
    // </div>
    <div className="recipe-page">
      <div className="recipe-list">
        <div className="recipes">
          <div className="item-display">{ingDisplayed}</div>
        </div>
      </div>
      <div className="v-line"></div>
      <div className="recipe-list">
        <div className="recipes recipe-add">
          <CreateIngredientsModal />
        </div>
      </div>
    </div>
  );
};

export default observer(IngList);
