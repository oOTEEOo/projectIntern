// server.js
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})


// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Routes
app.use('/users', usersRouter);


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:1234@cluster0.u9t9v5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });
