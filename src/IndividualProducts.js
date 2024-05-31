import React from 'react';
import { useStateValue } from './StateProvider';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./IndividualProducts.css";
import { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';

function IndividualProducts(props) {
    const [{ basket }, dispatch] = useStateValue();
    let location = useLocation();
    const { state } = location;
    const { id, title, image, price, description} = state;
    // console.log("this is the basket >>> ", basket);

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

  return (
    <div class="single-product mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="single-product-img">
						<img src={image} alt="" />
					</div>
				</div>
				<div class="col-md-7">
					<div class="single-product-content">
						<h1>{title}</h1>
						<p class="single-product-pricing">
                                <small>$</small>
                                <strong>{price}</strong>
                        </p>
						<p>{description}</p>
						<div class="single-product-form">
							<button class="cart-btn" onClick={addToBasket}><i class="fas fa-shopping-cart"></i> Add to Cart</button>
						</div>
						<h4>Share:</h4>
						<ul class="product-share">
							<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i class="fab fa-twitter"></i></a></li>
							<li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
							<li><a href=""><i class="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default IndividualProducts