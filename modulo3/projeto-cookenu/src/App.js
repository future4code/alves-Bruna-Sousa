import React from "react";
import AddRecipsPage from "./pages/AddRecipsPage/AddRecipsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDeatilPage";
import RecipesListPage from "./pages/RecipesListPage/RecipesListPage";
import SingUpPage from "./pages/SingUpPage/SingUpPage";
import Router from "./routes/Router";
const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
