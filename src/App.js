import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import { RecipeProvider } from "./RecipeContext";
import RecipeList from "./RecipeList";

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <h1>Hello Gorgeous Friend</h1>
        <SearchBar />
        <RecipeList />
      </div>
    </RecipeProvider>
  );
}

export default App;
