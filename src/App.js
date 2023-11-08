import './App.css';
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import LandingPage from "./pages/landing/LandingPage";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import HomePage from "./pages/home/HomePage";
import AdminPage from "./pages/admin/AdminPage";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/admin-login" element={<AdminLoginPage/>}/>

              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/home" element={<HomePage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
