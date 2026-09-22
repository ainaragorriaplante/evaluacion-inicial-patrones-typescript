"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreatorB = exports.ConcreteCreatorA = exports.Creator = exports.ConcreteProductB = exports.ConcreteProductA = void 0;
class ConcreteProductA {
    operation() {
        return 'Resultado de ConcreteProductA';
    }
}
exports.ConcreteProductA = ConcreteProductA;
class ConcreteProductB {
    operation() {
        return 'Resultado de ConcreteProductB';
    }
}
exports.ConcreteProductB = ConcreteProductB;
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: El mismo código ha trabajado con ${product.operation()}`;
    }
}
exports.Creator = Creator;
class ConcreteCreatorA extends Creator {
    factoryMethod() {
        return new ConcreteProductA();
    }
}
exports.ConcreteCreatorA = ConcreteCreatorA;
class ConcreteCreatorB extends Creator {
    factoryMethod() {
        return new ConcreteProductB();
    }
}
exports.ConcreteCreatorB = ConcreteCreatorB;
//# sourceMappingURL=index.js.map