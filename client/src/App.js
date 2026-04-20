import './App.css';
import CustomerList from "./components/CustomerList";
import {BrowserRouter, Route, Routes} from "react-router";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/customers"} element={<CustomerList/>}/>
          <Route path={"/login"} element={<Login/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
