const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// List of values
const values = ['Value1', 'Value2', 'Value3', 'Value4'];

app.get('/', (req, res) => {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    res.send(`<meta property="og:title" content="${randomValue}" />`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});