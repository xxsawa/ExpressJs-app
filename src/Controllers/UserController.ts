import { Request, Response } from "express";
import {UserBuilder, ProfileManagment } from "../ProfileManagment"
import { User } from "../Models/User";
import { authenticateToken } from "../Auth" 


const express = require('express');
const router = express.Router()


router.get('/', authenticateToken, (req : any, res: Response) => {
    let user : User = new UserBuilder("daniel@email.com")
    .setLength(0)
    .setName(req.user)
    .setSeatingCapacity(8)
    .build();

    res.send(user);
  });
  
  module.exports = router