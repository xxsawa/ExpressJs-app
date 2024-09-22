import { Errback, NextFunction, Request, Response } from "express";
import { LoginInfo } from "./Models/LoginInfo";
import { User } from "./Models/User";
const jwt = require('jsonwebtoken')


export function createToken(loginInfo: LoginInfo){
    const accessToken = jwt.sign({name: loginInfo.name}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
    return accessToken;
}

export function authenticateToken(req: any, res : Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: User) => {
        if (err) return res.sendStatus(403);
        req.user = user
        next();
    })
}