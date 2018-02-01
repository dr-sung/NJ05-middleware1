// custome middleware

const express = require('express');
const app = express();

// custom middleware 1
app.use('/', (req, res, next) => { // '/': for all request 
    console.log(`middlware1 at ${req.url}`);
    next(); // VERY IMPORTANT!
});
// custom middleware 2
app.use('/user', (req, res, next) => { // only for '/user'
    console.log(`middlware2 at ${req.url}`);
    next(); // VERY IMPORTANT!
});

app.get('/', (req, res) => { // middleware 1
    res.send('<h1>Hello World!');
});

app.get('/user', (req, res) => { // middleware 2 and 1
    res.send({name: 'John', age: 25});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at', port);
});