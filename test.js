const express = require('express');
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port number to 3000 and start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
