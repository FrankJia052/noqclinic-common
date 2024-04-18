import { CustomError } from "./custom-error";

// extends CutomError and implement inherited abstract class (use quick fix)
export class ExampleError extends CustomError {
    // define a status code
    statusCode: number = 999;
    // define a constructor if parameter need pass to the error
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, CustomError.prototype)
    }
    
    // this function serialize the error output for error handler in the middleware
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        // implemente
        return [{message: "example error type"}]
    }    
}