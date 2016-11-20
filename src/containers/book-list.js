import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return(
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
    );
  }
};

//  Connection between redux and react.
//  Will re render if the state (books) change.
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//  Anythings return from this function will end up as props
//  on the BookList container
function mapDispatchToProps(dispatch) {
  //  Whenever selectBook is called the result should be passed to all our reducer
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//  Promote BookList from a Component to a container - it need to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
