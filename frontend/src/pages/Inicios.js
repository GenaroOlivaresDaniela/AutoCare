import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Inicio = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/usuarios');
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Página de Inicio
            </Typography>
            <Link to="/imagen">Ir a Autos Inicio</Link>

            <div style={{ marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Datos de la Base de Datos
                </Typography>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Edad</TableCell>
                                {/* Agrega más columnas si tienes más campos */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.nombre}</TableCell>
                                    <TableCell>{item.id_perfil}</TableCell>
                                    {/* Agrega más celdas si tienes más campos */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
            </div>
        </div>
    );
};

export default Inicio;
