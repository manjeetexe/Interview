const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAIResponse } = require('./AI');  // Import the AI logic

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to receive data from frontend and pass it to AI model
app.post('/sendData', async (req, res) => {
    const { prompt } = req.body; // Access the data sent from the frontend

    if (!prompt) {
        return res.status(400).json({ message: 'No prompt data received' });
    }

    try {
        const aiResponse = await getAIResponse(prompt);  // Pass prompt to AI model
        res.json({ message: aiResponse });  // Send AI response back to frontend
    } catch (error) {
        res.status(500).json({ message: 'Error processing AI response', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});