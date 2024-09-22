import { Request, Response } from "express";

const express = require('express');
const dotenv = require('dotenv');
const userController = require('./Controllers/UserController')
const authController = require('./Controllers/AuthController')


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use('/users', userController)
app.use('/auth', authController)


app.get('/', (req : Request, res: Response) => {
  res.send('Express + TypeScript Server live zmena');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
