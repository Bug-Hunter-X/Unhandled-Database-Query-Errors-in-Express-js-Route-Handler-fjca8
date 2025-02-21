const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to get the user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Problem: The above code snippet is vulnerable to unexpected errors because it directly uses the user input from the request parameter.  If the database query fails for any reason, the code does not gracefully handle this error.  This leads to an unexpected crash or a 500 Internal Server Error, rather than a user-friendly 404.