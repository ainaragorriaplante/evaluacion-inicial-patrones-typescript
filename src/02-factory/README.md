¿Qué problema resuelve Factory?
    Centraliza la creación de objetos, delegando la lógica de instanciación para que el código cliente no necesite saber qué clase exacta se va a crear.
¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?
    Evita código duplicado y facilita el mantenimiento. Si la lógica para construir un objeto cambia, solo necesitas actualizar la "Fábrica" en lugar de buscar y modificar todos los new repartidos por la aplicación.
¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?
    Solo tendrías que crear la nueva clase WhatsAppNotification y añadir un caso en la Factory para instanciarla. El resto de la aplicación (el código que usa las notificaciones) se mantendría intacto.
¿Quién tiene la responsabilidad de crear los objetos?
    Una clase o método dedicado exclusivamente a ello: la Factory (o Fábrica).
¿Qué ventaja proporciona Factory respecto al acoplamiento?
    Reduce drásticamente el acoplamiento. El código cliente pasa a depender de abstracciones (interfaces o clases genéricas) en lugar de depender de clases concretas y su implementación específica.