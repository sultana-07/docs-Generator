const {GoogleGenerativeAI} = require('@google/generative-ai');


const generateDocs = async (content) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log('Generating documentation for content:', content);
    
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash'
    });
    const result = await model.generateContent(
         `Generate documentation for the following code:\n\n${content}`
    );
 console.log("sultan" + result);
 
    const response = result.response;
    const text = response.text();
    return text;

}

module.exports = { generateDocs };