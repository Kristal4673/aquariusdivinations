require("dotenv").config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//console.log(process.env.SENDGRID_API_KEY)
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

app.get('/birthinfo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages/birthinfo.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/contact.html'));
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

app.post('/contact', async (req, res) => {
  const msg = {
    to: 'aquariusdivinations@gmail.com', // Change to your recipient
    from: 'aquariusdivinations@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg
      )
    .then(() => {
      console.log('Email sent')
      res.json()
    })
    .catch((error) => {
      console.error(error.body)
      res.json()
    })
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
