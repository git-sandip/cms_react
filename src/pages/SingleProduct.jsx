import { useNavigate, useParams } from "react-router-dom";
import "../css/SingleProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const SingleProduct = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchSingleProduct = async () => {
    const response = await axios.get(
      `https://652fbacd6c756603295d8edd.mockapi.io/product/${id}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);
  const deleteProduct = async () => {
    await axios.delete(
      `https://652fbacd6c756603295d8edd.mockapi.io/product/${id}`
    );
    alert("Product has been deleted");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="single-product">
        <img
          src={product.productImage}
          alt="Product Image"
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{product.productName}</h1>
          <p className="product-description">{product.productDescription}</p>
          <p className="product-material">{product.productMaterial}</p>
          <button onClick={deleteProduct}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
