const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const Person = require("./models/person");

require("dotenv").config();

connectDB();

app.use(express.json());

//****** Add New Person******
// const newPerson = { name: "Marry", age: 15, favoriteFoods: ["burger", "fish"] };
// const addPerson = async () => {
//   const person = new Person(newPerson);
//   await person.save(() => {
//     try {
//       console.log("New person added successfully:", person);
//     } catch (err) {
//       console.log(err.message);
//     }
//   });
// };
// addPerson();

//****** Add Many Person******
// const arrayPeople = [
//   { name: "ahmed", age: 22 , favoriteFoods: ["burger","chicken"] },
//   { name: "feres", age: 27, favoriteFoods: ["sandwich", "egg"] },
//   { name: "ali", age: 30, favoriteFoods: ["burger", "chicken"] },
// ];
// const arrayOfPeople = async () => {
//   const newperson = await Person.create(arrayPeople);

//   await newperson.save(() => {
//     try {
//       console.log("Many person added successfully");
//     } catch (err) {
//       console.log(err.message);
//     }
//   });
// };
// arrayOfPeople();

//****** Find All Person have a name******
// const run = async () => {
//   try {
//     const allPerson = await Person.find({ name: { $exists: true } });
//     console.log(allPerson);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// run();

//****** Find One Person has a certain food******
// const food = "burger";
// const personFood = async () => {
//   try {
//     const person = await Person.findOne({
//       favoriteFoods: food,
//     });
//     console.log(`Here is the person favors the ${food}:`, person);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// personFood();

//****** Find Person with Id******
// const Id = "61ca149655431b4a7bcc02e2";
// const personId = async () => {
//   try {
//     const person = await Person.findById(Id);
//     console.log(person);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// personId();

//****** Find Person by Id and update******
// const Id = "61ca149655431b4a7bcc02e2";
// const food = "hamburger";
// const addFood = async () => {
//   const person = await Person.findById(Id);
//   person.favoriteFoods.push(food);
//   person.updatedAt = Date.now();
//   await person.save(() => {
//     try {
//       console.log(`${food} added successfully`, person);
//     } catch (err) {
//       console.log(err.message);
//     }
//   });
// };
// addFood();

//****** Find Person by Name and update******
// const name = "ali";
// const age = 20;
// const personName = async () => {
//   const person = await Person.findOneAndUpdate(name, age, {
//     new: true,
//     runValidators: true,
//   });
//   person.updatedAt = Date.now();
//   await person.save(() => {
//     try {
//       console.log(`Age of ${data.name} updated successfully`, person);
//     } catch (err) {
//       console.log(err.message);
//     }
//   });
// };
// personName();

//****** Find Person by Id and delete******
// const Id = "61ca129fd4a58285dfe3e0f9";
// const deletePerson = async () => {
//   try {
//     const person = await Person.findByIdAndRemove(Id);
//     console.log(`Person with Id (${Id}) deleted`, person);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// deletePerson();

//****** Find many Person by name and delete******
// const name = "Marry";
// const deleteManyPerson = async () => {
//   try {
//     const person = await Person.deleteMany({ name: name });
//     person.deletedCount == 0
//       ? console.log(`No person with name ${name} exist!!`)
//       : console.log(`${person.deletedCount} person with name ${name} deleted`);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// deleteManyPerson();

//****** Find tow Person by favoriteFoods ******
const food = "burger";
const searchPerson = async () => {
  try {
    const person = await Person.find({ favoriteFoods: food })
      .limit(2)
      .sort({ name: 1 })
      .select({ age: false });
    console.log(person);
  } catch (err) {
    console.log(err.message);
  }
};
searchPerson();

const PORT = process.env.PORT;
app.listen(process.env.port, (err) =>
  err
    ? console.error(err)
    : console.log(`This server is running on localhost:${PORT}...`)
);
