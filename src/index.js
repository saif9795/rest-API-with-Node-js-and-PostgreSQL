import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import errorHandler from './middleware/errorHandler.js';


import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.user("/api", userRoutes);

//Error handling middleware
app.use(errorHandler);

//Testing PostgreSQL connection
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The Database name is ${result.rows[0].current_database}`);
})


//Server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});