import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, description}) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log("this is the basket >>> ", basket);

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

    const dataToPass={
        id: id,
        title: title,
        image: image,
        price: price,
        description: description
    }

  return (
    <div className='product' class="single-product-item">
        <Link to={{ pathname: '/individualProduct'}} state={dataToPass}>
        <div class="product-image"><img src={image}></img></div>
        </Link>
        <div className='product__info'>
            <h3>{title}</h3>
            <p className='product__price' class="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <button class="cart-btn" onClick={addToBasket}><i class="fas fa-shopping-cart"></i>Add to Basket</button>
    </div>
  )
}

export default Product