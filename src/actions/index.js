export function selectBook(book) {
  //selectBook is an action creator and need to retuirn an object
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
