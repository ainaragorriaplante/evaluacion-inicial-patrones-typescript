/**
 * Patrón Dependency Injection (Inyección de Dependencias)
 * Técnica en la que un objeto recibe sus dependencias de otros objetos en lugar de crearlas internamente.
 */
export interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

export class UserService {
  private logger: Logger;

  // La dependencia (Logger) es inyectada a través del constructor
  constructor(logger: Logger) {
    this.logger = logger;
  }

  public createUser(name: string): void {
    this.logger.log(`Usuario ${name} creado con éxito.`);
  }
}

