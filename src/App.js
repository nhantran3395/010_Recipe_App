import React from "react";
import SearchBar from "./SearchBar";
import { RecipeProvider } from "./RecipeContext";
import RecipeList from "./RecipeList";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <RecipeProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SearchBar />
          <RecipeList />
        </div>
      </ThemeProvider>
    </RecipeProvider>
  );
}

export default App;
