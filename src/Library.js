

function createLibrary(libraryName) {
return {name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
      },
    }
  };
  //declared library name
  //passing in parameter library.name


function addBook(libraryName, bookTitle) {
  return libraryName.shelves[bookTitle.genre].push(bookTitle)
  //from library into shelves, bracket notation returns the value of the genre
  //the string is the same as the genre
  //the names of the keys are strings? the keys are also strings somehow?
}

function checkoutBook(libraryName, bookTitle,genre) {
  for (var i=0; i < libraryName.shelves[genre].length; i++) {
    if (bookTitle === libraryName.shelves[genre][i].title) {
      //'genre' here is a loose comparative
    // if bookTitle strictly equals the libraryName shelves genre array for each genre index at title,
      libraryName.shelves[genre].splice(i, 1)
      //splice removes from the index and removes only one item does not need brackets
      return `You have now checked out ${bookTitle} from the ${libraryName.name}`;
    }
  }
    // two asserts means the function should do two different things, on line 108 they are asking for the book to be removed from the shelf
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
      //sad path
};



module.exports = {
createLibrary,
addBook,
checkoutBook,
};
