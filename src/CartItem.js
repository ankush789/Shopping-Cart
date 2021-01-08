import React from 'react';

class CartItem extends React.Component {
        // this.props is a object
        // console.log("this.this.props",this.this.props);
        constructor(){
            super();
    
        }
        //Desconstructing object
        render(){
                    console.log(this.props);
        const { title, price, qty } = this.props.product;
       const { product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct } = this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } src={product.img} alt='' />
                </div>
                <div className="right-block">
                    <div style = {{ fontSize: 25 }} >{ title }</div>
                    <div style = {{ color: '#777' }}>Rs. { price }</div>
                    <div style = {{ color:'#777' }}>Qty: { qty }</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        onClick = {()=>onIncreaseQuantity(product)} />
                        {/* <img alt="decrease" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                         onClick = {onDecreaseQuantity(product)} />
                        <img alt="delete" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        onClick = {onDeleteProduct(product.id)}/> */}
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image: {
        height: 125,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;