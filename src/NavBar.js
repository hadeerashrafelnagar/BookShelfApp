import React from 'react';
import {  NavLink } from "react-router-dom";


const Nav=()=>{
    
    return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className=" navbar-brand">
                <h2>MyReads</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link"to='/home'>Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link"to='/read'>Read</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link"to='/wanttoread'>Want To Read</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link"to='/currentlyreading'>Currntly Reading</NavLink>
              </li>
              
          </ul>
        </div>
        </nav>

    </React.Fragment>
    )
}
export default Nav