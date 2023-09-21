const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Move CORS up
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

require("./config/mongoose.config"); // This calls the Mongoose Config file ... remember to have mongo running

// --------------------------------------------------------------------------------------------------------------------------------------
// Here we take the router instance from step 5 and import it over

const UserRouter = require("./routes/user.routes");
app.use("/api/users", UserRouter);

const ResponseRouter = require("./routes/response.routes"); // Import the new route file for the response
app.use("/", ResponseRouter);

// --------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Used to bind and listen to the connections on the specified host and port
