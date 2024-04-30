import { Subjects } from "./subjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string,
        userName: string,
        email: string,
        roles: string[],
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
        isDeleted: boolean,
        version: number
    }
}