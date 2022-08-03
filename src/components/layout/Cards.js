import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Star from '../../svg/Star 1.svg';

export default function Cards() {
  return (
    <Card
      sx={{
        maxWidth: '280px',
        minHeight: '178px',
        borderRadius: 0,
        flexGrow: 0.2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          square
          src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
          alt="green "
        />
        <CardContent
          sx={{
            maxWidth: '280px',
            maxHeight: '90px',
            backgroundColor: '#D9D9D9',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              lineHeight: '22.4px',
            }}
          >
            Game Of Thrones
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              lineHeight: '22.4px',
            }}
          >
            <img src={Star} alt="My Happy SVG" /> 4.5/5
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
