import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import Search from './components/Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      // console.log(this.state.books)
    })
    this.queryBooks("Art");
  }

  queryBooks = (val) => {
    let query = val.trim()
    BooksAPI.search(query)
      .then((queryResult) => {
        if (!queryResult.error && queryResult !== 'undefined') {
          this.setState({ searchResults: queryResult })
          //console.log(this.state.searchResults)
        }
      })
  }

  updateBookShelf = (book, toShelf) => {
    if (this.state.books) {
      BooksAPI.update(book, toShelf).then(() => {
        book.shelf = toShelf;
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
    ///console.log(this.state.books);
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={({ history }) =>
          <BookShelf
            books={this.state.books}
            history={history}
            onMove={this.updateBookShelf}
          />
        }
        />

        <Route path='/search' render={({ history }) =>
          <Search history={history}
            searchBook={this.queryBooks}
            results={this.state.searchResults}
            onMove={this.updateBookShelf}
          />
        }
        />
      </div>
    )
  }
}

export default BooksApp
