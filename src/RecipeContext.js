import React, { useState, createContext } from "react";

export const RecipeContext = createContext();

export function RecipeProvider(props) {
  const [recipes, setRecipes] = useState(() => {
    return [];
  });

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
}
