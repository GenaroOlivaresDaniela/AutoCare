import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppDash from './AppDash';
import RouterPagina from './RouterPagina';
import { UserProvider } from './context/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/dashboard/*" element={<AppDash />} />
                    <Route path="/*" element={<RouterPagina />} />
                </Routes>
            </Router>
            </UserProvider>
    );
};

export default App;
