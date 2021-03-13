const express = require('express');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const reservation = [
        {
            name: 'Angelica',
            email: 'angelica@bootcamp.com',
            number: '512-123-4567',
            uniqueId: 1,
        },
        {
            name: 'Drew',
            email: 'drew@bootcamp.com',
            number: '512-234-4567',
            uniqueId: 2,
        },
        {
            name: 'Stephen',
            email: 'stephen@bootcamp.com',
            number: '512-654-4567',
            uniqueId: 3,
        },
        {
            name: 'Michael',
            email: 'michael@bootcamp.com',
            number: '512-987-5689',
            uniqueId: 4,
        }
    ]
    
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")));
    app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, "tables.html")));
    app.get('/make', (req, res) => res.sendFile(path.join(__dirname, "make.html")));

    app.get('/reservation', (req, res) => res.json(reservations));
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))