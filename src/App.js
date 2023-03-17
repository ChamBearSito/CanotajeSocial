
import './App.css';

import Layout from './Componentes/Layout/Layout';
import PaginaBienvenida from './Componentes/PaginaBienvenida/PaginaBienvenida';
import Perfil from './Componentes/Perfil/Perfil';
import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login/Login';
import PaginaPrincipal from './Componentes/PaginaPrincipal/PaginaPrincipal.jsx';
import PerfilBueno from './Componentes/Perfil/PerfilBueno';
import LoginContextProvider from './context/Login';
import InfoUsuario from './Componentes/InfoUsuario/InfoUsuario';
import UsuarioInformacion from './Componentes/InfoUsuario/UsuarioInformacion';
import ModalSubida from './Componentes/ParaSubida/ModalSubida';


function App() {
  return (
    <LoginContextProvider>
    <Routes>
      
      <Route path="/" element={<PaginaBienvenida/>}/>
      <Route path="/Infousuario" element={<UsuarioInformacion/>}/>
      <Route path="/prueba" element={<ModalSubida/>}/>

      <Route path="/login" element={<Login/>   }/>
      <Route path="/perfil/:pId" element={ <PerfilBueno/> }/>
      <Route path="/principal" element={<PaginaPrincipal/> }/>
    

    </Routes>
    </LoginContextProvider>
  );
}

export default App;
