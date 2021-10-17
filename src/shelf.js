

function shelfBook(bookName,shelfName) {
  if (shelfName.length < 3) {
shelfName.unshift(bookName)
  }
};

function unshelfBook(bookName, shelfName) {
for(var i=0; i < shelfName.length; i++) {
  if (bookName === shelfName[i].title) {
    // shelfName.slice(bookName)
    shelfName.splice(i, 1);
    }
  }
  return shelfName
};


function listTitles(shelfName) {
var list = [];
for(var i = 0; i < shelfName.length; i++) {
  list.push(shelfName[i].title);
  //pushes the string inside the shelf at the index of title
  }
return list.join(', ')
//returns string joined together with the ', ' inbetween
};

function searchShelf(shelfName, bookName) {
  for(var i = 0; i < shelfName.length; i++) {
  //function shelfName, bookName parameters
  if (shelfName[i].title === bookName) {
    //if shelfName is strictly equal to shelfName at the index of title
      return true;
//return true, otherwise, the title is not on the shelf and return false
  }
    }
    return false;
  };

module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
