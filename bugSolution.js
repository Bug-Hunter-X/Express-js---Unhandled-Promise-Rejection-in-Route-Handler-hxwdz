const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...some database operation to fetch user with userId...
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
});
//Solution: Uses try...catch to handle potential errors during database operation.  If an error occurs, it logs the error and sends a 500 Internal Server Error response.