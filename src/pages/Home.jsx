import "../css/App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [products, setproducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://652fbacd6c756603295d8edd.mockapi.io/products"
    );
    setproducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      {products.map((products) => {
        return (
          <div key={products.id} className="card">
            <img src={products.productImage} alt="Product Image" />
            <h2 className="product-name">{products.productName}</h2>
            <p className="product-description">{products.productDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
