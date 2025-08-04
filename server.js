const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from Nelson\'s backend!');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });