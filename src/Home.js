import React, { Component } from 'react';

class Home extends Component {
  
  render() { 
    const {books,onUpdate,onEvent}=this.props
        return ( 
            <React.Fragment>
                <div className="bookshelf">
               <h3 className="bookshelf-title">Home</h3>
               <div className="bookshelf-books">
               <ol className="books-grid">
                   {books.map(book=>
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`}}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={book.shelf} onChangeCapture={()=>onUpdate(book,book.shelf)} onChange={(e)=>onEvent(e)}>
                            <option  value="move" disabled >Move to...</option>
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
 
export default Home;