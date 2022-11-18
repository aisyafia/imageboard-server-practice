import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { SlHeart, SlBasket, SlUser } from "react-icons/sl";
import ReactStars from "react-rating-stars-component";
import { useParams, NavLink, useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div className="product-container">
      <div></div>
      <div className="image">
        <img src={props.product.mainImage} alt="product" />
      </div>
      <div className="product-info">
        <NavLink to={`/product/${props.product.id}`}>
          {" "}
          {props.product.title}{" "}
        </NavLink>
        <div className="price-rating">
          {" "}
          {props.product.price}€ <ReactStars value={props.product.rating} />{" "}
        </div>
        <p className="description">
          {" "}
          Description: {props.product.description}{" "}
        </p>
        <div className="product-icons">
          <div className="icons">
            {" "}
            <SlUser />
          </div>
          <div className="icons">
            {" "}
            <SlBasket />
          </div>
          <div className="icons">
            {" "}
            <SlHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
