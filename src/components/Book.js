import React from 'react'
import PropTypes from 'prop-types';

function Book(props) {
    const { book, onMove, shelf } = props;
    // console.log(book)
    return (
        <div>
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>

                            {shelf !== 'undefined' &&
                                <div className="ribbon">
                                    <div className='txt'>
                                        <div className={`ribbon ribbon-top-right ribbon-${shelf.toLowerCase()}`}>
                                            <span>
                                                {shelf === 'currentlyReading' && 'Reading'}
                                                {shelf === 'wantToRead' && "To Read"} 
                                                {shelf === 'read' && "Read"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="book-shelf-changer">
                                <select value={shelf} onChange={(e) => onMove(book, e.target.value)}>
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
    book: PropTypes.object.isRequired,
    onMove: PropTypes.func.isRequired,
    shelf: PropTypes.string
}

Book.defaultProps = {
    shelf: 'none',
}

export default Book