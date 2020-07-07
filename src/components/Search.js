import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Book from './Book';

function Search(props) {

  const { results, searchBook } = props

  // // Equivalent to componentDidMount of class Component.
  // useEffect(() => {
  //   searchBook('Artificial')
  //   return () => {
  //     //cleanup
  //   }
  // }, [])

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">

          <button className="close-search" onClick={() => props.history.push('/')}>Close</button>
          {/* <Link to='/'>
            <button className="close-search">Close</button>
          </Link> */}

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => searchBook(e.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {results.map(book => (
                <Book
                  key={book.id}
                  book={book} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {
  history: PropTypes.object.isRequired,
  results: PropTypes.array,
  searchBook: PropTypes.func.isRequired
}

export default Search
