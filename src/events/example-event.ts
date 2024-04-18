/**
 * This is an example event definition
 */

import { Subjects } from "./subjects";

export interface ExampleEvent {
    subject: Subjects.Example;
    data: {
        id: string,
        version: number,
        title: string,
        price: number
    }
}