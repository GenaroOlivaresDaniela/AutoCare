//Su funcion es almacenar la informacion cuando se inicia sesion
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const loginUser = (user) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    };

    const logoutUser = () => {
      setUser(null);
      localStorage.removeItem('user');
    };
  
    return (
      <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        {children}
      </UserContext.Provider>
    );
  };