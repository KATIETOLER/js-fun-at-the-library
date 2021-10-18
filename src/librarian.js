class Librarian {
  constructor(name, library) {
    //constructor creates a mass number of object through typing 'new Librarian'!
    //inside constructors is (almost?)always an object function specifically for classes which are themselves for objects
    //constructor objects use semicolons!!! don't forget!!!
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning) {
    return `Good morning, ${name}!`
    };
    return `Hello, ${name}!`
  }

findBook(bookName) {
  var genres = [].concat(
    this.library.shelves.fantasy,
    this.library.shelves.fiction,
    this.library.shelves.nonFiction)

for (var i = 0; i < genres.length; i++) {
    if (bookName === genres[i].title) {
      this.library.shelves[genres[i].genre].splice(i, 1)
      //the genre is a string which is called through bracket notation is the equivalent of the name of the variable shelf
      //dynamic value of loose comparison
      return `Yes, we have ${bookName}`
    }
      }
    return `Sorry, we do not have ${bookName}`
  }

calculateLateFee(days) {
  return Math.ceil(days*.25)
}

};




module.exports = Librarian;
