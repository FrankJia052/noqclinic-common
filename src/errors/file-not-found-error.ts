import { CustomError } from "./custom-error";

export class FileNotFoundError extends CustomError {
    statusCode: number = 404;
    constructor(public message: string = "File Not Found") {
        super(message)
        Object.setPrototypeOf(this, FileNotFoundError.prototype)
    }
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {message: this.message}
        ]
    }    
}