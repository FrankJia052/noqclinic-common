/**
 * This is an example update event definition
 */

import { Subjects } from "./subjects";

export interface ExampleUpdatesEvent {
    subject: Subjects.ExampleUpdated;
    data: {
        text: string
    }
}