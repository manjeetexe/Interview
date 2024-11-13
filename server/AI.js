const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = "AIzaSyC083OaLe0DQtpRhpLdWB5ojhNkm5XwHV8";  // Replace with your API key
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-002",  // Use the correct model
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// Function to get AI response
async function getAIResponse(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        if (result && result.response) {
            return result.response.text();  // Return the AI's response text
        } else {
            throw new Error('Invalid response format from AI');
        }
    } catch (error) {
        throw new Error('Error communicating with the AI model: ' + error.message);
    }
}

module.exports = { getAIResponse };