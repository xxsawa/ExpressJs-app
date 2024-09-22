import { Request, Response } from "express";
import {UserBuilder, ProfileManagment } from "../ProfileManagment"
import { User } from "../Models/User";

const express = require('express');
const router = express.Router()


router.get('/', (req : Request, res: Response) => {
    let user : User = new UserBuilder("daniel@email.com")
    .setLength(0)
    .setName("Daniel Sawa")
    .setSeatingCapacity(8)
    .build();

    res.send(user);
  });
  
  module.exports = router