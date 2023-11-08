import './App.css';
import AdminLoginPage from "./components/AdminLoginPage";
import UserLoginPage from "./components/UserLoginPage";
import LandingPage from "./components/LandingPage";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/user-login" element={<UserLoginPage/>}/>
              <Route path="/admin-login" element={<AdminLoginPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
