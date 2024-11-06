import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppDash from './AppDash';
import RouterPagina from './RouterPagina';


const App = () => {
       return (
        <Router >
       <RouterPagina/>
       <AppDash/>
          
        </Router>
        
       

    );
};

export default App;
