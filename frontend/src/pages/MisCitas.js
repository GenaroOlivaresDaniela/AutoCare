import React, { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, IconButton,} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Citas from './../assets/citas.jpg'

export default function CustomTable() {
    const [rows, setCardsData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:3001/api/citas');
        const data = await response.json();
        setCardsData(data);
        }catch(error){
            console.log("Error al obtener los datos:", error)
        }
    };

    fetchData();
}, []);

const formatoFecha = (fecha) => {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const formatoHora = (hora) =>{
    const [hour, minute] = hora.split(':'); 
    const hourNum = parseInt(hour, 10);
    const isPM = hourNum >= 12; 
    const formattedHour = hourNum % 12 || 12; 
    const suffix = isPM ? 'pm' : 'am'; 

    return `${formattedHour}:${minute} ${suffix}`;
  }

  const handleEdit = (row) => {
    // Lógica para editar el registro
    console.log('Editando:', row);
  };

  const handleDelete = (row) => {
    // Lógica para eliminar el registro
    console.log('Eliminando:', row);
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: 4, width: 900, display: 'block', justifyContent: 'center', marginTop:'30px', marginRight: '25px', marginLeft: '25px',marginBottom: '20px' }}>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={Citas} alt="" width="400" height="100" />
    </Box>
      <TableContainer component={Paper} sx={{ backgroundColor: '#2D2D44', display: 'flex' }}>
        <Table>
          <TableHead>
            <TableRow sx={{}}>
              <TableCell sx={{ color: '#fff',textAlign: 'center' }}>Fecha</TableCell>
              <TableCell sx={{ color: '#fff',textAlign: 'center' }}>Hora</TableCell>
              <TableCell sx={{ color: '#fff',textAlign: 'center' }}>Servicio</TableCell>
              <TableCell sx={{ color: '#fff',textAlign: 'center' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  marginY: 1,
                }}
              >
                <TableCell sx={{textAlign: 'center'}} component="th" scope="row">
                  {formatoFecha(row.fecha)}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}}>{formatoHora(row.hora)}</TableCell>
                <TableCell sx={{textAlign: 'center'}}>{}</TableCell>
                <TableCell sx={{textAlign: 'center'}}>
                  <IconButton onClick={() => handleEdit(row)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row)} sx={{color:'red'}}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
