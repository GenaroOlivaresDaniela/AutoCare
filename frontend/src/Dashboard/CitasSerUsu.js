import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Grid, Avatar, TableRow, Paper, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function CitasSerUsu() {
    const [rows, setCardsData] = useState([]);
    const [open, setOpen] = useState(false); 
    const [rowToDelete, setRowToDelete] = useState(null); 
   
   
    const formatoFecha = (fecha) => {
        if (!fecha) return "Fecha no disponible";
        const date = new Date(fecha);
        if (isNaN(date.getTime())) return "Fecha no válida";
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(date);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/citas_servicios_trabajadores');
                const data = await response.json();
                setCardsData(data);
            } catch (error) {
                console.log("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleOpenDeleteModal = (row) => {
        setRowToDelete(row); 
        setOpen(true); 
    };

    const handleCloseDeleteModal = () => {
        setOpen(false); 
        setRowToDelete(null); 
    };


    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/citas_servicios_trabajadores/${rowToDelete.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCardsData((prevRows) => prevRows.filter((item) => item.id !== rowToDelete.id));
                console.log('Registro eliminado exitosamente:', rowToDelete.id);
            } else {
                console.error('Error al eliminar el registro:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de eliminación:', error);
        } finally {
            handleCloseDeleteModal(); 
        }
    };

    return (
        <Box sx={{ backgroundColor: 'green', padding: 4, width: 900, display: 'block', justifyContent: 'center', marginTop: '30px', marginRight: '25px', marginLeft: '25px', marginBottom: 0 }}>

            

            <Dialog open={open} onClose={handleCloseDeleteModal}>
                <DialogTitle>Confirmar Eliminación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que quieres eliminar este registro?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteModal} sx={{ backgroundColor: "#1976D2" }} variant="contained">
                        Cancelar
                    </Button>
                    <Button onClick={handleDelete} sx={{ backgroundColor: "red" }} variant="contained">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid textAlign="right">
                    <IconButton >
                        <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}>
                            <AddIcon sx={{ fontSize: 40, color: 'black'}} />
                        </Avatar>
                    </IconButton>
                </Grid>
            <TableContainer component={Paper} sx={{ backgroundColor: '#2D2D44', margin:0, pagging:0}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Cita</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Cliente</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Servicio</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Trabajador</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}></TableCell>
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
                                }}>

                               <TableCell sx={{ textAlign: 'center' }}>{formatoFecha(row.fecha)}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.nombre_usuario_cita+ ' ' + row.app_usuario_cita + ' ' + row.apm_usuario_cita}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.servicio}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.nombre_usuario_servicio+ ' ' + row.app_usuario_servicio + ' ' + row.apm_usuario_servicio}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    <IconButton onClick={() => handleOpenDeleteModal(row)} sx={{ color: 'red' }}>
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