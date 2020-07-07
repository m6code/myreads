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
    //this.queryBooks("Art");
  }

  queryBooks = (val) => {
    let query = val.trim()
    BooksAPI.search(query)
      .then((queryResult) => {
        this.setState({ searchResults: queryResult })
        //console.log(this.state.searchResults)
      })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={({ history }) =>
          <BookShelf
            books={this.state.books}
            history={history}
          />
        }
        />

        <Route path='/search' render={({ history }) =>
          <Search history={history}
            searchBook={this.queryBooks}
            results={this.state.searchResults}
          />
        }
        />
      </div>
    )
  }
}

export default BooksApp
