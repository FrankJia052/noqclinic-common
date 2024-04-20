/**
 * This is an example updated event definition
 */

import { Subjects } from "./subjects";

export interface ExampleUpdatedEvent {
    subject: Subjects.ExampleUpdated;
    data: {
        text: string
    }
}