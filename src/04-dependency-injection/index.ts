// Contrato / Interfaz de la dependencia
export interface NotificationService {
  sendNotification(recipient: string, message: string): void;
}

// Implementación concreta 1: Servicio de Correo Electrónico
export class EmailService implements NotificationService {
  sendNotification(recipient: string, message: string): void {
    console.log(`[EmailService] Enviando email a '${recipient}': ${message}`);
  }
}

// Implementación concreta 2: Servicio de Mensajería SMS
export class SmsService implements NotificationService {
  sendNotification(recipient: string, message: string): void {
    console.log(`[SmsService] Enviando SMS al número '${recipient}': ${message}`);
  }
}

// Implementación concreta 3: Servicio Simulado para Pruebas Unitarias (Mock)
export class MockNotificationService implements NotificationService {
  public sentMessages: { recipient: string; message: string }[] = [];

  sendNotification(recipient: string, message: string): void {
    console.log(`[MockNotificationService] Simulación (test) hacia '${recipient}': ${message}`);
    this.sentMessages.push({ recipient, message });
  }
}

/** UserService refactorizado con Inyección de Dependencias. Recibe su dependencia NotificationService 
 * desde el exterior a través del constructor.*/
export class UserService {
  constructor(
    private readonly notificationService: NotificationService
  ) {}

  public registerUser(name: string, contact: string): void {
    console.log(`[UserService] Registrando al usuario: ${name}`);
    this.notificationService.sendNotification(
      contact,
      `Hola ${name}, tu cuenta ha sido creada con éxito.`
    );
  }
}

/** Demostración del patrón Dependency Injection*/
export function runDependencyInjectionDemo(): void {

  console.log('\n--- 1. Inyección de EmailService ---');
  const emailService = new EmailService();
  // Se inyecta la dependencia desde el exterior
  const userServiceWithEmail = new UserService(emailService);
  userServiceWithEmail.registerUser('Ana López', 'ana.lopez@ejemplo.com');

  console.log('\n--- 2. Inyección de SmsService (sin cambiar UserService) ---');
  const smsService = new SmsService();
  // Se intercambia la dependencia fácilmente por otra implementación
  const userServiceWithSms = new UserService(smsService);
  userServiceWithSms.registerUser('Carlos Ruiz', '+34600123456');

  console.log('\n--- 3. Inyección de MockNotificationService (para Pruebas Unitarias) ---');
  const mockService = new MockNotificationService();
  const testUserService = new UserService(mockService);
  testUserService.registerUser('Usuario Test', 'test@correo.local');
  console.log(`Mensajes registrados en mock: ${mockService.sentMessages.length}`);
}

// Ejecutar demostración si el archivo se ejecuta directamente con Node/ts-node
if (typeof require !== 'undefined' && require.main === module) {
  runDependencyInjectionDemo();
}
