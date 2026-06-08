// server.js — Express bootstrap for the Artifact5 tutorial server.
// Express is introduced per the feature request; CommonJS keeps the tutorial simple.
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000; // configurable port, defaults to 3000

// Baseline tutorial endpoint: returns the original "Hello world" response.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// NEW endpoint added per the feature request: returns "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start listening so both endpoints become reachable.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
