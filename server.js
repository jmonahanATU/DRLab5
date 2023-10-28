// Import the 'express' module and create an Express application.
const express = require('express');
const app = express();

// Define the port number the server will listen on.
const port = 4000;

// Import and use 'body-parser' middleware to handle request body data.
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

// Define routes and their corresponding handlers using HTTP methods.
// 1. A GET request to '/name' route.
app.get('/name', (req, res) => {
    // Send a response that includes the first name and last name from the query parameters.
    res.send("Hello World!" + req.query.fname + ' ' + req.query.lname);
});

// 2. A POST request to '/name' route.
app.post('/name', (req, res) => {
    // Send a response that includes the first name and last name from the request body.
    res.send("Hello World!" + req.body.fname + ' ' + req.body.lname);
});

// 3. Another POST request to '/name' route.
app.post('/name', (req, res) => {
    // Send a generic "Hello POST" response.
    res.send("Hello POST");
});

// 4. A GET request to the root ('/') route.
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 5. A GET request to the '/whatever' route.
app.get('/whatever', (req, res) => {
    res.send("Good Bye");
});

// 6. A GET request to the '/datarep' route.
app.get('/datarep', (req, res) => {
    res.send("Welcome to Data Representation & Querying.");
});

// 7. A dynamic route using a parameter named 'Ted'.
app.get('/hello/:Ted', (req, res) => {
    // Send a personalized "Hello" response using the value of the 'Ted' parameter.
    res.send("Hello " + req.params.Ted);
});

// 8. Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// 9. A GET request to the '/test' route to serve an HTML file.
app.get('/test', (req, res) => {
    // Send an HTML file located in the same directory as the server file.
    res.sendFile(__dirname + '/index.html');
});

// 10. A GET request to the '/api/books' route.
app.get('/api/books', (req, res) => {
    // Define a sample data array of books and send it as JSON in the response.
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    // Send a JSON response containing book data and a message.
    res.json({
        myBooks: data,
        "Message": "Hello from server.js"
    });
});
