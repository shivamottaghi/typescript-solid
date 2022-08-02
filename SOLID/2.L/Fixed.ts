import {IDiscount} from "./IDiscount";

export class Fixed implements IDiscount{
    private _value : number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price:number) : number{
        return Math.max(0, price - this._value);
    }

    showCalculation(price: number): string{
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }
}