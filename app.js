const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();

// Use CORS middleware
app.use(cors()); // This will enable CORS for all routes

const port = 5000;

// Array of thoughts
const thoughts = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
];

// Function to get a random thought
const getRandomThought = () => {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  return thoughts[randomIndex];
};

// Define a route to get a thought of the day
app.get("/thought", (req, res) => {
  const thought = getRandomThought();
  res.json({ thought });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
