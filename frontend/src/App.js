import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppDash from './AppDash';
import RouterPagina from './RouterPagina';
import { AuthProvider } from './AuthContext'; 

const App = () => {
    return (
        <AuthProvider> 
            <Router>
                <Routes>
                    <Route path="/dashboard/*" element={<AppDash />} />
                    <Route path="/*" element={<RouterPagina />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
