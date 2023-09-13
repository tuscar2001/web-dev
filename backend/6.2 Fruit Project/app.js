//jshint esversion:7.0

import mongoose from "mongoose";

// Replace the uri string with your connection string.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

// create a new schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//create the model
const Fruit = mongoose.model("Fruit", fruitSchema);

// now creating the document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty sollid as a fruit"
});

fruit.save();
