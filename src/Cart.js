import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
        constructor(){
        super();
        this.state = {
            products: [
            {
                title:'Phone',
                price:999,
                qty: 4,
                img: '',
                id: 1
            },
            {
                title:'Laptop',
                price:99999,
                qty: 2,
                img: '',
                id: 2
            },
            {
                title:'Watch',
                price:99,
                qty: 4,
                img: '',
                id: 3
            }  
         ]
        }
    }
    render(){
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product)=>{
                        return <CartItem product = {product} key = {product.id} />
                    })
                }
            </div>
        );
    }
}

export default Cart;