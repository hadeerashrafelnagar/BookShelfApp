import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Search extends Component {
  render() {
    const {handleInput,handleSearch,query,searchedBooks,onShelfEvent}=this.props
    return ( 
      <React.Fragment>
                <div className="search-books">
                  <div className="search-books-bar">
                    <Link to="/home">
                    <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                      <input type="text" value={query} onChangeCapture={(value)=>handleSearch(value)} onChange={(event)=>handleInput(event)} placeholder="Search by title or author"/>
                    </div>
                  </div>
                  <div className="search-books-results">
                    <ol className="books-grid">
                    {searchedBooks.map(book=>
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`}}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={book.shelf?book.shelf:'none'} onChange={(event)=>onShelfEvent(event,book,book.shelf)}>
                            <option  value="move" disabled  >Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                      <div className="book-publishedDate">{book.publishedDate}</div>
                    </div>
                  </li>)}
                    </ol>
                  </div>
                </div>
          </React.Fragment>
         );
    }
}
 
export default Search;