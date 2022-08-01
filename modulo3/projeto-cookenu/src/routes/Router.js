import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
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
        <Routes> 
            <Route index element = {<LoginPage/>}/>
            <Route path="Adicionar-receitas" element = {<AddRecipsPage/>}/>
            <Route path="Cadastrar" element = {<SingUpPage/>}/>
            <Route path="Receitas" element = {<RecipesListPage/>}/>
            <Route path="Detalhes/:id" element = {<RecipeDetailPage/>}/>
            <Route  element = {<ErrorPage/>}/>
     
        </Routes>
        </BrowserRouter>
    )

}
export default Router