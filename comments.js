const express = require('express');

// Create web server using Express.js  
const app = express();
const PORT = 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the comments server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
