import "../css/App.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="card">
        <img src="product-image.jpg" alt="Product Image"></img>
        <h2 className="product-name">Product Name</h2>
        <p className="product-description">
          This is a brief product description. It can be longer if needed.
        </p>
      </div>
    </>
  );
};

export default Home;
