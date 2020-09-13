require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("build"));

morgan.token("body", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let notes = {
  persons: [
    {
      name: "Arto Hellas",
      number: "040-530",
      id: 1,
    },
    {
      name: "Arto Kakkonen",
      number: "040-555-4444",
      id: 2,
    },
    {
      name: "Ville vakava",
      number: "04033-530",
      id: 3,
    },
    {
      name: "Hurr Durr",
      number: "00000",
      id: 4,
    },
  ],
};

const Person = require("./models/person");

app.get("/", (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

app.get("/api/persons", (request, response) => {
  console.log(Person);
  Person.find({}).then((people) => {
    console.log(people);
    response.json(people);
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(req.params);
  const person = notes.persons.find((p) => p.id === id);
  console.log(person);

  if (!person) {
    return res.status(404).end();
  }

  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(req.params);
  notes.persons = notes.persons.filter((p) => p.id !== id);

  res.status(204).end();
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(
    `<div><p>Phonebook has info for ${notes.persons.length} people</p><p>${date}</p></div>`
  );
});

const generateId = () => {
  return Math.floor(Math.random() * 10000000);
};

app.post("/api/persons", (request, response) => {
  // const id = generateId();
  const { name, number } = request.body;

  if (!name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }

  if (!number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }

  const person = new Person({ name, number });
  person.save().then((savedPerson) => response.json(savedPerson));
  // if (notes.persons.find((p) => p.name === person.name)) {
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  // const numberObject = { ...person, id };

  // notes.persons = notes.persons.concat(numberObject);
  // console.log(person);
  // console.log(id);

  // response.json(numberObject);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
