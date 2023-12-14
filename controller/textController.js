const asyncHandler = require('express-async-handler');
const OpenAI = require("openai")

const createText = asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "Dimensional expressions will be given and it is to prepare a letter according to the meaning and summary of the day regarding your service."
                },
                {
                    "role": "user",
                    "content": text
                }
            ],
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        res.status(201).json({
            success: true,
            data: response.choices[0].message.content
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }


})


module.exports = {
    createText
}