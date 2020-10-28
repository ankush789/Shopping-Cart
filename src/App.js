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
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                id: 1
            },
            {
                title:'Laptop',
                price:99999,
                qty: 2,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                id: 2
            },
            {
                title:'Watch',
                price:99,
                qty: 4,
                img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80',
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

    getTotalPrice = () => {
      const { products } = this.state;
      let totalPrice = 0;
      products.forEach((product)=>{
        totalPrice = totalPrice + ( product.price * product.qty );
      })
      return totalPrice;
    }

    render(){
      const {products} = this.state;
      return (
        <div className="App">
          <Navbar 
          count = {this.getTotalCartItem() }
          />
          <Cart 
            products = { products }
            totalPrice = {this.getTotalPrice()}
            onIncreaseQuantity = { this.handleIncreaseQuantity}
            onDecreaseQuantity = { this.handleDecreaseQuantity}
            onDeleteProduct = { this.handleonDeleteProduct}
          />
        </div>
      );
  }
}
export default App;
