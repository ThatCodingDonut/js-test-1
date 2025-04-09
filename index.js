import express from "express";
import asyncio from "asyncio";
import fs from "fs";
import chalk from "chalk";

let app = express()

app.all('/', (req, res) => {
    res.end(fs.readFileSync('pages/index.html'))
})

app.listen(80, (_params) => {
    var _log = chalk.yellowBright.bold("Running on port 80")
    console.log(_log)
})