import React, { useEffect, useState, useContext } from "react";
import "../Login/login.css";
import { BiUser, BiAt, BiRename, BiCurrentLocation } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/Login.jsx";
import { addRegister, getLogin } from "../../api";

const Login = () => {
  const navigate=useNavigate();

  const {addLogin}=useContext(LoginContext);

  const {logedUser,setLogedUser}=useContext(LoginContext);
  const {register}=useContext(LoginContext);
  const {turnRegister}=useContext(LoginContext);
  
  const [theUser, setTheUser]=useState({
    name:'',
    lastName:'',
    address:'',
    email:'',
    password:''

  })

  const handleKeyPress=(event)=> {
    if(event.key === 'Enter') {
      turnRegister(!register)
    }
  };

  const handleChange=(e)=>{
    const value = e.target.value;
    const element = e.target.id;
    setTheUser({...theUser, [element]:value});
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    // llamar al metodo agregar empleado del contexto

    if(register){
      const achieveTheRegister=async()=>{
        await addRegister(theUser);
      }
      achieveTheRegister().then().catch((err)=>console.log(err))
    }
    else{
      const loginUser=async()=>{ 
        const response = await getLogin(theUser)

        if(response.data.user){
          setLogedUser(response.data.user)
          navigate('/principal')
        }
        };

        loginUser().then().catch((err)=> console.log(err))
    }
    
    //addLogin(username, password);
  }

  return (
    <>
      <div className="login-contenedor">
        <form className="form-login">
          <h1>{register ? "Registro" : "Iniciar Sesion"}</h1>
          {register && 
            <>
            <div className="login-user">
            <BiUser />
            <input
              className="login-input"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              id='name'
            ></input>
          </div>
          <div className="login-user">
            <BiRename />
            <input
              className="login-input"
              type="text"
              placeholder="LastName"
              onChange={handleChange}
              id='lastName'
            ></input>
          </div>
          <div className="login-user">
            <BiCurrentLocation />
            <input
              className="login-input"
              type="text"
              placeholder="Address"
              onChange={handleChange}
              id='address'
            ></input>
          </div>
            </>
          }
          <div className="login-user">
            <BiAt />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              id='email'
            ></input>
          </div>
          <div className="login-password">
            <BiLockAlt />
            <input
              className="login-input"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              id='password'
            ></input>
          </div>
          <div className="login-button">
            <button className="btn-login" onClick={handleSubmit}>
              {register ? "Registro" : "Entrar"}
            </button>
          </div>
          <div className="login-option">
            <div className="options">
              <p>{register ? "Ya tiene cuenta?" : "No tiene cuenta?"}</p>
              <p
                tabIndex={0}
                onClick={() => turnRegister(!register)}
                onKeyPress={handleKeyPress}
              >
                {register ? "Iniciar Sesion" : "Registrarse"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
