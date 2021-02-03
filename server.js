var express = require("express");
require('dotenv').config()

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./routes/html-routes.js")(app);
require("./routes/chores-api-routes")(app);
require("./routes/users-api-routes")(app);

// Import routes and give the server access to them.
/* var routes = require("./controllers/choreController.js");

app.use(routes); */

db.sequelize.sync({force: false}).then(function(){
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

})

