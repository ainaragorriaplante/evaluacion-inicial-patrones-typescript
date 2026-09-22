/**
 * Patrón Singleton - Ejemplo: Configuración de la Aplicación (AppConfig)
 *
 * Garantiza que solo exista una instancia de la configuración durante la ejecución del programa.
 */
export class AppConfig {
  private static instance: AppConfig;
  private settings: Record<string, string>;

  /**
   * Constructor privado para evitar que la clase sea instanciada directamente con 'new'.
   */
  private constructor() {
    this.settings = {
      appName: 'NestPatternApp',
      version: '1.0.0',
      environment: 'development',
    };
  }

  /**
   * Método estático global para obtener la única instancia de AppConfig.
   */
  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public get(key: string): string | undefined {
    return this.settings[key];
  }

  public set(key: string, value: string): void {
    this.settings[key] = value;
  }

  public getAll(): Record<string, string> {
    return { ...this.settings };
  }
}

/**
 * Demostración del patrón Singleton.
 * Comprueba que dos llamadas a getInstance() devuelven exactamente el mismo objeto.
 */
export function runSingletonDemo(): void {
  console.log('====================================');
  console.log('--- Demostración Patrón Singleton ---');
  console.log('====================================');

  // Obtener la instancia por primera vez
  const config1 = AppConfig.getInstance();

  // Obtener la instancia por segunda vez
  const config2 = AppConfig.getInstance();

  // Modificar el estado a través de la primera referencia
  config1.set('theme', 'dark');

  // Verificación de referencia única (mismo objeto en memoria)
  const sonIguales = config1 === config2;

  console.log(`Primera llamada (config1):`, config1.getAll());
  console.log(`Segunda llamada (config2):`, config2.getAll());
  console.log(`¿Ambas variables apuntan exactamente a la misma instancia?: ${sonIguales}`);

  if (sonIguales) {
    console.log('✓ ÉXITO: El patrón Singleton garantiza una única instancia compartida en memoria.');
  } else {
    console.log('✗ ERROR: Se han creado distintas instancias.');
  }
}

// Ejecutar demostración si el archivo se ejecuta directamente con Node/ts-node
if (typeof require !== 'undefined' && require.main === module) {
  runSingletonDemo();
}
