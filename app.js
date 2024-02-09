const express = require('express');
const app = express();
const port = 3000;

// Ustawienia middleware dla obsługi formularza i plików statycznych
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

// Strona główna
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Obsługa przesyłania formularza
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Dane odebrane! Imię: ${name}, E-mail: ${email}`);
});

// Nasłuchiwanie na porcie
app.listen(port, () => {
  console.log(`Aplikacja działa na http://localhost:${port}`);
});
