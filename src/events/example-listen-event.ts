/**
 * This is an example event definition
 */

import { Subjects } from "./subjects";

export interface ExampleListenEvent {
    subject: Subjects.ExampleListen;
    data: {
        text: string
    }
}