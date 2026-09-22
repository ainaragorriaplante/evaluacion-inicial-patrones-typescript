export interface Notification {
    send(message: string, recipient: string): void;
}
export declare class EmailNotification implements Notification {
    send(message: string, recipient: string): void;
}
export declare class PushNotification implements Notification {
    send(message: string, recipient: string): void;
}
export declare class SmsNotification implements Notification {
    send(message: string, recipient: string): void;
}
export declare class WhatsAppNotification implements Notification {
    send(message: string, recipient: string): void;
}
export type NotificationType = 'email' | 'push' | 'sms' | 'whatsapp';
export declare class NotificationFactory {
    static create(type: NotificationType): Notification;
}
export declare function runFactoryDemo(): void;
