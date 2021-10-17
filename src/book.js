
function createTitle(bookIdea) {
  return 'The ' + bookIdea
};

function buildMainCharacter(a,b,c)
{
  var character =
    {
    name: a,
    age: b,
    pronouns: c,
  }
  return character
};

function saveReview(addString,reviews) {
    if (!reviews.includes(addString)) {
      reviews.push(addString)
  }
  return reviews;
};

function calculatePageCount(createTitle) {
return (createTitle.length*20)
};


function writeBook(bookTitle,bookCharacter,genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length*20,
    genre:genre,
      }
  return book;
    };


function editBook(book) {
return book.pageCount = book.pageCount*.75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
