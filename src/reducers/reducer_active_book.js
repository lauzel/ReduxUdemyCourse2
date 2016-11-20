//state argument is not the app state, only the state
//  this reducer is responsible for
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:
      //Nothing todo
  }

  return state;
}
