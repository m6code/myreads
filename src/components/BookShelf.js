import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function BookShelf(props) {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <Book />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <button onClick={() => props.openSearch()}>Add a book</button>
                </div>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    openSearch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default BookShelf
