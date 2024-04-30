import { ROLE } from "../auth/role";
import { Subjects } from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: string,
        userName: string,
        email: string,
        roles: ROLE[],
        isActive: boolean,
        updatedAt: Date,
        isDeleted: boolean,
        version: number
    }
}