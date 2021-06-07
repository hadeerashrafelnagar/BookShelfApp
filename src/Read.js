import React from 'react';

const Read = (props)=> { 
  const {rBooks}=props
  return ( 
    <React.Fragment>
         <div className="bookshelf">
         <h3 className="bookshelf-title">Read</h3>
         <div className="bookshelf-books">
         <ol className="books-grid">
         {rBooks.map(book=>
              <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`}}></div>
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
 
export default Read;