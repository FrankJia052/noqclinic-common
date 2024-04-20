/**
 * This is an example update event definition
 */

import { Subjects } from "./subjects";

export interface ExampleUpdateEvent {
    subject: Subjects.ExampleUpdate;
    data: {
        text: string
    }
}