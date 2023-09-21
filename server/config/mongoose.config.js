const mongoose = require("mongoose"); // This imports Mongoose's external libraries
const db_name = "tutors_db"; // Saves the project name in a variable to be used below
// If the DB does not exist, then Mongoose will create it
// This sets up the connection to the Mongo DB using mongoose instance
mongoose
  .connect("mongodb://127.0.0.1/tutors_db", {
    // Try using IP 127.0.0.1 instead of "localhost"
    useNewUrlParser: true, // Avoids deprecation warnings
    useUnifiedTopology: true, // Avoids connection errors
  })
  .then(() => console.log(`Successfully connected to ${db_name} database`))
  .catch(() => console.log(`Error connecting to ${db_name} database`, err));
