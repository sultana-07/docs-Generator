const {generateDocs} = require('../utils/docsGen');
const { validationResult } = require('express-validator');
 
const uploadDocument = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const file = req; // Assuming the file is uploaded using multer middleware
        if (!file) {
            return res.status(400).json({ message: 'File is required' });
        }


        // Generate documentation for the uploaded file
        const docContent = file.body.content
        console.log('File content:', docContent);
        
        const documentation = await generateDocs(docContent);
        console.log('Generated documentation:', documentation);
        
        return res.status(200).json({
           
            documentation
        });
    } catch (error) {
        console.error('Error uploading document:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
// This code is part of a Node.js backend controller for handling document uploads and generating documentation using Google Generative AI.
// The `uploadDocument` function processes the uploaded file, generates documentation from its content, and returns a response with the file details and generated documentation.
module.exports = {
    uploadDocument
};
