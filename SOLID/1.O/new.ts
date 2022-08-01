abstract class Animal{
    private _sound : string = 'basic sound';
    makeSound() : string{
        return this._sound;
    }
}
class Dog extends Animal{
    private _sound : string = 'woef';
    private _name : string = 'dog';

    constructor() {
        super();
    }

    get name() {
        return this._name;
    }

}

class Cat extends Animal{
    private _sound : string = 'meow';
    private _name : string = 'cat';

    constructor() {
        super();
    }

    get name() {
        return this._name;
    }
}

class Parrot extends Animal{
    private _sound : string = 'I am a pirate';
    private _name : string = 'parrot';

    constructor() {
        super();
    }

    get name() {
        return this._name;
    }
}

class Koala extends Animal {
    private _sound : string = 'squeak';
    private _name : string = 'koala';
    
    constructor() {
        super();
    }

    get name() {
        return this._name;
    }
}

class Zoo {
    private _animals : Array<Object> = [];

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}


let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
const el = <HTMLElement>document.querySelector('#target');
zoo.animals.forEach((animal) => {
    el.innerHTML += (animal.name + ": " + animal.makeSound() + "<br>");
});