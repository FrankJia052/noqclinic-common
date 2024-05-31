import { Subjects } from "./subjects";

export interface DoctorCreatedEvent {
    subject: Subjects.DoctorCreated;
    data: {
        doctorId: string,
        userId: string
    }
}