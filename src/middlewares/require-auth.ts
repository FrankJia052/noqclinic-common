import { NextFunction, Request, Response, request } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { ACTIONS, PERMISSIONS, RESOURCES } from "../auth/role";
import { InvocationError } from "../errors/invocation-error";

export const requireAuth = (resource: RESOURCES, action: ACTIONS) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let hasPermission = false
        if(!resource || !action) {
            throw new InvocationError("Resource and action are required")
        } 
        if(!req.currentUser) {
            throw new NotAuthorizedError()
        }
        // find the permission
        for(let role of req.currentUser.roles) {
            for(let permission of role.permissions) {
                if(permission.resource === resource && permission.actions.includes(action)) {
                    hasPermission = true
                }
            }
        }

        if(!hasPermission) {
            throw new NotAuthorizedError()
        }   
        next()        
    }
}