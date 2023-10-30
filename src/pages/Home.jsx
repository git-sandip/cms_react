import "../css/App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://652fbacd6c756603295d8edd.mockapi.io/product"
    );
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.productImage} alt="Product Image" />
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-description">{product.productDescription}</p>
            <Link to={`/singleProduct/${product.id}`}>See More..</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
