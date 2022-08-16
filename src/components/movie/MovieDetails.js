import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { baseUrl } from '../../url/url';
import axios from 'axios';
import backIcon from '../../svg/Back icon.svg';
import './MovieDetails.css';
import { useSelector } from 'react-redux';

function MovieDetails() {
  const movieWatchingHistory = useSelector(
    (state) => state.movieWatchingHistory
  );

  const params = useParams();

  const [watchingHistory, setWatchingHistory] = useState(0);
  const [movieDetails, setMovieDetails] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const dataFormat = (data) => {
    return {
      title: data.data.original_title,
      overview: data.data.overview,
      img_path: data.data.poster_path,
      rating: data.data.vote_average,
      release_date: data.data.release_date,
      original_language: data.data.original_language,
    };
  };

  useEffect(() => {
    axios
      .get(
        `${baseUrl}movie/${params.movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        setMovieDetails(dataFormat(data));
        setDataLoaded(true);
      })
      .catch((error) => {
        // serErrors(error.message)
      });

    let index = movieWatchingHistory.findIndex(
      (item) => item.id == params.movie_id
    );
    setWatchingHistory(movieWatchingHistory[index].watchingNo);
  }, []);

  return (
    <>
      {dataLoaded && (
        <div className="movie_wrapper">
          <div className="movie_content_wrapper">
            <img
              src={backIcon}
              onClick={() => {
                history.push('/');
              }}
            />
            <h1 style={{ fontFamily: 'Poppins' }}>{movieDetails.title}</h1>
            <p>Rating : {movieDetails.rating.toFixed(2)}/10</p>
            <p style={{ color: 'red' }}>
              You watching this Movie : {watchingHistory} times
            </p>
            <p>{movieDetails.overview}</p>
            <p>Release Date : {movieDetails.release_date}</p>
            <p>Orginal Language : {movieDetails.original_language}</p>
          </div>

          <div className="img_wrapper">
            <img
              width="100%"
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.img_path}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
