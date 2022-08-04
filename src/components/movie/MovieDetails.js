import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { baseUrl } from '../../url/url'
import axios from 'axios'
import backIcon from '../../svg/Back icon.svg'

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)
  const location = useLocation()
  const history = useHistory()

  const dataFormat = (data) => {
    return {
      title: data.data.original_title,
      overview: data.data.overview,
      img_path: data.data.poster_path,
      rating: data.data.vote_average,
      release_date: data.data.release_date,
      original_language: data.data.original_language,
    }
  }

  useEffect(() => {
    axios
      .get(
        `${baseUrl}movie/${location.state.movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        console.log('movie details', data)

        setMovieDetails(dataFormat(data))
        setDataLoaded(true)
      })
      .catch((error) => {
        // serErrors(error.message)
      })
  }, [])

  return (
    <>
      {dataLoaded && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '50%',
              padding: '0px 50px',
              margin: '100px 0',
              //   display: 'flex',
              //   flexDirection: 'column',
              //   justifyContent: 'center',
              //   height: '200%',
            }}
          >
            <img
              src={backIcon}
              onClick={() => {
                history.push('/')
              }}
            />
            <h1 style={{ fontFamily: 'Poppins' }}>{movieDetails.title}</h1>
            <p style={{ marginTop: '20px', fontFamily: 'Poppins' }}>
              Rating : {movieDetails.rating.toFixed(2)}/10
            </p>
            <p style={{ marginTop: '20px', fontFamily: 'Poppins' }}>
              {movieDetails.overview}
            </p>
            <p style={{ marginTop: '20px', fontFamily: 'Poppins' }}>
              Release Date : {movieDetails.release_date}
            </p>
            <p style={{ marginTop: '20px', fontFamily: 'Poppins' }}>
              Orginal Language : {movieDetails.original_language}
            </p>
          </div>

          <div style={{ width: '50%' }}>
            <img
              width="100%"
              height="100%"
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.img_path}`}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default MovieDetails
