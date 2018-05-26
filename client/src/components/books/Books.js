import React, { Component } from 'react';
import './Books.css';

class Books extends Component {
  state = {
      books: []
  }

  componentDidMount() {
      fetch('/api/books/')
        .then(data => data.json())
        .then(books => this.setState({books}))
        .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.books)
    return (
      <div>
          <h1>Books</h1>
          <ul>
              {this.state.books.map(book => <li key={book.id}>
              Name: {book.name}</li>)}
          </ul>
      </div>
    );
  }
}

export default Books;