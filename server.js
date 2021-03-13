const express = require('express');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const tables = [
        {
            name: 'Angelica',
            email: 'angelica@bootcamp.com',
            phoneNumber: '512-123-4567',
            uniqueId: 1,
        },
        {
            name: 'Drew',
            email: 'drew@bootcamp.com',
            phoneNumber: '512-234-4567',
            uniqueId: 2,
        },
        {
            name: 'Stephen',
            email: 'stephen@bootcamp.com',
            phoneNumber: '512-654-4567',
            uniqueId: 3,
        },
        {
            name: 'Michael',
            email: 'michael@bootcamp.com',
            phoneNumber: '512-987-5689',
            uniqueId: 4,
        }
    ]

for (let i = 0; i < tables.length; i++) {
    if (tables === tables[i].uniqueId) {
      return res.json(tables[i]);
    }
  }

  return res.json(true);
   
    
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")));
    app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, "reservations.html")));
    app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, "tables.html")));

    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))