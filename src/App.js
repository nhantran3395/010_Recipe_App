import React from "react";
import SearchBar from "./SearchBar";
import { RecipeProvider } from "./RecipeContext";
import RecipeList from "./RecipeList";

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <SearchBar />
        <RecipeList />
      </div>
    </RecipeProvider>
  );
}

export default App;
