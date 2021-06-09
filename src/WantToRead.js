import React from 'react';

const WantToRead = (props)=> { 
  const {wBooks,onUpdate,onEvent}=props
        return ( 
            <React.Fragment>
                <div className="bookshelf">
                  <h3 className="bookshelf-title">Want to Read</h3>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wBooks.map(book=>
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
 
export default WantToRead;