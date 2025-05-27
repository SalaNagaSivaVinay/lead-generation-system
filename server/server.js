const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/leads', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const webhookURL = 'https://your-n8n-webhook-url-here';
    // await axios.post(webhookURL, { name, email, company, message });

    console.log('Lead received:', { name, email, company, message });
    res.status(200).json({ message: 'Lead submitted successfully.' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
