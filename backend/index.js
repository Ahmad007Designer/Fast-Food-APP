// const {connectToMongoDB}=require("./db")
global.foodData = require('./db')(function call(err, data, CatData) {

  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const cors = require('cors'); 
const app = express()

//use the middleware
app.use(cors());
app.use(express.json());

//multi port request like creaeuser..
app.use('/api/auth', require('./Routes/Auth'));


// connectToMongoDB("mongodb://127.0.0.1:27017/foodmode")
// .then(()=>console.log("MongoDb is connected!"))
// .catch(err=>console.log(err))

app.listen(5000,()=>console.log("Running..."));

