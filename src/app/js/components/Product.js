import React from "react";
import { Link } from "react-router-dom";


export default function Product(props) {

    //console.log(props.data, "category list");

    const { id, title, img, price } = props.data;

    return (
        <div className="product-item">
            <div className="product-inner">
                <div className="thumb">
                    <div className="group-button">
                        <a href="#" className="wishlist-button"></a>
                        <a href="#" className="quickview-button"><span className="icon">
                            <i className="fa fa-eye" aria-hidden="true"></i></span> Quick View
                        </a>
                    </div>
                    <Link to={`/products/${id}`}><img src={img} alt={title} /></Link>
                </div>
                <div className="info">
                    <Link to={`/products/${id}`} className="product-name">{title}</Link>
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