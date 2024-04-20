/**
 * This is an example created event definition
 */

import { Subjects } from "./subjects";

export interface ExampleCreatedEvent {
    subject: Subjects.ExampleCreated;
    data: {
        text: string
    }
}