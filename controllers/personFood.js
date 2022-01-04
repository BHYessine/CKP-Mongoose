const Person = require("../models/person");

const personFood = async (data) => {
  try {
    const person = await Person.findOne({
      favoriteFoods: data,
    });
    console.log(`Here is the person favors the ${data}:`, person);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = personFood;
