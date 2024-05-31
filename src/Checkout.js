import React, { useLayoutEffect } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  let location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <div>
                <h3>Hello, {!user ? 'Guest' : user.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                {basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout