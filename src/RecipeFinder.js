import React, { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";

export default function Recipe(props) {
  let [ingredient, setIngredient] = useState(null);
  let [recipes, setRecipes] = useState(null);

  function handleRecipeResponse(response) {
    console.log(response);
    setRecipes(response.data[0]);
  }

  function search() {
    let apiKey = "e7e87acfec63483885c283a6db333dd6";
    let apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredient}&number=6`;
    axios.get(apiUrl).then(handleRecipeResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleIngredientChange(event) {
    setIngredient(event.target.value);
  }

  return (
    <div className="IngredientSearch">
      <section>
        <h1>What is in the fridge?</h1>
        <form>
          <input
            type="search"
            onChange={handleIngredientChange}
            placeholder="List ingredients, for example: apples, potatoes, cabbage"
          ></input>
          <input type="submit" onClick={handleSubmit} value="search"></input>
        </form>
      </section>
      <Recipes recipes={recipes} />
    </div>
  );
}
