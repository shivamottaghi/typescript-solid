# typescript-solid

## What is going on
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