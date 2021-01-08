import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';



class App extends React.Component {
        constructor(){
        super();
        this.state = {
            products: [],
            loading: true
        }
        
    }
    
    componentDidMount(){
      //Reading Data from the 'products' collection in firestore
      firebase
      .firestore()
      .collection('products')
      .get()
      .then((querySnapshot)=>{
        const products = querySnapshot.docs.map((doc)=>{
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading : false
        })
      });
    
    }


    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        //this re-renders the cart items having updated quantity
        this.setState({
            products: products
        })
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
      
      const {products, loading} = this.state;
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
          {loading && <h1>Loading Products...</h1>}
          <div style = {{padding: 10}}>
              Total Price: {this.getTotalPrice()}
          </div>
        </div>
      );
  }
}
export default App;





//  {
//                 title:'Phone',
//                 price:999,
//                 qty: 4,
//                 img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
//                 id: 1
//             },
//             {
//                 title:'Laptop',
//                 price:99999,
//                 qty: 2,
//                 img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
//                 id: 2
//             },
//             {
//                 title:'Watch',
//                 price:99,
//                 qty: 4,
//                 img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80',
//                 id: 3
//             } 