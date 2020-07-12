import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import Search from './components/Search'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './components/NotFound'


// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*"> always matches


class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books)
    })
    this.queryBooks("Art");
  }

  queryBooks = (val) => {
    let query = val.trim()
    BooksAPI.search(query)
      .then((queryResult) => {
        if (!queryResult.error && queryResult !== 'undefined') {
          this.setState({ searchResults: queryResult })
          console.log(this.state.searchResults)
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
        <Switch>
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

          <Route path="/home">
            <Redirect to="/" />
          </Route>

          <Route path="*" component={NotFound} />

        </Switch>
      </div>
    )
  }
}

export default BooksApp
