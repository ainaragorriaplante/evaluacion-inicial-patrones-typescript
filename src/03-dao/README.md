¿Qué significa DAO?
    Significa Data Access Object (Objeto de Acceso a Datos).
¿Cuál es su responsabilidad principal?
    Aislar y encapsular toda la lógica de acceso a los datos, separando la capa de persistencia de la lógica de negocio de la aplicación.
¿Qué relación tiene DAO con una base de datos?
    Actúa como intermediario. Oculta la complejidad técnica y el lenguaje específico de la base de datos (como las consultas SQL) y entrega los datos en un formato que el código de la aplicación pueda manejar (objetos).
¿Qué operaciones aparecen habitualmente en un DAO?
    Las operaciones estándar CRUD: Create (Insertar), Read (Leer/Buscar), Update (Actualizar) y Delete (Eliminar).
¿Qué diferencia existe entre DAO y Repository?
    El DAO está centrado en los datos y el almacenamiento (trabaja a nivel de tablas y consultas concretas). El Repository está centrado en el dominio (simula una colección de objetos de negocio en memoria) y suele ser una capa de abstracción superior que utiliza uno o varios DAOs por debajo para funcionar.
