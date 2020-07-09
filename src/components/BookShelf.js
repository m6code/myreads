import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function BookShelf(props) {

    const shelves = ['currentlyReading', 'wantToRead', 'read'];
    const shelveName = ['Currently Reading', 'Want to Read', 'Read'];

    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                {shelves.map((shelf, index) => {
                    return (
                        <div className="list-books-content" key={index}>
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{shelveName[index]}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {props.books.filter(book => book.shelf === shelf)
                                                .map(book => (
                                                    <Book
                                                        key={book.id}
                                                        book={book}
                                                        onMove={props.onMove}
                                                        shelf={book.shelf} />
                                                ))
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

                <div className="open-search">
                    <button onClick={() => props.history.push('/search')}>Add a book</button>

                    {/* <Link to='/search'>
                        <button>Add a book</button>
                    </Link> */}

                </div>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    history: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onMove: PropTypes.func.isRequired
}

export default BookShelf
