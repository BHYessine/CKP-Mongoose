const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: [true, "already used choose another name "],
  },
  age: {
    type: Number,
  },
  favoriteFoods: [String],
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = Person = model("Person", personSchema);
