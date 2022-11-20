import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  const createProduct = async() => {
    try {
      await axios.post("/api/products", {name: name, price: price});
    } catch(error) {
      setError("error adding a product: " + error);
    }
  }
  
  
  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchProducts();
  },[]);

  const addProduct = async(e) => {
    e.preventDefault();
    await createProduct();
    fetchProducts();
    setName("");
    setPrice("");
    setQuantity("");
  }

  const addToCart = async(product) => {
    await addCart(product);
    fetchCart();
  }
  const addCart = async(product) => {
    try {
      await axios.post("/api/cart/" + product.id );
    } catch(error) {
      setError("error adding a product to cart" + error);
    }
  }
  
  const deleteFromCart = async(product) => {
    await deleteOneProduct(product);
    fetchCart();
  }
  
  const deleteOneProduct = async(product) => {
    try {
      await axios.delete("/api/cart/" + product.id);
    } catch(error) {
      setError("error deleting a product" + error);
    }
  }
  const takeOneOff = async(product) => {
    await takeOneFromCart(product);
    fetchCart();
  }
  const takeOneFromCart = async(product) =>{
    try {
      await axios.put("/api/cart/" + product.id);
    } catch(error) {
      setError("error taking a product from cart" + error);
    }
  }
  

  // render results
  return (
    <div className="App">
      {error}
      <div class = 'headerbox'>
            <h1>
                Welcome to Celebrity Beefs
            </h1>
            <h2>
            Only the finest cuts of celebrity beef!
            </h2>
        </div>
        
        <div class = 'txtboxwrap'> 
        <div class = "txtbox">
        <h1>Products</h1>
      {products.map( product => (
        <div key={product.id} className="ticket">
            <p>{product.name}</p>
          <button onClick={e => addToCart(product)}>{product.price}</button>
        </div>
      ))}  
        </div>
        <div class = 'txtbox'>
        <h1> Cart </h1>
      {cart.map( item => (
        <div key={item.id} className= "ticket">
        {item.quantity} {item.name} 
        <button onClick={e => deleteFromCart(item)}>Fine. Don't have any beefs.</button>
        </div>
      ))} 
        </div>
        </div>
        
         <div class='footer'> 
         <p> Copyright Matthew Stutzman and Brian Hayes 2022</p>
         <a href = "https://github.com/matt-stutzman/githubtest1"> Github </a>
         </div>
         
         
    </div>
  );
}

export default App;
