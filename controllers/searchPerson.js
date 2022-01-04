const Person = require("../models/person");

const searchPerson = async (data) => {
  try {
    const person = await Person.find({ favoriteFoods: data })
      .limit(2)
      .sort({ name: 1 })
      .select({ age: false });
    console.log(person);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = searchPerson;
