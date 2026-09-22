/**
 * Patrón Factory (Factory Method)
 * Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.
 */
export interface Product {
  operation(): string;
}

export class ConcreteProductA implements Product {
  public operation(): string {
    return 'Resultado de ConcreteProductA';
  }
}

export class ConcreteProductB implements Product {
  public operation(): string {
    return 'Resultado de ConcreteProductB';
  }
}

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: El mismo código ha trabajado con ${product.operation()}`;
  }
}

export class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

export class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

