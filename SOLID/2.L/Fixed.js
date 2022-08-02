"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fixed = void 0;
class Fixed {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        return Math.max(0, price - this._value);
    }
    showCalculation(price) {
        return price + "€ -  " + this._value + "€ (min 0 €)";
    }
}
exports.Fixed = Fixed;
