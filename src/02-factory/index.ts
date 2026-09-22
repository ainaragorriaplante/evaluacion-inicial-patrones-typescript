// 1. Interfaz común para todos los productos de Notificación
export interface Notification {
  send(message: string, recipient: string): void;
}

// 2. Productos concretos
export class EmailNotification implements Notification {
  send(message: string, recipient: string): void {
    console.log(`[Email] Enviando correo a '${recipient}': "${message}"`);
  }
}

export class PushNotification implements Notification {
  send(message: string, recipient: string): void {
    console.log(`[Push] Enviando notificación Push al dispositivo '${recipient}': "${message}"`);
  }
}

export class SmsNotification implements Notification {
  send(message: string, recipient: string): void {
    console.log(`[SMS] Enviando mensaje SMS al número '${recipient}': "${message}"`);
  }
}

export class WhatsAppNotification implements Notification {
  send(message: string, recipient: string): void {
    console.log(`[WhatsApp] Enviando mensaje WhatsApp al '${recipient}': "${message}"`);
  }
}

// Tipos válidos para la Factoría
export type NotificationType = 'email' | 'push' | 'sms' | 'whatsapp';

// 3. Clase Factory (Factoría)
export class NotificationFactory {
  /**Método de factoría estático para instanciar objetos según el tipo solicitado.*/
  public static create(type: NotificationType): Notification {
    switch (type) {
      case 'email':
        return new EmailNotification();
      case 'push':
        return new PushNotification();
      case 'sms':
        return new SmsNotification();
      case 'whatsapp':
        return new WhatsAppNotification();
      default:
        throw new Error(`El tipo de notificación '${type}' no es soportado por NotificationFactory.`);
    }
  }
}

/**Demostración del patrón Factory*/
export function runFactoryDemo(): void {

  // El código cliente solicita la creación de objetos a la Factory usando identificadores
  const emailSender = NotificationFactory.create('email');
  emailSender.send('¡Bienvenido a nuestra plataforma NestJS!', 'usuario@ejemplo.com');

  const pushSender = NotificationFactory.create('push');
  pushSender.send('Tienes una nueva actualización disponible', 'token-device-xyz123');

  const smsSender = NotificationFactory.create('sms');
  smsSender.send('Tu código de verificación es: 849201', '+34600112233');

  const whatsappSender = NotificationFactory.create('whatsapp');
  whatsappSender.send('Recordatorio de cita programada', '+34699887766');
}
