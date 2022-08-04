import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Star from '../../svg/Star 1.svg';
import './Cards.css';

export default function Cards({ title, rating, img_path }) {
  return (
    <Card className="card_box">
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
  );
}
