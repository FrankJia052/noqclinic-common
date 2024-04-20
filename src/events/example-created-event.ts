/**
 * This is an example create event definition
 */

import { Subjects } from "./subjects";

export interface ExampleCreatedEvent {
    subject: Subjects.ExampleCreated;
    data: {
        text: string
    }
}