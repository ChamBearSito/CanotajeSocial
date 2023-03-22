import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage, setDatatoLocalStorage } from "../utils/index";
import { getFavoritesUser } from "../api/index";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [users, setUsers] = useState([]);//Estado Para Usuarios
  const [logedUser, setLogedUser] = useState({});//estado para usuarios Logeados
  const [favoritesUser, setFavoritesUser] = useState([]);//estado para usuariosFavoritos
  const [register, setRegister] = useState(false);//Estado Para Registro

  const turnRegister = (bool) => {
    setRegister(bool);
  };

  //cada vez que se monte el componente traemos la data del local storgae y se la asiganmos a los Users
  useEffect(() => {
    const getUsers = getDataFromLocalStorage();
    setUsers(getUsers);
  }, []);


  // Recibimos el username y el updateUser, imprimimos en consola el updateUser y seteamos y por cada user
  // si el username es igual a el username que se ingreso entonces que se actualize al nuevo nombre, sino que 
  //se mantenga
  const updateUsers = (username, updateUser) => {
    console.log("updating employee", updateUser);
    setUsers(
      users.map((user) => (user.username === username ? updateUser : user))
    );
  };


  // Traemos La data de la Api
  const getFavoritesXUser = async (pId) => {
    const response = await getFavoritesUser(pId);
    setFavoritesUser(response.data);
  };
  return (
    <LoginContext.Provider
      value={{
        getFavoritesXUser,
        favoritesUser,
        users,
        register,
        turnRegister,
        logedUser,
        setLogedUser,
        updateUsers,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
