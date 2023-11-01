import React from 'react';
import { Card as MaterialCard, CardContent, Typography } from '@mui/material';

function Card({ pelicula, comida }) {
  return (
    <MaterialCard style={{ marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Estos son tus gustos!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Película favorita: <span style={{ color: '#2196F3' }}>{pelicula}</span>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Comida favorita: <span style={{ color: '#2196F3' }}>{comida}</span>
        </Typography>
      </CardContent>
    </MaterialCard>
  );
}

export default Card;
