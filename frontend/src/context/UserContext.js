import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      const updatedUser = {
        ...parsedUser,
        foto: parsedUser.foto
          ? `http://localhost:3001/imagenes/usuarios/${parsedUser.foto}` 
          : '', 
      };
      setUser(updatedUser);
    }
    setLoading(false);
  }, []);

  const loginUser = (user) => {
    const updatedUser = {
      ...user,
      foto: user.foto
        ? `http://localhost:3001/imagenes/usuarios/${user.foto}` 
        : '', 
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, loading }}>
      {loading ? <p>Loading...</p> : children}
    </UserContext.Provider>
  );
};
