// oop: instance of type / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} hours sleeping`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} ghonta porasuna kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} ghonta class ney`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student : true
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher : true
};

// guard by instanceof
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(6);
  }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Mr. Person");

getUserInfo(teacher1);
