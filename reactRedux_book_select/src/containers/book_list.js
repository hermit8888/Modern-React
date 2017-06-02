import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; // import action creator
import { bindActionCreators } from 'redux';   // import function will flow through all reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the
// BookList container. Whatever is passed as the first arg, is going to be
// available as props to our container. Inside our container we can call
// this.props.selectBook (because of first arg key), that will call the
// action creator.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  // Whenever selectBook is called make it flow through the dispatch function
  // dispatch receives actions and spits them back out to all different reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // selectBook (value) is a plain function that returns a plain js object
  // The only part of the app that cares about the action are the reducers
  // The purpose of bindActionCreators and dispatch is to take what gets
  // returned from selectBook and make sure it flows through all the reducers
}

// Promotes BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook, makes it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// read the react redux docs. It gives a guide to all the ways one may use
// connect() in our basic use case, we're taking a state and mapping it to the
// props of our container. In our case we take the action creator and make
// it available to be called inside the container as well.
// http://redux.js.org/docs/faq/ReactRedux.html
