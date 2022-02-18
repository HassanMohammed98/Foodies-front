import { makeAutoObservable } from "mobx";
import instance from "./instance";

class Store {
  catgList = [];
  recipeList = [];
  ingredientList = [];
  constructor() {
    makeAutoObservable(this);
  }
  addCatg = async (catg) => {
    try {
      const formData = new FormData();
      for (const key in catg) {
        formData.append(key, catg[key]);
      }
      const response = await instance.post("/categories", formData);
      this.catgList.push(response.data);
    } catch (error) {
      console.log("Store -> addCatg -> error", error);
    }
  };
  fetchCatg = async () => {
    try {
      const response = await instance.get("/categories");
      this.catgList = response.data;
    } catch (error) {
      console.log("Store -> fetchCatg -> error", error);
    }
  };
  addRecipe = async (recipe) => {
    try {
      // const formData = new FormData();
      // for (const key in catg) {
      //   formData.append(key, catg[key]);
      // }
      const response = await instance.post("/recipes", recipe);
      this.recipeList.push(response.data);
    } catch (error) {
      console.log("Store -> addRecipe -> error", error);
    }
  };
  fetchRecipe = async () => {
    try {
      const response = await instance.get("/recipes");
      this.recipeList = response.data;
    } catch (error) {
      console.log("Store -> fetchRecipe -> error", error);
    }
  };
  addIng = async (ingredient) => {
    try {
      // const formData = new FormData();
      // for (const key in catg) {
      //   formData.append(key, catg[key]);
      // }
      const response = await instance.post("/ingrediants", ingredient);
      this.ingredientList.push(response.data);
    } catch (error) {
      console.log("Store -> addIngredient -> error", error);
    }
  };
  fetchIng = async () => {
    try {
      const response = await instance.get("/ingrediants");
      this.ingredientList = response.data;
    } catch (error) {
      console.log("Store -> fetchIngredient -> error", error);
    }
  };
}

const store = new Store();
store.fetchCatg();
store.fetchIng();
store.fetchRecipe();
export default store;
