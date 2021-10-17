class Librarian {
  constructor(name, library) {
    //constructor creates a mass number of object through typing 'new Librarian'!
    //inside constructors is (almost?)always an object function specifically for classes which are themselves for objects
    //constructor objects use semicolons!!! don't forget!!!
    this.name = name;
    this.library = library;
    }

  greetPatron(name, isMorning) {
    if (isMorning===true) {
    return `Good morning, ${name}!`
    };
    return `Hello, ${name}!`

  }
};

module.exports = Librarian;
