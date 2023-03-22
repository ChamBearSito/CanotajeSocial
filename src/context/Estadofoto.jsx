import React, { createContext, useState,useEffect } from 'react';

export const ImageContext = createContext();//Creamos Contexto para la imagen de Pefil



export const ImageProvider = ({ children }) => {
  //Creamos estado donde se va a guardar la imagen del perfil y la guardamos en el local storage, en caso de que no haya ninguna toma por defecto la de la URL
  const [image, setImage] = useState(
    localStorage.getItem('selectedImage') || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZD0re8nQQ91VmosBapPss45OCSAoET_p3R3MY6c1rmn-r8s-OYJbg9Oar04ITnjQEGhM&usqp=CAU'
);


//Cada vez que cambie la imagen que se guarde ese imagen en el localstorage
  useEffect(() => {
    localStorage.setItem('selectedImage', image);
  }, [image]);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};