import { Subjects } from "./subjects";

export interface PatientCreatedEvent {
    subject: Subjects.PatientCreated;
    data: {
        userId: string
    }
}