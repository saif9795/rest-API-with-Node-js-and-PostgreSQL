import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes


//Error handling middleware

//Server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});