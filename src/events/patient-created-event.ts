import { Subjects } from "./subjects";

export interface PatientCreatedEvent {
    subject: Subjects.patientCreated;
    data: {
        userId: string
    }
}