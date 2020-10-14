import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from '../Componets/Subtotal';
import "../Style/Checkout.css";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://blogs-images.forbes.com/gabrielshaoolian/files/2017/07/quickbooks.png" alt=""/>

            {basket?.length === 0 ?(
                <div>
                    <h2>Your basket is empty</h2>
                    <p>Add an item to your basket</p>
                </div>
            ):(
                <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket?.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>
            )}
            </div>
             {basket.length > 0 && (
                 <div className="checkout_right">
                     <Subtotal/>
                 </div>
             )}
        </div>
    )
}

export default Checkout;
