const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouters = require('./Routers/userRouters');
const docsRouters = require('./Routers/docsRouters');

const connectDB = require('./database/db');

// Load environment variables from .env file
connectDB(); // Connect to the database

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin : '*',
  credentials : true
}));
app.use(express.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api', userRouters);
app.use('/api/docs', docsRouters);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});