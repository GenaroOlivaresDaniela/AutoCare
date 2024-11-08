import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Snackbar, Alert, TableRow, Paper, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Grid, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Vehiculos() {
    const [rows, setCardsData] = useState([]);
    const [open, setOpen] = useState(false); 
    const [rowToDelete, setRowToDelete] = useState(null); 
    const [editModalOpen, setEditModalOpen] = useState(false);  
    const [editableRow, setEditableRow] = useState(null);  
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/vehiculos');
                const data = await response.json();
                setCardsData(data);
                
            } catch (error) {
                console.log("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleEdit = (row) => {
        setEditableRow(row);  
        setEditModalOpen(true);   
    };

    const handleCloseEditModal = () => {
        setEditModalOpen(false);  
        setEditableRow(null);  
    };

    const handleSaveEdit = async () => {
        try {
            const { nombre, app, apm, ...vehiculoData } = editableRow;

            const response = await fetch(`http://localhost:3001/api/vehiculos/${editableRow.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vehiculoData),
            });

            if (response.ok) {
                setCardsData((prevRows) => prevRows.map((row) => 
                    row.id === editableRow.id ? editableRow : row
                ));
                setSnackbarMessage('Se edito correctamente!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                handleCloseEditModal();
            } else {
                console.error('Error al guardar los cambios');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de edición:', error);
        }
    };

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
            const response = await fetch(`http://localhost:3001/api/vehiculos/${rowToDelete.id}`, {
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

            <Dialog open={editModalOpen} onClose={handleCloseEditModal}sx={{
        '& .MuiDialog-paper': {
            width: '300px',  
            maxWidth: '90%',  
            height: 'auto',  
        }
    }}>
                <DialogTitle sx={{textAlign: 'center', marginBottom: '15px'}}>Editar Vehiculo</DialogTitle>
                <DialogContent >
                    <TextField
                        label="Modelo"
                        type="text"
                        value={editableRow?.modelo || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, modelo: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    <TextField
                        label="Número de Placa"
                        type="text"
                        value={editableRow?.no_placa || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, no_placa: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    <TextField
                        label="Número de Serie"
                        type="text"
                        value={editableRow?.no_serie || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, no_serie: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    <TextField
                        label="Año"
                        type="numeric"
                        value={editableRow?.ano || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, ano: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    <TextField
                        label="Marca"
                        type="text"
                        value={editableRow?.marca || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, marca: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    
                   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditModal} sx={{ backgroundColor: 'red' }} variant="contained">
                        Cancelar
                    </Button>
                    <Button onClick={handleSaveEdit} sx={{ backgroundColor: "#1976D2" }} variant="contained">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open} onClose={handleCloseDeleteModal}>
                <DialogTitle>Confirmar Eliminación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que quieres eliminar el vehiculo con número de placa {rowToDelete?.no_placa}?
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
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Modelo</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Número de Placa</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Número de Serie</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Año</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Marca</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Cliente</TableCell>
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

                               <TableCell sx={{ textAlign: 'center' }}>{row.modelo}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.no_placa}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.no_serie}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.ano}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.marca}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.nombre + ' ' + row.app + ' ' + row.apm}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    <IconButton onClick={() => handleEdit(row)} color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleOpenDeleteModal(row)} sx={{ color: 'red' }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar 
                open={openSnackbar} 
                autoHideDuration={2000} 
                onClose={() => setOpenSnackbar(false)} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
                <Alert onClose={() => setOpenSnackbar(false)} variant="filled" severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
       
    );
}