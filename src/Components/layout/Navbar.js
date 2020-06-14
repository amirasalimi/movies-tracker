import React from 'react';


function Navbar() {
    return (
        <div>
            
        <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" to="">
              MovieSeriesInfo
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
           
          </ul>
        </div>
      </nav>

        </div>
    )
}

export default Navbar