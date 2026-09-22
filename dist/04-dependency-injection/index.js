"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.ConsoleLogger = void 0;
class ConsoleLogger {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
class UserService {
    constructor(logger) {
        this.logger = logger;
    }
    createUser(name) {
        this.logger.log(`Usuario ${name} creado con éxito.`);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=index.js.map