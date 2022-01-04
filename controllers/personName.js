const Person = require("../models/person");

const personName = async (data) => {
  const name = { name: data.name };
  const age = { age: data.age };
  const person = await Person.findOneAndUpdate(name, age, {
    new: true,
    runValidators: true,
  });
  person.updatedAt = Date.now();
  await person.save(() => {
    try {
      console.log(`Age of ${data.name} updated successfully`, person);
    } catch (err) {
      console.log(err.message);
    }
  });
};

module.exports = personName;
