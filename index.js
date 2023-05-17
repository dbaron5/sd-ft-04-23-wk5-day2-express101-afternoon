const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
let restaurants = [
  { name: "Uchi", style: "Asian", price: "$$$$" },
  //  { name: "Katz's Deli", style: "Delicatessen", price: "$$" },
];

// Routes go here
app.get("/get_restaurant_name", (req, res) => {
  res.send(restaurants);
});

app.post("");

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
