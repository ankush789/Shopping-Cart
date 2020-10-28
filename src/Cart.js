import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
        const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct , totalPrice } = props;
        return (
            <div>
                <div className="cart">
                    {
                            products.map((product)=>{
                            return <CartItem product = {product} key = {product.id} 
                            onIncreaseQuantity = { onIncreaseQuantity}
                            onDecreaseQuantity = { onDecreaseQuantity}
                            onDeleteProduct = { onDeleteProduct }/>
                        })
                    }
                </div>
                <div style = {{padding: 10}}>
                        Total Price: {totalPrice}
                </div>
            </div>
        );
}

export default Cart;