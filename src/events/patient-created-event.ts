import { Subjects } from "./subjects";

export interface PatientCreatedEvent {
    subject: Subjects.PatientCreated;
    data: {
        patientId: string,
        userId: string
    }
}