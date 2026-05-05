// oop - class ->>> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} is making sound: ${this.sound}`);
//   }
// }



// parameter property
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("dog bhai", "dog", "ghew ghew");
const cat = new Animal("cat bhai", "cat", "meaw meaw");

console.log(dog.name);
console.log(cat.sound);

cat.makeSound();
