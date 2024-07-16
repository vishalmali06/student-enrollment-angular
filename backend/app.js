// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors()); // Enable CORS for all routes

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
