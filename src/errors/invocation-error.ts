// this is middleware parameter error
import { CustomError } from "./custom-error";

export class InvocationError extends CustomError {
    statusCode: number = 500;
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, CustomError.prototype)
    }
    
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{message: this.message}]
    }    
}