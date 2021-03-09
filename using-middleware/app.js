const express = require('express');
const app = express();
const PORT = 3000;

// An example middleware function
const a_middleware_function = (req, res, next) => {
    // ... perform some operations
    console.log('Middleware executed!');
    next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
