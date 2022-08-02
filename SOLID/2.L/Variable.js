"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
class Variable {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        return (price - (price * this._value / 100));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
exports.Variable = Variable;
