const Person = require("../models/person");

const addPerson = async (data) => {
  const person = new Person(data);

  await person.save(() => {
    try {
      console.log("New person added successfully");
    } catch (err) {
      console.log(err.message);
    }
  });
};
module.exports = addPerson;
