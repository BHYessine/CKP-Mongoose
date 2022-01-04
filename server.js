const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const run = require("./controllers/run");
const addPerson = require("./controllers/addPerson");
const arrayOfPeople = require("./controllers/arrayOfPeople");
const personFood = require("./controllers/personFood");
const personId = require("./controllers/personId");
const addFood = require("./controllers/addFood");
const personName = require("./controllers/personName");
const deletePerson = require("./controllers/deletePerson");
const deleteManyPerson = require("./controllers/deleteManyPerson");
const searchPerson = require("./controllers/searchPerson");
require("dotenv").config();

connectDB();

app.use(express.json());

//****** Add New Person******
//const newPerson={name: "yessine",age: 30 , favoriteFoods:["burger","chicken"]}
//addPerson(newPerson);

//****** Add Many Person******
// const arrayPeople = [
//   { name: "ahmed", age: 22 , favoriteFoods: ["burger","chicken"] },
//   { name: "feres", age: 27, favoriteFoods: ["sandwich", "egg"] },
//   { name: "ali", age: 30, favoriteFoods: ["burger", "chicken"] },
// ];
//arrayOfPeople(arrayPeople);

//****** Find All Person hava a name******
//run();

//****** Find One Person has a certain food******
// const food = "burger";
// personFood(food);

//****** Find Person with Id******
// const Id = "61ca155d156a081d98731c1b";
// personId(Id);

//****** Find Person by Id and update******
// const Id = "61ca129fd4a58285dfe3e0f9";
// const food = "hamburger";
// addFood({ Id: Id, food: food });

//****** Find Person by Name and update******
// const name = "ali";
// const age = 20;
// personName({ name: name, age: age });

//****** Find Person by Id and delete******
// const Id = "61ca129fd4a58285dfe3e0f9";
// deletePerson(Id);

//****** Find many Person by name and delete******
// const name = "Marry";
// deleteManyPerson(name);

//****** Find tow Person by favoriteFoods ******
// const food = "burger";
// searchPerson(food);

const PORT = process.env.PORT;
app.listen(process.env.port, (err) =>
  err
    ? console.error(err)
    : console.log(`This server is running on localhost:${PORT}...`)
);
