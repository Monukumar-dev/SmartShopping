import React from "react";
import { Link } from "react-router-dom";

//import { useDispatch } from "react-redux";
//import { addToCart } from "../redux/slice/cartSlice";

export default function Product(props) {

  //  const dispatch = useDispatch();

    //console.log(props.data, "category list");

    const { _id, title, coverImage, price } = props.data;

    return (
        <div className="product-item">
            <div className="product-inner">
                <div className="thumb">
                    <div className="group-button">
                        <a href="#" className="wishlist-button"></a>
                        {/* <Link onClick={()=> dispatch(addToCart(props.data))} className="quickview-button">
                            <span className="icon">
                            <i className="fa fa-bag" aria-hidden="true"></i></span> Add to Cart
                        </Link> */}
                    </div>
                    <Link to={`/products/${_id}`} title={title}>
                        <img src={coverImage} alt={title} />
                    </Link>
                </div>
                <div className="info">
                    <Link to={`/products/${_id}`} className="product-name">{title}</Link>
                    <div className="rating">
                        <ul className="list-star">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-alt" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="price">
                        <span className="text">PRICE:</span><span className="ins">{price}</span>
                    </div>
                </div>
            </div>
        </div>
    );

}