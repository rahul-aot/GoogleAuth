const express = require('express');
const app = express();
const port =3000;

app.use(express.json());

app.get('/api/login', (req, res) => {
    console.log(req.body);
    res.redirect('http://localhost:4200/home');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});