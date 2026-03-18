// Importing the express framework for building web applications.
import express from "express";

// Importing body-parser middleware to parse incoming request bodies.
import bodyParser from "body-parser";

// Importing axios for making HTTP requests.
import axios from "axios";

// Creating an instance of an express application.
const app = express();

// Defining the port number for the server to listen on.
const port = 3000;

// Serving static files from the 'public' directory.
app.use(express.static("public"));

// Using body-parser middleware to parse URL-encoded data.
app.use(bodyParser.urlencoded({ extended: true }));

// Handling GET requests to the root URL.
app.get("/", async (req, res) => {
  try {
    // Making a GET request to the Bored API to fetch a random activity.
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    // Rendering the 'index.ejs' view with the fetched data.
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    // Rendering the 'index.ejs' view with an error message if the request fails.
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Handling POST requests to the root URL.
app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // Extracting the type and participants from the request body.
    const type = req.body.type;
    const participants = req.body.participants;
    // Making a GET request to the Bored API to fetch activities based on type and participants.
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    console.log(result);
    // Rendering the 'index.ejs' view with a random activity from the fetched results.
    res.render("index.ejs", {
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    // Rendering the 'index.ejs' view with an error message if the request fails.
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

// Starting the server and listening on the defined port.
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
