import {IDiscount} from "./IDiscount";

export class None implements IDiscount{
    private _value : number;

    constructor() {
        this._value = 0;
    }

    apply(price: number): number{
        return price;
    }

    showCalculation(price: number): string{
        return "No discount";
    }
}