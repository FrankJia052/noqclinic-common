import { NextFunction, Request, Response, request } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { ACTIONS, PERMISSIONS, RESOURCES } from "../auth/role";
import { InvocationError } from "../errors/invocation-error";

// export const requireAuth = (
//     resource: RESOURCES,
//     action: string,
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     if(!req.currentUser) {
//         throw new NotAuthorizedError()
//     }

//     next()
// }

export const requireAuth = (resource: RESOURCES, action: ACTIONS) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(!resource || !action) {
            throw new InvocationError("Resource and action are required")
        } 
        if(!req.currentUser) {
            throw new NotAuthorizedError()
        }
        // find the permission
        const permissions = PERMISSIONS.find(permission => permission.role === req.currentUser!.role)!.permissions
        const hasPermission = permissions.some(item => {
            return item.resource === resource && item.actions.includes(action)
        })
        if(!hasPermission) {
            throw new NotAuthorizedError()
        }   
        next()        
    }
}