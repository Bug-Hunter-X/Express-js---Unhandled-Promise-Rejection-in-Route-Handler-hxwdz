const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ...some database operation to fetch user with userId...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Problem: Incorrect error handling when database operation fails
//The above code only checks if user is null and sends 404. However, if db operation itself throws an error it will crash without a proper error response
