¿Qué problema intenta resolver Singleton?
    Garantiza que una clase tenga una única instancia en toda la aplicación y proporciona un punto de acceso global a ella.
¿Por qué suele utilizarse un constructor private?
    Para evitar que otras partes del código puedan crear nuevas instancias instanciando la clase directamente.
¿Cómo se obtiene una instancia de la clase?
    A través de un método estático público (habitualmente llamado getInstance()) que devuelve la única instancia existente o la inicializa si es la primera vez que se llama.
¿Qué ocurriría si pudiéramos utilizar new libremente?
    Se crearían múltiples objetos en memoria, perdiendo el control sobre el estado compartido de la aplicación y rompiendo el propósito fundamental del patrón.
Pon un ejemplo real donde utilizarías Singleton.
    Un gestor de conexiones a una base de datos (para no saturar la red abriendo conexiones innecesarias).
¿Qué inconveniente puede tener abusar de Singleton?