/**
 * This is an example create event definition
 */

import { Subjects } from "./subjects";

export interface ExampleCreateEvent {
    subject: Subjects.ExampleCreate;
    data: {
        text: string
    }
}