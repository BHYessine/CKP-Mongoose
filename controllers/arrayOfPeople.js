const Person = require("../models/person");

const arrayOfPeople = async (data) => {
  const newperson = await Person.create(data);

  await newperson.save(() => {
    try {
      console.log("Many person added successfully");
    } catch (err) {
      console.log(err.message);
    }
  });
};
module.exports = arrayOfPeople;
