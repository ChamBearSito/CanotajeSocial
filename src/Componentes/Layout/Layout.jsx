import React from "react";
import { ImageProvider } from "../../context/Estadofoto";
import SearchProvider from "../../context/SearchContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <ImageProvider>
        <SearchProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SearchProvider>
      </ImageProvider>
    </>
  );
};

export default Layout;
