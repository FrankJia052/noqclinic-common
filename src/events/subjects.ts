/**
 * Define all the event name here, event like a message that publish to other services.
 */

export enum Subjects {
    TicketCreated = "ticket:created",
    TicketUpdated = "ticket:update",

    OrderCreated = "order:created",
    OrderCancelled = "order:cancelled",

    ExpirationCompelete = "expiration:complate",

    PaymentCreated = "payment:created",

    ExampleCreated = "example:created",
    ExampleUpdated = "example:updated"
}