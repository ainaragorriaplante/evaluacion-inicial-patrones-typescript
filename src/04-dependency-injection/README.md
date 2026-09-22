¿Qué es una dependencia?
    Es un objeto, servicio o pieza de código que una clase necesita utilizar para poder funcionar o cumplir con su responsabilidad.
¿Qué significa inyectar una dependencia?
    Consiste en suministrar a una clase los objetos que necesita desde el exterior, en lugar de que la propia clase tenga la responsabilidad de crearlos internamente.
¿Qué diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
    Si usas new, la clase decide qué objeto específico usar y cómo crearlo (generando acoplamiento). Si la recibes por constructor, la clase simplemente acepta y usa cualquier implementación válida que le entreguen desde fuera (Inversión de Control).
¿Qué problema genera un alto acoplamiento?
    Hace que el código sea rígido, difícil de mantener y frágil: cambiar o actualizar una clase obligará a modificar en cascada muchas otras partes del sistema, impidiendo además su reutilización.
¿Qué ventaja proporciona Dependency Injection para realizar pruebas?
    Facilita enormemente el testing unitario, ya que permite pasar objetos simulados (mocks o stubs) a la clase en lugar de las dependencias reales (por ejemplo, inyectar una base de datos falsa en memoria).
¿Por qué este concepto es especialmente importante en frameworks como NestJS?
    Porque NestJS (al igual que Angular o Spring) tiene un contenedor de dependencias (IoC) integrado en el núcleo de su arquitectura. El framework se encarga automáticamente de instanciar, gestionar el ciclo de vida y repartir estas dependencias entre los distintos módulos, controladores y servicios, fomentando aplicaciones altamente escalables.