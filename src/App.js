import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes/Recipes";
import CatgDetail from "./components/Catg/CatgDetail";
import CategoryList from "./components/Catg/CategoryList";
import IngList from "./components/Ingredients/IngList";
import Favorites from "./components/Favorites";
import WishList from "./components/WishList";
import RecipesDetail from "./components/Recipes/RecipesDetail";

function App() {
  return (
    <div className="whole-app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:slug" element={<CatgDetail />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipesDetail />} />
        <Route path="/ingredients" element={<IngList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
