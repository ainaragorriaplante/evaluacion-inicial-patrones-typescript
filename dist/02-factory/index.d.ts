export interface Product {
    operation(): string;
}
export declare class ConcreteProductA implements Product {
    operation(): string;
}
export declare class ConcreteProductB implements Product {
    operation(): string;
}
export declare abstract class Creator {
    abstract factoryMethod(): Product;
    someOperation(): string;
}
export declare class ConcreteCreatorA extends Creator {
    factoryMethod(): Product;
}
export declare class ConcreteCreatorB extends Creator {
    factoryMethod(): Product;
}
