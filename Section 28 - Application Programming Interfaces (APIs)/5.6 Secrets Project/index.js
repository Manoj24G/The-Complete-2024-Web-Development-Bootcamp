// Import the express framework for building the web server
import express from "express";
// Import axios for making HTTP requests to external APIs
import axios from "axios";

// Create an instance of the express application
const app = express();
// Define the port number where the server will listen for requests
const port = 3000;

// Serve static files (CSS, images, JavaScript) from the "public" folder
app.use(express.static("public"));

// Define a GET route for the home page ("/")
// This route uses async/await to handle asynchronous API calls
app.get("/", async (req, res) => {
  // Use try-catch block to handle any errors that might occur during API request
  try {
    // Make an HTTP GET request to the Secrets API to fetch a random secret and username
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    // Render the "index.ejs" template file and pass the API response data to it
    res.render("index.ejs", {
      // Pass the secret text from the API response to the template
      secret: result.data.secret,
      // Pass the username from the API response to the template
      user: result.data.username,
    });
    // Catch block executes if any error occurs (e.g., API is down, network issue, etc.)
  } catch (error) {
    // Log the error details to the console for debugging purposes
    console.log(error.response.data);
    // Set HTTP status code to 500 (Internal Server Error) to indicate something went wrong
    res.status(500);
  }
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  // Log a message to the console confirming the server is running
  console.log(`Server is running on port ${port}`);
});
