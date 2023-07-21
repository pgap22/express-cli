// Importing necessary modules from their respective files
import { Esquema } from "./clase/Esquema.js"; // Importing Esquema class from Esquema.js
import { Controlador } from "./clase/Controlador.js"; // Importing Controlador class from Controlador.js
import { RouterAPI } from "./clase/RouterAPI.js"; // Importing RouterAPI class from RouterAPI.js

// Importing the Express module
import express from "express";

// Creating an instance of the Express application
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

/** YOUR CODE HERE **/


// Starting the server and listening on port 4000
app.listen(4000, () => {
    console.log("Server listening on port 4000");
});