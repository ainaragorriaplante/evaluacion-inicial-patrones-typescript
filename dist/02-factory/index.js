"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = exports.WhatsAppNotification = exports.SmsNotification = exports.PushNotification = exports.EmailNotification = void 0;
exports.runFactoryDemo = runFactoryDemo;
class EmailNotification {
    send(message, recipient) {
        console.log(`[Email] Enviando correo a '${recipient}': "${message}"`);
    }
}
exports.EmailNotification = EmailNotification;
class PushNotification {
    send(message, recipient) {
        console.log(`[Push] Enviando notificación Push al dispositivo '${recipient}': "${message}"`);
    }
}
exports.PushNotification = PushNotification;
class SmsNotification {
    send(message, recipient) {
        console.log(`[SMS] Enviando mensaje SMS al número '${recipient}': "${message}"`);
    }
}
exports.SmsNotification = SmsNotification;
class WhatsAppNotification {
    send(message, recipient) {
        console.log(`[WhatsApp] Enviando mensaje WhatsApp al '${recipient}': "${message}"`);
    }
}
exports.WhatsAppNotification = WhatsAppNotification;
class NotificationFactory {
    static create(type) {
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
exports.NotificationFactory = NotificationFactory;
function runFactoryDemo() {
    const emailSender = NotificationFactory.create('email');
    emailSender.send('¡Bienvenido a nuestra plataforma NestJS!', 'usuario@ejemplo.com');
    const pushSender = NotificationFactory.create('push');
    pushSender.send('Tienes una nueva actualización disponible', 'token-device-xyz123');
    const smsSender = NotificationFactory.create('sms');
    smsSender.send('Tu código de verificación es: 849201', '+34600112233');
    const whatsappSender = NotificationFactory.create('whatsapp');
    whatsappSender.send('Recordatorio de cita programada', '+34699887766');
}
//# sourceMappingURL=index.js.map