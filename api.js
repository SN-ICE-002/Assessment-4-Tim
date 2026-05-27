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



const fs = require('fs');

app.get('/secret-check', (req, res) => {

  try {

    const secret = fs.readFileSync(
      '/etc/secrets/secret-message.txt',
      'utf8'
    );

    res.json({
      status: "secret loaded",
      length: secret.length
    });

  }

  catch {

    res.status(500).json({
      status: "secret missing"
    });

  }

});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});