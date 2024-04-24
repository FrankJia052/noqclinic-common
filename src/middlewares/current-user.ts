import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { ACTIONS, RESOURCES, ROLE } from "../auth/role";

interface UserPayload {
    id: string;
    userName: string;
    email: string;
    roles: {name: ROLE, permissions: {resource: RESOURCES, actions: ACTIONS}[]}[];
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(!req.session?.jwt) {
        return next()
    }
    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload
        req.currentUser = payload;
    } catch (err) {}

    next() 
}