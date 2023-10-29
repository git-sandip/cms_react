import { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [productImageURL, setProductImageURL] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://652fbacd6c756603295d8edd.mockapi.io/product",
      {
        productImage: productImageURL,
        productDescription: productDesc,
        productName: productName,
        productMaterial: productMaterial,
      }
    );
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Error");
    }
  };
  return (
    <>
      <Navbar />
      <div id="product-form">
        <h2>Product Information</h2>
        <form onSubmit={addProduct}>
          <label htmlFor="productName">Product Name:</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            id="productName"
            name="productName"
          />

          <label htmlFor="productImageURL">Product Image:</label>
          <input
            onChange={(e) => setProductImageURL(e.target.value)}
            type="text"
            id="productImageURL"
            name="productImageURL"
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            onChange={(e) => setProductDesc(e.target.value)}
            id="productDescription"
            name="productDescription"
            rows="4"
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input
            onChange={(e) => setProductMaterial(e.target.value)}
            type="text"
            id="productMaterial"
            name="productMaterial"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
