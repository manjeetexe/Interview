const { GoogleGenerativeAI } = require('@google/generative-ai');  // Ensure you have the correct import
const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',  // Use your desired model
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const generateResponse = async (req, res) => {
  const prompt = req.body.prompt;  // Get the prompt from the request body

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],  // Optionally store previous messages in history
    });

    const result = await chatSession.sendMessage(prompt);  // Send the prompt to the model
    res.json({ text: result.response.text() });  // Send the response back to the client
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { generateResponse };