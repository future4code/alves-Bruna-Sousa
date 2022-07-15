import React from "react";
import HomePage from "./pages/Home.Page";
import CreateTripPage from "./pages/CreateTripPage"
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import ListTripsPage from "./pages/ListTripsPage";


function App() {
  return (

    <div>
     {LoginPage()}
    </div> 

  )
}

export default App;
