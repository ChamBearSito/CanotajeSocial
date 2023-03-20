import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage, setDatatoLocalStorage } from "../utils/index";
import { getFavoritesUser } from "../api/index";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [logedUser, setLogedUser] = useState({});
  const [favoritesUser, setFavoritesUser] = useState([]);
  const [register, setRegister] = useState(false);

  const turnRegister = (bool) => {
    setRegister(bool);
  };

  useEffect(() => {
    const getUsers = getDataFromLocalStorage();
    setUsers(getUsers);
  }, []);

  const updateUsers = (username, updateUser) => {
    console.log("updating employee", updateUser);
    setUsers(
      users.map((user) => (user.username === username ? updateUser : user))
    );
  };

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
