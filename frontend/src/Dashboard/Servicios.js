import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Snackbar, Alert, TableRow, Paper, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Grid, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Servicios() {
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
                const response = await fetch('http://localhost:3001/api/servicios');
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
         
            const response = await fetch(`http://localhost:3001/api/servicios/${editableRow.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editableRow),
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
            const response = await fetch(`http://localhost:3001/api/servicios/${rowToDelete.id}`, {
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
                <DialogTitle sx={{textAlign: 'center', marginBottom: '15px'}}>Editar Servicio</DialogTitle>
                <DialogContent >
                    <TextField
                        label="Servicio"
                        type="text"
                        value={editableRow?.servicio || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, servicio: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: '10px' }}
                    />
                    <TextField
                        label="Descripción"
                        type="text"
                        value={editableRow?.descripcion || ''}
                        onChange={(e) => setEditableRow({ ...editableRow, descripcion: e.target.value })}
                        multiline
                        rows={4}
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
                        ¿Estás seguro de que quieres eliminar el servicio {rowToDelete?.servicio}?
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
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Servicio</TableCell>
                            <TableCell sx={{ color: '#fff', textAlign: 'center' }}>Descripción</TableCell>
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

                               <TableCell sx={{ textAlign: 'center' }}>{row.servicio}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.descripcion}</TableCell>
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