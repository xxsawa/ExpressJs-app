import { Request, Response } from "express";
import {UserBuilder, ProfileManagment } from "../ProfileManagment"
import { User } from "../Models/User";
import { LoginInfo } from "../Models/LoginInfo";
import { createToken ,authenticateToken } from "../Auth" 

const express = require('express');
const router = express.Router()


router.post('/login', (req : Request, res: Response) => {
    const loginInfo = req.body as LoginInfo;

    const accessToken = createToken(loginInfo);

    res.json({accessToken: accessToken});
  });
  
  module.exports = router