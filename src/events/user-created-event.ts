import { ROLE } from "../auth/role";
import { Subjects } from "./subjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string,
        userName: string,
        email: string,
        roles: ROLE[],
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
        isDeleted: boolean,
        version: number
    }
}