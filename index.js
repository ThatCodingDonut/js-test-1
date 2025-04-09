import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 80;
app.use(express.static(path.join(__dirname)));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'register', 'register.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
