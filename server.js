const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, fristname: 'Chanaru', lastname: 'Sampath'},
        {id: 2, fristname: 'Brad', lastname: 'Pit'},
        {id: 3, fristname: 'John', lastname: 'Wick'}
    ];
    res.json(customers);
});

app.listen(port, () => console.log(`Example app listening on port !${port}`));

