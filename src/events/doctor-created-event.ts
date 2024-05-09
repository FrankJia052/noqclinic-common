import { Subjects } from "./subjects";

export interface doctorCreatedEvent {
    subject: Subjects.DoctorCreated;
    data: {
        userId: string
    }
}