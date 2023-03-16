import React, { createContext, useState,useEffect } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(
    localStorage.getItem('selectedImage') || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZD0re8nQQ91VmosBapPss45OCSAoET_p3R3MY6c1rmn-r8s-OYJbg9Oar04ITnjQEGhM&usqp=CAU'
);

  useEffect(() => {
    localStorage.setItem('selectedImage', image);
  }, [image]);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};