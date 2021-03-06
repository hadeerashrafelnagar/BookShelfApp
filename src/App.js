import React from 'react'
import { Route, Switch,Redirect,Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'

import Read from './Read';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    allBooks:[],
    currentBooks:[],
    readingBooks:[],
    wantingBooks:[],
    updatedShelf:"",
    query:'',
    searchedBooks:[],
    newShelf:"",
    oldBooks:[],
    existingsearcedBooks:[]
  }

  componentDidMount(){
    const books= BooksAPI.getAll()
    books.then((result)=>{
      const cBooks=result.filter(res=>res.shelf==='currentlyReading')
      const wBooks=result.filter(res=>res.shelf==='wantToRead')
      const rBooks=result.filter(res=>res.shelf==='read')
      this.setState({allBooks:result,currentBooks:cBooks,readingBooks:rBooks,wantingBooks:wBooks})})
  }

  handleEvent= event =>{
    return this.setState({updatedShelf:event.target.value})
  }

  handleUpdate=async(book,shelf)=>{
    await this.setState({updatedShelf:shelf})
    await BooksAPI.update(book,shelf=this.state.updatedShelf).then(()=>{
      if(book.shelf==="currentlyReading"){
        let bookIndexC=this.state.currentBooks.findIndex(b=>b.id===book.id)
        this.state.currentBooks.splice(bookIndexC,1)
        this.setState({currentBooks:this.state.currentBooks})
      }else if (book.shelf === "wantToRead" ){
        let bookIndexW=this.state.wantingBooks.findIndex(b=>b.id===book.id)
        this.state.wantingBooks.splice(bookIndexW,1)
        this.setState({wantingBooks:this.state.wantingBooks})
      }else if (book.shelf === "read" ){
        let bookIndexR=this.state.readingBooks.findIndex(b=>b.id===book.id)
        this.state.readingBooks.splice(bookIndexR,1)
        this.setState({readingBooks:this.state.readingBooks})
      }
      
      if(shelf === "currentlyReading" ){
        this.state.currentBooks.push(book)
        this.setState({currentBooks:this.state.currentBooks})
      }else if (shelf === "wantToRead" ){
        this.state.wantingBooks.push(book)
        this.setState({wantingBooks:this.state.wantingBooks})
      }else if (shelf === "read" ){
        this.state.readingBooks.push(book)
        this.setState({readingBooks:this.state.readingBooks})
      }
    })
  }

  handleInputEvent=event=>{
    const inputValue=event.target.value
    return this.setState({query:inputValue})
  }

  handleSearchQuery=async(query)=>{
    await this.state.query
    query =this.state.query
    await BooksAPI.search(query).then(newBooks=>{
      let searchBooks
      if (query===''){
        searchBooks=[]
        this.setState({searchedBooks:searchBooks})
      }else{
        if(newBooks.error==='empty query'){
          searchBooks=[]
          this.setState({searchedBooks:searchBooks})
          alert(`There are no available books using this query "${query}"`)
        }else{
          newBooks.map(book=>{
            if(this.state.allBooks.some(x=>x.id===book.id)){
              book.shelf=this.state.allBooks.find(y=>y.id===book.id).shelf
            }
            return book
          })
          this.setState({searchedBooks:newBooks})
        }
      }
    })
  }

  handleNewShelfEvent=async(event,book,shelf='')=>{
    event.preventDefault()
    await this.setState({newShelf:event.target.value})
    await BooksAPI.update(book,shelf=this.state.newShelf).then(()=>{
      const oldBooks=this.state.allBooks.filter(b=>b.id===book.id)
      if (oldBooks.length===0){
        this.state.allBooks.push(book)
        this.setState({allBooks:this.state.allBooks})
        if(shelf === "currentlyReading" ){
          this.state.currentBooks.push(book)
          this.setState({currentBooks:this.state.currentBooks})
        }else if (shelf === "wantToRead" ){
          this.state.wantingBooks.push(book)
          this.setState({wantingBooks:this.state.wantingBooks})
        }else if (shelf === "read" ){
          this.state.readingBooks.push(book)
          this.setState({readingBooks:this.state.readingBooks})
        }
      }else{
        this.setState({updatedShelf:shelf})
      }
    })
  }
  render() {
    const {currentBooks,readingBooks,wantingBooks,query,searchedBooks}=this.state
    return (
      <React.Fragment>
        <div className="app">
            <div className="list-books">
            <div className=" navbar-brand ">
                <h2>MyReads</h2>
                </div>
            </div>
            <div className="list-books-content">
              <div>
                <Switch>
                <Route exact path="/" >
                  <Read rBooks={readingBooks} onUpdate={this.handleUpdate} onEvent={this.handleEvent}></Read>
                  <WantToRead wBooks={wantingBooks} onUpdate={this.handleUpdate} onEvent={this.handleEvent}></WantToRead>
                  <CurrentlyReading cBooks={currentBooks} onUpdate={this.handleUpdate} onEvent={this.handleEvent}></CurrentlyReading>
                </Route>
              <Route path="/search" render={()=>(
                  <Search handleSearch={this.handleSearchQuery} handleInput={(query)=>this.handleInputEvent(query)}
                   searchedBooks={searchedBooks} onShelfEvent={this.handleNewShelfEvent} query={query}/>
                   )}></Route>
                </Switch>
                </div>
            </div>
            <div className="open-search">
              <Link to="/search">
              <button>Add a book</button>
              </Link>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BooksApp
