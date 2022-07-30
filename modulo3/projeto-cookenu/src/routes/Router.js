import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRecipsPage from "../pages/AddRecipsPage/AddRecipsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDeatilPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";
//Switch serve para cada pagina ser rodada de uma vez
// Página de erro deve ser a última

const Router = () => {
    return(
        <BrowserRouter>
        <Switch> 
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage />
            </Route>
            <Route  exact path="/adicionar-Receitas">
                <AddRecipsPage/>
            </Route>
            <Route exact path="/">
                <RecipesListPage />
            </Route>
            <Route exact path="/detalhes/:id">
                <RecipeDetailPage/>
            </Route>

            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )

}
export default Router