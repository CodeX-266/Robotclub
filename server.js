const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(express.json());
// Enable CORS
app.use(cors());

// Root route

app.use(express.static(path.join(__dirname, 'public')));

// Handle GET requests to the root URL (returns index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST route for contact form submission
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body; // Destructuring for clarity

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).send({ error: "All fields are required!" });
    }

    // Logging the submitted data (you can replace this with a database or email sending logic)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Send a response to the client
    res.status(200).send({
        message: "Thank you for your message! We will get back to you shortly."
    });
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
