// Imports the Express framework so we can build a web server.
import express from "express";

// Imports body-parser, a middleware that parses incoming request bodies (e.g., form data).
import bodyParser from "body-parser";

// Creates a new Express application instance (the web server).
const app = express();
//Creates a new Express application instance (the web server).
const port = 3000;
//
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';


app.use(express.static("public"));
//Serves static files (HTML, CSS, JS, images) from the public/ folder.
app.use(bodyParser.urlencoded({ extended: true }));
// Enables parsing of URL-encoded form submissions (req.body) so we can read form fields.

let data;
//Declares a variable to hold the selected recipe object after parsing the JSON. Used later when rendering.

app.get("/", (req, res) => {
  //Defines a route for GET requests to /.
  res.render("index.ejs", { recipe: data });
  // Renders the index.ejs template and passes { recipe: data } into it.
});

app.post("/recipe", (req, res) => {
  //Defines a route for POST requests to /recipe.
  switch (req.body.choice) {
    //Checks which option was submitted via the form field named choice.
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
  //After selecting a recipe, redirect back to / so the page can render with the newly selected data.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
