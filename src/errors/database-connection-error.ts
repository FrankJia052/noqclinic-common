import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
    statusCode = 500
    reason = 'Error connecting to database'
    constructor() {
        super("error connection to database!")
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [
            {message: this.reason}
        ]
    }
}