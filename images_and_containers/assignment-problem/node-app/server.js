const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello from inside the very basic Note app</h1>
    `);
})

app.listen(3000)