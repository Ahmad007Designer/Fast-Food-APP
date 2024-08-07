const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const mongoURI = "mongodb://127.0.0.1:27017/foodmode";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("mongoose Connected");

    //fetch the items from data base--
    const itemscollection = mongoose.connection.db.collection("items");
    const itemsdata = await itemscollection.find({}).toArray();
    global.food_items=itemsdata;
     //fetch the category from data base--
    const categoriesCollection = mongoose.connection.db.collection("categories");
    const categoryData = await categoriesCollection.find({}).toArray();
    global.food_category=categoryData;
  } 
  catch (error) {
    console.error("Error  connection to MongoDB:", error);
  }
}

module.exports = connectToMongoDB;
