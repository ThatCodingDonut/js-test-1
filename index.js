import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname)));

// Route to serve index.html
app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'pages', 'index.ejs'));
});

app.all('/register', (req, res) => {
    if (req.method == 'GET') {
        res.render(path.join(__dirname, 'pages', 'register', 'register.ejs'))
    } else {
        res.send(`
        <h1 style="text-align: center;">Thank you for applying!</h1>
        `)
        var MailClient = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "corbinchandler727@gmail.com",
                pass: process.env.APP_PASS
            },
            secure: true,
            port: 465,
            tls: {
                rejectUnauthorized: false
            }
        })

        MailClient.sendMail({
            subject: "Hi!",
            from: "Corbin C <corbinchandler727@gmail.com>",
            to: "corbinchandler777@gmail.com",
            text: "Hello!"
        })

        console.log("USER REGISTERED")
    }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
