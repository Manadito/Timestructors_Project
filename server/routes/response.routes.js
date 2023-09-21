//1. Importing External Libraries
const express = require("express");

//------------------------------------------------------------------------------------
//2. Importing the controller method
const { generateText } = require("../controllers/response.controller");

//------------------------------------------------------------------------------------
//3. Create a router instance
const ResponseRouter = express.Router();

//------------------------------------------------------------------------------------
//4. Link Route with Controller Method
ResponseRouter.post("/generate-text", generateText);

//------------------------------------------------------------------------------------
//5. Exporting the Router
module.exports = ResponseRouter;
