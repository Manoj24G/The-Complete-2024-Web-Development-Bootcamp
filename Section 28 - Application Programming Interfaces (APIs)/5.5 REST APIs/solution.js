// Import the Express framework for building web applications
import express from "express";
// Import Axios for making HTTP requests to external APIs
import axios from "axios";
// Import body-parser middleware to parse incoming request bodies
import bodyParser from "body-parser";

// Create an instance of the Express application
const app = express();
// Define the port number on which the server will listen
const port = 3000;
// Define the base URL for the Secrets API
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
// Store the bearer token for API authentication
const yourBearerToken = "5cd87554-8fef-4e7c-a369-3f450910167b";
// Create a configuration object with authorization headers for Axios requests
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// Use body-parser middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route for the root path "/"
app.get("/", (req, res) => {
  // Render the index.ejs template with initial content
  res.render("index.ejs", { content: "Waiting for data..." });
});

// Define a POST route for "/get-secret" to retrieve a secret by ID
app.post("/get-secret", async (req, res) => {
  // Extract the ID from the request body
  const searchId = req.body.id;
  // Use try-catch to handle potential errors in the API call
  try {
    // Make a GET request to the Secrets API to fetch the secret with the given ID
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    // Render the index.ejs template with the retrieved data as JSON
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // If an error occurs, render the error response data
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Define a POST route for "/post-secret" to create a new secret
app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  // Use try-catch to handle potential errors
  try {
    // Make a POST request to the Secrets API to create a new secret with data from req.body
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    // Render the response data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Handle errors by rendering the error data
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Define a POST route for "/put-secret" to update an entire secret
app.post("/put-secret", async (req, res) => {
  // Extract the ID from the request body
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  // Use try-catch for error handling
  try {
    // Make a PUT request to update the secret with the given ID using data from req.body
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    // Render the updated data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Render error data on failure
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Define a POST route for "/patch-secret" to partially update a secret
app.post("/patch-secret", async (req, res) => {
  // Extract the ID from the request body
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  // Use try-catch for error handling
  try {
    // Make a PATCH request to partially update the secret with the given ID
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    // Render the updated data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Render error data on failure
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Define a POST route for "/delete-secret" to delete a secret
app.post("/delete-secret", async (req, res) => {
  // Extract the ID from the request body
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  // Use try-catch for error handling
  try {
    // Make a DELETE request to remove the secret with the given ID
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    // Render the response data (likely confirmation of deletion)
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Render error data on failure
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server starts
  console.log(`Server is running on port ${port}`);
});
