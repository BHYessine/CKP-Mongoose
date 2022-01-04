const Person = require("../models/person");

const addFood = async (data) => {
  const Id = data.Id;
  const food = data.food;
  const person = await Person.findById(Id);
  person.favoriteFoods.push(food);
  person.updatedAt = Date.now();
  await person.save(() => {
    try {
      console.log(`${food} added successfully`, person);
    } catch (err) {
      console.log(err.message);
    }
  });
};

module.exports = addFood;
