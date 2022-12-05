import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/login';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Dashboard from "./component/dashboard";

function App() {
  return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
