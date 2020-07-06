import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import Search from './components/Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books)
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

        <Route path='/search' render={({ history }) => (
          <Search history={history} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
