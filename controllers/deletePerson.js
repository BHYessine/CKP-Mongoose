const Person = require("../models/person");

const deletePerson = async (data) => {
  try {
    const person = await Person.findByIdAndRemove(data);
    console.log(`Person with Id (${data}) deleted`, person);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = deletePerson;
