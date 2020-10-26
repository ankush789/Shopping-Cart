import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
          title:'Phone',
          price:999,
          qty: 1,
          img: ''
        }
        // 2nd way to bind this
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    // third way is to use arrow functions
    increaseQuantity= () => {
        console.log(this.state);
    }
    render(){
        //Desconstructing object
        const { title, price, qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } alt='' />
                </div>
                <div className="right-block">
                    <div style = {{ fontSize: 25 }} >{ title }</div>
                    <div style = {{ color: '#777' }}>Rs. { price }</div>
                    <div style = {{ color:'#777' }}>Qty: { qty }</div>
                    <div className="cart-item-actions">
                        <img alt="decrease" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        // onClick={this.increaseQuantity.bind(this) }/>
                        onClick = {this.increaseQuantity} />
                        <img alt="increase" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                        <img alt="delete" className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
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