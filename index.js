require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

morgan.token("body", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

const Person = require("./models/person");

app.get("/", (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

app.get("/api/persons", (request, response, next) => {
  console.log(Person);
  Person.find({})
    .then((people) => {
      response.json(people);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => res.json(person))
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then((result) => res.status(204).end())
    .catch((error) => next(error));
});

app.get("/info", (req, res, next) => {
  const date = new Date();
  Person.find({})
    .then((people) =>
      res.send(
        `<div><p>Phonebook has info for ${people.length} people</p><p>${date}</p></div>`
      )
    )
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const { name, number } = request.body;

  if (!name) {
    return next(new Error("name is missing"));
  }

  if (!number) {
    return next(new Error("number is missing"));
  }

  const person = new Person({ name, number });
  person
    .save()
    .then((savedPerson) => response.json(savedPerson))
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const { name, number } = request.body;

  const person = { name, number };

  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
  })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((error) => next(error));
  console.log("name: ", name, "number: ", number, "id", request.params.id);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// olemattomien osoitteiden käsittely
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error("error handler", error.message);
  if (error.message.includes("Cast to ObjectId")) {
    return response.status(404).json("Id not found");
  }
  return response.status(400).json(error.message);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
