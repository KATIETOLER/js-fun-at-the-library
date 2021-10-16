
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
return createTitle.toString().length*20
};


function writeBook(a,b,c) {
  var book = [
    {
    title: createTitle(),
    mainCharacter: buildMainCharacter(),
    pageCount: calculatePageCount(),
    genre: 'fantasy',
    }
  ]
  return book
};



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
