// Loading all key values
require("dotenv").config();

// Third party libraries imports
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Allow only this origin
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

require("./config/mongoose.config"); // This calls the Mongoose Config file ... remember to have mongo running

// --------------------------------------------------------------------------------------------------------------------------------------
// Importing API routes and incorporating them to 'app' instance

const UserRouter = require("./routes/user.routes");
app.use("/api/users", UserRouter);

const ResponseRouter = require("./routes/response.routes"); // Import the new route file for the response
app.use("/", ResponseRouter);

// --------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Used to bind and listen to the connections on the specified host and port
