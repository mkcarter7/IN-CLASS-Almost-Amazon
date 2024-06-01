// const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
//   getAuthorBooks(firebaseKey).then((authorBooksArray) => {
//     const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

//     Promise.all(deleteBookPromises).then(() => {
//       deleteSingleAuthor(firebaseKey).then(resolve);
//     });
//   }).catch(reject);
// });
