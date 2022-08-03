# typescript-solid

## What is this project about?
This project consists of TypeScript and Parcel installation and five OOP principles that
every programmer needs to know. The goal is to study and research and make some documentation.

### The four pillars of OOP
Well , I thought it's better to start with four pillars of OOP and then get to the design principles.
1. Abstraction
   - The concept of abstraction is to hide the implementation details and highlight the essential
   features. The abstraction is used to just show the functionality to the user and ignore the 
   irrelevant details.
2. Encapsulation
   - >> "the action of enclosing something in or as if in a capsule"
   - To make some part of your code inaccessible , to be careful that properties are only accessible
   when needed, and to make the object in control of their own state. When making an object by making
   the properties public you're allowing others to change it whenever they want and however they want.
   This may make some issues in the program. 
   - Why we need encapsulation ?
     1. Lots of unrelated bits of code will become dependent/coupled to one another via the global variable.
     2. You will likely override the variables if the name gets reused, which can lead to bugs or unpredictable behaviour.
     3. You will likely end up with Spaghetti Code – code that's hard to reason through and follow what is reading and writing to your variables and changing state.
3. Inheritance
   - It is used when you have objects that do the same thing but are different in a very small part. The best example
   I always encounter is to have and animal class as a parent and have children of it as species. Like a Dog , Cat
   , etc. They are all animals, but with some different functionality. 
   - Reusability is the main benefit.
   - Whenever we use inheritance, we try to make it so that the parent and the child have high cohesion.
   There is a principle called Liskov Substitution principle, I'll get to that later of course. It says if 
   you can use the parent class wherever you're using the child you pass the test.
4. Polymorphism
   - >> "the condition of occurring in several different forms."
   - When using inheritance , a child inherits the methods of its parent and can override it. The method has the same
   name but is occurring in a different form.
   - Here is an example:
     ```
     Class Animal{
       makeSound(){
         return "Basic Sound"
       }
     }
     Class Cat extends Animal{
       makeSound(){
         return "meow meow"
       }
     }
     ```
     
---

### SOLID principles

1. [Single Responsibility](./SOLID/0.S)
   - >> “Classes, functions or modules have a single reason to change”

2. [Open-Closed](./SOLID/1.O)
   - >> “Open to extension closed to modification”

3. [Liskov Substitution](./SOLID/2.L)
   - >> “For b subtype of a, a may be replaced by type b”

4. [Interface Segregation](./SOLID/3.I)
   - >> "The interface of a program should be split in a way that the user/client would only have access to the necessary methods related to their needs."

5. [Dependency Inversion](./SOLID/4.D)
   - >> “Between a high-level module and a low-level one the interaction should be thought of as an abstract interaction between them”

---

#### Source :

[Brutally Solid TypeScript](https://itnext.io/brutally-solid-typescript-ba745585f440) <br>
[SOLID Definition – the SOLID Principles of Object-Oriented Design Explained](https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/#:~:text=The%20interface%20segregation%20principle%20states,methods%20related%20to%20their%20needs.)


