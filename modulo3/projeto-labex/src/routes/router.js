
import {HomePage} from "../pages/Home.Page";
import {CreateTripPage} from "../pages/CreateTripPage"
import {LoginPage} from "../pages/LoginPage";
import {AdminHomePage} from "../pages/AdminHomePage";
import {ApplicationFormPage} from "../pages/ApplicationFormPage";
import {TripDetailsPage} from "../pages/TripDetailsPage";
import {ListTripsPage} from "../pages/ListTripsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Fazer um Route e um Page de página não encontrada usando * no path.

export  const Router = () => {
   return(
    <div>
    <BrowserRouter> 
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="AdminHomePage" element={<AdminHomePage />}/>
        <Route path="CreateTripPage" element={<CreateTripPage />}/>
        <Route path="ApplicationFormPage" element={<ApplicationFormPage />}/>
        <Route path="ListTripsPage" element={<ListTripsPage />} />
        <Route path="TripDetailsPage/:id" element={<TripDetailsPage />} />
    </Routes>
    </BrowserRouter>
    </div>
   )

}