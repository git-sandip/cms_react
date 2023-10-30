import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
