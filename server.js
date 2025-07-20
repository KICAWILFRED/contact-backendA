const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://project-a1-one.vercel.app'
 // 👈 replace with your real frontend URL
}));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Simulate saving or emailing
  console.log('New Contact Form Submission:', { name, email, message });

  // Respond to frontend
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
