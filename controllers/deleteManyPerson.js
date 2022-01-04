const Person = require("../models/person");

const deleteManyPerson = async (data) => {
  try {
    const person = await Person.deleteMany({ name: data });
    person.deletedCount == 0
      ? console.log(`No person with name ${data} exist!!`)
      : console.log(`${person.deletedCount} person with name ${data} deleted`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = deleteManyPerson;
