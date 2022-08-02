"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = void 0;
class None {
    constructor() {
        this._value = 0;
    }
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}
exports.None = None;
