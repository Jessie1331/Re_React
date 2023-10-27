import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";
import Catalog from "./components/pages/catalog";
import Product from "./components/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Inventory from "./components/pages/inventory";
import Admin from "./components/pages/admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){

  return(
    <BrowserRouter>
    <div className="app">
      <Navbar />


<Routes>
  <Route path="/catalog" element={<Catalog/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/inventory" element={<Inventory/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
</Routes>
       

      <Footer/>

    </div>
   </BrowserRouter> 
  );
}
export default App;