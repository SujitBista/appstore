
import React, { useState } from "react";
import {useLocation,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import {Admin} from "./components/admin";

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
      <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
        <Route exact path="/admin" element={ <Admin isAuthenticated={isAuthenticated} /> } />
      </Routes>
      </Router>
      </>
  );
}
  
export default App;