import React from 'react';
import Cards from '../layout/Cards';
import SearchIcon from '../../svg/Search icon.svg';
import './MovieList.css';

function MovieList() {
  return (
    <div>
      <div className="search_wrapper">
        <input type="text" className="search_input"></input>
        <button type="submit" className="search_btn">
          <img src={SearchIcon}></img>
        </button>
      </div>

      <div className="movielist_wrapper">
        <div>
          <p className="trending">Trending</p>
        </div>

        <div className="card_wrapper">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
