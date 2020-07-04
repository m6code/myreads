import React from 'react'
import Section from './Section'
import PropTypes from 'prop-types'

function BookShelf(props) {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <Section sectionTitle={'Reading'}>
                    <li>Return a list of currently reading books here</li>
                </Section>
                <Section sectionTitle={'Want to Read'}>
                    <li>Return a list of books you'd like to read here</li>
                </Section>
                <Section sectionTitle={'Read'}>
                    <li>Return a list of read books here</li>
                </Section>

                <div className="open-search">
                    <button onClick={() => props.openSearch()}>Add a book</button>
                </div>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    openSearch: PropTypes.func.isRequired
}

export default BookShelf
