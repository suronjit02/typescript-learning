// parent class
class Person {
  name: string; //common
  age: number; //common
  address: string; //common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //common method
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} gonta gumay`);
  }
}

class Student extends Person {
  rollNo: number;

  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student1 = new Student("Mr. faibaz", 20, " Dhaka, Bangladesh", 2);

student1.getSleep(15);

class Teacher extends Person {
  designation: string; //extra own property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);

    this.designation = designation;
  }

  //   own method
  takeClass(numOfHour: number) {
    console.log(`${this.name} ${numOfHour} ghonta class ney`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Dhaka",
  "Senior Teacher",
);

teacher1.takeClass(3);
