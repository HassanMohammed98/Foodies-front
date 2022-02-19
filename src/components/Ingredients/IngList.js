import React from "react";
import store from "../../stores/Store";
import IngDisp from "./IngDisp";
import { observer } from "mobx-react";
import CreateIngredientsModal from "../Modal/CreateIngredientsModal";

const IngList = () => {
  // if (store.ingredientList == null) {
  //   return <p>Loading...</p>;
  // }
  const ingDisplayed = store.ingredientList.map((ing) => (
    <div key={ing._id} className="margin-list">
      <IngDisp ingredient={ing} />
    </div>
  ));
  return (
    <div className="home">
      <div className="headings">Ingredients</div>
      <div
        className={
          store.ingredientList.length > 7
            ? "whole-list padding-list-top"
            : "whole-list"
        }
      >
        {ingDisplayed}
        <CreateIngredientsModal />
      </div>
    </div>
  );
};

export default observer(IngList);
