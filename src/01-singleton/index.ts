/**
 * Patrón Singleton
 * Garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.
 */
export class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Constructor privado para evitar instanciación externa
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

