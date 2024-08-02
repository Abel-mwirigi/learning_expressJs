const express = require('express'); // Import express
const app = express(); // Create an express app which is actually setting up the server

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.set('view engine', 'ejs'); // Set the view engine to ejs

// Create a route for the root URL
app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs file
});

const usersRouter = require('./routes/users'); // Import the users router
app.use('/users', usersRouter); // Use the users router for the /users URL

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});