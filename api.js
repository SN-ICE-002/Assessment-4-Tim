// index.js
const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';

app.get('/', (req, res) => {
  res.send('Here is the staging Branch: stagging In Progresss......')
});

app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.APP_ENV || "local"
  });
});

app.get('/api', (req, res) => {
  res.sen('NEW API')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});