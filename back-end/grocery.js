const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

let products = [];
let cart = [];
let id = 0;

app.get('/api/cart', (req, res) => {
  console.log("In cart get");
  res.send(cart);
});

app.put('/api/cart/:id', (req, res) =>{
  console.log("In cart put");
  id = parseInt(req.params.id);
  const foundItem = cart.find(item => item.id == id);
  if(!foundItem){
    res.send("Error in cart");
  }
  else{
    if(foundItem.quantity == 1){
      cart.splice(cart.indexOf(foundItem), 1);
      res.sendStatus(200);
    }
    else{
      foundItem.quantity = foundItem.quantity - 1;
      res.send(foundItem);
    }
  }
});


app.delete('/api/cart/:id', (req, res) => {
  console.log("In delete");
  let id = parseInt(req.params.id);
  const foundItem = cart.find(item => item.id == id);
  if(!foundItem){
    res.send("Error in cart");
  }
  else{
    let removeIndex = cart.indexOf(foundItem);
    cart.splice(removeIndex, 1);
    console.log(removeIndex);
    console.log(id);
    console.log(foundItem);
      res.sendStatus(200);
  }
});



app.get('/api/products', (req, res) => {
  console.log("In get");
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  console.log("In id get");
  let id = parseInt(req.params.id);
  let removeIndex = products.map(product => {
      return product.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  res.send(removeIndex);
});

app.post('/api/products', (req, res) => {
  console.log("In post");
  id += 1;
  let product = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.send(product);
});

app.post('/api/cart/:id', (req, res) => {
  console.log("In cart post");
  id = req.params.id;
  const foundItem = cart.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity += 1;
    res.send(foundItem);
  }
  else{
    const findName = products.find(product => product.id == id);
    let item = {
    id: id,
    name: findName.name,
    quantity: 1
  };
    cart.push(item);
    res.send(item);
  }
});

app.delete('/api/products/:id', (req, res) => {
  console.log("In delete");
  let id = parseInt(req.params.id);
  let removeIndex = products.map(product => {
      return product.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  products.splice(removeIndex, 1);
  res.sendStatus(200);
});



app.listen(3000, () => console.log('Server listening on port 3000!'));