import { Subjects } from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: string,
        userName: string,
        email: string,
        roles: string[],
        isActive: boolean,
        updatedAt: Date,
        isDeleted: boolean,
        version: number
    }
}