# MyReads Project

## Table of Contents
1. Description
2. Instructions
3. What I Get
4. Running
5. Important Points

## Description
- Udacity front-end web development Advanced program project.
- Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
- The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.


# Instructions

- This repo (https://github.com/udacity/reactnd-project-myreads-starter) is your starter code for the project.
- `cd` into your new folder and run : 
  1. `npm install` to install all project dependencies.
  2. `npm install bootstrap`.
  2. `npm install react-router-dom`.
- modifying a little CSS in `App.css`.
- adding new files with new components :
  1. `Home.js`.
  2. `NavBar.js`
  3. `CurrentlyReading.js`.
  4. `Read.js`.
  5. `WantToRead.js`
  6. `Search.js`


## What I Get
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

# Running

- start the ***development server*** with `npm start` / `npm run start` to launch.
- open `http://localhost:3000/` in the browser.



# Important Points

- development server:

1. To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

    * [`getAll`](#getall)
    * [`update`](#update)
    * [`search`](#search)

    1. `getAll`
    Method Signature:
    ```js
    getAll()
    ```
    * Returns a Promise which resolves to a JSON object containing a collection of book objects.
    * This collection represents the books currently in the bookshelves in your app.


    2. `update`
    Method Signature:
    ```js
    update(book, shelf)
    ```
    * book: `<Object>` containing at minimum an `id` attribute
    * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
    * Returns a Promise which resolves to a JSON object containing the response data of the POST request


    3. `search`
    Method Signature:
    ```js
    search(query)
   ```
   * query: `<String>`
   * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
   * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

2. The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which are :
    
    - Working search query:
    1. Android / Artificial Intelligence / Astronomy.
    2. Baseball/ Basketball / Bhagat / Biography / Brief. 
    3. Camus / Cervantes /Comics /Cricket /Cycling.
    4. Design / Development / Digital Marketing / Drama / Dumas.
    5. Fantasy / Film /Finance / Football / Fiction. 
    6. Gandhi. 
    7. Homer.
    8. Ibsen. 
    9. Journey. 
    10. Kafka.
    11. Literary.
    12. Money /Mystery. 
    13. Negotiate.
    14. Philosophy / Photography / Poetry.
    15. React / Robotics. 
    16. Satire / Science Fiction / Shakespeare / Swimming. 
    17. Tolstoy / Travel.
    18. Ultimate. 
    19. Virtual Reality.
    20. Web Development.