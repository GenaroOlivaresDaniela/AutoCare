//Su funcion es almacenar la informacion cuando se inicia sesion
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading]=useState(true)
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }, []);

    const loginUser = (user) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    };

    const logoutUser = () => {
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    };
  
    return (
      <UserContext.Provider value={{ user, loginUser, logoutUser, loading }}>
        {loading ? <p></p> : children}
      </UserContext.Provider>
    );
  };