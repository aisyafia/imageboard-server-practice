import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SlHeart, SlBasket } from "react-icons/sl";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const getOneProduct = async () => {
    const oneProductRes = await axios.get(
      `http://localhost:4000/products/${id}`
    );
    setProductDetail(oneProductRes.data);
  };
  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <div>
      <div className="top-details">
        <img src={productDetail.mainImage} alt="product pic" width="115px" />
        <div className="title-description">
          <h4>{productDetail.title}</h4>
          <div className="ratings">
            <p>Rating: {productDetail.rating}</p>
            <button onClick={() => console.log("Add your review!")}>
              Add Review
            </button>
          </div>
          <p>Price: {productDetail.price}</p>
          <p>{productDetail.description}</p>
          <div className="cart-and-favorite">
            <button>
              <SlBasket />
              Add to cart
            </button>
            <button>
              <SlHeart />
              Favorite
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-detail">
        <div className="link-collection">
          <Link className="link">Description</Link>
          <Link className="link">Additional info</Link>
          <Link className="link">Reviews</Link>
        </div>
        <div className="desc-detail">
          <p>
            This is the additional description that would appear when you click
            on the description link above
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailPage };
