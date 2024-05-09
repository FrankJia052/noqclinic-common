import { Subjects } from "./subjects";

export interface doctorCreatedEvent {
    subject: Subjects.doctorCreated;
    data: {
        userId: string
    }
}