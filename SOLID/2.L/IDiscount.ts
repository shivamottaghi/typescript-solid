
export interface IDiscount {
    value: number;
    apply: (price:number) => number;
    showCalculation: (price:number)=> string;
}