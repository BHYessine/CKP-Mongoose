const Person = require("../models/person");

const run = async () => {
  try {
    const allPerson = await Person.find({ name: { $exist: true } });

    console.log(allPerson);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = run;
