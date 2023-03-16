import React, {useState,useEffect, createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataFromLocalStorage, setDatatoLocalStorage} from '../utils/index';

export const LoginContext=createContext();

const LoginContextProvider = (props) => {
  const [users,setUsers]=useState([]);
  const [logedUser, setLogedUser]=useState({});
  const [register, setRegister] = useState(false);

  const turnRegister=(bool)=>{
    setRegister(bool);
  };

  useEffect(()=>{
    const getUsers=getDataFromLocalStorage();
    setUsers(getUsers);
    console.log(users);
  },[]);
  
  const validarExiste=(username, password)=>{
    let theUsers=[...users]
    let theUser;

    if(!register){
      theUsers.forEach((aUser)=>{
        if(aUser.username==username && aUser.password==password){
          theUser=aUser;
        }
      })
      return theUser;
    }else{
      return theUsers.reduce((elUser,aUser)=>{
        if(aUser.username==username)
        return elUser=aUser;
      },null)
      
    }
  }
  const updateUsers = (username, updateUser) => {
    console.log('updating employee', updateUser)
    setUsers(users.map((user) => user.username === username ? updateUser : user));
  }

  const addLogin = (username, password)=>{
    
    const theUser = validarExiste(username, password);
    if(register){
      if(theUser){
        alert("Ya existe ese Usuario");
        return;
      }
      
      const newUser={
        username:username,
        password:password,
        name:'',
        lastname:'',
        description:''
      }
  
      setUsers([...users,newUser]);
      setRegister(false);
      console.log(users);
      alert("Registro Exitoso");
    }else{
      if(theUser){
        alert("Inisio Exitoso")
        setLogedUser({
          username:theUser.username,password:theUser.password});
        navigate("/principal")
      }else{
        alert("No existe")
      }
      console.log(logedUser);
    }
    
  }

  const navigate = useNavigate();
  return (
    <LoginContext.Provider value={{users,register,turnRegister,logedUser,setLogedUser,addLogin,updateUsers}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;

