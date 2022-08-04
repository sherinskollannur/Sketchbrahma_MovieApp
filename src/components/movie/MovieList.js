import React, { useState, useEffect, useRef } from 'react';
import Cards from '../layout/Cards';
import SearchIcon from '../../svg/Search icon.svg';
import './MovieList.css';
import { baseUrl } from '../../url/url';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const searched_movie_ref = useRef();

  const dataFormat = (data) => {
    const movie_list = [];

    data.data.results.map((item) => {
      return movie_list.push({
        id: item.id,
        title: item.original_title,
        rating: item.vote_average,
        img_path: item.poster_path,
      });
    });
    setMovieList(movie_list);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `${baseUrl}search/movie?api_key=f7c45fef045b8c02c3b32ac287607288&query=${searched_movie_ref.current.value}`
      )
      .then((data) => {
        dataFormat(data);
      });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/popular?api_key=f7c45fef045b8c02c3b32ac287607288`)
      .then((data) => {
        dataFormat(data);
      });
  }, []);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="search_wrapper">
          <input
            type="text"
            className="search_input"
            ref={searched_movie_ref}
          ></input>
          <button type="submit" className="search_btn">
            <img src={SearchIcon}></img>
          </button>
        </div>

        <div className="movielist_wrapper">
          <div>
            <p className="trending">Trending</p>
          </div>

          <div className="card_wrapper">
            {movieList.length > 0 ? (
              movieList.map((item) => (
                <Cards
                  title={item.title}
                  rating={item.rating}
                  img_path={item.img_path}
                  key={item.id}
                />
              ))
            ) : (
              //   <p>No data Found</p>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  <strong>No data Found</strong>
                </Alert>
              </Stack>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default MovieList;
