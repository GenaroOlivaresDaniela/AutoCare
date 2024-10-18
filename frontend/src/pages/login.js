import React from 'react';
import Materia from './../assets/materias.png';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Imagen = () => {
  return (
    <div>
      {/* Imagen local */}
      <img src={Materia} alt="Logo Local" width="200" height="200" />
      <Link to="/principal">Ir a Autos Inicio</Link>
      {/* Imagen remota */}
      {/* <img src="https://example.com/remote-image.jpg" alt="Imagen Remota" width="200" height="200" /> */}

      {/* Usando Material-UI (CardMedia) */}
      {/* <Card>
        <CardMedia
          component="img"
          height="1000"
          image={Materia}
          alt="Imagen en la tarjeta"
        />
      </Card> */}
    </div>
  );
};

export default Imagen;
