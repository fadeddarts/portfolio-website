import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import postRoutes from './routes/post.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

app.use("/api/products", postRoutes)

// Start server and connect to DB
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+PORT);
});
