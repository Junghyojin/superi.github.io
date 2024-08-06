const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// POST endpoint to handle form submission
app.post('/submit-signup', (req, res) => {
    const { id, password, name, dob } = req.body;

    console.log('Form data received:', { id, password, name, dob });

    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
