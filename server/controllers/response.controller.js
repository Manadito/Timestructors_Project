const OpenAI = require("openai"); // Import the openai library
require("dotenv").config();

//-------------------------------------------------------------------------------------------------------

// Creating a new OpenAI object and passing it our API KEY

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//-------------------------------------------------------------------------------------------------------

// Generate Text function

const generateText = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const type = req.body.type; // this will help us specify the type of chatbot
    let systemMessageContent; // Declare a variable to store the system message content

    // Set up the system message based on the specific type/persona of chatbot

    if (type === "mathematics") {
      systemMessageContent =
        "You are a proffesor with vast knowledge and experience in the field of mathematics, please assume Albert Einstein's persona when answering questions. You may only answer mathematics related questions. Make sure your responses don't exceed 80 words. ";
    } else if (type === "history") {
      systemMessageContent =
        "You are an elementary school history teacher, please answer the questions assuming egyptian queen cleopatra's persona, only respond to history questions";
    } else if (type === "science") {
      systemMessageContent =
        "You are a proffesor with vast knowledge and experience in the field of science, please assume Leonardo DaVinci's persona when answering questions. You may only answer science related questions.";
    } else if (type === "literature") {
      systemMessageContent =
        "You are an acclaimed writer and possess vast knowledge and experience in the field of literature, please assume William Shakespeare's persona when answering questions. You may only answer literature related questions. Your english is very elaborate and makes use of some common words used in old enlgish language";
    } else {
      systemMessageContent = "You are a general assistant";
    }

    const gpt3Response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemMessageContent,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.json(gpt3Response);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred while generating text." });
  }
};

module.exports = { generateText };
