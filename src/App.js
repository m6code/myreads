import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import Search from './components/Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []

  }

  showSearch = () => {
    this.setState({ showSearchPage: true })
  }

  hideSearch = () => {
    this.setState({showSearchPage: false})
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
        {this.state.showSearchPage ? (
          <Search hideSearch={this.hideSearch}/>
        ) : (
            <BookShelf
              openSearch={this.showSearch}
              books={this.state.books}
            />
          )}
      </div>
    )
  }
}

export default BooksApp
