import React, { useState } from 'react';
import Card from './Card';
import { TextField, Button, Container, Typography } from '@mui/material';

function App() {
  const [pelicula, setPelicula] = useState('');
  const [comida, setComida] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pelicula === '' || comida === '') {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setShowCard(true);
      setErrorMessage('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Escribe tus gustos favoritos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Pelicula"
          value={pelicula}
          onChange={(e) => setPelicula(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Comida"
          value={comida}
          onChange={(e) => setComida(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Guardar
        </Button>
      </form>
      {errorMessage && (
        <Typography color="error" style={{ marginTop: 16 }}>
          {errorMessage}
        </Typography>
      )}
      {showCard && <Card pelicula={pelicula} comida={comida} />}
    </Container>
  );
}

export default App;