const Person = require("../models/person");

const personId = async (data) => {
  try {
    const person = await Person.findById(data);
    console.log(person);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = personId;
