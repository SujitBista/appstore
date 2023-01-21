
import React, { useState } from "react";
import {useLocation,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Admin from "./components/admin";

function App() {
  let isAuthenticated = false;
  if(isAuthenticated) {
     isAuthenticated = isAuthenticated;
  }
  return (
      <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        {isAuthenticated} && <Route exact path="/admin" element={ <Admin /> } /> 
      </Routes>
      </Router>
      </>
  );
}
  
export default App;