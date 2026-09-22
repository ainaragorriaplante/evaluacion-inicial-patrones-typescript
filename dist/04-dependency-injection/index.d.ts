export interface Logger {
    log(message: string): void;
}
export declare class ConsoleLogger implements Logger {
    log(message: string): void;
}
export declare class UserService {
    private logger;
    constructor(logger: Logger);
    createUser(name: string): void;
}
