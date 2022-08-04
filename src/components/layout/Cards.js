import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Star from '../../svg/Star 1.svg'
import './Cards.css'
import { useHistory } from 'react-router-dom'

export default function Cards({ title, rating, img_path }) {
  const history = useHistory()
  const cardOnClick = () => {
    history.push('/movie_details')
  }

  return (
    <Card className="card_box" onClick={cardOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          square
          src={`https://image.tmdb.org/t/p/w500/${img_path}`}
          alt={title}
        />
        <CardContent className="card_content">
          <Typography className="card_typography">{title}</Typography>
          <Typography className="card_typography">
            <img src={Star} alt="My Happy SVG" /> {rating}/10
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
