/**
 * This is an example event definition
 */

import { Subjects } from "./subjects";

export interface ExamplePublishEvent {
    subject: Subjects.ExamplePublish;
    data: {
        text: string
    }
}