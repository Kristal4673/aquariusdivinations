const getTarotData = require("./getTarot");
// Import required modules
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
// Create an instance of Express
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/astrology', async (req, res) => {
    console.log(req.body);
    const { day, month, year, hour, min, name, lat, lon, tzone } = req.body;
    try {
      const tarotData = await getTarotData(day, month, year, hour, min, name, lat, lon, tzone);
      res.json(tarotData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tarot data' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
