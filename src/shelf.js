

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


function listTitles(shelf) {
var list = [];
for(var i = 0; i < shelf.length; i++) {
  list.push(shelf[i].title);
  //pushes the string inside the shelf at the index of title
  }
return list.join(', ')
//returns string joined together with the ', ' inbetween
};

searchShelf(shelfName, bookName) {
  if (on shelf) {
return true;
  }
  else {
    return false;
  }
};

module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
