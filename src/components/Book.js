import React from 'react'
import PropTypes from 'prop-types';

function Book(props) {
    const { book } = props;
    return (
        <div>
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {/* <div className="book-authors">{book.authors.toString()}</div> */}
                        <div className="book-authors">{Array.isArray(book.authors) ? book.authors.join(', ') : ''}</div>

                    </div>
                </li>
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book