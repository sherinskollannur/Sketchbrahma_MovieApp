import React, { useState, useEffect, useRef } from 'react'
import Cards from '../layout/Cards'
import SearchIcon from '../../svg/Search icon.svg'
import './MovieList.css'
import { baseUrl } from '../../url/url'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

function MovieList() {
  const [movieList, setMovieList] = useState(null)
  const [errors, serErrors] = useState(null)
  const [page, setPage] = React.useState(1)
  const [startIndex, setStartIndex] = React.useState(0)
  const [endIndex, setEndIndex] = React.useState(12)
  const [rowsPerPage, setRowsPerPage] = React.useState(12)

  const searched_movie_ref = useRef()

  const handleChange = (event, value) => {
    setPage(value)
    setStartIndex(value * rowsPerPage - rowsPerPage)
    let start = value * rowsPerPage - rowsPerPage
    setEndIndex(start + rowsPerPage)
  }

  const dataFormat = (data) => {
    const movie_list = []

    data.data.results.map((item) => {
      return movie_list.push({
        id: item.id,
        title: item.original_title,
        rating: item.vote_average,
        img_path: item.poster_path,
      })
    })
    setMovieList(movie_list)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .get(
        `${baseUrl}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searched_movie_ref.current.value}`
      )
      .then((data) => {
        dataFormat(data)
        console.log(data)
        serErrors(null)
      })
      .catch((error) => {
        setMovieList(null)
        serErrors(error.message)
      })
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((data) => {
        dataFormat(data)
        console.log(data)
      })
      .catch((error) => {
        serErrors(error.message)
      })
  }, [])

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="search_wrapper">
          <input
            type="text"
            className="search_input"
            ref={searched_movie_ref}
            required
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
            {movieList &&
              movieList
                .slice(startIndex, endIndex)
                .map((item) => (
                  <Cards
                    title={item.title}
                    rating={item.rating}
                    img_path={item.img_path}
                    movie_id={item.id}
                    key={item.id}
                  />
                ))}

            {movieList && movieList.length === 0 && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  <strong>No data Found</strong>
                </Alert>
              </Stack>
            )}

            {errors && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Info</AlertTitle>
                  <strong>{errors}</strong>
                </Alert>
              </Stack>
            )}
          </div>
          {movieList && movieList.length !== 0 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={Math.round(movieList.length / rowsPerPage)}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default MovieList
