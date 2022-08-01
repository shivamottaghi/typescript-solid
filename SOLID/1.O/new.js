"use strict";
class Animal {
    constructor() {
        this._sound = 'basic sound';
    }
    makeSound() {
        return this._sound;
    }
}
class Dog extends Animal {
    constructor() {
        super();
        this._sound = 'woef';
        this._name = 'dog';
    }
    get name() {
        return this._name;
    }
}
class Cat extends Animal {
    constructor() {
        super();
        this._sound = 'meow';
        this._name = 'cat';
    }
    get name() {
        return this._name;
    }
}
class Parrot extends Animal {
    constructor() {
        super();
        this._sound = 'I am a pirate';
        this._name = 'parrot';
    }
    get name() {
        return this._name;
    }
}
class Koala extends Animal {
    constructor() {
        super();
        this._sound = 'squeak';
        this._name = 'koala';
    }
    get name() {
        return this._name;
    }
}
class Zoo {
    constructor() {
        this._animals = [];
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
const el = document.querySelector('#target');
zoo.animals.forEach((animal) => {
    el.innerHTML += (animal.name + ": " + animal.makeSound() + "<br>");
});
