import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppDash from './AppDash';
import RouterPagina from './RouterPagina';


const App = () => {
       return (
        <Router >
       <Routes>
       <Route path="/dashboard/*" element={<AppDash />} />
       <Route path="/*" element={<RouterPagina />} />  
       </Routes>
        </Router>
        
       

    );
};

export default App;
