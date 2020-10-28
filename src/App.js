import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        //this re-renders the cart items having updated quantity
        this.setState({
            products: products
        })
        console.log('product',product);
    }

     handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products: products
        })
        console.log('product',product);
    }
    handleonDeleteProduct = (id) =>{
        const { products } = this.state;
        const items = products.filter((item)=> item.id !== id); // returns [{},{},{}]
        this.setState({
            products: items
        })
    }

    getTotalCartItem(){
      const { products } = this.state;
      let count = 0;
      products.forEach((product)=>{
        count += product.qty;
      })
      return count;
    }

    render(){
      const {products} = this.state;
      return (
        <div className="App">
          <Navbar count = {this.getTotalCartItem() }/>
          <Cart 
            products = { products }
            onIncreaseQuantity = { this.handleIncreaseQuantity}
            onDecreaseQuantity = { this.handleDecreaseQuantity}
            onDeleteProduct = { this.handleonDeleteProduct}
          />
        </div>
      );
  }
}
export default App;
